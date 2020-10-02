import { BaseComponent } from "../BaseComponent.js";

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
            }

        }
    }
    saveProfile(oldProfile, newProfile) {
        // tìm task có content là oldProfile
        let foundData = this.state.data.find(function (data) {
            return data.content == oldProfile;
        });
        // gán lại content cho task vừa tìm được
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
        <button>Save</button>
        </form>
        `;
        this.$formProfileEditor = this._shadowRoot.querySelector('.profile-editor');
        this.$formProfileEditor.addEventListener('profile-editor', (event) => {
            this.saveProfile(event.detail.oldProfile, event.detail.newProfile)
        });
        console.log(this.$formProfileEditor);
        this.$formProfileEditor.onsubmit = async (event) => {
            event.preventDefault();
            let newProfile = {
                'name': this.$formProfileEditor.name.value,
                'avatarLink': this.$formProfileEditor.avatarLink.value,
                'coverLink': this.$formProfileEditor.coverLink.value,
                'description': this.$formProfileEditor.description.value,
                'workExperience': this.$formProfileEditor.work-experience.value,
                'webReference': this.$formProfileEditor.web-reference.value,
                'jobTitle': this.$formProfileEditor.job-title.value,
                'dateModified': this.$formProfileEditor.date-modified.value,
                'location': this.$formProfileEditor.location.value,
                'followers': this.$formProfileEditor.followers.value,
                'following': this.$formProfileEditor.following.value,
            }
            console.log(newProfile);
            this.setState(newProfile);
            await firebase.firestore().collection('Users').add({
                content: content,
                owner: currentUser.id,
                dateModified: new Date().toISOString(),

            });
        }
    }
}
window.customElements.define('profile-editor', profileEditor);