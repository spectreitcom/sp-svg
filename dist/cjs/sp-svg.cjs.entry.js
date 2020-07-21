'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-25639bf7.js');

const spSvgCss = ":host{display:block}";

const SpSvg = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Path to svg file
         */
        this.src = null;
        /**
         * CSS classes placed into svg element
         */
        this.svgClass = null;
    }
    async componentDidLoad() {
        if (this.src) {
            await this.fetchIcon(this.src);
        }
    }
    render() {
        return (index.h(index.Host, null));
    }
    async fetchIcon(src) {
        try {
            const response = await fetch(src);
            const fetchedSvgString = await response.text();
            this.renderSVG(fetchedSvgString);
        }
        catch (e) { }
    }
    renderSVG(svgString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString.trim(), 'image/svg+xml');
        const svgElement = doc.querySelector('svg');
        if (this.svgClass && this.svgClass.length) {
            svgElement.classList.add(this.svgClass);
        }
        this.hostElement.shadowRoot.append(svgElement);
    }
    get hostElement() { return index.getElement(this); }
};
SpSvg.style = spSvgCss;

exports.sp_svg = SpSvg;
