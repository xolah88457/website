"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollToHash = useScrollToHash;
var _framerMotion = require("framer-motion");
var _router = require("next/router");
var _react = require("react");
function useScrollToHash() {
  const scrollTimeout = (0, _react.useRef)();
  const {
    asPath,
    push
  } = (0, _router.useRouter)();
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  const scrollToHash = (0, _react.useCallback)((hash, onDone) => {
    const id = hash.replace(/^#/, '');
    if (!id) return; // Exit if no id is provided

    const route = asPath.split('#')[0];
    const newPath = `${route}#${id}`;
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    } else {
      console.warn(`Element with id ${id} not found.`);
      return;
    }
    const handleScroll = () => {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        window.removeEventListener('scroll', handleScroll);
        if (window.location.pathname === route) {
          onDone?.();
          push(newPath, undefined, {
            scroll: false
          });
        }
      }, 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [push, reduceMotion, asPath]);

  // Cleanup on unmount
  (0, _react.useEffect)(() => {
    return () => {
      clearTimeout(scrollTimeout.current);
    };
  }, []);
  return scrollToHash;
}