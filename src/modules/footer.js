class Footer {

    constructor(foot = 'thank you', goodbye = 'Come again!') {
        this.foot = foot;
        this.goodbye = goodbye;
    }

    logTry(){
        console.log(this.goodbye);
    }
}

export const footer = new Footer ('Thank you!');
