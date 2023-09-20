import BasePage from "../../base.page.js";
import { driver, $ } from '@wdio/globals'

const SELECTORS = {
    ANDROID: {
        TAB_NEWSPAPER: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.Button[1]'
    },
    IOS: {
        TAB_NEWSPAPER: "//XCUIElementTypeButton[@name='Newspaper']"
    },
};

class MenuComp extends BasePage {

    constructor() {
        super()
        this.loc = driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS
    }

    async selectNewspaper() {
        await this.click(this.loc.TAB_NEWSPAPER)
    }
}

export default new MenuComp()