import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InternetPage extends Page {
    constructor(locator, name) {
        super()
        this.locator = '//*[@id="incorrect"]';
        this.name = "someButton";
      }
    /**
     * define selectors using getter methods
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new InternetPage();
