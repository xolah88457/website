"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = void 0;
var _style = require("../../utils/style");
var _ListModule = _interopRequireDefault(require("./List.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const List = ({
  ordered,
  children,
  className,
  ...rest
}) => {
  const Element = ordered ? 'ol' : 'ul';
  return /*#__PURE__*/React.createElement(Element, _extends({
    className: (0, _style.classes)(_ListModule.default.list, className)
  }, rest), children);
};
exports.List = List;
const ListItem = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement("li", _extends({
    className: _ListModule.default.item
  }, rest), children);
};
exports.ListItem = ListItem;