"use strict";
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 5633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ Meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/Meta/Meta.js


const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const Meta_name = "Ryan Nasiri";
const twitterHandle = "@rtajuice";
const defaultOgImage = `${siteUrl}/social-image.png`;
const Meta = ({ title , description , prefix =Meta_name , ogImage =defaultOgImage  })=>{
    const titleText = [
        prefix,
        title
    ].filter(Boolean).join(" | ");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: titleText
            }, "title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }, "description"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: Meta_name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: ogImage
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:alt",
                content: "Banner for the site"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:type",
                content: "image/png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:width",
                content: "1280"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:height",
                content: "675"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: titleText
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: Meta_name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: siteUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: titleText
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: twitterHandle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:creator",
                content: twitterHandle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: ogImage
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Meta/index.js



/***/ })

};
;