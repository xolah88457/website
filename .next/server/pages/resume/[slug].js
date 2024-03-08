"use strict";
(() => {
var exports = {};
exports.id = 754;
exports.ids = [754,888,532,840];
exports.modules = {

/***/ 206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4293);
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8214);
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mdx_bundler_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1228);
/* harmony import */ var mdx_bundler_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rehype_img_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9919);
/* harmony import */ var rehype_preset_minify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6370);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7752);
/* harmony import */ var _utils_mdx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1745);
/* harmony import */ var _utils_timecode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9110);
/* harmony import */ var _mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5780);
/* harmony import */ var _mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _og_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5364);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Post__WEBPACK_IMPORTED_MODULE_3__, rehype_img_size__WEBPACK_IMPORTED_MODULE_8__, rehype_preset_minify__WEBPACK_IMPORTED_MODULE_9__, rehype_slug__WEBPACK_IMPORTED_MODULE_10__]);
([_layouts_Post__WEBPACK_IMPORTED_MODULE_3__, rehype_img_size__WEBPACK_IMPORTED_MODULE_8__, rehype_preset_minify__WEBPACK_IMPORTED_MODULE_9__, rehype_slug__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function PostPage({ frontmatter , code , timecode , ogImage  }) {
    const MDXComponent = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>(0,mdx_bundler_client__WEBPACK_IMPORTED_MODULE_5__.getMDXComponent)(code), [
        code
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Post__WEBPACK_IMPORTED_MODULE_3__/* .Post */ .S, {
        timecode: timecode,
        ogImage: ogImage,
        ...frontmatter,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXComponent, {
            components: _layouts_Post__WEBPACK_IMPORTED_MODULE_3__/* .postMarkdown */ .e
        })
    });
}
PostPage.propTypes = {
    frontmatter: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object.isRequired),
    code: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string.isRequired),
    timecode: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string.isRequired),
    ogImage: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string.isRequired)
};
const getStaticProps = async ({ params  })=>{
    const postFilePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(_utils_mdx__WEBPACK_IMPORTED_MODULE_11__/* .POSTS_PATH */ .j, `${params.slug}.mdx`);
    const source = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(postFilePath, "utf-8");
    const { code , frontmatter , matter  } = await (0,mdx_bundler__WEBPACK_IMPORTED_MODULE_4__.bundleMDX)({
        source,
        mdxOptions (options) {
            options.remarkPlugins = [
                ...options.remarkPlugins ?? []
            ];
            options.rehypePlugins = [
                ...options.rehypePlugins ?? [],
                (_mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_12___default()),
                rehype_slug__WEBPACK_IMPORTED_MODULE_10__["default"],
                rehype_preset_minify__WEBPACK_IMPORTED_MODULE_9__["default"],
                [
                    rehype_img_size__WEBPACK_IMPORTED_MODULE_8__["default"],
                    {
                        dir: "public"
                    }
                ], 
            ];
            return options;
        }
    });
    const { time  } = reading_time__WEBPACK_IMPORTED_MODULE_7___default()(matter.content);
    const timecode = (0,_utils_timecode__WEBPACK_IMPORTED_MODULE_15__/* .formatTimecode */ .g)(time);
    const ogImage = await (0,_og_image__WEBPACK_IMPORTED_MODULE_13__/* .generateOgImage */ .T)({
        title: frontmatter.title,
        date: frontmatter.date,
        banner: frontmatter.banner,
        timecode
    });
    return {
        props: {
            code,
            frontmatter,
            timecode,
            ogImage
        },
        notFound:  true && frontmatter.draft
    };
};
const getStaticPaths = async ()=>{
    const paths = _utils_mdx__WEBPACK_IMPORTED_MODULE_11__/* .postFilePaths.map */ .B.map((filePath)=>filePath.replace(/\.mdx?$/, "")).map((slug)=>({
            params: {
                slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ generateOgImage)
/* harmony export */ });
const puppeteer = __webpack_require__(8018);
const path = __webpack_require__(1017);
const fs = __webpack_require__(7147);
const { createHash  } = __webpack_require__(6113);
async function generateOgImage(props) {
    const params = new URLSearchParams(props);
    const url = `file:${path.join(process.cwd(), `src/pages/projects/og-image.html?${params}`)}`;
    const hash = createHash("md5").update(url).digest("hex");
    const ogImageDir = path.join(process.cwd(), `public/og`);
    const imageName = `${hash}.png`;
    const imagePath = `${ogImageDir}/${imageName}`;
    const publicPath = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og/${imageName}`;
    try {
        fs.statSync(imagePath);
        return publicPath;
    } catch (error) {
    // file does not exists, so we create it
    }
    (async ()=>{
        const browser = await puppeteer.launch({
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox"
            ]
        });
        const page = await browser.newPage();
        await page.setViewport({
            width: 1200,
            height: 630
        });
        await page.goto(url, {
            waitUntil: "networkidle0"
        });
        const buffer = await page.screenshot();
        await browser.close();
        fs.mkdirSync(ogImageDir, {
            recursive: true
        });
        fs.writeFileSync(imagePath, buffer);
    })();
    return publicPath;
}


/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 8214:
/***/ ((module) => {

module.exports = require("mdx-bundler");

/***/ }),

/***/ 1228:
/***/ ((module) => {

module.exports = require("mdx-bundler/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 8018:
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 9919:
/***/ ((module) => {

module.exports = import("rehype-img-size");;

/***/ }),

/***/ 6370:
/***/ ((module) => {

module.exports = import("rehype-preset-minify");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,480,348,535,279,633,293], () => (__webpack_exec__(206)));
module.exports = __webpack_exports__;

})();