(() => {
var exports = {};
exports.id = 327;
exports.ids = [327,888,532,840];
exports.modules = {

/***/ 8107:
/***/ ((module) => {

// Exports
module.exports = {
	"articles": "Articles_articles__fqDLh",
	"grid": "Articles_grid__TMoKl",
	"header": "Articles_header__Is9fM",
	"heading": "Articles_heading__6uCMk",
	"list": "Articles_list__uh7On",
	"divider": "Articles_divider__vDNM5",
	"skeleton": "Articles_skeleton__JoHL8",
	"skeletonBone": "Articles_skeletonBone__FjYvH",
	"post": "Articles_post__Pcchn",
	"postLabel": "Articles_postLabel__C9Mmb",
	"postTag": "Articles_postTag__w0DiS",
	"labelIn": "Articles_labelIn__mP31Y",
	"tagIn": "Articles_tagIn__ep9sx",
	"postLink": "Articles_postLink__KjDRf",
	"postDate": "Articles_postDate__7uzsM",
	"postImage": "Articles_postImage__1lcb3",
	"postDetails": "Articles_postDetails__3tRaq",
	"postFooter": "Articles_postFooter__8pngt",
	"timecode": "Articles_timecode__ndiW1"
};


/***/ }),

/***/ 5630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Articles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_barcode_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1014);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5121);
/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5192);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2221);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8698);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6602);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7346);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5480);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7715);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2362);
/* harmony import */ var _Articles_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8107);
/* harmony import */ var _Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Articles_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var components_WordRotate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Button__WEBPACK_IMPORTED_MODULE_2__, _components_Image__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_9__, hooks__WEBPACK_IMPORTED_MODULE_10__, components_WordRotate__WEBPACK_IMPORTED_MODULE_14__]);
([_components_Button__WEBPACK_IMPORTED_MODULE_2__, _components_Image__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_9__, hooks__WEBPACK_IMPORTED_MODULE_10__, components_WordRotate__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const ArticlesPost = ({ slug , title , abstract , date , featured , banner , timecode , index ,  })=>{
    const { 0: hovered , 1: setHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
    const { 0: dateTime , 1: setDateTime  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null);
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useReducedMotion)();
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        setDateTime((0,_utils_date__WEBPACK_IMPORTED_MODULE_15__/* .formatDate */ .p)(date));
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
        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().post),
        "data-featured": !!featured,
        style: index !== undefined ? (0,_utils_style__WEBPACK_IMPORTED_MODULE_13__/* .cssProps */ .Fh)({
            delay: index * 100 + 200
        }) : undefined,
        children: [
            featured && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postLabel),
                size: "s",
                children: "Featured"
            }),
            featured && !!banner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postImage),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_6__/* .Image */ .E, {
                    noPauseButton: true,
                    play: !reduceMotion ? hovered : undefined,
                    src: {
                        src: banner
                    },
                    placeholder: {
                        src: `${banner.split(".")[0]}-favicon.jpg`
                    },
                    alt: "",
                    role: "presentation"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                href: `/projects/${slug}`,
                scroll: false,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postLink),
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postDetails),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "aria-hidden": true,
                                className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postDate),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Divider__WEBPACK_IMPORTED_MODULE_3__/* .Divider */ .i, {
                                        notchWidth: "64px",
                                        notchHeight: "8px"
                                    }),
                                    dateTime
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X, {
                                as: "h2",
                                level: featured ? 2 : 4,
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                                size: featured ? "l" : "s",
                                as: "p",
                                children: abstract
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postFooter),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                        secondary: true,
                                        iconHoverShift: true,
                                        icon: "chevronRight",
                                        as: "div",
                                        children: "View Project"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                                        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().timecode),
                                        size: "s",
                                        children: timecode
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            featured
        ]
    });
};
const SkeletonPost = ({ index  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        "aria-hidden": "true",
        className: (0,_utils_style__WEBPACK_IMPORTED_MODULE_13__/* .classes */ .Sh)((_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().post), (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().skeleton)),
        style: index !== undefined ? (0,_utils_style__WEBPACK_IMPORTED_MODULE_13__/* .cssProps */ .Fh)({
            delay: index * 100 + 200
        }) : undefined,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postLink),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postDetails),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "aria-hidden": true,
                        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postDate),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Divider__WEBPACK_IMPORTED_MODULE_3__/* .Divider */ .i, {
                                notchWidth: "64px",
                                notchHeight: "8px"
                            }),
                            "Coming soon..."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X, {
                        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().skeletonBone),
                        as: "h2",
                        level: 4,
                        style: {
                            height: 24,
                            width: "70%"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().skeletonBone),
                        size: "s",
                        as: "p",
                        style: {
                            height: 90,
                            width: "100%"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().postFooter),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                secondary: true,
                                iconHoverShift: true,
                                icon: "chevronRight",
                                as: "div",
                                children: "Read more"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                                className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().timecode),
                                size: "s",
                                children: "00:00:00:00"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const Articles = ({ posts , featured  })=>{
    const { width  } = (0,hooks__WEBPACK_IMPORTED_MODULE_10__/* .useWindowSize */ .iP)();
    const singleColumnWidth = 1190;
    const isSingleColumn = width <= singleColumnWidth;
    const postsHeader = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X, {
                className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().heading),
                level: 5,
                as: "h1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_WordRotate__WEBPACK_IMPORTED_MODULE_14__/* .WordRotate */ .h, {
                    TARGET_TEXT: "Latest Projects"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_barcode_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
    const postList = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().list),
        children: [
            !isSingleColumn && postsHeader,
            posts.map(({ slug , ...post }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArticlesPost, {
                    slug: slug,
                    index: index,
                    ...post
                }, slug)),
            Array(1).fill().map((skeleton, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkeletonPost, {}, index))
        ]
    });
    const featuredPost = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArticlesPost, {
        ...featured
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().articles),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Section__WEBPACK_IMPORTED_MODULE_7__/* .Section */ .$, {
                className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().content),
                children: [
                    !isSingleColumn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().grid),
                        children: [
                            postList,
                            featuredPost
                        ]
                    }),
                    isSingleColumn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Articles_module_css__WEBPACK_IMPORTED_MODULE_16___default().grid),
                        children: [
                            postsHeader,
                            featuredPost,
                            postList
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Articles__WEBPACK_IMPORTED_MODULE_5__.Z),
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
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Articles__WEBPACK_IMPORTED_MODULE_5__]);
_Articles__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







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
var __webpack_exports__ = __webpack_require__.X(0, [664,480,348,535,279,584,14], () => (__webpack_exec__(6019)));
module.exports = __webpack_exports__;

})();