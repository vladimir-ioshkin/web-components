class HelloButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => alert(`Hello ${this.innerHTML}`));
    }
}

customElements.define('hello-button', HelloButton, {extends: 'button'});

class ShowHello extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `<p><span>
            Hello, ${this.getAttribute('name')}
        </span></p>`
    }
}

customElements.define('show-hello', ShowHello);

let elem = document.createElement('div');
elem.append(template.content.cloneNode(true));

document.getElementById('template-btn').addEventListener('click', () => document.body.append(elem));