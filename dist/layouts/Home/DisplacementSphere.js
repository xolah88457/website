"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplacementSphere = void 0;
var _ThemeProvider = require("../../components/ThemeProvider");
var _Transition = require("../../components/Transition");
var _framerMotion = require("framer-motion");
var _hooks = require("hooks");
var _react = require("react");
var _three = require("three");
var _style = require("../../utils/style");
var _three2 = require("../../utils/three");
var _DisplacementSphereModule = _interopRequireDefault(require("./DisplacementSphere.module.css"));
var _displacementSphereFragment = _interopRequireDefault(require("./displacementSphereFragment.glsl"));
var _displacementSphereVertex = _interopRequireDefault(require("./displacementSphereVertex.glsl"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2
};
const DisplacementSphere = props => {
  const theme = (0, _ThemeProvider.useTheme)();
  const {
    rgbBackground,
    themeId,
    colorWhite = "#7851a9"
  } = theme;
  const start = (0, _react.useRef)(Date.now());
  const canvasRef = (0, _react.useRef)();
  const mouse = (0, _react.useRef)();
  const renderer = (0, _react.useRef)();
  const camera = (0, _react.useRef)();
  const scene = (0, _react.useRef)();
  const lights = (0, _react.useRef)();
  const uniforms = (0, _react.useRef)();
  const material = (0, _react.useRef)();
  const geometry = (0, _react.useRef)();
  const sphere = (0, _react.useRef)();
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  const isInViewport = (0, _hooks.useInViewport)(canvasRef);
  const windowSize = (0, _hooks.useWindowSize)();
  const rotationX = (0, _framerMotion.useSpring)(0, springConfig);
  const rotationY = (0, _framerMotion.useSpring)(0, springConfig);
  (0, _react.useEffect)(() => {
    const {
      innerWidth,
      innerHeight
    } = window;
    mouse.current = new _three.Vector2(0.8, 0.5);
    renderer.current = new _three.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: true
    });
    renderer.current.setSize(innerWidth, innerHeight);
    renderer.current.setPixelRatio(1);
    renderer.current.outputEncoding = _three.sRGBEncoding;
    camera.current = new _three.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.z = 52;
    scene.current = new _three.Scene();
    material.current = new _three.MeshPhongMaterial();
    material.current.onBeforeCompile = shader => {
      uniforms.current = _three.UniformsUtils.merge([shader.uniforms, {
        time: {
          type: 'f',
          value: 0
        }
      }]);
      shader.uniforms = uniforms.current;
      shader.vertexShader = _displacementSphereVertex.default;
      shader.fragmentShader = _displacementSphereFragment.default;
    };
    (0, _react.startTransition)(() => {
      geometry.current = new _three.SphereGeometry(24, 128, 128);
      sphere.current = new _three.Mesh(geometry.current, material.current);
      sphere.current.position.z = -50;
      sphere.current.modifier = Math.random();
      scene.current.add(sphere.current);
    });
    return () => {
      (0, _three2.cleanScene)(scene.current);
      (0, _three2.cleanRenderer)(renderer.current);
    };
  }, []);
  (0, _react.useEffect)(() => {
    const dirLight = new _three.DirectionalLight(colorWhite, 0.5);
    const ambientLight = new _three.AmbientLight(colorWhite, themeId === 'light' ? 0.8 : 0.1);
    dirLight.position.z = 300;
    dirLight.position.x = 100;
    dirLight.position.y = 100;
    lights.current = [dirLight, ambientLight];
    scene.current.background = new _three.Color(...(0, _style.rgbToThreeColor)(rgbBackground));
    lights.current.forEach(light => scene.current.add(light));
    return () => {
      (0, _three2.removeLights)(lights.current);
    };
  }, [rgbBackground, colorWhite, themeId]);
  (0, _react.useEffect)(() => {
    const {
      width,
      height
    } = windowSize;
    const adjustedHeight = height + height * 0.3;
    renderer.current.setSize(width, adjustedHeight);
    camera.current.aspect = width / adjustedHeight;
    camera.current.updateProjectionMatrix();

    // Render a single frame on resize when not animating
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current);
    }
    if (width <= _style.media.mobile) {
      sphere.current.position.x = 14;
      sphere.current.position.y = 10;
    } else if (width <= _style.media.tablet) {
      sphere.current.position.x = 18;
      sphere.current.position.y = 14;
    } else {
      sphere.current.position.x = 22;
      sphere.current.position.y = 16;
    }
  }, [reduceMotion, windowSize]);
  (0, _react.useEffect)(() => {
    const onMouseMove = event => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      };
      rotationX.set(position.y / 1);
      rotationY.set(position.x / 1);
    };
    if (!reduceMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);
  (0, _react.useEffect)(() => {
    let animation;
    const animate = () => {
      animation = requestAnimationFrame(animate);
      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
      }
      sphere.current.rotation.z += 0.001;
      sphere.current.rotation.x = rotationX.get();
      sphere.current.rotation.y = rotationY.get();
      renderer.current.render(scene.current, camera.current);
    };
    if (!reduceMotion && isInViewport) {
      animate();
    } else {
      renderer.current.render(scene.current, camera.current);
    }
    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);
  return /*#__PURE__*/React.createElement(_Transition.Transition, {
    in: true,
    timeout: 3000
  }, visible => /*#__PURE__*/React.createElement("canvas", _extends({
    "aria-hidden": true,
    className: _DisplacementSphereModule.default.canvas,
    "data-visible": visible,
    ref: canvasRef
  }, props)));
};
exports.DisplacementSphere = DisplacementSphere;