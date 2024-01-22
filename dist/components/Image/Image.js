"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;
var _Button = require("../../components/Button");
var _Icon = require("../../components/Icon");
var _ThemeProvider = require("../../components/ThemeProvider");
var _framerMotion = require("framer-motion");
var _hooks = require("hooks");
var _react = require("react");
var _image = require("../../utils/image");
var _style = require("../../utils/style");
var _ImageModule = _interopRequireDefault(require("./Image.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Image = ({
  className,
  style,
  reveal,
  delay = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder,
  ...rest
}) => {
  const [loaded, setLoaded] = (0, _react.useState)(false);
  const {
    themeId
  } = (0, _ThemeProvider.useTheme)();
  const containerRef = (0, _react.useRef)();
  const src = baseSrc || srcSet?.[0];
  const inViewport = (0, _hooks.useInViewport)(containerRef, !getIsVideo(src));
  const onLoad = (0, _react.useCallback)(() => {
    setLoaded(true);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _style.classes)(_ImageModule.default.image, className),
    "data-visible": inViewport || loaded,
    "data-reveal": reveal,
    "data-raised": raised,
    "data-theme": themeId,
    style: (0, _style.cssProps)({
      delay: (0, _style.numToMs)(delay)
    }, style),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(ImageElements, _extends({
    delay: delay,
    onLoad: onLoad,
    loaded: loaded,
    inViewport: inViewport,
    reveal: reveal,
    src: src,
    srcSet: srcSet,
    placeholder: placeholder
  }, rest)));
};
exports.Image = Image;
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder,
  delay,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  noPauseButton,
  ...rest
}) => {
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  const [showPlaceholder, setShowPlaceholder] = (0, _react.useState)(true);
  const [playing, setPlaying] = (0, _react.useState)(!reduceMotion);
  const [videoSrc, setVideoSrc] = (0, _react.useState)();
  const [videoInteracted, setVideoInteracted] = (0, _react.useState)(false);
  const placeholderRef = (0, _react.useRef)();
  const videoRef = (0, _react.useRef)();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const srcSetString = (0, _image.srcSetToString)(srcSet);
  const hasMounted = (0, _hooks.useHasMounted)();
  (0, _react.useEffect)(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await (0, _image.resolveSrcFromSrcSet)({
        srcSet,
        sizes
      });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src.src);
    }
  }, [isVideo, sizes, src, srcSet]);
  (0, _react.useEffect)(() => {
    if (!videoRef.current || !videoSrc) return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted) return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = event => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _ImageModule.default.elementWrapper,
    "data-reveal": reveal,
    "data-visible": inViewport || loaded,
    style: (0, _style.cssProps)({
      delay: (0, _style.numToMs)(delay + 1000)
    })
  }, isVideo && hasMounted && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("video", _extends({
    muted: true,
    loop: true,
    playsInline: true,
    className: _ImageModule.default.element,
    "data-loaded": loaded,
    autoPlay: !reduceMotion,
    role: "img",
    onLoadStart: onLoad,
    src: videoSrc,
    "aria-label": alt,
    ref: videoRef
  }, rest)), !noPauseButton && /*#__PURE__*/React.createElement(_Button.Button, {
    className: _ImageModule.default.button,
    onClick: togglePlaying
  }, /*#__PURE__*/React.createElement(_Icon.Icon, {
    icon: playing ? 'pause' : 'play'
  }), playing ? 'Pause' : 'Play')), !isVideo && /*#__PURE__*/React.createElement("img", _extends({
    className: _ImageModule.default.element,
    "data-loaded": loaded,
    onLoad: onLoad,
    decoding: "async",
    src: showFullRes ? src.src : undefined,
    srcSet: showFullRes ? srcSetString : undefined,
    width: src.width,
    height: src.height,
    alt: alt,
    sizes: sizes
  }, rest)), showPlaceholder && /*#__PURE__*/React.createElement("img", {
    "aria-hidden": true,
    className: _ImageModule.default.placeholder,
    "data-loaded": loaded,
    style: (0, _style.cssProps)({
      delay: (0, _style.numToMs)(delay)
    }),
    ref: placeholderRef,
    src: placeholder.src,
    width: placeholder.width,
    height: placeholder.height,
    onTransitionEnd: () => setShowPlaceholder(false),
    decoding: "async",
    alt: "",
    role: "presentation"
  }));
};
function getIsVideo(src) {
  return typeof src.src === 'string' && src.src.endsWith('.mp4');
}