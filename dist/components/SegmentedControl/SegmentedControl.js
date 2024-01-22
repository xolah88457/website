"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentedControlOption = exports.SegmentedControl = void 0;
var _VisuallyHidden = require("../../components/VisuallyHidden");
var _react = require("react");
var _style = require("utils/style");
var _SegmentedControlModule = _interopRequireDefault(require("./SegmentedControl.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SegmentedControlContext = /*#__PURE__*/(0, _react.createContext)({});
const SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label,
  ...props
}) => {
  const id = (0, _react.useId)();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = (0, _react.useRef)([]);
  const [indicator, setIndicator] = (0, _react.useState)();
  const handleKeyDown = event => {
    const {
      length
    } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };
  const registerOption = (0, _react.useCallback)(optionRef => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);
  const unRegisterOption = (0, _react.useCallback)(optionRef => {
    optionRefs.current = optionRefs.current.filter(ref => ref !== optionRef);
  }, []);
  (0, _react.useEffect)(() => {
    const currentOption = optionRefs.current[currentIndex]?.current;
    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption?.getBoundingClientRect();
      const left = currentOption?.offsetLeft;
      setIndicator({
        width: rect?.width,
        left
      });
    });
    resizeObserver.observe(currentOption);
    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);
  return /*#__PURE__*/React.createElement(SegmentedControlContext.Provider, {
    value: {
      optionRefs,
      currentIndex,
      onChange,
      registerOption,
      unRegisterOption
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: _SegmentedControlModule.default.container,
    role: "radiogroup",
    "aria-labelledby": labelId,
    onKeyDown: handleKeyDown
  }, props), /*#__PURE__*/React.createElement(_VisuallyHidden.VisuallyHidden, {
    as: "label",
    id: labelId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: _SegmentedControlModule.default.options
  }, !!indicator && /*#__PURE__*/React.createElement("div", {
    className: _SegmentedControlModule.default.indicator,
    "data-last": currentIndex === optionRefs.current.length - 1,
    style: (0, _style.cssProps)(indicator)
  }), children)));
};
exports.SegmentedControl = SegmentedControl;
const SegmentedControlOption = ({
  children,
  ...props
}) => {
  const {
    optionRefs,
    currentIndex,
    onChange,
    registerOption,
    unRegisterOption
  } = (0, _react.useContext)(SegmentedControlContext);
  const optionRef = (0, _react.useRef)();
  const index = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index;
  (0, _react.useEffect)(() => {
    registerOption(optionRef);
    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: _SegmentedControlModule.default.button,
    tabIndex: isSelected ? 0 : -1,
    role: "radio",
    "aria-checked": isSelected,
    onClick: () => onChange(index),
    ref: optionRef
  }, props), children);
};
exports.SegmentedControlOption = SegmentedControlOption;