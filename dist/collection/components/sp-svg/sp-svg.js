import { Component, Host, Prop, h, Element } from '@stencil/core';
export class SpSvg {
    constructor() {
        /**
         * Path to svg file
         */
        this.src = null;
        /**
         * Sets width to 100% and height auto
         */
        this.responsive = false;
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
        return (h(Host, null));
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
        if (this.responsive) {
            svgElement.style.width = '100%';
            svgElement.style.height = 'auto';
        }
        if (this.svgClass) {
            svgElement.classList.add(this.svgClass);
        }
        this.hostElement.shadowRoot.append(svgElement);
    }
    static get is() { return "sp-svg"; }
    static get originalStyleUrls() { return {
        "$": ["sp-svg.css"]
    }; }
    static get styleUrls() { return {
        "$": ["sp-svg.css"]
    }; }
    static get properties() { return {
        "src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Path to svg file"
            },
            "attribute": "src",
            "reflect": false,
            "defaultValue": "null"
        },
        "responsive": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets width to 100% and height auto"
            },
            "attribute": "responsive",
            "reflect": false,
            "defaultValue": "false"
        },
        "svgClass": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "CSS classes placed into svg element"
            },
            "attribute": "svg-class",
            "reflect": false,
            "defaultValue": "null"
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
