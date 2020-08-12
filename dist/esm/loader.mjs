import { a as patchEsm, b as bootstrapLazy } from './index-71c1cc3b.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["sp-svg",[[0,"sp-svg",{"src":[1],"responsive":[4],"svgClass":[1,"svg-class"]}]]]], options);
});

export { defineCustomElements };
