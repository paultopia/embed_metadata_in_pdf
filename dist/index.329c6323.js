let t;var e,r,n,i,o=globalThis,f={},s={},u=o.parcelRequire11d9;null==u&&((u=function(t){if(t in f)return f[t].exports;if(t in s){var e=s[t];delete s[t];var r={id:t,exports:{}};return f[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){s[t]=e},o.parcelRequire11d9=u),(0,u.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>r,set:t=>r=t,enumerable:!0,configurable:!0});var r,n=new Map;r=function(t,e){for(var r=0;r<e.length-1;r+=2)n.set(e[r],{baseUrl:t,path:e[r+1]})}}),u("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["1TzJS","index.329c6323.js","7YU74","pdf_worker.a33ff2ff.js"]')),e=function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),i=n[0],o=n[1],f=new l((i+o)*3/4-o),s=0,u=o>0?i-4:i;for(r=0;r<u;r+=4)e=h[t.charCodeAt(r)]<<18|h[t.charCodeAt(r+1)]<<12|h[t.charCodeAt(r+2)]<<6|h[t.charCodeAt(r+3)],f[s++]=e>>16&255,f[s++]=e>>8&255,f[s++]=255&e;return 2===o&&(e=h[t.charCodeAt(r)]<<2|h[t.charCodeAt(r+1)]>>4,f[s++]=255&e),1===o&&(e=h[t.charCodeAt(r)]<<10|h[t.charCodeAt(r+1)]<<4|h[t.charCodeAt(r+2)]>>2,f[s++]=e>>8&255,f[s++]=255&e),f},r=function(t){for(var e,r=t.length,n=r%3,i=[],o=0,f=r-n;o<f;o+=16383)i.push(function(t,e,r){for(var n,i=[],o=e;o<r;o+=3)i.push(a[(n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]))>>18&63]+a[n>>12&63]+a[n>>6&63]+a[63&n]);return i.join("")}(t,o,o+16383>f?f:o+16383));return 1===n?i.push(a[(e=t[r-1])>>2]+a[e<<4&63]+"=="):2===n&&i.push(a[(e=(t[r-2]<<8)+t[r-1])>>10]+a[e>>4&63]+a[e<<2&63]+"="),i.join("")};for(var a=[],h=[],l="undefined"!=typeof Uint8Array?Uint8Array:Array,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,g=p.length;c<g;++c)a[c]=p[c],h[p.charCodeAt(c)]=c;h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63,n=function(t,e,r,n,i){var o,f,s=8*i-n-1,u=(1<<s)-1,a=u>>1,h=-7,l=r?i-1:0,p=r?-1:1,c=t[e+l];for(l+=p,o=c&(1<<-h)-1,c>>=-h,h+=s;h>0;o=256*o+t[e+l],l+=p,h-=8);for(f=o&(1<<-h)-1,o>>=-h,h+=n;h>0;f=256*f+t[e+l],l+=p,h-=8);if(0===o)o=1-a;else{if(o===u)return f?NaN:1/0*(c?-1:1);f+=Math.pow(2,n),o-=a}return(c?-1:1)*f*Math.pow(2,o-n)},i=function(t,e,r,n,i,o){var f,s,u,a=8*o-i-1,h=(1<<a)-1,l=h>>1,p=23===i?5960464477539062e-23:0,c=n?0:o-1,g=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,f=h):(f=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-f))<1&&(f--,u*=2),f+l>=1?e+=p/u:e+=p*Math.pow(2,1-l),e*u>=2&&(f++,u/=2),f+l>=h?(s=0,f=h):f+l>=1?(s=(e*u-1)*Math.pow(2,i),f+=l):(s=e*Math.pow(2,l-1)*Math.pow(2,i),f=0));i>=8;t[r+c]=255&s,c+=g,s/=256,i-=8);for(f=f<<i|s,a+=i;a>0;t[r+c]=255&f,c+=g,f/=256,a-=8);t[r+c-g]|=128*y};const y="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function d(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,m.prototype),e}function m(t,e,r){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return E(t)}return b(t,e,r)}function b(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!m.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|A(t,e),n=d(r),i=n.write(t,e);return i!==r&&(n=n.slice(0,i)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(J(t,Uint8Array)){let e=new Uint8Array(t);return v(e.buffer,e.byteOffset,e.byteLength)}return B(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return v(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return m.from(n,e,r);let i=function(t){var e;if(m.isBuffer(t)){let e=0|U(t.length),r=d(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e?d(0):B(t):"Buffer"===t.type&&Array.isArray(t.data)?B(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return m.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function w(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function E(t){return w(t),d(t<0?0:0|U(t))}function B(t){let e=t.length<0?0:0|U(t.length),r=d(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function v(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),m.prototype),n}function U(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function A(t,e){if(m.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Y(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(t).length;default:if(i)return n?-1:Y(t).length;e=(""+e).toLowerCase(),i=!0}}function I(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=V[t[n]];return i}(this,e,n);case"utf8":case"utf-8":return T(this,e,n);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}(this,e,n);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}(this,e,n);case"base64":var o,f;return o=e,f=n,0===o&&f===this.length?r(this):r(this.slice(o,f));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}(this,e,n);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function R(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}function L(t,e,r,n,i){var o;if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return -1;r=t.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof e&&(e=m.from(e,n)),m.isBuffer(e))return 0===e.length?-1:x(t,e,r,n,i);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):x(t,[e],r,n,i);throw TypeError("val must be string, number or Buffer")}function x(t,e,r,n,i){let o,f=1,s=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;f=2,s/=2,u/=2,r/=2}function a(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(i){let n=-1;for(o=r;o<s;o++)if(a(t,o)===a(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*f}else -1!==n&&(o-=o-n),n=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(a(t,o+n)!==a(e,n)){r=!1;break}if(r)return o}return -1}function T(t,e,r){r=Math.min(t.length,r);let n=[],i=e;for(;i<r;){let e=t[i],o=null,f=e>239?4:e>223?3:e>191?2:1;if(i+f<=r){let r,n,s,u;switch(f){case 1:e<128&&(o=e);break;case 2:(192&(r=t[i+1]))==128&&(u=(31&e)<<6|63&r)>127&&(o=u);break;case 3:r=t[i+1],n=t[i+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=t[i+1],n=t[i+2],s=t[i+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&u<1114112&&(o=u)}}null===o?(o=65533,f=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=f}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}function O(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function S(t,e,r,n,i,o){if(!m.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function _(t,e,r,n,i){j(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,r}function C(t,e,r,n,i){j(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=f,f>>=8,t[r+2]=f,f>>=8,t[r+1]=f,f>>=8,t[r]=f,r+8}function F(t,e,r,n,i,o){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function M(t,e,r,n,o){return e=+e,r>>>=0,o||F(t,e,r,4,34028234663852886e22,-34028234663852886e22),i(t,e,r,n,23,4),r+4}function N(t,e,r,n,o){return e=+e,r>>>=0,o||F(t,e,r,8,17976931348623157e292,-17976931348623157e292),i(t,e,r,n,52,8),r+8}m.TYPED_ARRAY_SUPPORT=function(){try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),m.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(m.isBuffer(this))return this.buffer}}),Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(m.isBuffer(this))return this.byteOffset}}),m.poolSize=8192,m.from=function(t,e,r){return b(t,e,r)},Object.setPrototypeOf(m.prototype,Uint8Array.prototype),Object.setPrototypeOf(m,Uint8Array),m.alloc=function(t,e,r){return(w(t),t<=0)?d(t):void 0!==e?"string"==typeof r?d(t).fill(e,r):d(t).fill(e):d(t)},m.allocUnsafe=function(t){return E(t)},m.allocUnsafeSlow=function(t){return E(t)},m.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==m.prototype},m.compare=function(t,e){if(J(t,Uint8Array)&&(t=m.from(t,t.offset,t.byteLength)),J(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),!m.isBuffer(t)||!m.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},m.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},m.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return m.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=m.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){let e=t[r];if(J(e,Uint8Array))i+e.length>n.length?(m.isBuffer(e)||(e=m.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else if(m.isBuffer(e))e.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return n},m.byteLength=A,m.prototype._isBuffer=!0,m.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)R(this,e,e+1);return this},m.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)R(this,e,e+3),R(this,e+1,e+2);return this},m.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)R(this,e,e+7),R(this,e+1,e+6),R(this,e+2,e+5),R(this,e+3,e+4);return this},m.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?T(this,0,t):I.apply(this,arguments)},m.prototype.toLocaleString=m.prototype.toString,m.prototype.equals=function(t){if(!m.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===m.compare(this,t)},m.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},y&&(m.prototype[y]=m.prototype.inspect),m.prototype.compare=function(t,e,r,n,i){if(J(t,Uint8Array)&&(t=m.from(t,t.offset,t.byteLength)),!m.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;let o=i-n,f=r-e,s=Math.min(o,f),u=this.slice(n,i),a=t.slice(e,r);for(let t=0;t<s;++t)if(u[t]!==a[t]){o=u[t],f=a[t];break}return o<f?-1:f<o?1:0},m.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},m.prototype.indexOf=function(t,e,r){return L(this,t,e,r,!0)},m.prototype.lastIndexOf=function(t,e,r){return L(this,t,e,r,!1)},m.prototype.write=function(t,e,r,n){var i,o,f,s,u,a,h,l;if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let p=this.length-e;if((void 0===r||r>p)&&(r=p),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let c=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let i;r=Number(r)||0;let o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;let f=e.length;for(n>f/2&&(n=f/2),i=0;i<n;++i){let n=parseInt(e.substr(2*i,2),16);if(n!=n)break;t[r+i]=n}return i}(this,t,e,r);case"utf8":case"utf-8":return i=e,o=r,q(Y(t,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return f=e,s=r,q(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,f,s);case"base64":return u=e,a=r,q(G(t),this,u,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=e,l=r,q(function(t,e){let r,n;let i=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=(r=t.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(t,this.length-h),this,h,l);default:if(c)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),c=!0}},m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},m.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return Object.setPrototypeOf(n,m.prototype),n},m.prototype.readUintLE=m.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},m.prototype.readUintBE=m.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},m.prototype.readUint8=m.prototype.readUInt8=function(t,e){return t>>>=0,e||O(t,1,this.length),this[t]},m.prototype.readUint16LE=m.prototype.readUInt16LE=function(t,e){return t>>>=0,e||O(t,2,this.length),this[t]|this[t+1]<<8},m.prototype.readUint16BE=m.prototype.readUInt16BE=function(t,e){return t>>>=0,e||O(t,2,this.length),this[t]<<8|this[t+1]},m.prototype.readUint32LE=m.prototype.readUInt32LE=function(t,e){return t>>>=0,e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},m.prototype.readUint32BE=m.prototype.readUInt32BE=function(t,e){return t>>>=0,e||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},m.prototype.readBigUInt64LE=W(function(t){D(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&H(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),m.prototype.readBigUInt64BE=W(function(t){D(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&H(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),m.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},m.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},m.prototype.readInt8=function(t,e){return(t>>>=0,e||O(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},m.prototype.readInt16LE=function(t,e){t>>>=0,e||O(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},m.prototype.readInt16BE=function(t,e){t>>>=0,e||O(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},m.prototype.readInt32LE=function(t,e){return t>>>=0,e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},m.prototype.readInt32BE=function(t,e){return t>>>=0,e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},m.prototype.readBigInt64LE=W(function(t){D(t>>>=0,"offset");let e=this[t],r=this[t+7];return(void 0===e||void 0===r)&&H(t,this.length-8),(BigInt(this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24))<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),m.prototype.readBigInt64BE=W(function(t){D(t>>>=0,"offset");let e=this[t],r=this[t+7];return(void 0===e||void 0===r)&&H(t,this.length-8),(BigInt((e<<24)+65536*this[++t]+256*this[++t]+this[++t])<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),m.prototype.readFloatLE=function(t,e){return t>>>=0,e||O(t,4,this.length),n(this,t,!0,23,4)},m.prototype.readFloatBE=function(t,e){return t>>>=0,e||O(t,4,this.length),n(this,t,!1,23,4)},m.prototype.readDoubleLE=function(t,e){return t>>>=0,e||O(t,8,this.length),n(this,t,!0,52,8)},m.prototype.readDoubleBE=function(t,e){return t>>>=0,e||O(t,8,this.length),n(this,t,!1,52,8)},m.prototype.writeUintLE=m.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;S(this,t,e,r,n,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},m.prototype.writeUintBE=m.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;S(this,t,e,r,n,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},m.prototype.writeUint8=m.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,1,255,0),this[e]=255&t,e+1},m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},m.prototype.writeBigUInt64LE=W(function(t,e=0){return _(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),m.prototype.writeBigUInt64BE=W(function(t,e=0){return C(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),m.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);S(this,t,e,r,n-1,-n)}let i=0,o=1,f=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===f&&0!==this[e+i-1]&&(f=1),this[e+i]=(t/o>>0)-f&255;return e+r},m.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);S(this,t,e,r,n-1,-n)}let i=r-1,o=1,f=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===f&&0!==this[e+i+1]&&(f=1),this[e+i]=(t/o>>0)-f&255;return e+r},m.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},m.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},m.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},m.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},m.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},m.prototype.writeBigInt64LE=W(function(t,e=0){return _(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),m.prototype.writeBigInt64BE=W(function(t,e=0){return C(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),m.prototype.writeFloatLE=function(t,e,r){return M(this,t,e,!0,r)},m.prototype.writeFloatBE=function(t,e,r){return M(this,t,e,!1,r)},m.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},m.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},m.prototype.copy=function(t,e,r,n){if(!m.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},m.prototype.fill=function(t,e,r,n){let i;if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!m.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{let o=m.isBuffer(t)?t:m.from(t,n),f=o.length;if(0===f)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%f]}return this};const P={};function $(t,e,r){P[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function k(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function j(t,e,r,n,i,o){if(t>r||t<e){let n;let i="bigint"==typeof e?"n":"";throw n=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${e}${i} and <= ${r}${i}`,new P.ERR_OUT_OF_RANGE("value",n,t)}D(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&H(i,n.length-(o+1))}function D(t,e){if("number"!=typeof t)throw new P.ERR_INVALID_ARG_TYPE(e,"number",t)}function H(t,e,r){if(Math.floor(t)!==t)throw D(t,r),new P.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new P.ERR_BUFFER_OUT_OF_BOUNDS;throw new P.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}$("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),$("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),$("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=k(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=k(i)),i+="n"),n+=` It must be ${e}. Received ${i}`},RangeError);const z=/[^+/0-9A-Za-z-_]/g;function Y(t,e){let r;e=e||1/0;let n=t.length,i=null,o=[];for(let f=0;f<n;++f){if((r=t.charCodeAt(f))>55295&&r<57344){if(!i){if(r>56319||f+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function G(t){return e(function(t){if((t=(t=t.split("=")[0]).trim().replace(z,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function q(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length)&&!(i>=t.length);++i)e[i+r]=t[i];return i}function J(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}const V=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function W(t){return"undefined"==typeof BigInt?Z:t}function Z(){throw Error("BigInt not supported")}const K=(t={},("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder&&new TextEncoder,Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")).forEach((e,r)=>t[e]=r),String.fromCharCode.bind(String)),Q="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),X=t=>t.replace(/=/g,"").replace(/[+\/]/g,t=>"+"==t?"-":"_"),tt=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),te=("function"==typeof btoa||(t=>m.from(t,"binary").toString("base64")),t=>m.from(t).toString("base64")),tr=(t,e=!1)=>e?X(te(t)):te(t),tn=t=>m.from(t,"utf8").toString("base64"),ti=(t,e=!1)=>e?X(tn(t)):tn(t),to=("function"==typeof atob||(t=>m.from(t,"base64").toString("binary")),t=>Q(m.from(t,"base64"))),tf=t=>to(tu(t)),ts=t=>m.from(t,"base64").toString("utf8"),tu=t=>tt(t.replace(/[-_]/g,t=>"-"==t?"+":"/")),ta=t=>ts(tu(t)),th=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),tl={encode:ti,decode:ta};function tp(t,e,r,n){var i=new Blob(void 0!==n?[n,t]:[t],{type:r||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(i,e);else{var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),f=document.createElement("a");f.style.display="none",f.href=o,f.setAttribute("download",e),void 0===f.download&&f.setAttribute("target","_blank"),document.body.appendChild(f),f.click(),setTimeout(function(){document.body.removeChild(f),window.URL.revokeObjectURL(o)},200)}}var tc={},tg={};tg=function(t,e,r){if(e===self.location.origin)return t;var n=r?"import "+JSON.stringify(t)+";":"importScripts("+JSON.stringify(t)+");";return URL.createObjectURL(new Blob([n],{type:"application/javascript"}))};let ty=new URL("pdf_worker.a33ff2ff.js",import.meta.url);function td(){var t;(t=Date.now(),new Promise(function e(r,n){tm&&tm.complete?r(tm):Date.now()-t>=1e5?n(Error("timeout")):setTimeout(e.bind(this,r,n),30)})).then(function(){document.getElementById("progress").innerHTML="PDF File loaded from disc. Processing...";var t=new Uint8Array(tm.pdf),e=tm.pdfFileName,r=`modified-${e}`,n=new Uint8Array(tm.xmp),i=new Worker(tc);i.postMessage({mtype:"embed",bytes:t,metadata:n}),i.onmessage=function(t){switch(t.data.mtype){case"pdfout":tp(t.data.bytes,r),document.getElementById("progress").innerHTML="Processing finished. Output PDF file downloaded. Reload page to do another file.",i.terminate();break;case"progress":document.getElementById("progress").innerHTML=t.data.message}}})}tc=tg(ty.toString(),ty.origin,!0);var tm=function(){},tb=function(){};document.getElementById("citation-selector").addEventListener("change",t=>{let e=t.target.files,r=e[0].name,n=new FileReader;n.addEventListener("load",t=>{var e,n,i=(e=t.target.result,n=tl.encode(e),`<x:xmpmeta xmlns:x="adobe:ns:meta/">

  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	   xmlns:xmp="http://ns.adobe.com/xap/1.0/">

<rdf:Description rdf:about="">

<xmp:citeFile>${r}</xmp:citeFile> </rdf:Description>

<xmp:CSL>${n}</xmp:CSL> </rdf:Description>

</rdf:RDF> </x:xmpmeta>`);let o=new TextEncoder().encode(i);tm.xmp=o,console.log(tm),tm.pdf&&(tm.complete=!0,td())}),n.readAsText(e[0],"UTF-8")}),document.getElementById("embed-selector").addEventListener("change",t=>{let e=t.target.files,r=e[0].name,n=new FileReader;n.addEventListener("load",t=>{let e=t.target.result;tm.pdf=e,tm.pdfFileName=r,console.log(tm),tm.xmp&&(tm.complete=!0,td())}),n.readAsArrayBuffer(e[0])}),document.getElementById("extract-selector").addEventListener("change",t=>{let e=t.target.files,r=new FileReader;r.addEventListener("load",t=>{var e;let r=t.target.result;tb.pdf=r,tb.complete=!0,(e=Date.now(),new Promise(function t(r,n){tb&&tb.complete?r(tb):Date.now()-e>=1e5?n(Error("timeout")):setTimeout(t.bind(this,r,n),30)})).then(function(){document.getElementById("progress").innerHTML="PDF File loaded from disc. Processing...";var t=new Uint8Array(tb.pdf),e=new Worker(tc);e.postMessage({mtype:"extract",bytes:t}),e.onmessage=function(t){switch(t.data.mtype){case"dataExtracted":var r=function(t){let e=t.match(/<xmp:CSL>(.*)<\/xmp:CSL>/)[1];return{json:tl.decode(e),fileName:t.match(/<xmp:citeFile>(.*)<\/xmp:citeFile>/)[1]}}(t.data.metadata);tp(r.json,r.fileName,"text/plain"),document.getElementById("progress").innerHTML="Processing finished. Citaiton data file downloaded. Reload page to do another file.",e.terminate();break;case"progress":document.getElementById("progress").innerHTML=t.data.message}}})}),r.readAsArrayBuffer(e[0])});
//# sourceMappingURL=index.329c6323.js.map