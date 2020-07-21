'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35c69b72.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["sp-svg.cjs",[[1,"sp-svg",{"src":[1],"responsive":[4],"svgClass":[1,"svg-class"]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
