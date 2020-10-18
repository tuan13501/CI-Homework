function arr_diff(a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
        if(a1[i]== " "){
            delete a1[i];
        }
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } 
        else if (a2[i] == " ") {
            delete a2[i];
        }
        else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}
let a1= prompt('mang 1' ,[]);
let a2 = prompt('mang 2', []); 
console.log(arr_diff(a1,a2));