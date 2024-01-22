"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classes = classes;
exports.cssProps = cssProps;
exports.rgbToThreeColor = exports.pxToRem = exports.pxToNum = exports.numToPx = exports.numToMs = exports.msToNum = exports.media = void 0;
/**
 * Media query breakpoints
 */
const media = exports.media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};

/**
 * Convert a px string to a number
 */
const pxToNum = px => Number(px.replace('px', ''));

/**
 * Convert a number to a px string
 */
exports.pxToNum = pxToNum;
const numToPx = num => `${num}px`;

/**
 * Convert pixel values to rem for a11y
 */
exports.numToPx = numToPx;
const pxToRem = px => `${px / 16}rem`;

/**
 * Convert ms token values to a raw numbers for ReactTransitionGroup
 * Transition delay props
 */
exports.pxToRem = pxToRem;
const msToNum = msString => Number(msString.replace('ms', ''));

/**
 * Convert a number to an ms string
 */
exports.msToNum = msToNum;
const numToMs = num => `${num}ms`;

/**
 * Convert an rgb theme property (e.g. rgbBlack: '0 0 0')
 * to values that can be spread into a ThreeJS Color class
 */
exports.numToMs = numToMs;
const rgbToThreeColor = rgb => rgb?.split(' ').map(value => Number(value) / 255) || [];

/**
 * Convert a JS object into `--` prefixed css custom properties.
 * Optionally pass a second param for normal styles
 */
exports.rgbToThreeColor = rgbToThreeColor;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value = props[key];
    if (typeof value === 'number' && key === 'delay') {
      value = numToMs(value);
    }
    if (typeof value === 'number' && key !== 'opacity') {
      value = numToPx(value);
    }
    result[`--${key}`] = value;
  }
  return {
    ...result,
    ...style
  };
}

/**
 * Concatenate classNames together
 */
function classes(...classes) {
  return classes.filter(Boolean).join(' ');
}