"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppContext = void 0;
require("../layouts/App/reset.css");
require("../layouts/App/global.css");
var _Navbar = require("../components/Navbar");
var _ThemeProvider = require("../components/ThemeProvider");
var _theme = require("../components/ThemeProvider/theme");
var _VisuallyHidden = require("../components/VisuallyHidden");
var _framerMotion = require("framer-motion");
var _hooks = require("hooks");
var _AppModule = _interopRequireDefault(require("../layouts/App/App.module.css"));
var _reducer = require("../layouts/App/reducer");
var _head = _interopRequireDefault(require("next/head"));
var _router = require("next/router");
var _react = require("react");
var _style = require("../utils/style");
var _ScrollRestore = require("../layouts/App/ScrollRestore");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AppContext = exports.AppContext = /*#__PURE__*/(0, _react.createContext)({});
const repoPrompt = ``;
const App = ({
  Component,
  pageProps
}) => {
  const [storedTheme] = (0, _hooks.useLocalStorage)('theme', 'dark');
  const [state, dispatch] = (0, _react.useReducer)(_reducer.reducer, _reducer.initialState);
  const {
    route,
    asPath
  } = (0, _router.useRouter)();
  const canonicalRoute = route === '/' ? '' : `${asPath}`;
  (0, _hooks.useFoucFix)();
  (0, _react.useEffect)(() => {
    console.info(`${repoPrompt}\n\n`);
  }, []);
  (0, _react.useEffect)(() => {
    dispatch({
      type: 'setTheme',
      value: storedTheme || 'dark'
    });
  }, [storedTheme]);
  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: {
      ...state,
      dispatch
    }
  }, /*#__PURE__*/React.createElement(_ThemeProvider.ThemeProvider, {
    themeId: state.theme
  }, /*#__PURE__*/React.createElement(_framerMotion.LazyMotion, {
    features: _framerMotion.domAnimation
  }, /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_head.default, null, /*#__PURE__*/React.createElement("link", {
    rel: "canonical",
    href: `${process.env.NEXT_PUBLIC_WEBSITE_URL}${canonicalRoute}`
  })), /*#__PURE__*/React.createElement(_VisuallyHidden.VisuallyHidden, {
    showOnFocus: true,
    as: "a",
    className: _AppModule.default.skip,
    href: "#MainContent"
  }, "Skip to main content"), /*#__PURE__*/React.createElement(_Navbar.Navbar, null), /*#__PURE__*/React.createElement("main", {
    className: _AppModule.default.app,
    tabIndex: -1,
    id: "MainContent"
  }, /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, {
    exitBeforeEnter: true
  }, /*#__PURE__*/React.createElement(_framerMotion.m.div, {
    key: route,
    className: _AppModule.default.page,
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      type: 'tween',
      ease: 'linear',
      duration: (0, _style.msToNum)(_theme.tokens.base.durationS) / 1000,
      delay: 0.1
    }
  }, /*#__PURE__*/React.createElement(_ScrollRestore.ScrollRestore, null), /*#__PURE__*/React.createElement(Component, pageProps))))))));
};
var _default = exports.default = App;