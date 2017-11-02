import { NgFirePage } from './app.po';

describe('ng-fire App', () => {
  let page: NgFirePage;

  beforeEach(() => {
    page = new NgFirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
