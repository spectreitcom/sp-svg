import {Component, ComponentInterface, Host, Prop, ComponentDidLoad, h, Element} from '@stencil/core';

@Component({
  tag: 'sp-svg',
  styleUrl: 'sp-svg.css',
  shadow: false,
  scoped: false
})
export class SpSvg implements ComponentInterface, ComponentDidLoad {

  /**
   * Path to svg file
   */
  @Prop() src: string = null;

  /**
   * Sets width to 100% and height auto
   */
  @Prop() responsive = false;

  /**
   * CSS classes placed into svg element
   */
  @Prop() svgClass: string = null;

  @Element() private hostElement: HTMLElement;

  async componentDidLoad(): Promise<any> {

    if (this.src) {
      await this.fetchIcon(this.src);
    }
  }

  render() {
    return (
      <Host />
    );
  }

  private async fetchIcon(src: string): Promise<any> {
    try {
      const response = await fetch(src);
      const fetchedSvgString = await response.text();
      this.renderSVG(fetchedSvgString);
    } catch (e) {}
  }

  private renderSVG(svgString: string): void {
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

}
