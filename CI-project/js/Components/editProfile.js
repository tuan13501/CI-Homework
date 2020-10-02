import { getCurrentUser } from "../Utilities.js";
import { BaseComponent } from "../BaseComponent.js"

class editProfile extends BaseComponent {
    constructor() {
        super();
        this.state = {

        }
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
        <button>Edit your profile</button>
        </div>
        `;
        this.$editProfile = this._shadowRoot.querySelector('edit-user-profile');
        this.$editProfile.onsubmit = async (event) => {
            event.preventDefault();
            let currentUser = getCurrentUser();

        }

    }
}
window.customElements.define('edit-user-profile', editProfile)
export {editProfile};