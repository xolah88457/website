(() => {
var exports = {};
exports.id = 197;
exports.ids = [197,888,532,840];
exports.modules = {

/***/ 5597:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "Heading_heading__209rB"
};


/***/ }),

/***/ 1429:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "__404_page__lOAjs",
	"videoContainer": "__404_videoContainer__asE2J",
	"video": "__404_video__c2iBw",
	"credit": "__404_credit__RZBXp",
	"details": "__404_details__BeAQV",
	"text": "__404_text__QkjlH",
	"title": "__404_title__ySHYF",
	"subheading": "__404_subheading__9GcyQ",
	"description": "__404_description__wrY0N",
	"button": "__404_button__UBp2P"
};


/***/ }),

/***/ 7257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/notfound.4ebd40af.jpg","height":64,"width":64,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAggpf/8QAHBAAAQMFAAAAAAAAAAAAAAAAAwECEwARIjJh/9oACAEBAAE/AEEgzTsENTS6SXbl2v/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AI//xAAWEQEBAQAAAAAAAAAAAAAAAAABAGH/2gAIAQMBAT8AXC//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ Heading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Heading/Heading.module.css
var Heading_module = __webpack_require__(5597);
var Heading_module_default = /*#__PURE__*/__webpack_require__.n(Heading_module);
;// CONCATENATED MODULE: ./src/components/Heading/Heading.js




const Heading = ({ children , level =1 , as , align ="auto" , weight ="medium" , className , ...rest })=>{
    const clampedLevel = Math.min(Math.max(level, 0), 5);
    const Component = as || `h${Math.max(clampedLevel, 1)}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            className: (0,style/* classes */.Sh)((Heading_module_default()).heading, className),
            "data-align": align,
            "data-weight": weight,
            "data-level": clampedLevel,
            ...rest,
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Heading/index.js



/***/ }),

/***/ 1816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Page404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_notfound_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7257);
/* harmony import */ var _assets_notfound_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1640);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5121);
/* harmony import */ var _components_DecoderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2133);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2221);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5633);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7346);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8802);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _404_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1429);
/* harmony import */ var _404_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_404_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Button__WEBPACK_IMPORTED_MODULE_3__, _components_DecoderText__WEBPACK_IMPORTED_MODULE_4__, _components_Transition__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Button__WEBPACK_IMPORTED_MODULE_3__, _components_DecoderText__WEBPACK_IMPORTED_MODULE_4__, _components_Transition__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Page404() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().page),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_6__/* .Meta */ .h, {
                title: "404 Not Found",
                description: "404 page not found. This page doesn't exist"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_8__/* .Transition */ .u, {
                in: true,
                children: (visible)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().details),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().text),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X, {
                                            className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
                                            "data-visible": visible,
                                            level: 0,
                                            weight: "bold",
                                            children: "404"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X, {
                                            "aria-hidden": true,
                                            className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().subheading),
                                            "data-visible": visible,
                                            as: "h2",
                                            level: 3,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DecoderText__WEBPACK_IMPORTED_MODULE_4__/* .DecoderText */ .V, {
                                                text: "Error: Redacted",
                                                start: visible,
                                                delay: 300
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .x, {
                                            className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().description),
                                            "data-visible": visible,
                                            as: "p",
                                            children: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                                            secondary: true,
                                            iconHoverShift: true,
                                            className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),
                                            "data-visible": visible,
                                            href: "/",
                                            icon: "chevronRight",
                                            children: "Back to homepage"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().videoContainer),
                                "data-visible": visible,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                        autoPlay: true,
                                        muted: true,
                                        loop: true,
                                        playsInline: true,
                                        className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().video),
                                        "data-visible": visible,
                                        poster: _assets_notfound_jpg__WEBPACK_IMPORTED_MODULE_1__/* ["default"].src */ .Z.src,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            src: _assets_notfound_mp4__WEBPACK_IMPORTED_MODULE_2__,
                                            type: "video/mp4"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: (_404_module_css__WEBPACK_IMPORTED_MODULE_10___default().credit),
                                        "data-visible": visible,
                                        href: "https://www.imdb.com/title/tt0113568/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Animation from Ghost in the Shell (1995)"
                                    })
                                ]
                            })
                        ]
                    })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _404__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1816);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_404__WEBPACK_IMPORTED_MODULE_0__]);
_404__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/notfound.7706c673.mp4";

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,480,633,133], () => (__webpack_exec__(1121)));
module.exports = __webpack_exports__;

})();