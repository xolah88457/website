"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;
var _framerMotion = require("framer-motion");
var _hooks = require("hooks");
var _react = require("react");
var _three = require("three");
var _threeStdlib = require("three-stdlib");
var _image = require("utils/image");
var _style = require("utils/style");
var _three2 = require("utils/three");
var _ModelModule = _interopRequireDefault(require("./Model.module.css"));
var _deviceModels = require("./deviceModels");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const MeshType = {
  Frame: 'Frame',
  Logo: 'Logo',
  Screen: 'Screen'
};
const rotationSpringConfig = {
  stiffness: 40,
  damping: 20,
  mass: 1.4,
  restSpeed: 0.001
};
const Model = ({
  models,
  show = true,
  showDelay = 0,
  cameraPosition = {
    x: 0,
    y: 0,
    z: 8
  },
  style,
  className,
  alt,
  ...rest
}) => {
  const [loaded, setLoaded] = (0, _react.useState)(false);
  const container = (0, _react.useRef)();
  const canvas = (0, _react.useRef)();
  const camera = (0, _react.useRef)();
  const modelGroup = (0, _react.useRef)();
  const scene = (0, _react.useRef)();
  const renderer = (0, _react.useRef)();
  const shadowGroup = (0, _react.useRef)();
  const renderTarget = (0, _react.useRef)();
  const renderTargetBlur = (0, _react.useRef)();
  const shadowCamera = (0, _react.useRef)();
  const depthMaterial = (0, _react.useRef)();
  const horizontalBlurMaterial = (0, _react.useRef)();
  const verticalBlurMaterial = (0, _react.useRef)();
  const plane = (0, _react.useRef)();
  const lights = (0, _react.useRef)();
  const blurPlane = (0, _react.useRef)();
  const fillPlane = (0, _react.useRef)();
  const isInViewport = (0, _hooks.useInViewport)(container, false, {
    threshold: 0.2
  });
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  const rotationX = (0, _framerMotion.useSpring)(0, rotationSpringConfig);
  const rotationY = (0, _framerMotion.useSpring)(0, rotationSpringConfig);
  (0, _react.useEffect)(() => {
    const {
      clientWidth,
      clientHeight
    } = container.current;
    renderer.current = new _three.WebGLRenderer({
      canvas: canvas.current,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: true
    });
    renderer.current.setPixelRatio(2);
    renderer.current.setSize(clientWidth, clientHeight);
    renderer.current.outputEncoding = _three.sRGBEncoding;
    renderer.current.physicallyCorrectLights = true;
    camera.current = new _three.PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100);
    camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    scene.current = new _three.Scene();
    modelGroup.current = new _three.Group();
    scene.current.add(modelGroup.current);

    // Lighting
    const ambientLight = new _three.AmbientLight(0xffffff, 1.2);
    const keyLight = new _three.DirectionalLight(0xffffff, 1.1);
    const fillLight = new _three.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-6, 2, 2);
    keyLight.position.set(0.5, 0, 0.866);
    lights.current = [ambientLight, keyLight, fillLight];
    lights.current.forEach(light => scene.current.add(light));

    // The shadow container, if you need to move the plane just move this
    shadowGroup.current = new _three.Group();
    scene.current.add(shadowGroup.current);
    shadowGroup.current.position.set(0, 0, -0.8);
    shadowGroup.current.rotateX(Math.PI / 2);
    const renderTargetSize = 512;
    const planeWidth = 8;
    const planeHeight = 8;
    const cameraHeight = 1.5;
    const shadowOpacity = 0.8;
    const shadowDarkness = 3;

    // The render target that will show the shadows in the plane texture
    renderTarget.current = new _three.WebGLRenderTarget(renderTargetSize, renderTargetSize);
    renderTarget.current.texture.generateMipmaps = false;

    // The render target that we will use to blur the first render target
    renderTargetBlur.current = new _three.WebGLRenderTarget(renderTargetSize, renderTargetSize);
    renderTargetBlur.current.texture.generateMipmaps = false;

    // Make a plane and make it face up
    const planeGeometry = new _three.PlaneBufferGeometry(planeWidth, planeHeight).rotateX(Math.PI / 2);
    const planeMaterial = new _three.MeshBasicMaterial({
      map: renderTarget.current.texture,
      opacity: shadowOpacity,
      transparent: true
    });
    plane.current = new _three.Mesh(planeGeometry, planeMaterial);
    // The y from the texture is flipped!
    plane.current.scale.y = -1;
    shadowGroup.current.add(plane.current);

    // The plane onto which to blur the texture
    blurPlane.current = new _three.Mesh(planeGeometry);
    blurPlane.current.visible = false;
    shadowGroup.current.add(blurPlane.current);

    // The plane with the color of the ground
    const fillMaterial = new _three.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0,
      transparent: true
    });
    fillPlane.current = new _three.Mesh(planeGeometry, fillMaterial);
    fillPlane.current.rotateX(Math.PI);
    fillPlane.current.position.y -= 0.00001;
    shadowGroup.current.add(fillPlane.current);

    // The camera to render the depth material from
    shadowCamera.current = new _three.OrthographicCamera(-planeWidth / 2, planeWidth / 2, planeHeight / 2, -planeHeight / 2, 0, cameraHeight);
    // Get the camera to look up
    shadowCamera.current.rotation.x = Math.PI / 2;
    shadowGroup.current.add(shadowCamera.current);

    // Like MeshDepthMaterial, but goes from black to transparent
    depthMaterial.current = new _three.MeshDepthMaterial();
    depthMaterial.current.userData.darkness = {
      value: shadowDarkness
    };
    depthMaterial.current.onBeforeCompile = shader => {
      shader.uniforms.darkness = depthMaterial.current.userData.darkness;
      shader.fragmentShader = `
        uniform float darkness;
        ${shader.fragmentShader.replace('gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );', 'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );')}
      `;
    };
    depthMaterial.current.depthTest = false;
    depthMaterial.current.depthWrite = false;
    horizontalBlurMaterial.current = new _three.ShaderMaterial(_threeStdlib.HorizontalBlurShader);
    horizontalBlurMaterial.current.depthTest = false;
    verticalBlurMaterial.current = new _three.ShaderMaterial(_threeStdlib.VerticalBlurShader);
    verticalBlurMaterial.current.depthTest = false;
    const unsubscribeX = rotationX.onChange(renderFrame);
    const unsubscribeY = rotationY.onChange(renderFrame);
    return () => {
      renderTarget.current.dispose();
      renderTargetBlur.current.dispose();
      (0, _three2.removeLights)(lights.current);
      (0, _three2.cleanScene)(scene.current);
      (0, _three2.cleanRenderer)(renderer.current);
      unsubscribeX();
      unsubscribeY();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const blurShadow = (0, _react.useCallback)(amount => {
    blurPlane.current.visible = true;

    // Blur horizontally and draw in the renderTargetBlur
    blurPlane.current.material = horizontalBlurMaterial.current;
    blurPlane.current.material.uniforms.tDiffuse.value = renderTarget.current.texture;
    horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256);
    renderer.current.setRenderTarget(renderTargetBlur.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);

    // Blur vertically and draw in the main renderTarget
    blurPlane.current.material = verticalBlurMaterial.current;
    blurPlane.current.material.uniforms.tDiffuse.value = renderTargetBlur.current.texture;
    verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256);
    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);
    blurPlane.current.visible = false;
  }, []);

  // Handle render passes for a single frame
  const renderFrame = (0, _react.useCallback)(() => {
    const blurAmount = 5;

    // Remove the background
    const initialBackground = scene.current.background;
    scene.current.background = null;

    // Force the depthMaterial to everything
    // cameraHelper.visible = false;
    scene.current.overrideMaterial = depthMaterial.current;

    // Render to the render target to get the depths
    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(scene.current, shadowCamera.current);

    // And reset the override material
    scene.current.overrideMaterial = null;
    blurShadow(blurAmount);

    // A second pass to reduce the artifacts
    // (0.4 is the minimum blur amout so that the artifacts are gone)
    blurShadow(blurAmount * 0.4);

    // Reset and render the normal scene
    renderer.current.setRenderTarget(null);
    scene.current.background = initialBackground;
    modelGroup.current.rotation.x = rotationX.get();
    modelGroup.current.rotation.y = rotationY.get();
    renderer.current.render(scene.current, camera.current);
  }, [blurShadow, rotationX, rotationY]);

  // Handle mouse move animation
  (0, _react.useEffect)(() => {
    const onMouseMove = event => {
      const {
        innerWidth,
        innerHeight
      } = window;
      const position = {
        x: (event.clientX - innerWidth / 2) / innerWidth,
        y: (event.clientY - innerHeight / 2) / innerHeight
      };
      rotationY.set(position.x / 2);
      rotationX.set(position.y / 2);
    };
    if (isInViewport && !reduceMotion) {
      window.addEventListener('mousemove', onMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  // Handle window resize
  (0, _react.useEffect)(() => {
    const handleResize = () => {
      if (!container.current) return;
      const {
        clientWidth,
        clientHeight
      } = container.current;
      renderer.current.setSize(clientWidth, clientHeight);
      camera.current.aspect = clientWidth / clientHeight;
      camera.current.updateProjectionMatrix();
      renderFrame();
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [renderFrame]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: (0, _style.classes)(_ModelModule.default.model, className),
    "data-loaded": loaded,
    style: (0, _style.cssProps)({
      delay: (0, _style.numToMs)(showDelay)
    }, style),
    ref: container,
    role: "img",
    "aria-label": alt
  }, rest), /*#__PURE__*/React.createElement("canvas", {
    className: _ModelModule.default.canvas,
    ref: canvas
  }), models.map((model, index) => /*#__PURE__*/React.createElement(Device, {
    key: JSON.stringify(model.position),
    renderer: renderer,
    modelGroup: modelGroup,
    show: show,
    showDelay: showDelay,
    renderFrame: renderFrame,
    index: index,
    setLoaded: setLoaded,
    model: model
  })));
};
exports.Model = Model;
const Device = ({
  renderer,
  model,
  modelGroup,
  renderFrame,
  index,
  showDelay,
  setLoaded,
  show
}) => {
  const [loadDevice, setLoadDevice] = (0, _react.useState)();
  const reduceMotion = (0, _framerMotion.useReducedMotion)();
  const placeholderScreen = /*#__PURE__*/(0, _react.createRef)();
  (0, _react.useEffect)(() => {
    const applyScreenTexture = async (texture, node) => {
      texture.encoding = _three.sRGBEncoding;
      texture.flipY = false;
      texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy();
      texture.generateMipmaps = false;

      // Decode the texture to prevent jank on first render
      await renderer.current.initTexture(texture);
      node.material.color = new _three.Color(0xffffff);
      node.material.transparent = true;
      node.material.map = texture;
    };

    // Generate promises to await when ready
    const load = async () => {
      const {
        texture,
        position,
        url
      } = model;
      let loadFullResTexture;
      let playAnimation;
      const [placeholder, gltf] = await Promise.all([await _three2.textureLoader.loadAsync(texture.placeholder.src), await _three2.modelLoader.loadAsync(url)]);
      modelGroup.current.add(gltf.scene);
      gltf.scene.traverse(async node => {
        if (node.material) {
          node.material.color = new _three.Color(0x1f2025);
          node.material.color.convertSRGBToLinear();
        }
        if (node.name === MeshType.Screen) {
          // Create a copy of the screen mesh so we can fade it out
          // over the full resolution screen texture
          placeholderScreen.current = node.clone();
          placeholderScreen.current.material = node.material.clone();
          node.parent.add(placeholderScreen.current);
          placeholderScreen.current.material.opacity = 1;
          placeholderScreen.current.position.z += 0.001;
          applyScreenTexture(placeholder, placeholderScreen.current);
          loadFullResTexture = async () => {
            const image = await (0, _image.resolveSrcFromSrcSet)(texture);
            const fullSize = await _three2.textureLoader.loadAsync(image);
            await applyScreenTexture(fullSize, node);
            (0, _framerMotion.animate)(1, 0, {
              onUpdate: value => {
                placeholderScreen.current.material.opacity = value;
                renderFrame();
              }
            });
          };
        }
      });
      const targetPosition = new _three.Vector3(position.x, position.y, position.z);
      if (reduceMotion) {
        gltf.scene.position.set(...targetPosition.toArray());
      }

      // Simple slide up animation
      if (model.animation === _deviceModels.ModelAnimationType.SpringUp) {
        playAnimation = () => {
          const startPosition = new _three.Vector3(targetPosition.x, targetPosition.y - 1, targetPosition.z);
          gltf.scene.position.set(...startPosition.toArray());
          (0, _framerMotion.animate)(startPosition.y, targetPosition.y, {
            type: 'spring',
            delay: (300 * index + showDelay) / 1000,
            stiffness: 60,
            damping: 20,
            mass: 1,
            restSpeed: 0.0001,
            restDelta: 0.0001,
            onUpdate: value => {
              gltf.scene.position.y = value;
              renderFrame();
            }
          });
        };
      }

      // Swing the laptop lid open
      if (model.animation === _deviceModels.ModelAnimationType.LaptopOpen) {
        playAnimation = () => {
          const frameNode = gltf.scene.children.find(node => node.name === MeshType.Frame);
          const startRotation = new _three.Vector3(_three.MathUtils.degToRad(90), 0, 0);
          const endRotation = new _three.Vector3(0, 0, 0);
          gltf.scene.position.set(...targetPosition.toArray());
          frameNode.rotation.set(...startRotation.toArray());
          return (0, _framerMotion.animate)(startRotation.x, endRotation.x, {
            type: 'spring',
            delay: (300 * index + showDelay + 300) / 1000,
            stiffness: 80,
            damping: 20,
            restSpeed: 0.0001,
            restDelta: 0.0001,
            onUpdate: value => {
              frameNode.rotation.x = value;
              renderFrame();
            }
          });
        };
      }
      return {
        loadFullResTexture,
        playAnimation
      };
    };
    setLoadDevice({
      start: load
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, _react.useEffect)(() => {
    if (!loadDevice || !show) return;
    let animation;
    const onLoad = async () => {
      const {
        loadFullResTexture,
        playAnimation
      } = await loadDevice.start();
      setLoaded(true);
      if (!reduceMotion) {
        animation = playAnimation();
      }
      await loadFullResTexture();
      if (reduceMotion) {
        renderFrame();
      }
    };
    (0, _react.startTransition)(() => {
      onLoad();
    });
    return () => {
      animation?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadDevice, show]);
};