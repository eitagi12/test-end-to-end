import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get('http://localhost:4200/contact');
  }
  async getTitleText(): Promise<string> {
    return element(by.css('.nuscontact')).getText();
  }
 async getConclusion(): Promise<string> {
  element(by.css('.firstInput')).sendKeys("5")
  element(by.css('.secondInput')).sendKeys("8")
  element(by.css('.clickCal')).click()

  return element(by.css('.conclusion')).getText();
}
}
