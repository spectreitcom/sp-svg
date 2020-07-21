import { a as patchEsm, b as bootstrapLazy } from './index-bd578422.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["sp-svg",[[1,"sp-svg",{"src":[1],"svgClass":[1,"svg-class"]}]]]], options);
});

export { defineCustomElements };
