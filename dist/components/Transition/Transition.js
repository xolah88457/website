"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = void 0;
var _framerMotion = require("framer-motion");
var _react = require("react");
/**
 * A Framer Motion AnimatePresence implementation of `react-transition-group`
 * to be used for vanilla css transitions
 */
const Transition = ({
  children,
  timeout = 0,
  onEnter,
  onEntered,
  onExit,
  onExited,
  in: show,
  unmount
}) => {
  const enterTimeout = (0, _react.useRef)();
  const exitTimeout = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, null, (show || !unmount) && /*#__PURE__*/React.createElement(TransitionContent, {
    timeout: timeout,
    enterTimeout: enterTimeout,
    exitTimeout: exitTimeout,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    show: show
  }, children));
};
exports.Transition = Transition;
const TransitionContent = ({
  children,
  timeout,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  show
}) => {
  const [status, setStatus] = (0, _react.useState)('exited');
  const [isPresent, safeToRemove] = (0, _framerMotion.usePresence)();
  const [hasEntered, setHasEntered] = (0, _react.useState)(false);
  const splitTimeout = typeof timeout === 'object';
  (0, _react.useEffect)(() => {
    if (hasEntered || !show) return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus('entering');
    onEnter?.();
    enterTimeout.current = setTimeout(() => {
      setStatus('entered');
      onEntered?.();
    }, actualTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onEnter, onEntered, timeout, status, show]);
  (0, _react.useEffect)(() => {
    if (isPresent && show) return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus('exiting');
    onExit?.();
    exitTimeout.current = setTimeout(() => {
      setStatus('exited');
      safeToRemove?.();
      onExited?.();
    }, actualTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children(hasEntered && show ? isPresent : false, status);
};