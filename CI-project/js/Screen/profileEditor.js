import { getCurrentUser } from "../Utilities.js";
import { BaseComponent } from "../BaseComponent.js";
import { saveCurrentUser } from "../../../Day-8/js/Utilities.js";

class profileEditor extends BaseComponent {
    constructor() {
        super();
        this.state = {
            errors: {
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
            },

            data: {
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
            },
            isLoading: true,
        }
    }
    saveProfile(oldProfile, newProfile) {
        let foundData = this.state.data.find(function (data) {
            return data.content == oldProfile;
        });
        foundData.content = newProfile;
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
        
        <form class="profile-editor">
        <input-wrapper class="name" label="Name" type="text" value="${this.state.data.name}"></input-wrapper>
        <input-wrapper class="avatar-link" label="Avatar Link" type="url" value="${this.state.data.avatarLink}"></input-wrapper>
        <input-wrapper class="cover-link" label="Cover Link" type="url" value="${this.state.data.coverLink}"></input-wrapper>
        <input-wrapper class="description" label="Description" type="text" value="${this.state.data.description}"></input-wrapper>
        <input-wrapper class="work-experience" label="Work Experience" type="text" value="${this.state.data.workExperience}"></input-wrapper>
        <input-wrapper class="web-reference" label="Web Reference" type="text" value="${this.state.data.webReference}"></input-wrapper>
        <input-wrapper class="job-title" label="Job" type="text" value="${this.state.data.jobTitle}"></input-wrapper>
        <input-wrapper class="date-modified" label="Date" type="text" value="${this.state.data.dateModified}"></input-wrapper>
        <input-wrapper class="location" label="Location" type="text" value="${this.state.data.location}"></input-wrapper>
        <input-wrapper class="followers" label="Followers" type="number" value="${this.state.data.followers}"></input-wrapper>
        <input-wrapper class="following" label="Following" type="number" value="${this.state.data.following}"></input-wrapper>
        <button id='save-profile'>Save</button>
        </form>
        `;
        this.$formProfileEditor = this._shadowRoot.querySelector('.profile-editor');
        this.$formProfileEditor.addEventListener('profile-editor', (event) => {
            this.saveProfile(event.detail.oldProfile, event.detail.newProfile)
        });
        let currentUser = getCurrentUser();
        console.log(currentUser);
        if (this.state.isLoading) {
            let profile = () => {
                let currentUser = getCurrentUser();
                this.state.data = currentUser;
                this.state.isLoading = false;
                this.setState(this.state);
            }
            profile();

        }
        console.log(this.$formProfileEditor);
        this.$formProfileEditor.onsubmit = async (event) => {
            event.preventDefault();
            // thêm dữ liệu vào firestore
            let data = {
                id: currentUser.id,
                dateModified: new Date().toISOString(),
                'name': this.$formProfileEditor.querySelector('.name').value,
                'avatarLink': this.$formProfileEditor.querySelector('.avatar-link').value,
                'coverLink': this.$formProfileEditor.querySelector('.cover-link').value,
                'description': this.$formProfileEditor.querySelector('.description').value,
                'workExperience': this.$formProfileEditor.querySelector('.work-experience').value,
                'webReference': this.$formProfileEditor.querySelector('.web-reference').value,
                'jobTitle': this.$formProfileEditor.querySelector('.job-title').value,
                'dateModified': this.$formProfileEditor.querySelector('.date-modified').value,
                'location': this.$formProfileEditor.querySelector('.location').value,
                'followers': this.$formProfileEditor.querySelector('.followers').value,
                'following': this.$formProfileEditor.querySelector('.following').value,
            }
            await firebase.firestore().collection('Users').doc(currentUser.id).update(data);
            saveCurrentUser(data);
        }
    }
}

window.customElements.define('profile-editor', profileEditor);