import BasePage from "./base.page.js";
import { driver, $ } from '@wdio/globals'

const SELECTORS = {
    ANDROID: {
        CLOSE_FAILOVER: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup',
        BTN_CONTINUE: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup'
    },
    IOS: {
        CLOSE_FAILOVER: '(//XCUIElementTypeOther[@name="Failover This is a failover test. Read more about failover"])[2]/XCUIElementTypeOther[1]',
        BTN_CONTINUE: "(//XCUIElementTypeOther[@name='Continue'])[3]"
    },
};

class WelcomePage extends BasePage {

    constructor() {
        super()
        this.loc = driver.isAndroid? SELECTORS.ANDROID: SELECTORS.IOS
    }

    async closeFailOver() {
        if (await this.isVisible(this.loc.CLOSE_FAILOVER)) {
            await this.click(this.loc.CLOSE_FAILOVER)
        }
    }

    async openApp() {
        await this.launchApp()
        await this.pause(10)
    }

    async goToHomeScreen() {
        for (let index = 0; index < 5; index++) {
            await this.click(this.loc.BTN_CONTINUE)
            await this.pause(2)
        }
    }
}

export default new WelcomePage()