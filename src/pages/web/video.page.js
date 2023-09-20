import { $ } from '@wdio/globals'
import Page from './page.js';

class VideoPage extends Page {

    get txtVideoTitle() {
        return $('.vjs-title-text div')
    }

    get btnBigPlay() {
        return $('[aria-label="play video"]');
    }

    get btnVidePlayerPlay() {
        return $('.vjs-play-control.vjs-control.vjs-paused');
    }

    get btnVidePlayerPause() {
        return $('.vjs-play-control.vjs-control.vjs-playing');
    }

    get btnVidePlayerPrevious() {
        return $('.mol-previous-control');
    }

    get btnVidePlayerNext() {
        return $('.mol-skip-control');
    }

    get btnVideoPlayerVolume() {
        return $('.vjs-volume-menu-button')
    }

    get btnVideoPlayerVideoTotalDuration() {
        return $('.vjs-duration-display')
    }

    get btnVideoPlayerVideoCurrentDuration() {
        return $('.vjs-current-time-display')
    }

    get videoPlaying() {
        return $('.vjs-has-started')
    }

    open() {
        return super.open('video/index.html');
    }


    async bigPlayVideo() {
        await this.click(this.btnBigPlay)
    }

    async playVideo() {
        await this.addPlaying.waitForDisplayed({ timeout: 30000, reverse: true })
        await this.click(this.btnVidePlayerPlay)
        await this.videoPlaying.waitForDisplayed({ timeout: 30000})
    }

    async pauseVideo() {
        await this.waitForVideToPlay()
        await this.click(this.btnVidePlayerPause)
        await this.btnVidePlayerPlay.waitForDisplayed({ timeout: 3000})
    }

    async nextVideo() {
        await this.click(this.btnVidePlayerNext)
        await this.waitForVideToPlay()
    }

    async previousVideo() {
        await this.click(this.btnVidePlayerPrevious)
        await this.waitForVideToPlay()
    }

    async muteUnmuteVideo(){
        await this.click(this.btnVideoPlayerVolume)
    }

    async videoTitle() {
        await this.txtVideoTitle.getText()
    }

    async waitForVideToPlay(){
        await this.videoPlaying.waitForDisplayed({ timeout: 40000})
        await browser.pause(5000)
        await this.videoPlaying.waitForDisplayed({ timeout: 40000})
        await browser.pause(2000)
    }
}

export default new VideoPage();
