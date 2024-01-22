(() => {
var exports = {};
exports.id = 647;
exports.ids = [647,888,532];
exports.modules = {

/***/ 8114:
/***/ ((module) => {

// Exports
module.exports = {
	"articles": "Resume_articles__f40IN",
	"grid": "Resume_grid__lGKWn",
	"header": "Resume_header__J9D6x",
	"heading": "Resume_heading__sxjFa",
	"list": "Resume_list__erIRE",
	"divider": "Resume_divider__OUFzj",
	"skeleton": "Resume_skeleton__KfTG7",
	"skeletonBone": "Resume_skeletonBone__kStxb",
	"post": "Resume_post__Rb_28",
	"postLabel": "Resume_postLabel__T_Efu",
	"postTag": "Resume_postTag__m9PDi",
	"labelIn": "Resume_labelIn__q_roR",
	"tagIn": "Resume_tagIn__BfTBU",
	"postLink": "Resume_postLink__CkzIE",
	"postDate": "Resume_postDate__ALveJ",
	"postImage": "Resume_postImage__d0ZO5",
	"postDetails": "Resume_postDetails__GQj4b",
	"postFooter": "Resume_postFooter__yOgV4",
	"timecode": "Resume_timecode__DFXSV"
};


/***/ }),

/***/ 6110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Resume)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_barcode_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1014);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5121);
/* harmony import */ var _components_DecoderText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2133);
/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3185);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5192);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2221);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8698);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6602);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7346);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5480);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7715);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2362);
/* harmony import */ var _Resume_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8114);
/* harmony import */ var _Resume_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Resume_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ResumeContent_mdx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(793);
/* harmony import */ var _components_WordRotate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Button__WEBPACK_IMPORTED_MODULE_2__, _components_DecoderText__WEBPACK_IMPORTED_MODULE_3__, _components_Image__WEBPACK_IMPORTED_MODULE_7__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, hooks__WEBPACK_IMPORTED_MODULE_11__, _components_WordRotate__WEBPACK_IMPORTED_MODULE_16__]);
([_components_Button__WEBPACK_IMPORTED_MODULE_2__, _components_DecoderText__WEBPACK_IMPORTED_MODULE_3__, _components_Image__WEBPACK_IMPORTED_MODULE_7__, framer_motion__WEBPACK_IMPORTED_MODULE_10__, hooks__WEBPACK_IMPORTED_MODULE_11__, _components_WordRotate__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const ArticlesPost = ({ slug , title , abstract , date , banner , timecode , index ,  })=>{
    const { 0: hovered , 1: setHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    const { 0: dateTime , 1: setDateTime  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null);
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useReducedMotion)();
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        setDateTime((0,_utils_date__WEBPACK_IMPORTED_MODULE_17__/* .formatDate */ .p)(date));
    }, [
        date,
        dateTime
    ]);
    const handleMouseEnter = ()=>{
        setHovered(true);
    };
    const handleMouseLeave = ()=>{
        setHovered(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_Resume_module_css__WEBPACK_IMPORTED_MODULE_18___default().post),
        style: index !== undefined ? (0,_utils_style__WEBPACK_IMPORTED_MODULE_14__/* .cssProps */ .Fh)({
            delay: index * 100 + 200
        }) : undefined,
        children: [
            banner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Resume_module_css__WEBPACK_IMPORTED_MODULE_18___default().postImage)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                href: `/resume/${slug}`,
                scroll: false
            })
        ]
    });
};
const Resume = ({ posts  })=>{
    const { width  } = (0,hooks__WEBPACK_IMPORTED_MODULE_11__/* .useWindowSize */ .iP)();
    const singleColumnWidth = 1190;
    const isSingleColumn = width <= singleColumnWidth;
    const postsList = posts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArticlesPost, {
            ...post,
            index: index
        }, post.slug));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_Resume_module_css__WEBPACK_IMPORTED_MODULE_18___default().articles),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Section__WEBPACK_IMPORTED_MODULE_8__/* .Section */ .$, {
                className: (_Resume_module_css__WEBPACK_IMPORTED_MODULE_18___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: (_Resume_module_css__WEBPACK_IMPORTED_MODULE_18___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_6__/* .Heading */ .X, {
                            className: (_Resume_module_css__WEBPACK_IMPORTED_MODULE_18___default().heading),
                            level: 5,
                            as: "h1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WordRotate__WEBPACK_IMPORTED_MODULE_16__/* .WordRotate */ .h, {
                                TARGET_TEXT: "My Resume"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Resume_module_css__WEBPACK_IMPORTED_MODULE_18___default().grid),
                        children: postsList
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ResumeContent_mdx__WEBPACK_IMPORTED_MODULE_15__["default"], {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* .Footer */ .$, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Resume__WEBPACK_IMPORTED_MODULE_5__.L),
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
/* harmony import */ var _Resume__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Resume__WEBPACK_IMPORTED_MODULE_5__]);
_Resume__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







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
var __webpack_exports__ = __webpack_require__.X(0, [664,151,480,564,133,279,584,14,793], () => (__webpack_exec__(4852)));
module.exports = __webpack_exports__;

})();