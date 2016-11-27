import { TeamAwesomePage } from './app.po';

describe('team-awesome App', function() {
  let page: TeamAwesomePage;

  beforeEach(() => {
    page = new TeamAwesomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
