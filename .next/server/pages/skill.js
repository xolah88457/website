(() => {
var exports = {};
exports.id = 162;
exports.ids = [162,888,532,840];
exports.modules = {

/***/ 1487:
/***/ ((module) => {

// Exports
module.exports = {
	"articles": "Skill_articles__gGNDU",
	"grid": "Skill_grid__uCe_s",
	"header": "Skill_header__B_Gcz",
	"heading": "Skill_heading__hO_S_",
	"list": "Skill_list__ayB33",
	"divider": "Skill_divider__q75zK",
	"skeleton": "Skill_skeleton__c94Kv",
	"skeletonBone": "Skill_skeletonBone__SAzQY",
	"post": "Skill_post__kxCen",
	"postLabel": "Skill_postLabel__TccwF",
	"postTag": "Skill_postTag__7PICp",
	"labelIn": "Skill_labelIn__WJ2wr",
	"tagIn": "Skill_tagIn__df8jt",
	"postLink": "Skill_postLink__A5PiV",
	"postDate": "Skill_postDate__RNvXy",
	"postImage": "Skill_postImage__llAaG",
	"postDetails": "Skill_postDetails__Q0nlC",
	"postFooter": "Skill_postFooter__akEoi",
	"timecode": "Skill_timecode__49xWy"
};


/***/ }),

/***/ 9934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ Skill)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5192);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2221);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6602);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7715);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2362);
/* harmony import */ var _Skill_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1487);
/* harmony import */ var _Skill_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Skill_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_barcode_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1014);
/* harmony import */ var _SkillContent_mdx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2332);
/* harmony import */ var _components_WordRotate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, hooks__WEBPACK_IMPORTED_MODULE_5__, _components_WordRotate__WEBPACK_IMPORTED_MODULE_10__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, hooks__WEBPACK_IMPORTED_MODULE_5__, _components_WordRotate__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ArticlesPost = ({ date , banner , index  })=>{
    const { 0: dateTime , 1: setDateTime  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useReducedMotion)();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setDateTime((0,_utils_date__WEBPACK_IMPORTED_MODULE_11__/* .formatDate */ .p)(date));
    }, [
        date,
        dateTime
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: (_Skill_module_css__WEBPACK_IMPORTED_MODULE_12___default().post),
        style: index !== undefined ? (0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .cssProps */ .Fh)({
            delay: index * 100 + 200
        }) : undefined,
        children: banner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_Skill_module_css__WEBPACK_IMPORTED_MODULE_12___default().postImage)
        })
    });
};
const Skill = ({ posts  })=>{
    const { width  } = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useWindowSize */ .iP)();
    const singleColumnWidth = 1190;
    const isSingleColumn = width <= singleColumnWidth;
    const postsList = posts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArticlesPost, {
            ...post,
            index: index
        }, post.slug));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_Skill_module_css__WEBPACK_IMPORTED_MODULE_12___default().articles),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Section__WEBPACK_IMPORTED_MODULE_3__/* .Section */ .$, {
                className: (_Skill_module_css__WEBPACK_IMPORTED_MODULE_12___default().content),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: (_Skill_module_css__WEBPACK_IMPORTED_MODULE_12___default().header),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
                                className: (_Skill_module_css__WEBPACK_IMPORTED_MODULE_12___default().heading),
                                level: 5,
                                as: "h1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WordRotate__WEBPACK_IMPORTED_MODULE_10__/* .WordRotate */ .h, {
                                    TARGET_TEXT: "Hard Skills"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_barcode_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Skill_module_css__WEBPACK_IMPORTED_MODULE_12___default().grid),
                        children: postsList
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SkillContent_mdx__WEBPACK_IMPORTED_MODULE_9__["default"], {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Skill__WEBPACK_IMPORTED_MODULE_5__.U),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1745);
/* harmony import */ var _utils_timecode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9110);
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Skill__WEBPACK_IMPORTED_MODULE_5__]);
_Skill__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function getStaticProps() {
    const allPosts = _utils_mdx__WEBPACK_IMPORTED_MODULE_4__/* .postFilePaths.map */ .B.map((filePath)=>{
        const source = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(_utils_mdx__WEBPACK_IMPORTED_MODULE_4__/* .POSTS_PATH */ .j, filePath));
        const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
        const { time  } = reading_time__WEBPACK_IMPORTED_MODULE_3___default()(content);
        const timecode = (0,_utils_timecode__WEBPACK_IMPORTED_MODULE_6__/* .formatTimecode */ .g)(time);
        return {
            ...data,
            timecode,
            slug: filePath.replace(/\.mdx?$/, "")
        };
    });
    const featured = allPosts.find((post)=>post.featured);
    const posts = allPosts.filter((post)=>post.slug !== featured.slug).sort((a, b)=>{
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }).reverse();
    return {
        props: {
            posts,
            featured
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

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

/***/ 4956:
/***/ ((module) => {

"use strict";
module.exports = require("reading-time");

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

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,151,480,348,279,584,14,332], () => (__webpack_exec__(7470)));
module.exports = __webpack_exports__;

})();