"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useParallax = useParallax;
var _framerMotion = require("framer-motion");
var _react = require("react");
function useParallax(multiplier, onChange) {
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  (0, _react.useEffect)(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const {
        innerHeight
      } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(-innerHeight, Math.min(innerHeight, offsetValue));
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}