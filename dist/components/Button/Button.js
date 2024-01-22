"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _Icon = require("../../components/Icon");
var _Loader = require("../../components/Loader");
var _Transition = require("../../components/Transition");
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
var _style = require("../../utils/style");
var _ButtonModule = _interopRequireDefault(require("./Button.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function isExternalLink(href) {
  return href?.includes('://');
}
const Button = exports.Button = /*#__PURE__*/(0, _react.forwardRef)(({
  href,
  ...rest
}, ref) => {
  if (isExternalLink(href) || !href) {
    return /*#__PURE__*/React.createElement(ButtonContent, _extends({
      href: href,
      ref: ref
    }, rest));
  }
  return /*#__PURE__*/React.createElement(_link.default, {
    passHref: true,
    href: href,
    scroll: false
  }, /*#__PURE__*/React.createElement(ButtonContent, _extends({
    href: href,
    ref: ref
  }, rest)));
});
const ButtonContent = /*#__PURE__*/(0, _react.forwardRef)(({
  className,
  as,
  secondary,
  loading,
  loadingText = 'loading',
  icon,
  iconEnd,
  iconHoverShift,
  iconOnly,
  children,
  rel,
  target,
  href,
  disabled,
  ...rest
}, ref) => {
  const isExternal = isExternalLink(href);
  const defaultComponent = href ? 'a' : 'button';
  const Component = as || defaultComponent;
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: (0, _style.classes)(_ButtonModule.default.button, className),
    "data-loading": loading,
    "data-icon-only": iconOnly,
    "data-secondary": secondary,
    "data-icon": icon,
    href: href,
    rel: rel || isExternal ? 'noopener noreferrer' : undefined,
    target: target || isExternal ? '_blank' : undefined,
    disabled: disabled,
    ref: ref
  }, rest), !!icon && /*#__PURE__*/React.createElement(_Icon.Icon, {
    className: _ButtonModule.default.icon,
    "data-start": !iconOnly,
    "data-shift": iconHoverShift,
    icon: icon
  }), !!children && /*#__PURE__*/React.createElement("span", {
    className: _ButtonModule.default.text
  }, children), !!iconEnd && /*#__PURE__*/React.createElement(_Icon.Icon, {
    className: _ButtonModule.default.icon,
    "data-end": !iconOnly,
    "data-shift": iconHoverShift,
    icon: iconEnd
  }), /*#__PURE__*/React.createElement(_Transition.Transition, {
    unmount: true,
    in: loading
  }, visible => /*#__PURE__*/React.createElement(_Loader.Loader, {
    className: _ButtonModule.default.loader,
    size: 32,
    text: loadingText,
    "data-visible": visible
  })));
});