function addData() {
    firebase.firestore().collection('users').add({
        Firstname: document.getElementById('fname').value,
        Lastname: document.getElementById('lname').value,
        Email: document.getElementById('email').value,
        Phonex: Number(document.getElementById('phnum').value)
    });
}
async function readUsers() {
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        console.log(doc.data());
    }
}
async function update() {
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        await firebase.firestore().collection('users').doc(doc.id).update({
            Phonenumber: numberUpdate(doc.data().Phonenumber)
        });
    }
}
function numberUpdate(number) {
    let num = String(number);
    if (num.length <= 1) {
        num = '84' + num;
    }
    else {
        num = '84' + num.slice(2);
    }
    return Number(num);
}
async function deleteData() {
    let dictionary = [];
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        if (typeof (dictionary[`${doc.data().Lastname}`]) == 'number') {
        dictionary[`${doc.data().Lastname}`]++;}
        else {
            dictionary[`${doc.data().Lastname}`] = 1;
        }
    }
    for (let doc of result.docs) {
        if (dictionary[`${doc.data().Lastname}`] > 1) {

            await firebase.firestore().collection('users').doc(doc.id).delete();
        }
    }
}
// phần delete e tham khảo nên chưa hiểu lắm ạ, có gì a giải thích giúp em
