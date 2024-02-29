in conjunction with my War on the Bluebook, I've made a prototype of a demonstration project proving that you can just embed machine-readable citation files directly into a PDF. (Also, finally proving that I hate the bluebook more than I hate writing javascript).

To run on your own, just spin up a local webserver. This runs in pure client-side javascript, no server required.

Available live at https://gowder.io/citations/ .  Tested and works in chrome on desktop, no clue about other platforms. 

This repo also contains two dependencies for this project, [Coherent PDF](https://github.com/coherentgraphics/coherentpdf.js/) and [a Base64 library by Dan Kogai](https://github.com/dankogai/js-base64).  The former is under the AGPL-3.0 license, and the latter is under the BSD 3-Clause license. Please see the above links for license details, source code, etc. 

**update**: coherentpdf broke.  now uses [PDF-lib](https://pdf-lib.js.org/) which is licensed under the MIT license. No longer uses coherentpdf at all (though I did adapt some of their example code)

----

note to self: dev build/server: `npx parcel index.html`build for prod `npx parcel build index.html --public-url ./` (the last thing is to force it to use relative urls for the javascript and css files)

TODO:

- see if it works on mobile/in safari
  
- test embedding on PDFs that already have metadata to make sure it doesn't overwrite or fail

- test with non CSL JSON formats (esp. ris, bibtex)

- get rid of junk development code like the console.logs  

**NOTE**

- as of the morning of 2-29-24, I discovered a bug that seems to corrupt some PDF files.  Working on it.


