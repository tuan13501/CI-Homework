import {BaseComponent} from "./BaseComponent.js"
class Task extends BaseComponent {
    constructor() {
        // vì nội dung của 1 task do thuộc tính quyết định 
        // mà thuộc tính được truyền từ ngoài vào -> props
        super();
        this.props = {
            "content": '',
            "is-completed": false,
            "date-modified": null
        };
    }
    static get observedAttributes() {
        return ['content', 'is-completed', 'date-modified']
    }
    render() {
        this._shadowRoot.innerHTML = `
            <div class="task">
                <div id="content">${this.props.content}</div>
                <div id="is-completed">${this.props["is-completed"]}</div>
                <div id="date-modified">${this.props["date-modified"]}</div>
            </div>
        `;
        
    }
}
window.customElements.define('task-container', Task)