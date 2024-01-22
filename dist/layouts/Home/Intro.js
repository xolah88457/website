"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Intro = Intro;
var _arrowDown = _interopRequireDefault(require("../../assets/arrow-down.svg"));
var _DecoderText = require("../../components/DecoderText");
var _Heading = require("../../components/Heading");
var _Section = require("../../components/Section");
var _ThemeProvider = require("../../components/ThemeProvider");
var _theme = require("../../components/ThemeProvider/theme");
var _Transition = require("../../components/Transition");
var _VisuallyHidden = require("../../components/VisuallyHidden");
var _framerMotion = require("framer-motion");
var _hooks = require("../../hooks");
var _dynamic = _interopRequireDefault(require("next/dynamic"));
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
var _style = require("../../utils/style");
var _IntroModule = _interopRequireDefault(require("./Intro.module.css"));
var _WordRotate = require("../../components/WordRotate");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DisplacementSphere = (0, _dynamic.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require('layouts/Home/DisplacementSphere'))).then(mod => mod.DisplacementSphere));
function Intro({
  id,
  sectionRef,
  disciplines,
  scrollIndicatorHidden,
  ...rest
}) {
  const theme = (0, _ThemeProvider.useTheme)();
  const [disciplineIndex, setDisciplineIndex] = (0, _react.useState)(0);
  const prevTheme = (0, _hooks.usePrevious)(theme);
  const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(', and ');
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = (0, _hooks.useScrollToHash)();
  (0, _hooks.useInterval)(() => {
    const index = (disciplineIndex + 1) % disciplines.length;
    setDisciplineIndex(index);
  }, 5000, theme.themeId);
  (0, _react.useEffect)(() => {
    if (prevTheme && prevTheme.themeId !== theme.themeId) {
      setDisciplineIndex(0);
    }
  }, [theme.themeId, prevTheme]);
  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /*#__PURE__*/React.createElement(_Section.Section, _extends({
    className: _IntroModule.default.intro,
    as: "section",
    ref: sectionRef,
    id: id,
    "aria-labelledby": titleId,
    tabIndex: -1
  }, rest), /*#__PURE__*/React.createElement(_Transition.Transition, {
    in: true,
    key: theme.themeId,
    timeout: 3000
  }, (visible, status) => /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(DisplacementSphere, null), /*#__PURE__*/React.createElement("header", {
    className: _IntroModule.default.text
  }, /*#__PURE__*/React.createElement("h1", {
    className: _IntroModule.default.name,
    "data-visible": visible,
    id: titleId
  }, /*#__PURE__*/React.createElement(_WordRotate.WordRotate, {
    TARGET_TEXT: "Ryan Nasiri",
    delay: 300
  })), /*#__PURE__*/React.createElement(_Heading.Heading, {
    level: 0,
    as: "h2",
    className: _IntroModule.default.title
  }, /*#__PURE__*/React.createElement(_VisuallyHidden.VisuallyHidden, {
    className: _IntroModule.default.label
  }, ``), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    className: _IntroModule.default.row
  }, /*#__PURE__*/React.createElement("span", {
    className: _IntroModule.default.word,
    "data-status": status,
    style: (0, _style.cssProps)({
      delay: _theme.tokens.base.durationXS
    })
  }, /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, null, disciplines.map(item => /*#__PURE__*/React.createElement(_Transition.Transition, {
    unmount: true,
    in: item === currentDiscipline,
    timeout: {
      enter: 2000,
      exit: 4000
    },
    key: item
  }, (visible, status) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    className: _IntroModule.default.word,
    "data-plus": true,
    "data-status": status,
    style: (0, _style.cssProps)({
      delay: _theme.tokens.base.durationL
    })
  }, item))))), /*#__PURE__*/React.createElement("span", {
    className: _IntroModule.default.line,
    "data-status": status
  })), /*#__PURE__*/React.createElement("div", {
    className: _IntroModule.default.row,
    component: "span"
  }, "Developer"))), /*#__PURE__*/React.createElement(_link.default, {
    href: "/#project-1"
  }, /*#__PURE__*/React.createElement("a", {
    className: _IntroModule.default.scrollIndicator,
    "data-status": status,
    "data-hidden": scrollIndicatorHidden,
    onClick: handleScrollClick
  }, /*#__PURE__*/React.createElement(_VisuallyHidden.VisuallyHidden, null, "Scroll to projects"))), /*#__PURE__*/React.createElement(_link.default, {
    href: "/#project-1"
  }, /*#__PURE__*/React.createElement("a", {
    className: _IntroModule.default.mobileScrollIndicator,
    "data-status": status,
    "data-hidden": scrollIndicatorHidden,
    onClick: handleScrollClick
  }, /*#__PURE__*/React.createElement(_VisuallyHidden.VisuallyHidden, null, "Scroll to projects"), /*#__PURE__*/React.createElement(_arrowDown.default, {
    "aria-hidden": true
  }))))));
}