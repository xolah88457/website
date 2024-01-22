"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSize = useWindowSize;
var _react = require("react");
function useWindowSize() {
  const dimensions = (0, _react.useRef)(() => ({
    w: 1280,
    h: 800
  }));
  const createRuler = (0, _react.useCallback)(() => {
    let ruler = document.createElement('div');
    ruler.style.position = 'fixed';
    ruler.style.height = '100vh';
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);

    // Set cache conscientious of device orientation
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;

    // Clean up after ourselves
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);

  // Get the actual height on iOS Safari
  const getHeight = (0, _react.useCallback)(() => {
    const isIOS = navigator?.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = (0, _react.useCallback)(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = (0, _react.useState)(dimensions.current);
  (0, _react.useEffect)(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize]);
  return windowSize;
}