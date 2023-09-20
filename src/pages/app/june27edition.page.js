import BasePage from "./base.page.js";
import { driver, $ } from '@wdio/globals'

const SELECTORS = {
    ANDROID: {
        LBL_TITLE: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
    },
    IOS: {
        LBL_TITLE: '//XCUIElementTypeStaticText[@name="Tuesday, 27 June"]'
    },
};

class June27EditionPage extends BasePage {

    constructor() {
        super()
        this.loc = driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS
    }

    async getTitleElement() {
        return await this.getElement(this.loc.LBL_TITLE)
    }
}

export default new June27EditionPage()