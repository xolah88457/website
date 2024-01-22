"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.ThemeContext = void 0;
exports.createMediaTokenProperties = createMediaTokenProperties;
exports.createThemeProperties = createThemeProperties;
exports.createThemeStyleObject = createThemeStyleObject;
exports.fontStyles = void 0;
exports.squish = squish;
exports.tokenStyles = void 0;
var _gothamBoldItalic = _interopRequireDefault(require("../../assets/fonts/gotham-bold-italic.woff2"));
var _gothamBold = _interopRequireDefault(require("../../assets/fonts/gotham-bold.woff2"));
var _gothamBookItalic = _interopRequireDefault(require("../../assets/fonts/gotham-book-italic.woff2"));
var _gothamBook = _interopRequireDefault(require("../../assets/fonts/gotham-book.woff2"));
var _gothamMediumItalic = _interopRequireDefault(require("../../assets/fonts/gotham-medium-italic.woff2"));
var _gothamMedium = _interopRequireDefault(require("../../assets/fonts/gotham-medium.woff2"));
var _ipaGothic = _interopRequireDefault(require("../../assets/fonts/ipa-gothic.woff2"));
var _hooks = require("hooks");
var _head = _interopRequireDefault(require("next/head"));
var _react = require("react");
var _style = require("../../utils/style");
var _theme = require("./theme");
var _useTheme = require("./useTheme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ThemeContext = exports.ThemeContext = /*#__PURE__*/(0, _react.createContext)({});
const ThemeProvider = ({
  themeId = 'dark',
  theme: themeOverrides,
  children,
  className,
  as: Component = 'div',
  ...rest
}) => {
  const currentTheme = {
    ..._theme.theme[themeId],
    ...themeOverrides
  };
  const parentTheme = (0, _useTheme.useTheme)();
  const isRootProvider = !parentTheme.themeId;
  const hasMounted = (0, _hooks.useHasMounted)();

  // Save root theme id to localstorage and apply class to body
  (0, _react.useEffect)(() => {
    if (isRootProvider && hasMounted) {
      window.localStorage.setItem('theme', JSON.stringify(themeId));
      document.body.dataset.theme = themeId;
    }
  }, [themeId, isRootProvider, hasMounted]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: currentTheme
  }, isRootProvider && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_head.default, null, /*#__PURE__*/React.createElement("meta", {
    name: "theme-color",
    content: `rgb(${currentTheme.rgbBackground})`
  })), children), !isRootProvider && /*#__PURE__*/React.createElement(Component, _extends({
    className: (0, _style.classes)('theme-provider', className),
    "data-theme": themeId
  }, rest), children));
};

/**
 * Squeeze out spaces and newlines
 */
exports.ThemeProvider = ThemeProvider;
function squish(styles) {
  return styles.replace(/\s\s+/g, ' ');
}

/**
 * Transform theme token objects into CSS custom property strings
 */
function createThemeProperties(theme) {
  return squish(Object.keys(theme).filter(key => key !== 'themeId').map(key => `--${key}: ${theme[key]};`).join('\n\n'));
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
function createThemeStyleObject(theme) {
  let style = {};
  for (const key of Object.keys(theme)) {
    if (key !== 'themeId') {
      style[`--${key}`] = theme[key];
    }
  }
  return style;
}

/**
 * Generate media queries for tokens
 */
function createMediaTokenProperties() {
  return squish(Object.keys(_style.media).map(key => {
    return `
        @media (max-width: ${_style.media[key]}px) {
          :root {
            ${createThemeProperties(_theme.tokens[key])}
          }
        }
      `;
  }).join('\n'));
}
const tokenStyles = exports.tokenStyles = squish(`
  :root {
    ${createThemeProperties(_theme.tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(_theme.theme.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(_theme.theme.light)}
  }
`);
const fontStyles = exports.fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${_gothamBook.default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${_gothamBookItalic.default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${_gothamMedium.default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${_gothamMediumItalic.default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${_gothamBold.default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${_gothamBoldItalic.default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${_ipaGothic.default}) format('woff2');
    font-display: block;
    font-style: normal;
  }
`);