importScripts('coherentpdf.browser.min.js')
// this appears to find files relative to the directory the js is in, not relative to index.html (at least judging by chrome errors)

self.onmessage = function(e) {
   switch (e.data.mtype)
    {
	case 'embed':
	  var pdf = coherentpdf.fromMemory(e.data.bytes, "");
	  var metadata = e.data.metadata;
	  coherentpdf.setFast();
	  self.postMessage({mtype: 'progress', message: 'PDF loaded successfully for embedding. Working ...'});
	  coherentpdf.decryptPdf(pdf, "");
	  coherentpdf.setMetadataFromByteArray(pdf, metadata);
	  var mem = coherentpdf.toMemory(pdf, false, false);
	  self.postMessage({mtype: 'pdfout', bytes: mem});
	break;
	case 'extract':
	  var pdf = coherentpdf.fromMemory(e.data.bytes, "");
	  coherentpdf.setFast();
          self.postMessage({mtype: 'progress', message: 'PDF loaded successfully for extraction. Working ...'});
	  coherentpdf.decryptPdf(pdf, "");
	  var extractedMetadata = coherentpdf.getMetadata(pdf);
	  var decoder = new TextDecoder("utf-8");
	  var decodedMetadata = decoder.decode(extractedMetadata);
	  self.postMessage({mtype: 'dataExtracted', metadata: decodedMetadata});
	break;
    }
}
