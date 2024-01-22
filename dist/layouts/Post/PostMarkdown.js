"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMarkdown = void 0;
var _Code = require("../../components/Code");
var _Heading = require("../../components/Heading");
var _Icon = require("../../components/Icon");
var _Link = require("../../components/Link");
var _List = require("../../components/List");
var _Text = require("../../components/Text");
var _react = require("react");
var _PostMarkdownModule = _interopRequireDefault(require("./PostMarkdown.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PostHeadingLink = ({
  id
}) => {
  return /*#__PURE__*/React.createElement("a", {
    className: _PostMarkdownModule.default.headingLink,
    href: `#${id}`,
    "aria-label": "Link to heading"
  }, /*#__PURE__*/React.createElement(_Icon.Icon, {
    icon: "link"
  }));
};
const PostH1 = ({
  children,
  id,
  ...rest
}) => /*#__PURE__*/React.createElement(_Heading.Heading, _extends({
  className: _PostMarkdownModule.default.heading,
  id: id,
  level: 2,
  as: "h1"
}, rest), /*#__PURE__*/React.createElement(PostHeadingLink, {
  id: id
}), children);
const PostH2 = ({
  children,
  id,
  ...rest
}) => /*#__PURE__*/React.createElement(_Heading.Heading, _extends({
  className: _PostMarkdownModule.default.heading,
  id: id,
  level: 3,
  as: "h2"
}, rest), /*#__PURE__*/React.createElement(PostHeadingLink, {
  id: id
}), children);
const PostH3 = ({
  children,
  id,
  ...rest
}) => /*#__PURE__*/React.createElement(_Heading.Heading, _extends({
  className: _PostMarkdownModule.default.heading,
  id: id,
  level: 4,
  as: "h3"
}, rest), /*#__PURE__*/React.createElement(PostHeadingLink, {
  id: id
}), children);
const PostH4 = ({
  children,
  id,
  ...rest
}) => /*#__PURE__*/React.createElement(_Heading.Heading, _extends({
  className: _PostMarkdownModule.default.heading,
  id: id,
  level: 5,
  as: "h4"
}, rest), /*#__PURE__*/React.createElement(PostHeadingLink, {
  id: id
}), children);
const PostParagraph = ({
  children,
  ...rest
}) => {
  const hasSingleChild = _react.Children.count(children) === 1;
  const firstChild = _react.Children.toArray(children)[0];

  // Prevent `img` being wrapped in `p`
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }
  return /*#__PURE__*/React.createElement(_Text.Text, _extends({
    className: _PostMarkdownModule.default.paragraph,
    size: "l",
    as: "p"
  }, rest), children);
};
const PostLink = ({
  ...props
}) => /*#__PURE__*/React.createElement(_Link.Link, props);
const PostUl = props => {
  return /*#__PURE__*/React.createElement(_List.List, _extends({
    className: _PostMarkdownModule.default.list
  }, props));
};
const PostOl = props => {
  return /*#__PURE__*/React.createElement(_List.List, _extends({
    className: _PostMarkdownModule.default.list,
    ordered: true
  }, props));
};
const PostLi = ({
  children,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(_List.ListItem, props, children);
};
const PostCode = ({
  children,
  ...rest
}) => /*#__PURE__*/React.createElement("code", _extends({
  className: _PostMarkdownModule.default.code
}, rest), children);
const PostPre = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: _PostMarkdownModule.default.pre
  }, /*#__PURE__*/React.createElement(_Code.Code, props));
};
const PostBlockquote = props => {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    className: _PostMarkdownModule.default.blockquote
  }, props));
};
const PostHr = props => {
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: _PostMarkdownModule.default.hr
  }, props));
};
const PostStrong = props => {
  return /*#__PURE__*/React.createElement("strong", _extends({
    className: _PostMarkdownModule.default.strong
  }, props));
};
const PostImage = ({
  src,
  alt,
  width,
  height,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement("img", _extends({
    className: _PostMarkdownModule.default.image,
    src: src,
    decoding: "async",
    loading: "lazy",
    alt: alt,
    width: width,
    height: height
  }, rest));
};
const Embed = ({
  src
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: _PostMarkdownModule.default.embed
  }, /*#__PURE__*/React.createElement("iframe", {
    src: src,
    loading: "lazy"
  }));
};
const postMarkdown = exports.postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed
};