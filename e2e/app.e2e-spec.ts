import { DigideskUiPage } from './app.po';

describe('digidesk-ui App', () => {
  let page: DigideskUiPage;

  beforeEach(() => {
    page = new DigideskUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
