"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeToggle = void 0;
var _Button = require("../../components/Button");
var _hooks = require("../../hooks");
var _react = require("react");
var _ThemeToggleModule = _interopRequireDefault(require("./ThemeToggle.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ThemeToggle = ({
  isMobile,
  ...rest
}) => {
  const {
    dispatch
  } = (0, _hooks.useAppContext)();
  const id = (0, _react.useId)();
  const maskId = `${id}theme-toggle-mask`;
  const handleClick = () => {
    dispatch({
      type: 'toggleTheme'
    });
  };
  return /*#__PURE__*/React.createElement(_Button.Button, _extends({
    iconOnly: true,
    className: _ThemeToggleModule.default.toggle,
    "data-mobile": isMobile,
    "aria-label": "Toggle theme",
    onClick: handleClick
  }, rest), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": true,
    className: _ThemeToggleModule.default.svg,
    width: "38",
    height: "38",
    viewBox: "0 0 38 38"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("mask", {
    id: maskId
  }, /*#__PURE__*/React.createElement("circle", {
    className: _ThemeToggleModule.default.circle,
    "data-mask": true,
    cx: "19",
    cy: "19",
    r: "13"
  }), /*#__PURE__*/React.createElement("circle", {
    className: _ThemeToggleModule.default.mask,
    cx: "25",
    cy: "14",
    r: "9"
  }))), /*#__PURE__*/React.createElement("path", {
    className: _ThemeToggleModule.default.path,
    d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    className: _ThemeToggleModule.default.circle,
    mask: `url(#${maskId})`,
    cx: "19",
    cy: "19",
    r: "12"
  })));
};
exports.ThemeToggle = ThemeToggle;