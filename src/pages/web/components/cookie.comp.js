import Page from "../page.js";

class CookieComponent extends Page{

    get btnAcceptCookie() {
        return $('button=Got it')
    }

    async acceptCookie(){
        await this.click(this.btnAcceptCookie)
    }

}

export default new CookieComponent()
