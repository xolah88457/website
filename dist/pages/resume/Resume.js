"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Resume = void 0;
var _barcode = _interopRequireDefault(require("../../assets/barcode.svg"));
var _Button = require("../../components/Button");
var _DecoderText = require("../../components/DecoderText");
var _Divider = require("../../components/Divider");
var _Footer = require("../../components/Footer");
var _Heading = require("../../components/Heading");
var _Image = require("../../components/Image");
var _Section = require("../../components/Section");
var _Text = require("../../components/Text");
var _framerMotion = require("framer-motion");
var _hooks = require("hooks");
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
var _date = require("../../utils/date");
var _style = require("../../utils/style");
var _ResumeModule = _interopRequireDefault(require("./Resume.module.css"));
var _ResumeContent = _interopRequireDefault(require(".//ResumeContent.mdx"));
var _WordRotate = require("../../components/WordRotate");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ArticlesPost = ({
  slug,
  title,
  abstract,
  date,
  banner,
  timecode,
  index
}) => {
  const [hovered, setHovered] = (0, _react.useState)(false);
  const [dateTime, setDateTime] = (0, _react.useState)(null);
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  (0, _react.useEffect)(() => {
    setDateTime((0, _date.formatDate)(date));
  }, [date, dateTime]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return /*#__PURE__*/React.createElement("article", {
    className: _ResumeModule.default.post,
    style: index !== undefined ? (0, _style.cssProps)({
      delay: index * 100 + 200
    }) : undefined
  }, banner && /*#__PURE__*/React.createElement("div", {
    className: _ResumeModule.default.postImage
  }), /*#__PURE__*/React.createElement(_link.default, {
    href: `/resume/${slug}`,
    scroll: false
  }));
};
const Resume = ({
  posts
}) => {
  const {
    width
  } = (0, _hooks.useWindowSize)();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsList = posts.map((post, index) => /*#__PURE__*/React.createElement(ArticlesPost, _extends({
    key: post.slug
  }, post, {
    index: index
  })));
  return /*#__PURE__*/React.createElement("article", {
    className: _ResumeModule.default.articles
  }, /*#__PURE__*/React.createElement(_Section.Section, {
    className: _ResumeModule.default.content
  }, /*#__PURE__*/React.createElement("header", {
    className: _ResumeModule.default.header
  }, /*#__PURE__*/React.createElement(_Heading.Heading, {
    className: _ResumeModule.default.heading,
    level: 5,
    as: "h1"
  }, /*#__PURE__*/React.createElement(_WordRotate.WordRotate, {
    TARGET_TEXT: "My Resume"
  }))), /*#__PURE__*/React.createElement("div", {
    className: _ResumeModule.default.grid
  }, postsList), /*#__PURE__*/React.createElement(_ResumeContent.default, null)), /*#__PURE__*/React.createElement(_Footer.Footer, null));
};
exports.Resume = Resume;