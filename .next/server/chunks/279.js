"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 7715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(date) {
    return new Date(date).toLocaleDateString("default", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });
}


/***/ }),

/***/ 1745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ postFilePaths),
/* harmony export */   "j": () => (/* binding */ POSTS_PATH)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/posts");
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const postFilePaths = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(POSTS_PATH)// Only include md(x) files
.filter((path)=>/\.mdx?$/.test(path));


/***/ }),

/***/ 9110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ formatTimecode)
/* harmony export */ });
/* unused harmony export zeroPrefix */
/**
 * Format a timecode intro a hours:minutes:seconds:centiseconds string
 */ function formatTimecode(time) {
    const hours = time / 1000 / 60 / 60;
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    const s = Math.floor(((hours - h) * 60 - m) * 60);
    const c = Math.floor((((hours - h) * 60 - m) * 60 - s) * 1000 / 10);
    return `${zeroPrefix(h)}:${zeroPrefix(m)}:${zeroPrefix(s)}:${zeroPrefix(c)}`;
}
/**
 * Prefix a number with zero as a string if less than 10
 */ function zeroPrefix(value) {
    return value < 10 ? `0${value}` : `${value}`;
}


/***/ })

};
;