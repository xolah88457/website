"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = void 0;
var _head = _interopRequireDefault(require("next/head"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const name = 'Ryan Nasiri';
const twitterHandle = '@rtajuice';
const defaultOgImage = `${siteUrl}/social-image.png`;
const Meta = ({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage
}) => {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  return /*#__PURE__*/React.createElement(_head.default, null, /*#__PURE__*/React.createElement("title", {
    key: "title"
  }, titleText), /*#__PURE__*/React.createElement("meta", {
    key: "description",
    name: "description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    name: "author",
    content: name
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image",
    content: ogImage
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image:alt",
    content: "Banner for the site"
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image:type",
    content: "image/png"
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image:width",
    content: "1280"
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image:height",
    content: "675"
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: titleText
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:site_name",
    content: name
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:url",
    content: siteUrl
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:title",
    content: titleText
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:site",
    content: twitterHandle
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:creator",
    content: twitterHandle
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:image",
    content: ogImage
  }));
};
exports.Meta = Meta;