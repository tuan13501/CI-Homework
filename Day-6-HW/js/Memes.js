import { BaseComponent } from "./BaseComponent.js"
class Memes extends BaseComponent {
    constructor() {
        super();
        this.props = {
            "name": '',
            "image": '',
            "description": '',
            "date-modified": null,
        };
    }
    static get observedAttributes() {
        return ['name', 'image', 'description', 'date-modified'];
    }
    render() {
        this._shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./css/meme.css">
            <div class="meme">
                <img src="${this.props.image}" alt="img">
                <div class="info">
                    <h1 class="name">${this.props.name}</h1>
                    <p class="description">${this.props.description}</p>
                    <p class="date-modified">${this.props["date-modified"]}</p>
                </div>
            </div>
        `;
    }
}

window.customElements.define('meme-container', Memes);
export {Memes};