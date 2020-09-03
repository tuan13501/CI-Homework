import { BaseComponent } from "./BaseComponent.js";
class Manga extends BaseComponent {
    constructor() {
        super();
        this.props = {
            "image": "",
            "name": '',
            "views": "",
            "likes": "",
            "status": "",
        };
    }
    static get observedAttributes() {
        return ['image', 'name', 'views', 'likes', 'status']
    }
    render() {
        this._shadowRoot.innerHTML = `
            <div class="manga">
                <img src="${this.props["image"]}" width="300px" height="450px"/>
                <div class="name">${this.props["name"]}</div>
                <div class="views">"Views: ${this.props["views"]}"</div>
                <div class="likes">"Likes: ${this.props["likes"]}"</div>
                <div class="status">"Status: ${this.props["status"]}"</div>
            </div>
        `;
    }
}
window.customElements.define("manga-container", Manga);
