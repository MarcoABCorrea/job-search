import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('app-root h1.page-header')).getText();
  }

  getTableHeaders() {
    var headers = element.all(by.css('table th')).map(function(elm) {
        return elm.getText();
    });

    return headers;
  }
}
