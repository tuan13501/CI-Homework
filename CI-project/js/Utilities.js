export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('current-user'));
}
export function getDataFromDocs(docs) {
    let data = [];
    docs.forEach(function (doc) {
        data.push(getDataFromDoc(doc));
    });
    return data;
}

// trả về một object
export function getDataFromDoc(doc) {
    let data = doc.data();
    data.id = doc.id;
    return data;
}
export function setCurrentUser(currentUser) {
    localStorage.setItem('current-user', JSON.stringify(currentUser));
}
// export function serCurrentUser(currentUser) {
//     localStorage.setItem('current-user',)
// }