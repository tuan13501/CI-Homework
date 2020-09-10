import {BaseComponent} from "./Basecomponent.js";

class List extends BaseComponent {
    constructor() {
        super();
        this.state = {
            list: [
                {name: 'Yêu nước =))', 
                image: 'data:image/png;base64,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',
                description: 'blabla',
                "date-modified": '2020/09/10'}
            ]
        };
    }

    render() {
        let html = '';
        for (let meme of this.state.list) {
            html += `<meme-container name="${meme.name}" image="${meme.image}" description="${meme.description}" date-modified="${meme["date-modified"]}"></meme-container>`;
        }

        this._shadowRoot.innerHTML = `
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="./css/list.css">
            <form id="form-add-meme">
                <input type="text" name="name" placeholder="Meme's name">
                <input type="text" name="image" placeholder="Paste image's link here">
                <input type="text" name="description" placeholder="Description">
                <button>Add meme</button>
            </form>
            <div class="list">
                ${html}
            </div>
        `;
    
        this.$formAddMeme = this._shadowRoot.getElementById('form-add-meme');
        this.$formAddMeme.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                name: this.$formAddMeme.name.value,
                image: this.$formAddMeme.image.value,
                description: this.$formAddMeme.description.value,
                "date-modified": new Date().toISOString()
            }
            this.state.list.push(newMeme);

            let $meme = document.createElement('meme-container');
            $meme.setAttribute('name', newMeme.name);
            $meme.setAttribute('image', newMeme.image);
            $meme.setAttribute('description', newMeme.description);
            $meme.setAttribute('date-modified', newMeme["date-modified"]);

            this.$list = this._shadowRoot.querySelector('.list');
            this.$list.appendChild($meme);
        }
    }
}

window.customElements.define('list-container', List);
export {List};