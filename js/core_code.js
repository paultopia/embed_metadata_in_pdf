function makeXMP(jsonString, fileName){
    var b64Json = Base64.encode(jsonString);
    var xmpString =`<x:xmpmeta xmlns:x="adobe:ns:meta/">

  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	   xmlns:xmp="http://ns.adobe.com/xap/1.0/">

<rdf:Description rdf:about="">

<xmp:citeFile>${fileName}</xmp:citeFile> </rdf:Description>

<xmp:CSL>${b64Json}</xmp:CSL> </rdf:Description>

</rdf:RDF> </x:xmpmeta>`;
    return xmpString;
};

function extractJsonFromXMP(xmpString){
    const citesPattern = /<xmp:CSL>(.*)<\/xmp:CSL>/;
    const b64 = xmpString.match(citesPattern)[1];
    var json = Base64.decode(b64);
    const citesFileNamePattern = /<xmp:citeFile>(.*)<\/xmp:citeFile>/;
    const citesFileName = xmpString.match(citesFileNamePattern)[1];
    return {json: json, fileName: citesFileName};
};

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
        if (window.embedState && window.embedState.complete)
            resolve(window.embedState);
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
        if (window.extractState && window.extractState.complete)
            resolve(window.extractState);
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
	var datafile = new Uint8Array(embedState.xmp);
	var w = new Worker("js/pdf_worker.js");
	w.postMessage({mtype: 'embed', bytes: arr, metadata: datafile});
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
	var w = new Worker("js/pdf_worker.js");
	w.postMessage({mtype: 'extract', bytes: arr});
	w.onmessage = function(e)
	{
	    switch (e.data.mtype)
	    {
		case 'dataExtracted':
		  var citationData = extractJsonFromXMP(e.data.metadata);
		  filedownload(citationData.json, citationData.fileName, "text/plain");
		  document.getElementById("progress").innerHTML = 'Processing finished. Citaiton data file downloaded. Reload page to do another file.';
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
        var citesResult = event.target.result;
	var asXMP = makeXMP(citesResult, citesFileName);
	const textEncoder = new TextEncoder();
	const xmpData = textEncoder.encode(asXMP);
	embedState.xmp = xmpData;
	if (window.embedState.pdf){
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
	if (window.embedState.xmp){
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

