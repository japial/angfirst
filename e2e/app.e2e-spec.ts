import { AngfirstPage } from './app.po';

describe('angfirst App', function() {
  let page: AngfirstPage;

  beforeEach(() => {
    page = new AngfirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
