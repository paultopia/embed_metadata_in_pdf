import { Base64 } from 'js-base64';


// swiped from coherentpdf example code
function filedownload(data, filename, mime, bom) {
    var blobData = (typeof bom !== 'undefined') ? [bom, data] : [data]
    var blob = new Blob(blobData, {type: mime || 'application/octet-stream'});
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        var blobURL = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', filename);
	
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }
	
        document.body.appendChild(tempLink);
        tempLink.click();

        setTimeout(function() {
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(blobURL);
        }, 200)
    }
}

// checking code also adapted from coherentpdf
// there's probably a better way to do this than duplicating code, but I'm not sure if I can pass in symbols that may not be set so fuckit.
function ensureEmbedDataIsSet(timeout) {
    var start = Date.now();
    return new Promise(waitForEmbedData);
 
    function waitForEmbedData(resolve, reject) {
        if (embedState && embedState.complete)
            resolve(embedState);
        else if (timeout && (Date.now() - start) >= timeout)
            reject(new Error("timeout"));
        else
            setTimeout(waitForEmbedData.bind(this, resolve, reject), 30);
    }
}

function ensureExtractDataIsSet(timeout) {
    var start = Date.now();
    return new Promise(waitForExtractData);
 
    function waitForExtractData(resolve, reject) {
        if (extractState && extractState.complete)
            resolve(extractState);
        else if (timeout && (Date.now() - start) >= timeout)
            reject(new Error("timeout"));
        else
            setTimeout(waitForExtractData.bind(this, resolve, reject), 30);
    }
}

// Functionality to delegate to workers for appropriate tasks.  Again swiped from coherent PDF example, but for some bizarre reason the coherent PDF people had this just running as opposed to being wrapped in a function, which seems wasteful...

function embedDataInPDf(){
    ensureEmbedDataIsSet(100000).then(function(){
	document.getElementById("progress").innerHTML = 'PDF File loaded from disc. Processing...';
	var arr = new Uint8Array(embedState.pdf);
	var pdfName = embedState.pdfFileName;
	var modifiedPdfName = `modified-${pdfName}`;
	var w = new Worker(new URL("pdf_worker.js", import.meta.url), {type: 'module'})
	w.postMessage({mtype: 'embed', bytes: arr, citations: embedState.cites, citesFileName: embedState.citesFileName});
	w.onmessage = function(e)
	{
	    switch (e.data.mtype)
	    {
		case 'pdfout':
		  filedownload(e.data.bytes, modifiedPdfName);
		  document.getElementById("progress").innerHTML = 'Processing finished. Output PDF file downloaded. Reload page to do another file.';
		  w.terminate();
		break;
		case 'progress':
		  document.getElementById("progress").innerHTML = e.data.message;
		break;
	    }
	}
    });
}

function extractDataFromPDf(){
    ensureExtractDataIsSet(100000).then(function(){
	document.getElementById("progress").innerHTML = 'PDF File loaded from disc. Processing...';
	var arr = new Uint8Array(extractState.pdf);
	var w = new Worker(new URL("pdf_worker.js", import.meta.url), {type: 'module'})
	w.postMessage({mtype: 'extract', bytes: arr});
	w.onmessage = function(e)
	{
	    switch (e.data.mtype)
	    {
		case 'dataExtracted':
		  filedownload(e.data.citations, e.data.fileName, "text/plain");
		  document.getElementById("progress").innerHTML = 'Processing finished. Citaton data file downloaded. Reload page to do another file.';
		  w.terminate();
		break;
		case 'progress':
		  document.getElementById("progress").innerHTML = e.data.message;
		break;
	    }
	}
    });
}



// Setting global state and event listeners (mostly adapted from coherentpdf example)

// Global state for embedding and extracting
var embedState = function() {};

var extractState = function() {};

// hang event listener for citation file upload

const citesSelector = document.getElementById('citation-selector');
citesSelector.addEventListener('change', (event) => {
    const citesFileList = event.target.files;
    const citesFileName = citesFileList[0].name;
    const citesReader = new FileReader();
    citesReader.addEventListener('load', (event) => {
        var citesString = event.target.result;
	embedState.cites = citesString;
	embedState.citesFileName = citesFileName;
	if (embedState.pdf){
	    embedState.complete = true;
	    embedDataInPDf();
	}
    });
    citesReader.readAsText(citesFileList[0], "UTF-8");
});

// hang event listener for embedding PDF file upload

const embedSelector = document.getElementById('embed-selector');
embedSelector.addEventListener('change', (event) => {
    const embedList = event.target.files;
    const embedName = embedList[0].name;
    const embedReader = new FileReader();
    embedReader.addEventListener('load', (event) => {
        const embedResult = event.target.result;
        embedState.pdf = embedResult;
	embedState.pdfFileName = embedName;
	if (embedState.cites){
	    embedState.complete = true;
	    embedDataInPDf();
	}
    });
    embedReader.readAsArrayBuffer(embedList[0]);
});

// hang event listener for extraction PDF file upload

const extractSelector = document.getElementById('extract-selector');
extractSelector.addEventListener('change', (event) => {
    const extractList = event.target.files;
    const extractReader = new FileReader();
    extractReader.addEventListener('load', (event) => {
        const extractResult = event.target.result;
        extractState.pdf = extractResult;
	extractState.complete = true;
	extractDataFromPDf()
    });
    extractReader.readAsArrayBuffer(extractList[0]);
});

