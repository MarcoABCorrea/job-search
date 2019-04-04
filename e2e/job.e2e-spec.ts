import { JobPage } from './job.po';

describe('Job page tests', () => {
  let jobPage: JobPage;

  beforeEach(() => {
    jobPage = new JobPage();
  });

  it('should display the description to the selected job', () => {
    jobPage.navigateTo();
    expect(jobPage.getPageTitle()).toEqual('90m Dach neu eindecken, Material benötigt');
  });
});
