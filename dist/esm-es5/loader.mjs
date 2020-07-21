import { a as patchEsm, b as bootstrapLazy } from './index-edd4240d.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["sp-svg", [[1, "sp-svg", { "src": [1], "responsive": [4], "svgClass": [1, "svg-class"] }]]]], options);
}); };
export { defineCustomElements };
