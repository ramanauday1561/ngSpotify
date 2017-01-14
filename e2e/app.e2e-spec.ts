import { NgGitHubSearchPage } from './app.po';

describe('ng-git-hub-search App', function() {
  let page: NgGitHubSearchPage;

  beforeEach(() => {
    page = new NgGitHubSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
