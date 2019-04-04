import { HomePage } from './home.po';
import { JobPage } from './job.po';

describe('Home page tests', () => {
  let homePage: HomePage;
  let jobPage: JobPage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display title saying Active Jobs', () => {
    homePage.navigateTo();
    expect(homePage.getPageTitle()).toEqual('Active Jobs');
  });

  it('should display table headers correctly', () => {
    homePage.navigateTo();
    expect(homePage.getTableHeaders()).toEqual(['Title', 'City']);
  });
});
