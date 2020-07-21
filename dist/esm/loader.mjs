import { a as patchEsm, b as bootstrapLazy } from './index-edd4240d.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["sp-svg",[[1,"sp-svg",{"src":[1],"responsive":[4],"svgClass":[1,"svg-class"]}]]]], options);
});

export { defineCustomElements };
