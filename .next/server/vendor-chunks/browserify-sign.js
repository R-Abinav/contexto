"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/browserify-sign";
exports.ids = ["vendor-chunks/browserify-sign"];
exports.modules = {

/***/ "(rsc)/./node_modules/browserify-sign/algos.js":
/*!***********************************************!*\
  !*** ./node_modules/browserify-sign/algos.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nmodule.exports = __webpack_require__(/*! ./browser/algorithms.json */ \"(rsc)/./node_modules/browserify-sign/browser/algorithms.json\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1zaWduL2FsZ29zLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLHFJQUFxRCIsInNvdXJjZXMiOlsiL1VzZXJzL2phc2h3YW50aHBlZGRpc2V0dHkvRG9jdW1lbnRzL2V0aGdsb2JhbC9jb250ZXh0by9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1zaWduL2FsZ29zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIvYWxnb3JpdGhtcy5qc29uJyk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/browserify-sign/algos.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/browserify-sign/browser/algorithms.json":
/*!**************************************************************!*\
  !*** ./node_modules/browserify-sign/browser/algorithms.json ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}');

/***/ }),

/***/ "(rsc)/./node_modules/browserify-sign/index.js":
/*!***********************************************!*\
  !*** ./node_modules/browserify-sign/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nexports.createSign = crypto.createSign;\nexports.Sign = crypto.Sign;\n\nexports.createVerify = crypto.createVerify;\nexports.Verify = crypto.Verify;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1zaWduL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTs7QUFFN0Isa0JBQWtCO0FBQ2xCLFlBQVk7O0FBRVosb0JBQW9CO0FBQ3BCLGNBQWMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNod2FudGhwZWRkaXNldHR5L0RvY3VtZW50cy9ldGhnbG9iYWwvY29udGV4dG8vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktc2lnbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxuZXhwb3J0cy5jcmVhdGVTaWduID0gY3J5cHRvLmNyZWF0ZVNpZ247XG5leHBvcnRzLlNpZ24gPSBjcnlwdG8uU2lnbjtcblxuZXhwb3J0cy5jcmVhdGVWZXJpZnkgPSBjcnlwdG8uY3JlYXRlVmVyaWZ5O1xuZXhwb3J0cy5WZXJpZnkgPSBjcnlwdG8uVmVyaWZ5O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/browserify-sign/index.js\n");

/***/ })

};
;