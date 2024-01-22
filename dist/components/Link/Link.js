"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkContent = exports.Link = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
var _style = require("../../utils/style");
var _LinkModule = _interopRequireDefault(require("./Link.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// File extensions that can be linked to
const VALID_EXT = ['txt', 'png', 'jpg'];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href?.split('.').pop());
  return href?.includes('://') || href?.[0] === '#' || isValidExtension;
}
const Link = exports.Link = /*#__PURE__*/(0, _react.forwardRef)(({
  href,
  ...rest
}, ref) => {
  if (isAnchor(href)) {
    return /*#__PURE__*/React.createElement(LinkContent, _extends({
      href: href,
      ref: ref
    }, rest));
  }
  return /*#__PURE__*/React.createElement(_link.default, {
    passHref: true,
    href: href,
    scroll: false
  }, /*#__PURE__*/React.createElement(LinkContent, _extends({
    ref: ref
  }, rest)));
});
const LinkContent = exports.LinkContent = /*#__PURE__*/(0, _react.forwardRef)(({
  rel,
  target,
  children,
  secondary,
  className,
  href,
  ...rest
}, ref) => {
  const isExternal = href?.includes('://');
  const relValue = rel || (isExternal ? 'noreferrer noopener' : undefined);
  const targetValue = target || (isExternal ? '_blank' : undefined);
  return /*#__PURE__*/React.createElement("a", _extends({
    className: (0, _style.classes)(_LinkModule.default.link, className),
    "data-secondary": secondary,
    rel: relValue,
    href: href,
    target: targetValue,
    ref: ref
  }, rest), children);
});