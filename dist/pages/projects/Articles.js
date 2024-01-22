"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Articles = void 0;
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
var _ArticlesModule = _interopRequireDefault(require("./Articles.module.css"));
var _WordRotate = require("components/WordRotate");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ArticlesPost = ({
  slug,
  title,
  abstract,
  date,
  featured,
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
    className: _ArticlesModule.default.post,
    "data-featured": !!featured,
    style: index !== undefined ? (0, _style.cssProps)({
      delay: index * 100 + 200
    }) : undefined
  }, featured && /*#__PURE__*/React.createElement(_Text.Text, {
    className: _ArticlesModule.default.postLabel,
    size: "s"
  }, "Featured"), featured && !!banner && /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.postImage
  }, /*#__PURE__*/React.createElement(_Image.Image, {
    noPauseButton: true,
    play: !reduceMotion ? hovered : undefined,
    src: {
      src: banner
    },
    placeholder: {
      src: `${banner.split('.')[0]}-favicon.jpg`
    },
    alt: "",
    role: "presentation"
  })), /*#__PURE__*/React.createElement(_link.default, {
    href: `/projects/${slug}`,
    scroll: false
  }, /*#__PURE__*/React.createElement("a", {
    className: _ArticlesModule.default.postLink,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.postDetails
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    className: _ArticlesModule.default.postDate
  }, /*#__PURE__*/React.createElement(_Divider.Divider, {
    notchWidth: "64px",
    notchHeight: "8px"
  }), dateTime), /*#__PURE__*/React.createElement(_Heading.Heading, {
    as: "h2",
    level: featured ? 2 : 4
  }, title), /*#__PURE__*/React.createElement(_Text.Text, {
    size: featured ? 'l' : 's',
    as: "p"
  }, abstract), /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.postFooter
  }, /*#__PURE__*/React.createElement(_Button.Button, {
    secondary: true,
    iconHoverShift: true,
    icon: "chevronRight",
    as: "div"
  }, "View Project"), /*#__PURE__*/React.createElement(_Text.Text, {
    className: _ArticlesModule.default.timecode,
    size: "s"
  }, timecode))))), featured);
};
const SkeletonPost = ({
  index
}) => {
  return /*#__PURE__*/React.createElement("article", {
    "aria-hidden": "true",
    className: (0, _style.classes)(_ArticlesModule.default.post, _ArticlesModule.default.skeleton),
    style: index !== undefined ? (0, _style.cssProps)({
      delay: index * 100 + 200
    }) : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.postLink
  }, /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.postDetails
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    className: _ArticlesModule.default.postDate
  }, /*#__PURE__*/React.createElement(_Divider.Divider, {
    notchWidth: "64px",
    notchHeight: "8px"
  }), "Coming soon..."), /*#__PURE__*/React.createElement(_Heading.Heading, {
    className: _ArticlesModule.default.skeletonBone,
    as: "h2",
    level: 4,
    style: {
      height: 24,
      width: '70%'
    }
  }), /*#__PURE__*/React.createElement(_Text.Text, {
    className: _ArticlesModule.default.skeletonBone,
    size: "s",
    as: "p",
    style: {
      height: 90,
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.postFooter
  }, /*#__PURE__*/React.createElement(_Button.Button, {
    secondary: true,
    iconHoverShift: true,
    icon: "chevronRight",
    as: "div"
  }, "Read more"), /*#__PURE__*/React.createElement(_Text.Text, {
    className: _ArticlesModule.default.timecode,
    size: "s"
  }, "00:00:00:00")))));
};
const Articles = ({
  posts,
  featured
}) => {
  const {
    width
  } = (0, _hooks.useWindowSize)();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsHeader = /*#__PURE__*/React.createElement("header", {
    className: _ArticlesModule.default.header
  }, /*#__PURE__*/React.createElement(_Heading.Heading, {
    className: _ArticlesModule.default.heading,
    level: 5,
    as: "h1"
  }, /*#__PURE__*/React.createElement(_WordRotate.WordRotate, {
    TARGET_TEXT: "Latest Projects"
  })), /*#__PURE__*/React.createElement(_barcode.default, null));
  const postList = /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.list
  }, !isSingleColumn && postsHeader, posts.map(({
    slug,
    ...post
  }, index) => /*#__PURE__*/React.createElement(ArticlesPost, _extends({
    key: slug,
    slug: slug,
    index: index
  }, post))), Array(1).fill().map((skeleton, index) => /*#__PURE__*/React.createElement(SkeletonPost, {
    key: index
  })));
  const featuredPost = /*#__PURE__*/React.createElement(ArticlesPost, featured);
  return /*#__PURE__*/React.createElement("article", {
    className: _ArticlesModule.default.articles
  }, /*#__PURE__*/React.createElement(_Section.Section, {
    className: _ArticlesModule.default.content
  }, !isSingleColumn && /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.grid
  }, postList, featuredPost), isSingleColumn && /*#__PURE__*/React.createElement("div", {
    className: _ArticlesModule.default.grid
  }, postsHeader, featuredPost, postList)), /*#__PURE__*/React.createElement(_Footer.Footer, null));
};
exports.Articles = Articles;