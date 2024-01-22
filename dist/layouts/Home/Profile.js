"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Profile = void 0;
var _profileLarge = _interopRequireDefault(require("../../assets/profile-large.jpg"));
var _profilePlaceholder = _interopRequireDefault(require("../../assets/profile-placeholder.jpg"));
var _profile = _interopRequireDefault(require("../../assets/profile.jpg"));
var _Button = require("../../components/Button");
var _DecoderText = require("../../components/DecoderText");
var _Divider = require("../../components/Divider");
var _Heading = require("../../components/Heading");
var _Image = require("../../components/Image");
var _Link = require("../../components/Link");
var _Section = require("../../components/Section");
var _Text = require("../../components/Text");
var _Transition = require("../../components/Transition");
var _react = require("react");
var _style = require("../../utils/style");
var _ProfileModule = _interopRequireDefault(require("./Profile.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ProfileText = ({
  visible,
  titleId
}) => /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_Heading.Heading, {
  className: _ProfileModule.default.title,
  "data-visible": visible,
  level: 3,
  id: titleId
}, /*#__PURE__*/React.createElement(_DecoderText.DecoderText, {
  text: "Welcome!",
  start: visible,
  delay: 500
})), /*#__PURE__*/React.createElement(_Text.Text, {
  className: _ProfileModule.default.description,
  "data-visible": visible,
  size: "l",
  as: "p"
}, "I am Ryan Nasiri, a student at York University pursuing an Honours degree in Computer Science/Information Technology. I am actively seeking internship opportunities for the summer of 2024."), /*#__PURE__*/React.createElement(_Text.Text, {
  className: _ProfileModule.default.description,
  "data-visible": visible,
  size: "l",
  as: "p"
}, "As a full-stack developer, I offer a comprehensive skill set in both front-end and back-end development, ensuring the creation of dynamic, responsive websites and applications. My expertise includes designing user interfaces, optimizing user experience, and integrating APIs, alongside proficiency in server-side programming, database management, and system architecture. I excel in developing end-to-end solutions, managing complex projects, and collaborating across departments to meet diverse needs. My commitment to quality assurance, scalability, and performance optimization ensures the delivery of robust, efficient software products.", ' ', /*#__PURE__*/React.createElement(_Link.Link, {
  href: "https://www.linkedin.com/in/ryan-nasiri-1a1323261/details/experience/"
}, "My experience"), " (Web, Software, Game development, and more importantly teaching.)"));
const Profile = ({
  id,
  visible,
  sectionRef
}) => {
  const [focused, setFocused] = (0, _react.useState)(false);
  const titleId = `${id}-title`;
  return /*#__PURE__*/React.createElement(_Section.Section, {
    className: _ProfileModule.default.profile,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    as: "section",
    id: id,
    ref: sectionRef,
    "aria-labelledby": titleId,
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(_Transition.Transition, {
    in: visible || focused,
    timeout: 0
  }, visible => /*#__PURE__*/React.createElement("div", {
    className: _ProfileModule.default.content
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProfileModule.default.column
  }, /*#__PURE__*/React.createElement(ProfileText, {
    visible: visible,
    titleId: titleId
  }), /*#__PURE__*/React.createElement(_Button.Button, {
    secondary: true,
    className: _ProfileModule.default.button,
    "data-visible": visible,
    href: "/projects",
    icon: "send"
  }, "Check out my Projects!")), /*#__PURE__*/React.createElement("div", {
    className: _ProfileModule.default.column
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProfileModule.default.tag,
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement(_Divider.Divider, {
    notchWidth: "64px",
    notchHeight: "8px",
    collapsed: !visible,
    collapseDelay: 1000
  }), /*#__PURE__*/React.createElement("div", {
    className: _ProfileModule.default.tagText,
    "data-visible": visible
  }, "About Me")), /*#__PURE__*/React.createElement("div", {
    className: _ProfileModule.default.image
  }, /*#__PURE__*/React.createElement(_Image.Image, {
    reveal: true,
    delay: 100,
    placeholder: _profilePlaceholder.default,
    srcSet: [_profile.default, _profileLarge.default],
    sizes: `(max-width: ${_style.media.mobile}px) 100vw, 480px`
  }), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "135",
    height: "765",
    viewBox: "0 0 135 765",
    className: _ProfileModule.default.svg,
    "data-visible": visible
  }))))));
};
exports.Profile = Profile;