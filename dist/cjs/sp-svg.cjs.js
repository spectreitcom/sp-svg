'use strict';

const index = require('./index-f81a2d5a.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["sp-svg.cjs",[[0,"sp-svg",{"src":[1],"responsive":[4],"svgClass":[1,"svg-class"]}]]]], options);
});
