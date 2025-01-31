import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import InternetPage from '../pageobjects/internet.js';

const pages = {
    internet: InternetPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Then(/^I assert element with retry$/, { wrapperOptions: { retry: 1 } }, async () => {
    await InternetPage.assertIsClickable()
});

Then(/^I assert element without retry$/, { wrapperOptions: { retry: 0 } }, async () => {
    await InternetPage.assertIsClickable()
});
