exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 7332:
/***/ ((module) => {

// Exports
module.exports = {
	"canvas": "DisplacementSphere_canvas__zrcVe"
};


/***/ }),

/***/ 625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplacementSphere": () => (/* binding */ DisplacementSphere)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4352);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8802);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2949);
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2362);
/* harmony import */ var _utils_three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3142);
/* harmony import */ var _DisplacementSphere_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7332);
/* harmony import */ var _DisplacementSphere_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_DisplacementSphere_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _displacementSphereFragment_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(796);
/* harmony import */ var _displacementSphereVertex_glsl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__, _components_Transition__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, hooks__WEBPACK_IMPORTED_MODULE_4__, three__WEBPACK_IMPORTED_MODULE_6__, _utils_three__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__, _components_Transition__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, hooks__WEBPACK_IMPORTED_MODULE_4__, three__WEBPACK_IMPORTED_MODULE_6__, _utils_three__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const springConfig = {
    stiffness: 30,
    damping: 20,
    mass: 2
};
const DisplacementSphere = (props)=>{
    const theme = (0,_components_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .Fg)();
    const { rgbBackground , themeId , colorWhite ="#7851a9"  } = theme;
    const start = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(Date.now());
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const renderer = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const camera = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const scene = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const lights = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const uniforms = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const material = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const geometry = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const sphere = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useReducedMotion)();
    const isInViewport = (0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useInViewport */ .NM)(canvasRef);
    const windowSize = (0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useWindowSize */ .iP)();
    const rotationX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(0, springConfig);
    const rotationY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(0, springConfig);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const { innerWidth , innerHeight  } = window;
        mouse.current = new three__WEBPACK_IMPORTED_MODULE_6__.Vector2(0.8, 0.5);
        renderer.current = new three__WEBPACK_IMPORTED_MODULE_6__.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: true
        });
        renderer.current.setSize(innerWidth, innerHeight);
        renderer.current.setPixelRatio(1);
        renderer.current.outputEncoding = three__WEBPACK_IMPORTED_MODULE_6__.sRGBEncoding;
        camera.current = new three__WEBPACK_IMPORTED_MODULE_6__.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
        camera.current.position.z = 52;
        scene.current = new three__WEBPACK_IMPORTED_MODULE_6__.Scene();
        material.current = new three__WEBPACK_IMPORTED_MODULE_6__.MeshPhongMaterial();
        material.current.onBeforeCompile = (shader)=>{
            uniforms.current = three__WEBPACK_IMPORTED_MODULE_6__.UniformsUtils.merge([
                shader.uniforms,
                {
                    time: {
                        type: "f",
                        value: 0
                    }
                }, 
            ]);
            shader.uniforms = uniforms.current;
            shader.vertexShader = _displacementSphereVertex_glsl__WEBPACK_IMPORTED_MODULE_10__;
            shader.fragmentShader = _displacementSphereFragment_glsl__WEBPACK_IMPORTED_MODULE_9__;
        };
        (0,react__WEBPACK_IMPORTED_MODULE_5__.startTransition)(()=>{
            geometry.current = new three__WEBPACK_IMPORTED_MODULE_6__.SphereGeometry(24, 128, 128);
            sphere.current = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(geometry.current, material.current);
            sphere.current.position.z = -50;
            sphere.current.modifier = Math.random();
            scene.current.add(sphere.current);
        });
        return ()=>{
            (0,_utils_three__WEBPACK_IMPORTED_MODULE_8__/* .cleanScene */ ["in"])(scene.current);
            (0,_utils_three__WEBPACK_IMPORTED_MODULE_8__/* .cleanRenderer */ .e8)(renderer.current);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const dirLight = new three__WEBPACK_IMPORTED_MODULE_6__.DirectionalLight(colorWhite, 0.5);
        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_6__.AmbientLight(colorWhite, themeId === "light" ? 0.8 : 0.1);
        dirLight.position.z = 300;
        dirLight.position.x = 100;
        dirLight.position.y = 100;
        lights.current = [
            dirLight,
            ambientLight
        ];
        scene.current.background = new three__WEBPACK_IMPORTED_MODULE_6__.Color(...(0,_utils_style__WEBPACK_IMPORTED_MODULE_7__/* .rgbToThreeColor */ .Zm)(rgbBackground));
        lights.current.forEach((light)=>scene.current.add(light));
        return ()=>{
            (0,_utils_three__WEBPACK_IMPORTED_MODULE_8__/* .removeLights */ .Ji)(lights.current);
        };
    }, [
        rgbBackground,
        colorWhite,
        themeId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const { width , height  } = windowSize;
        const adjustedHeight = height + height * 0.3;
        renderer.current.setSize(width, adjustedHeight);
        camera.current.aspect = width / adjustedHeight;
        camera.current.updateProjectionMatrix();
        // Render a single frame on resize when not animating
        if (reduceMotion) {
            renderer.current.render(scene.current, camera.current);
        }
        if (width <= _utils_style__WEBPACK_IMPORTED_MODULE_7__/* .media.mobile */ .BC.mobile) {
            sphere.current.position.x = 14;
            sphere.current.position.y = 10;
        } else if (width <= _utils_style__WEBPACK_IMPORTED_MODULE_7__/* .media.tablet */ .BC.tablet) {
            sphere.current.position.x = 18;
            sphere.current.position.y = 14;
        } else {
            sphere.current.position.x = 22;
            sphere.current.position.y = 16;
        }
    }, [
        reduceMotion,
        windowSize
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const onMouseMove = (event)=>{
            const position = {
                x: event.clientX / window.innerWidth,
                y: event.clientY / window.innerHeight
            };
            rotationX.set(position.y / 1);
            rotationY.set(position.x / 1);
        };
        if (!reduceMotion && isInViewport) {
            window.addEventListener("mousemove", onMouseMove);
        }
        return ()=>{
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [
        isInViewport,
        reduceMotion,
        rotationX,
        rotationY
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        let animation;
        const animate = ()=>{
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
        return ()=>{
            cancelAnimationFrame(animation);
        };
    }, [
        isInViewport,
        reduceMotion,
        rotationX,
        rotationY
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .u, {
        in: true,
        timeout: 3000,
        children: (visible)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                "aria-hidden": true,
                className: (_DisplacementSphere_module_css__WEBPACK_IMPORTED_MODULE_11___default().canvas),
                "data-visible": visible,
                ref: canvasRef,
                ...props
            })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ji": () => (/* binding */ removeLights),
/* harmony export */   "e8": () => (/* binding */ cleanRenderer),
/* harmony export */   "in": () => (/* binding */ cleanScene)
/* harmony export */ });
/* unused harmony exports modelLoader, textureLoader, cleanMaterial, getChild */
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2949);
/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8034);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_0__, three_stdlib__WEBPACK_IMPORTED_MODULE_1__]);
([three__WEBPACK_IMPORTED_MODULE_0__, three_stdlib__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Enable caching for all loaders
three__WEBPACK_IMPORTED_MODULE_0__.Cache.enabled = true;
const dracoLoader = new three_stdlib__WEBPACK_IMPORTED_MODULE_1__.DRACOLoader();
const gltfLoader = new three_stdlib__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();
dracoLoader.setDecoderPath("/draco/");
gltfLoader.setDRACOLoader(dracoLoader);
/**
 * GLTF model loader configured with draco decoder
 */ const modelLoader = (/* unused pure expression or super */ null && (gltfLoader));
const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
/**
 * Clean up a scene's materials and geometry
 */ const cleanScene = (scene)=>{
    scene?.traverse((object)=>{
        if (!object.isMesh) return;
        object.geometry.dispose();
        if (object.material.isMaterial) {
            cleanMaterial(object.material);
        } else {
            for (const material of object.material){
                cleanMaterial(material);
            }
        }
    });
};
/**
 * Clean up and dispose of a material
 */ const cleanMaterial = (material)=>{
    material.dispose();
    for (const key of Object.keys(material)){
        const value = material[key];
        if (value && typeof value === "object" && "minFilter" in value) {
            value.dispose();
            // Close GLTF bitmap textures
            value.source?.data?.close?.();
        }
    }
};
/**
 * Clean up and dispose of a renderer
 */ const cleanRenderer = (renderer)=>{
    renderer.dispose();
    renderer = null;
};
/**
 * Clean up lights by removing them from their parent
 */ const removeLights = (lights)=>{
    for (const light of lights){
        light.parent.remove(light);
    }
};
/**
 * Get child by name
 */ const getChild = (name, object)=>{
    let node;
    object.traverse((child)=>{
        if (child.name === name) {
            node = child;
        }
    });
    return node;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = "#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 newPosition;\nvarying float noise;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\t#include <clipping_planes_fragment>\n\n  vec3 color = vec3(1.0, vUv);\n  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\n  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n  \n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n}\n";

/***/ }),

/***/ 7082:
/***/ ((module) => {

"use strict";
module.exports = "//\n// GLSL textureless classic 3D noise \"cnoise\",\n// with an RSL-style periodic variant \"pnoise\".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\n#define PHONG\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfloat turbulence(vec3 p) {\n  float w = 100.0;\n  float t = -.5;\n  for (float f = 1.0 ; f <= 10.0 ; f++) {\n    float power = pow(2.0, f);\n    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\n  }\n  return t;\n}\n\n// START\nuniform float time;\nvarying vec2 vUv;\nvarying float noise;\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n  vUv = uv;\n\n  noise = turbulence(0.01 * position + normal + time * 0.8);\n  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\n}\n";

/***/ })

};
;