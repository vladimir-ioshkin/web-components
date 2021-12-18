class HelloButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => alert(`Hello ${this.innerHTML}`));
    }
}

customElements.define('hello-button', HelloButton, {extends: 'button'});