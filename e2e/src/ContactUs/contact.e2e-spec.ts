import { AppPage } from './contact.po';
import { browser, logging } from 'protractor';

describe('Contact Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show contact-us works!', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('contact-us works!');
  });

  it('should show correctly!', async () => {
    await page.navigateTo();
    expect(await page.getConclusion()).toEqual('13');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
