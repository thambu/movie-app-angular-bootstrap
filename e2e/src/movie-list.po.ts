import { browser, by, element } from 'protractor';

export class MovieListPage {
  navigateTo() {
    return browser.get('/');
  }

  getSearchLable(){
  return element(by.css('search')).getText();
  }



}
