import { getCurrentUser, renderID } from "../Utilities.js";
import { BaseComponent } from "../BaseComponent.js";
const style = /*html*/ `
<style>
</style>
`
class editProfile extends BaseComponent {
  constructor() {
    super();
    this.state = {
      error: {
        'cover': '',
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
        'cover': '',
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
  static get observedAttributes() {
    return ['name', 'avatarLink', 'coverLink', 'description', 'workExperience', 'webReference', 'jobTitle', 'label', 'dateModified', 'location', 'followers', 'following'];
  }
  render() {
    this._shadowRoot.innerHTML = /*html*/`
  ${style}
  <div class="edit-user-profile">
               <div class="section-1-1">
                        <p class="cover-error">${this.state.error.cover}</p>
                        <progress value="0" max="100" class="cover-uploader" style="display:none"></progress>
                        <form class="upload-cover">
                            <label for="cover">Project cover</label><br>
                            <input type="file" class="cover" name="cover">
                        </form>
                        <img src="${this.state.data.cover}" alt="cover">
                    </div>
  <button><a href="#!/editor">Edit your profile</a></button>
  </div>
        `;
    this.$editProfile = this._shadowRoot.querySelector('.edit-user-profile');
    this.$editProfile.onsubmit = async (event) => {
      event.preventDefault();
      let response = await firebase.firestore().collection('users').where('owner', '==', currentUser.id).get();
      if (!response.empty) {
        router.navigate('/editor');
      }
    }

    let coverUploader = this._shadowRoot.querySelector('.cover-uploader');
    let coverUploadButton = this._shadowRoot.querySelector('.cover');
    coverUploadButton.onchange = (e) => {
      let file = e.target.files[0];

      let currentUser = getCurrentUser();

      let storageRef = firebase.storage().ref(`${currentUser.id}/project/cover/${renderID()}.${file.name.split('.')[1]}`);

      let task = storageRef.put(file);

      let that = this;

      coverUploader.style = "display:";

      task.on('state_changed',
        function progress(snapshot) {
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (percentage == 100) percentage = 0;
          coverUploader.value = percentage;
        },
        function error(err) {

        },
        async function complete() {
          coverUploader.style = "display:none";
          let imageLink = await storageRef.getDownloadURL();
          that.state.data.cover = imageLink;
          that.state.error.cover = '';

          // let title = that._shadowRoot.querySelector('.title').value;
          // let description = that._shadowRoot.querySelector('.description').value;
          // let tag = [];
          // for (let x of that._shadowRoot.querySelector('.choose-tag').elements['tag']) {
          //   if (x.checked) tag.push(x.value);
          // }

          // that.state.data.description = description;
          // that.state.data.title = title;
          // that.state.data.tag = tag;

          that.setState(that.state);

          // for (let x of tag) {
          //   that._shadowRoot.querySelector(`.${x}`).checked = true;
          // }
        }
      );
    };
  }
}
window.customElements.define('edit-user-profile', editProfile);
