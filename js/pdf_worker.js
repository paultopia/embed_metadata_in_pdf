
import { PDFDocument, PDFHexString, PDFName } from 'pdf-lib';

self.onmessage = async function(e) {
   switch (e.data.mtype)
    {
	case 'embed':
	  console.log("in worker");
	  var pdfDoc = await PDFDocument.load(e.data.bytes)
	  console.log("opened pdf file");
	  console.log(e.data.citations);
	  console.log(e.data.citesFileName);
	  self.postMessage({mtype: 'progress', message: 'PDF loaded successfully for embedding. Working ...'});
	pdfDoc['getInfoDict']().set(PDFName.of('citations'), PDFHexString.fromText(e.data.citations));
	pdfDoc['getInfoDict']().set(PDFName.of('citationsFilename'), PDFHexString.fromText(e.data.citesFileName));
	  const pdfOut = await pdfDoc.save();
	  self.postMessage({mtype: 'pdfout', bytes: pdfOut});
	break;
	case 'extract':
	  var pdfDoc = await PDFDocument.load(e.data.bytes);
          self.postMessage({mtype: 'progress', message: 'PDF loaded successfully for extraction. Working ...'});
	  var citations = pdfDoc.getInfoDict().get(PDFName.of('citations'))?.decodeText();
	  var citationsFileName = pdfDoc.getInfoDict().get(PDFName.of('citationsFilename'))?.decodeText();
	  self.postMessage({mtype: 'dataExtracted', citations: citations, fileName: citationsFileName});
	break;
    }
}
