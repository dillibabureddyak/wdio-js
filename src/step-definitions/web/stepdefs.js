import { Given, When } from '@wdio/cucumber-framework';

import VideoPage from '../../pages/web/video.page.js';
import CookieComponent from '../../pages/web/components/cookie.comp.js';

Given(/^I was on daily mail video page$/, async () => {
    await VideoPage.open()
    await CookieComponent.acceptCookie()
});

When(/^I click play to play the video$/, async () => {
    await VideoPage.bigPlayVideo()

});

When(/^I click pause to pause  the video$/, async () => {
    await VideoPage.pauseVideo()
});

When(/^I click forward to forward the video$/, async () => {
    await VideoPage.nextVideo()
});

When(/^I click backward to backward the video$/, async () => {
    await VideoPage.previousVideo()
});

When(/^I click mute to mute the video$/, async () => {
    await VideoPage.muteUnmuteVideo()
});

When(/^I click umute to umute the video$/, async () => {
    await VideoPage.muteUnmuteVideo()
});

When(/^I see next video plays when current video finish$/, async () => {
    await VideoPage.waitForVideToPlay()
});

