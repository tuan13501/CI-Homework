var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);

let $app = document.getElementById('app');
window.router.on('/editor', function () {
    $app.innerHTML = '<profile-editor></profile-editor>';
}).resolve();
