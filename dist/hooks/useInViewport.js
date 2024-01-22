"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInViewport = useInViewport;
var _react = require("react");
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
  const [intersect, setIntersect] = (0, _react.useState)(false);
  const [isUnobserved, setIsUnobserved] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (!elementRef?.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      const {
        isIntersecting,
        target
      } = entry;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);
  return intersect;
}