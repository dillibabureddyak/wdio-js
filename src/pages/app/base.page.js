import { driver, $ } from '@wdio/globals'

export default class BasePage {

    async launchApp() {
        await driver.launchApp()
    }

    async pause(seconds) {
        await driver.pause(seconds * 1000);
    }

    async isVisible(locator) {
        return await $(locator).isDisplayed() ? true : false;
    }

    async getElement(locator) {
        return await $(locator)
    }

    async click(locator) {
        await $(locator).click();
    }

    async waitForElement(locator, waitTimeInSeconds) {
        await $(locator).waitForDisplayed({ timeout: waitTimeInSeconds * 1000 });
    }

    async clearText(locator) {
        await $(locator).clearValue();
    }

    async sendText(locator, inputText) {
        await $(locator).addValue(inputText);
    }

    async getText(locator) {
        return await $(locator).getText();
    }

}