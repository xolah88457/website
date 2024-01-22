"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInterval = useInterval;
var _react = require("react");
function useInterval(callback, delay, reset) {
  const savedCallback = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    savedCallback.current = callback;
  });
  (0, _react.useEffect)(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, reset]);
}