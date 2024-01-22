"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Secondary = exports.Primary = exports.Loader = exports.IconOnly = void 0;
var _Button = require("components/Button");
var _react = require("react");
var _addonActions = require("@storybook/addon-actions");
var _StoryContainer = require("../../../.storybook/StoryContainer");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = exports.default = {
  title: 'Button'
};
const LoadableButton = props => {
  const [loading, setLoading] = (0, _react.useState)(false);
  return /*#__PURE__*/React.createElement(_Button.Button, _extends({
    loading: loading,
    onClick: () => setLoading(!loading)
  }, props));
};
const Primary = () => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, null, /*#__PURE__*/React.createElement(_Button.Button, {
  onClick: (0, _addonActions.action)('clicked')
}, "Text only"), /*#__PURE__*/React.createElement(_Button.Button, {
  icon: "send",
  onClick: (0, _addonActions.action)('clicked')
}, "Icon left"), /*#__PURE__*/React.createElement(_Button.Button, {
  iconEnd: "arrowRight",
  onClick: (0, _addonActions.action)('clicked')
}, "Icon right"));
exports.Primary = Primary;
const Secondary = () => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, null, /*#__PURE__*/React.createElement(_Button.Button, {
  secondary: true,
  onClick: (0, _addonActions.action)('clicked')
}, "Text only"), /*#__PURE__*/React.createElement(_Button.Button, {
  secondary: true,
  icon: "arrowRight",
  onClick: (0, _addonActions.action)('clicked')
}, "Icon left"), /*#__PURE__*/React.createElement(_Button.Button, {
  secondary: true,
  iconEnd: "arrowRight",
  onClick: (0, _addonActions.action)('clicked')
}, "Icon right"));
exports.Secondary = Secondary;
const IconOnly = () => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, {
  gutter: 20
}, /*#__PURE__*/React.createElement(_Button.Button, {
  iconOnly: true,
  "aria-label": "Send",
  icon: "send",
  onClick: (0, _addonActions.action)('clicked')
}), /*#__PURE__*/React.createElement(_Button.Button, {
  iconOnly: true,
  "aria-label": "Figma",
  icon: "figma",
  onClick: (0, _addonActions.action)('clicked')
}), /*#__PURE__*/React.createElement(_Button.Button, {
  iconOnly: true,
  "aria-label": "Close",
  icon: "close",
  onClick: (0, _addonActions.action)('clicked')
}));
exports.IconOnly = IconOnly;
const Loader = () => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, null, /*#__PURE__*/React.createElement(LoadableButton, null, "Click to load"), /*#__PURE__*/React.createElement(LoadableButton, {
  icon: "send"
}, "Click to load"));
exports.Loader = Loader;