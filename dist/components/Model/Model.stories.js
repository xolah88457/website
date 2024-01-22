"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Phone = exports.Laptop = void 0;
var _gamestackListLarge = _interopRequireDefault(require("assets/gamestack-list-large.jpg"));
var _gamestackListPlaceholder = _interopRequireDefault(require("assets/gamestack-list-placeholder.jpg"));
var _gamestackList = _interopRequireDefault(require("assets/gamestack-list.jpg"));
var _gamestackLoginLarge = _interopRequireDefault(require("assets/gamestack-login-large.jpg"));
var _gamestackLoginPlaceholder = _interopRequireDefault(require("assets/gamestack-login-placeholder.jpg"));
var _gamestackLogin = _interopRequireDefault(require("assets/gamestack-login.jpg"));
var _sprLessonBuilderDarkLarge = _interopRequireDefault(require("assets/spr-lesson-builder-dark-large.jpg"));
var _sprLessonBuilderDarkPlaceholder = _interopRequireDefault(require("assets/spr-lesson-builder-dark-placeholder.jpg"));
var _Model = require("components/Model/Model");
var _StoryContainer = require("../../../.storybook/StoryContainer");
var _deviceModels = require("./deviceModels");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  title: 'Model'
};
const modelStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
const Phone = () => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, {
  padding: 0
}, /*#__PURE__*/React.createElement(_Model.Model, {
  style: modelStyle,
  cameraPosition: {
    x: 0,
    y: 0,
    z: 11.5
  },
  alt: "Phone models",
  models: [{
    ..._deviceModels.deviceModels.phone,
    position: {
      x: -0.6,
      y: 0.8,
      z: 0.1
    },
    texture: {
      srcSet: [_gamestackLogin.default, _gamestackLoginLarge.default],
      placeholder: _gamestackLoginPlaceholder.default
    }
  }, {
    ..._deviceModels.deviceModels.phone,
    position: {
      x: 0.6,
      y: -0.8,
      z: 0.4
    },
    texture: {
      srcSet: [_gamestackList.default, _gamestackListLarge.default],
      placeholder: _gamestackListPlaceholder.default
    }
  }]
}));
exports.Phone = Phone;
const Laptop = () => /*#__PURE__*/React.createElement(_StoryContainer.StoryContainer, {
  padding: 0
}, /*#__PURE__*/React.createElement(_Model.Model, {
  style: modelStyle,
  cameraPosition: {
    x: 0,
    y: 0,
    z: 8
  },
  alt: "Laptop model",
  models: [{
    ..._deviceModels.deviceModels.laptop,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    texture: {
      srcSet: [_sprLessonBuilderDarkLarge.default, _sprLessonBuilderDarkLarge.default],
      placeholder: _sprLessonBuilderDarkPlaceholder.default
    }
  }]
}));
exports.Laptop = Laptop;