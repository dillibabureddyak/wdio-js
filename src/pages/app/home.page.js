import BasePage from "./base.page.js";
import { driver, $ } from '@wdio/globals'
import Gestures from "../util/gestures.js";

const SELECTORS = {
    ANDROID: {
        RECENT_ISSUES: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]',
        BTN_SEE_MORE: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[3]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup',
    },
    IOS: {
        RECENT_ISSUES: "//XCUIElementTypeStaticText[@name='Recent issues']",
        BTN_SEE_MORE: "(//XCUIElementTypeOther[@name='SEE MORE'])[9]"
    },
};


class HomePage extends BasePage {

    constructor() {
        super()
        this.loc = driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS
    }

    async scrollToRecentIssues() {
        await Gestures.checkIfDisplayedWithSwipeUp($(this.loc.RECENT_ISSUES), 20)
        await this.pause(10)
    }

    async selectMoreRecentIssues() {
        await this.click(this.loc.BTN_SEE_MORE)
    }
}

export default new HomePage()