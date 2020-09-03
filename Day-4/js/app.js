// // DOM
// class MemeContainer extends HTMLElement {
//     constructor() {
//         super();

//         this._shadowRoot = this.attachShadow({ mode: 'open' });
//         this._shadowRoot.innerHTML = `
//             <div class="meme-container">
//                 <div id="name"></div>
//                 <img src="">
//                 <div id="date-modified"></div>
//             </div>
//         `;
//     }

//     static get observedAttributes() {
//         return ['name', 'image', 'date-modified'];
//     }
//     /**
//      * Được gọi 1 lần duy nhất khi mà component được sinh ra trên trang web
//      */
//     connectedCallback() {
//         console.log('có 1 pé còm pô nần vừa ra đời')
//     }
//     /**
//      * Được gọi khi mà attribute của component thay đổi
//      * @param string name: tên thuộc tính thay đổi
//      * @param string oldValue: giá trị cũ của thuộc tính trước khi thay đổi
//      * @param string newValue: giá trị mới của thuộc tính
//      */
//     attributeChangedCallback(name, oldValue, newValue) {
//         if (name == 'name') {
//             this._shadowRoot.querySelector('#name').innerHTML = newValue;
//         }
//         else if (name == 'image') {
//             this._shadowRoot.querySelector('img').setAttribute('src', newValue);
//         }
//         else if(name == 'date-modified'){
//             this._shadowRoot.querySelector('#date-modified').innerHTML = newValue;
//         }
//     }
//     /**
//      * được gọi 1 lần duy nhất khi mà component đấy bị xóa đi
//      */
//     disconnectedCallback() {
//         console.log('một cụ già còm pô nần vừa mất đi');
//     }
// }
// window.customElements.define('meme-container', MemeContainer);
/*
Lý thuyết: vòng đời của 1 conponent (lifecycle)
- 3 giai đoạn
    sinh ra
    lớn lên
    mất đi
- Quy ước:
    props: những thứ truyền từ ngoài vào trong component
    state: những thứ có sẵn trong component, không truyền từ ngoài vào 

*/

import "./Task.js";
