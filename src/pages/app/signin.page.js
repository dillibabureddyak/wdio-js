import BasePage from "./base.page.js";
import { driver, $ } from '@wdio/globals'
import User from '../data/user.json' assert { type: "json" };

const SELECTORS = {
    ANDROID: {
        BTN_GOTO_SIGNIN: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]',
        TXT_USERNAME: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.EditText',
        TXT_PASSWORD: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[4]/android.widget.EditText',
        BTN_SIGNIN: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[7]/android.widget.Button'
    },
    IOS: {
        BTN_GOTO_SIGNIN: '//XCUIElementTypeOther[@name="Sign in"]',
        TXT_USERNAME: '//XCUIElementTypeOther[@name="main"]/XCUIElementTypeTextField',
        TXT_PASSWORD: '//XCUIElementTypeOther[@name="main"]/XCUIElementTypeSecureTextField',
        BTN_SIGNIN: '//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[7]',
    },
};

class SignInPage extends BasePage {

    constructor() {
        super()
        this.loc = driver.isAndroid ? SELECTORS.ANDROID : SELECTORS.IOS
    }

    async signIn() {
        await this.click(this.loc.BTN_GOTO_SIGNIN)
        await this.sendText(this.loc.TXT_USERNAME, User.username)
        await this.sendText(this.loc.TXT_PASSWORD, User.passwrod)
        await this.click(this.loc.BTN_SIGNIN)
        await this.pause(10)
    }
}

export default new SignInPage()