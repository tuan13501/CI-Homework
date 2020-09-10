import { BaseComponent } from "./BaseComponent.js"
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
            <link rel="stylesheet" type="text/css" href="./css/task.css">
            <div class="task">
                <div id="content">${this.props.content}</div>
                <div id="is-completed">${this.props["is-completed"]}</div>
                <div id="date-modified">${this.props["date-modified"]}</div>
                <div id="btn-edit">Edit</div>
                <div id="btn-delete">Delete</div>
            </div>
        `;

        this.$btnDelete = this._shadowRoot.getElementById('btn-delete');
        this.$btnDelete.onclick = (event) => {
            //Xoá trên giao diện
            this.remove();
            console.log("Đã xóa task");
            //Xóa trong state của list
        }
    }
}

window.customElements.define('task-container', Task)