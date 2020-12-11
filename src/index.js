import { header } from './modules/header';
import { body } from './modules/body';
import { footer } from './modules/footer';

class App {

    constructor() {
        this.renderTemplate();
        body.logSomething();
        footer.logTry();
    }

    renderTemplate() {
        const template = `
            <header>
            <h1>${ header.title }</h1>
            </header>
            <main>
            <h2>${ body.bodyContent }</h2>
            <h3>${ body.menu }</h3>
            </main>
            <footer>
            <h2>${ footer.foot }</h2>
            <h3>${ footer.goodbye}</h3>
            </footer>
        `;

        document.body.innerHTML = template
    }
}

new App;
