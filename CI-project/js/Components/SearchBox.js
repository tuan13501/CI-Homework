import { getDataFromDoc, getDataFromDocs } from "../Utilities.js"
import { BaseComponent } from "../BaseComponent.js";

class SearchBox extends BaseComponent {
    constructor() {
        super();

    }
    render() {
        this._shadowRoot.innerHTML = /*html*/ `
    <form class="search-box">
    <input type="text" placeholder="search" id="input-search"> 
    <ul id="pastComments2"></ul>
    <button><id="loadButton">Search</button>         
    </form>`;
        this.$searchBox = this._shadowRoot.querySelector('.search-box');
        this.$searchBox.onsubmit = async (event) => {
            event.preventDefault();
            let name = this._shadowRoot.querySelector('#input-search').value;
            // var firestore = firebase.firestore();
            // var showat2 = document.querySelector("#pastComments2");
            // var docRef = firestore.collection("users");
            // var inputTextField = document.querySelector("#input-search");
            //     await docRef.get()
            //         .then(snapshot => {
            //             snapshot.forEach(doc => {
            //                 const myData = doc.data();
            //                 if (myData.name == inputTextField.value) {

            //                     showat2.innerHTML += myData.name;
            //                     inputTextField.innerHTML = " ";
            //                 }
            //                 console.log(myData);
            //             });
            //         }).catch(function (error) {
            //             console.log("error: ");
            //         });
            let response = await firebase.firestore().collection('users').where('name', '==', name).get()
            let owner = getDataFromDocs(response);
            for (let x of owner) {
                console.log(x.id)
            } 
    }
}
}
window.customElements.define('search-bar', SearchBox);