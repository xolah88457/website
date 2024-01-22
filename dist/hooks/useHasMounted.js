"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHasMounted = useHasMounted;
var _react = require("react");
function useHasMounted() {
  const [mounted, setMounted] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setMounted(true);
  }, []);
  return mounted;
}