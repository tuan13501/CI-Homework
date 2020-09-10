import { BaseComponent } from "./BaseComponent.js";
class List extends BaseComponent {
    constructor() {
        super();

        this.state = {
            tasks : [
                { "content": "đi học", "is-completed": true, "date-modified": "2020/09/07" },
                { "content": "đi chơi", "is-completed": true, "date-modified": "2020/09/07" },
                { "content": "đi ngủ", "is-completed": true, "date-modified": "2020/09/07" },
                { "content": "đi ăn", "is-completed": true, "date-modified": "2020/09/07" }
            ]
        }

    }

    render() {
        let html = "";
        for(let task of this.state.tasks) {
            html += `<task-container content="${task.content}" is-completed="${task["is-completed"]}" date-modified="${task["date-modified"]}"></task-container>`
        }
        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./css/task.css">
        <form id="form-add-tasks">
        <textarea name="content" placeholder="Enter content here"></textarea>
        <input type="datetime-local" name="dateModified" placeholder="Enter Date">
        <button>Add task</button>
        </form>
        <div class="list">
            ${html};
        </div>
        `;
        this.$formAddTask = this._shadowRoot.getElementById('form-add-tasks');
        this.$formAddTask.onsubmit = (event) => {
            event.preventDefault();
            let newTask = {
                "content": this.$formAddTask.content.value,
                "is-completed": false,
                "date-modified": this.$formAddTask.dateModified.value,
    
            }
            //cách 1
            // this.state.tasks.push(newTask);
            // this.render();
            // this.componentDidUpdate();
            //cách 2
            // this.setState({
            //     tasks:[
            //         ...this.state.tasks,
            //         newTask
            //     ]
            // })
            let $task = document.createElement('task-container');
            $task.setAttribute('content', newTask.content);
            $task.setAttribute('is-completed', newTask["is-completed"]);
            $task.setAttribute('date-modified', newTask["date-modified"]);
            //appen task vào list
            this.$list = this._shadowRoot.querySelector('.list');
            this.$list.appendChild($task);
            console.log("đã thêm 1 task")
        }
    }
}
window.customElements.define('list-container', List);

//state: là những dữ liệu bản thân component có sẵn (ko truyền từ ngoài vào)
//props: là những dữ liệu được truyền từ ngoài vào