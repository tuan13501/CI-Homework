import { getCurrentUser } from "../Utilities.js";
import { BaseComponent } from "../BaseComponent.js"

class editProfile extends BaseComponent {
    constructor() {
        super();
        this.props = {
            'name': '',
            'avatarLink': '',
            'coverLink': '',
            'description': '',
            'workExperience': '',
            'webReference': '',
            'jobTitle': '',
            'dateModified': '',
            'location': '',
            'followers': '',
            'following': '',
        }
    }
    static get observedAttributes() {
        return ['name', 'avatarLink', 'coverLink', 'description', 'workExperience', 'webReference', 'jobTitle', 'label', 'dateModified', 'location', 'followers', 'following'];
    }
    render() {
        this._shadowRoot.innerHTML = /*html*/`
        <div class="edit-user-profile">
        <a href="#!/editor">Edit your profile</a>
        </div>
        `;
        this.$editProfile = this._shadowRoot.querySelector('.edit-user-profile');
        this.$editProfile.onsubmit = async (event) => {
            event.preventDefault();
            // let response = await firebase.firestore().collection('users').where('owner', '==', currentUser.id).get();
            // if (!response.empty) {
            //     router.navigate('/editor');
            // }
        }

    }
}
window.customElements.define('edit-user-profile', editProfile)
export {editProfile};