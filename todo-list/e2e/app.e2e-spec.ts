import { AngularUnitTestsPage } from './app.po';

describe('angular-unit-tests App', () => {
  let page: AngularUnitTestsPage;

  beforeEach(() => {
    page = new AngularUnitTestsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
