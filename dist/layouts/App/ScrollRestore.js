"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollRestore = void 0;
var _framerMotion = require("framer-motion");
var _router = require("next/router");
var _react = require("react");
// Custom scroll restoration to avoid jank during page transitions
const ScrollRestore = () => {
  const isPresent = (0, _framerMotion.useIsPresent)();
  const {
    asPath,
    beforePopState
  } = (0, _router.useRouter)();
  (0, _react.useEffect)(() => {
    // Opt out of native scroll restoration
    window.history.scrollRestoration = 'manual';
  }, []);

  // Prevent insta-scroll on browser back button
  (0, _react.useEffect)(() => {
    beforePopState(state => {
      state.options.scroll = false;
      return true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle scroll restoration
  (0, _react.useEffect)(() => {
    if (!isPresent) return;
    const hash = asPath.split('#')[1];
    const targetElement = document.getElementById(hash);
    if (hash && targetElement) {
      // If there's a hash in the url and a matching element
      // id, scroll to and focus it
      window.scrollTo(0, targetElement.offsetTop);
      targetElement.focus({
        preventScroll: true
      });
    } else {
      window.scrollTo(0, 0);
      document.body.focus({
        preventScroll: true
      });
    }
  }, [asPath, isPresent]);
};
exports.ScrollRestore = ScrollRestore;