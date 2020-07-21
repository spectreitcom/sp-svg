'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-25639bf7.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["sp-svg.cjs",[[1,"sp-svg",{"src":[1],"svgClass":[1,"svg-class"]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
