"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textureLoader = exports.removeLights = exports.modelLoader = exports.getChild = exports.cleanScene = exports.cleanRenderer = exports.cleanMaterial = void 0;
var _three = require("three");
var _threeStdlib = require("three-stdlib");
// Enable caching for all loaders
_three.Cache.enabled = true;
const dracoLoader = new _threeStdlib.DRACOLoader();
const gltfLoader = new _threeStdlib.GLTFLoader();
dracoLoader.setDecoderPath('/draco/');
gltfLoader.setDRACOLoader(dracoLoader);

/**
 * GLTF model loader configured with draco decoder
 */
const modelLoader = exports.modelLoader = gltfLoader;
const textureLoader = exports.textureLoader = new _three.TextureLoader();

/**
 * Clean up a scene's materials and geometry
 */
const cleanScene = scene => {
  scene?.traverse(object => {
    if (!object.isMesh) return;
    object.geometry.dispose();
    if (object.material.isMaterial) {
      cleanMaterial(object.material);
    } else {
      for (const material of object.material) {
        cleanMaterial(material);
      }
    }
  });
};

/**
 * Clean up and dispose of a material
 */
exports.cleanScene = cleanScene;
const cleanMaterial = material => {
  material.dispose();
  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose();

      // Close GLTF bitmap textures
      value.source?.data?.close?.();
    }
  }
};

/**
 * Clean up and dispose of a renderer
 */
exports.cleanMaterial = cleanMaterial;
const cleanRenderer = renderer => {
  renderer.dispose();
  renderer = null;
};

/**
 * Clean up lights by removing them from their parent
 */
exports.cleanRenderer = cleanRenderer;
const removeLights = lights => {
  for (const light of lights) {
    light.parent.remove(light);
  }
};

/**
 * Get child by name
 */
exports.removeLights = removeLights;
const getChild = (name, object) => {
  let node;
  object.traverse(child => {
    if (child.name === name) {
      node = child;
    }
  });
  return node;
};
exports.getChild = getChild;