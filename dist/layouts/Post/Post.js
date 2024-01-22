"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;
var _arrowDown = _interopRequireDefault(require("../../assets/arrow-down.svg"));
var _Divider = require("../../components/Divider");
var _Footer = require("../../components/Footer");
var _Heading = require("../../components/Heading");
var _Image = require("../../components/Image");
var _Meta = require("../../components/Meta");
var _Section = require("../../components/Section");
var _Text = require("../../components/Text");
var _theme = require("../../components/ThemeProvider/theme");
var _Transition = require("../../components/Transition");
var _hooks = require("../../hooks");
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
var _clamp = require("../../utils/clamp");
var _date = require("../../utils/date");
var _style = require("../../utils/style");
var _PostModule = _interopRequireDefault(require("./Post.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Post = ({
  children,
  title,
  date,
  abstract,
  banner,
  timecode,
  ogImage
}) => {
  const scrollToHash = (0, _hooks.useScrollToHash)();
  const imageRef = (0, _react.useRef)();
  const [dateTime, setDateTime] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    setDateTime((0, _date.formatDate)(date));
  }, [date, dateTime]);
  (0, _hooks.useParallax)(0.004, value => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty('--blurOpacity', (0, _clamp.clamp)(value, 0, 1));
  });
  const handleScrollIndicatorClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /*#__PURE__*/React.createElement("article", {
    className: _PostModule.default.post
  }, /*#__PURE__*/React.createElement(_Meta.Meta, {
    title: title,
    prefix: "",
    description: abstract,
    ogImage: ogImage
  }), /*#__PURE__*/React.createElement(_Section.Section, null, banner && /*#__PURE__*/React.createElement("div", {
    className: _PostModule.default.banner,
    ref: imageRef
  }, /*#__PURE__*/React.createElement("div", {
    className: _PostModule.default.bannerImage
  }, /*#__PURE__*/React.createElement(_Image.Image, {
    role: "presentation",
    src: {
      src: banner
    },
    placeholder: {
      src: `${banner.split('.')[0]}-placeholder.jpg`
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: _PostModule.default.bannerImageBlur
  }, /*#__PURE__*/React.createElement(_Image.Image, {
    role: "presentation",
    src: {
      src: `${banner.split('.')[0]}-placeholder.jpg`
    },
    placeholder: {
      src: `${banner.split('.')[0]}-placeholder.jpg`
    },
    alt: ""
  }))), /*#__PURE__*/React.createElement("header", {
    className: _PostModule.default.header
  }, /*#__PURE__*/React.createElement("div", {
    className: _PostModule.default.headerText
  }, /*#__PURE__*/React.createElement(_Transition.Transition, {
    in: true,
    timeout: (0, _style.msToNum)(_theme.tokens.base.durationM)
  }, visible => /*#__PURE__*/React.createElement("div", {
    className: _PostModule.default.date
  }, /*#__PURE__*/React.createElement(_Divider.Divider, {
    notchWidth: "64px",
    notchHeight: "8px",
    collapsed: !visible
  }), /*#__PURE__*/React.createElement(_Text.Text, {
    className: _PostModule.default.dateText,
    "data-visible": visible
  }, dateTime))), /*#__PURE__*/React.createElement(_Heading.Heading, {
    level: 2,
    as: "h1",
    className: _PostModule.default.title,
    "aria-label": title
  }, title.split(' ').map((word, index) => /*#__PURE__*/React.createElement("span", {
    className: _PostModule.default.titleWordWrapper,
    key: `${word}-${index}`
  }, /*#__PURE__*/React.createElement("span", {
    className: _PostModule.default.titleWord,
    style: (0, _style.cssProps)({
      delay: (0, _style.numToMs)(index * 100 + 100)
    }),
    index: index
  }, word, index !== title.split(' ').length - 1 ? ' ' : '')))), /*#__PURE__*/React.createElement("div", {
    className: _PostModule.default.details
  }, /*#__PURE__*/React.createElement("div", {
    className: _PostModule.default.timecode
  }, timecode))))), /*#__PURE__*/React.createElement(_Section.Section, {
    className: _PostModule.default.wrapper,
    id: "postContent",
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(_Text.Text, {
    as: "div",
    size: "l",
    className: _PostModule.default.content
  }, children)), /*#__PURE__*/React.createElement(_Footer.Footer, null));
};
exports.Post = Post;