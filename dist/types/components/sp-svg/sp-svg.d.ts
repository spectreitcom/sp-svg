import { ComponentInterface, ComponentDidLoad } from '../../stencil-public-runtime';
export declare class SpSvg implements ComponentInterface, ComponentDidLoad {
    /**
     * Path to svg file
     */
    src: string;
    /**
     * CSS classes placed into svg element
     */
    svgClass: string;
    private hostElement;
    componentDidLoad(): Promise<any>;
    render(): any;
    private fetchIcon;
    private renderSVG;
}
