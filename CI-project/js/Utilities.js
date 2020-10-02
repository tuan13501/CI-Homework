export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('current-user'));

}