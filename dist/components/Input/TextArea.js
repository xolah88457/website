"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;
var _react = require("react");
var _style = require("../../utils/style");
var _TextAreaModule = _interopRequireDefault(require("./TextArea.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TextArea = ({
  className,
  resize = 'none',
  value,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = (0, _react.useState)(minRows);
  const [textareaDimensions, setTextareaDimensions] = (0, _react.useState)();
  const textareaRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({
      lineHeight,
      paddingHeight
    });
  }, []);
  const handleChange = event => {
    onChange(event);
    const {
      lineHeight,
      paddingHeight
    } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: (0, _style.classes)(_TextAreaModule.default.textarea, className),
    ref: textareaRef,
    onChange: handleChange,
    style: (0, _style.cssProps)({
      resize
    }),
    rows: rows,
    value: value
  }, rest));
};
exports.TextArea = TextArea;