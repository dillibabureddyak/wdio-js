import { Given, When, Then } from '@wdio/cucumber-framework';
import {expect} from 'expect-webdriverio';

import WelcomePage from '../pages/app/welcome.page.js';
import MenuComp from '../pages/app/component/menu.comp.js';
import HomePage from '../pages/app/home.page.js';
import AllIssuesPage from '../pages/app/allissues.page.js';
import SignInPage from '../pages/app/signin.page.js';
import June27editionPage from '../pages/app/june27edition.page.js';

Given(/^I launch the app$/, async () => {
    await WelcomePage.openApp()
    await WelcomePage.closeFailOver()
    await WelcomePage.goToHomeScreen()
});

When(/^I tap see more for recent issues in newspaper tab$/, async () => {
    await MenuComp.selectNewspaper()
    await HomePage.scrollToRecentIssues()
    await HomePage.selectMoreRecentIssues()
});

When(/^I tap to download June 27 edition in archive tab$/, async () => {
    await AllIssuesPage.downloadJuneEdition()
});

When(/^I logged in on paywall carousel$/, async () => {
    await SignInPage.signIn()
});

Then(/^I wait for edition to complete download$/, async () => {
    await expect(June27editionPage.getTitleElement()).toBeDisplayed()
});

