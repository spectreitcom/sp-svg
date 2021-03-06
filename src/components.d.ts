/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SpSvg {
        /**
          * Sets width to 100% and height auto
         */
        "responsive": boolean;
        /**
          * Path to svg file
         */
        "src": string;
        /**
          * CSS classes placed into svg element
         */
        "svgClass": string;
    }
}
declare global {
    interface HTMLSpSvgElement extends Components.SpSvg, HTMLStencilElement {
    }
    var HTMLSpSvgElement: {
        prototype: HTMLSpSvgElement;
        new (): HTMLSpSvgElement;
    };
    interface HTMLElementTagNameMap {
        "sp-svg": HTMLSpSvgElement;
    }
}
declare namespace LocalJSX {
    interface SpSvg {
        /**
          * Sets width to 100% and height auto
         */
        "responsive"?: boolean;
        /**
          * Path to svg file
         */
        "src"?: string;
        /**
          * CSS classes placed into svg element
         */
        "svgClass"?: string;
    }
    interface IntrinsicElements {
        "sp-svg": SpSvg;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sp-svg": LocalJSX.SpSvg & JSXBase.HTMLAttributes<HTMLSpSvgElement>;
        }
    }
}
