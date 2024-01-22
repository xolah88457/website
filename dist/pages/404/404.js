"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page404 = Page404;
var _notfound = _interopRequireDefault(require("../../assets/notfound.jpg"));
var _notfound2 = _interopRequireDefault(require("../../assets/notfound.mp4"));
var _Button = require("../../components/Button");
var _DecoderText = require("../../components/DecoderText");
var _Heading = require("../../components/Heading");
var _Meta = require("../../components/Meta");
var _Text = require("../../components/Text");
var _Transition = require("../../components/Transition");
var _react = require("react");
var _module = _interopRequireDefault(require("./404.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page404() {
  return /*#__PURE__*/React.createElement("section", {
    className: _module.default.page
  }, /*#__PURE__*/React.createElement(_Meta.Meta, {
    title: "404 Not Found",
    description: "404 page not found. This page doesn't exist"
  }), /*#__PURE__*/React.createElement(_Transition.Transition, {
    in: true
  }, visible => /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _module.default.details
  }, /*#__PURE__*/React.createElement("div", {
    className: _module.default.text
  }, /*#__PURE__*/React.createElement(_Heading.Heading, {
    className: _module.default.title,
    "data-visible": visible,
    level: 0,
    weight: "bold"
  }, "404"), /*#__PURE__*/React.createElement(_Heading.Heading, {
    "aria-hidden": true,
    className: _module.default.subheading,
    "data-visible": visible,
    as: "h2",
    level: 3
  }, /*#__PURE__*/React.createElement(_DecoderText.DecoderText, {
    text: "Error: Redacted",
    start: visible,
    delay: 300
  })), /*#__PURE__*/React.createElement(_Text.Text, {
    className: _module.default.description,
    "data-visible": visible,
    as: "p"
  }, "This page could not be found. It either doesn\u2019t exist or was deleted. Or perhaps you don\u2019t exist."), /*#__PURE__*/React.createElement(_Button.Button, {
    secondary: true,
    iconHoverShift: true,
    className: _module.default.button,
    "data-visible": visible,
    href: "/",
    icon: "chevronRight"
  }, "Back to homepage"))), /*#__PURE__*/React.createElement("div", {
    className: _module.default.videoContainer,
    "data-visible": visible
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    className: _module.default.video,
    "data-visible": visible,
    poster: _notfound.default.src
  }, /*#__PURE__*/React.createElement("source", {
    src: _notfound2.default,
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("a", {
    className: _module.default.credit,
    "data-visible": visible,
    href: "https://www.imdb.com/title/tt0113568/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Animation from Ghost in the Shell (1995)")))));
}