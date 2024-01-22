"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;
var _Text = require("../../components/Text");
var _VisuallyHidden = require("../../components/VisuallyHidden");
var _framerMotion = require("framer-motion");
var _hooks = require("../../hooks");
var _reactDom = require("react-dom");
var _style = require("../../utils/style");
var _LoaderModule = _interopRequireDefault(require("./Loader.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Loader = ({
  className,
  style,
  size = 32,
  text = 'Loading...',
  ...rest
}) => {
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  const hasMounted = (0, _hooks.useHasMounted)();
  const renderScreenReaderTextPortal = () => {
    if (!hasMounted) return;
    return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(_VisuallyHidden.VisuallyHidden, {
      className: "loader-announcement",
      "aria-live": "assertive"
    }, text), document.getElementById('portal-root'));
  };
  if (reduceMotion) {
    return /*#__PURE__*/React.createElement(_Text.Text, _extends({
      className: (0, _style.classes)(_LoaderModule.default.text, className),
      weight: "medium"
    }, rest), text, renderScreenReaderTextPortal());
  }
  const gapSize = Math.round(size / 3 * 0.2);
  const spanSize = Math.round(size / 3 - gapSize * 2 - 1);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: (0, _style.classes)(_LoaderModule.default.loader, className),
    style: (0, _style.cssProps)({
      size,
      spanSize,
      gapSize
    }, style)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: _LoaderModule.default.content
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoaderModule.default.span
  }), /*#__PURE__*/React.createElement("div", {
    className: _LoaderModule.default.span
  }), /*#__PURE__*/React.createElement("div", {
    className: _LoaderModule.default.span
  })), renderScreenReaderTextPortal());
};
exports.Loader = Loader;