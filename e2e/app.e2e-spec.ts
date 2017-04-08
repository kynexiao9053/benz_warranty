import { BenzWarrantyPage } from './app.po';

describe('benz-warranty App', () => {
  let page: BenzWarrantyPage;

  beforeEach(() => {
    page = new BenzWarrantyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
