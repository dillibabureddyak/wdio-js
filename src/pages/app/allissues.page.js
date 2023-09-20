import BasePage from "./base.page.js";
import { driver, $ } from '@wdio/globals'
import Gestures from "../../util/gestures.js";

const SELECTORS = {
    ANDROID: {
        ARCHIVE_TAB: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]',
        JUNE_EDITION: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]'
    },
    IOS: {
        ARCHIVE_TAB: '(//XCUIElementTypeOther[@name="Archive"])[2]',
        JUNE_EDITION: '(//XCUIElementTypeOther[@name="Tuesday, 27 June 2023"])[4]',
    },
};

class AllIssuesPage extends BasePage {

    constructor() {
        super()
        this.loc = driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS
    }

    async downloadJuneEdition() {
        await this.click(this.loc.ARCHIVE_TAB)
        await Gestures.checkIfDisplayedWithSwipeUp($(this.loc.JUNE_EDITION), 20)
        await this.click(this.loc.JUNE_EDITION)
    }
}

export default new AllIssuesPage()