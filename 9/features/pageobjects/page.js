import { browser } from '@wdio/globals'
const timeouts = {
    polling: 500,
    explicit: 20000,
    disappear: 20000,
    implicit: 0,
    pageLoadTime: 120000,
    cucumberStep: 2400000,
    fileDownload: 60000,
    apiRequest: 60000,
    hover: 1000,
  };

  
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    async assertIsClickable(
        { timeout, interval, reverse } = {
          timeout: timeouts.explicit,
          interval: timeouts.polling,
          reverse: false,
        }
      ) {
        const func = async (options) =>
          await (await $(this.locator)).waitForClickable(options);
        return this._assertIs(
          func,
          { timeout, interval, reverse },
          "clickable"
        );
    }

    async _assertIs(func, options, state) {
        state = options.reverse === false ? state : `not ${state}`;
        console.log(`Assertion that element "${this.name}" is ${state}`);
        options.timeoutMsg = `Element "${this.name}" was not in state "${state}". Locator: ${this.locator}`;
        return func(options);
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
