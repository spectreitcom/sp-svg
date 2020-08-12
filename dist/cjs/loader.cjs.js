'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f81a2d5a.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["sp-svg.cjs",[[0,"sp-svg",{"src":[1],"responsive":[4],"svgClass":[1,"svg-class"]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
