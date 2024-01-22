"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Document;
var _gothamBook = _interopRequireDefault(require("../assets/fonts/gotham-book.woff2"));
var _gothamMedium = _interopRequireDefault(require("../assets/fonts/gotham-medium.woff2"));
var _ThemeProvider = require("../components/ThemeProvider");
var _document = require("next/document");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Document() {
  return /*#__PURE__*/React.createElement(_document.Html, {
    lang: "en"
  }, /*#__PURE__*/React.createElement(_document.Head, null, /*#__PURE__*/React.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "manifest",
    href: "/manifest.json"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "shortcut icon",
    href: "/favicon.png",
    type: "image/png"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "shortcut icon",
    href: "/favicon.svg",
    type: "image/svg+xml"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "apple-touch-icon",
    href: "/android-chrome-512x512.png"
  }), /*#__PURE__*/React.createElement("link", {
    type: "text/plain",
    rel: "author",
    href: "/humans.txt"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "preload",
    href: _gothamMedium.default,
    as: "font",
    crossOrigin: "true"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "preload",
    href: _gothamBook.default,
    as: "font",
    crossOrigin: "true"
  }), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: _ThemeProvider.fontStyles
    }
  }), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: _ThemeProvider.tokenStyles
    }
  })), /*#__PURE__*/React.createElement("body", {
    "data-theme": "dark",
    tabIndex: -1
  }, /*#__PURE__*/React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              const initialTheme = JSON.parse(localStorage.getItem('theme'));
              document.body.dataset.theme = initialTheme || 'dark';
            `
    }
  }), /*#__PURE__*/React.createElement(_document.Main, null), /*#__PURE__*/React.createElement(_document.NextScript, null), /*#__PURE__*/React.createElement("div", {
    id: "portal-root"
  })));
}