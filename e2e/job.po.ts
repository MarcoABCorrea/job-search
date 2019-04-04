import { browser, element, by } from 'protractor';

export class JobPage {
  navigateTo() {
    return browser.get('/job/98969442');
  }

  getPageTitle() {
    return element(by.css('app-root h1')).getText();
  }
}
