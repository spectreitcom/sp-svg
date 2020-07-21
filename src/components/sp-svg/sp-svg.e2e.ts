import { newE2EPage } from '@stencil/core/testing';

describe('sp-svg', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sp-svg></sp-svg>');

    const element = await page.find('sp-svg');
    expect(element).toHaveClass('hydrated');
  });
});
