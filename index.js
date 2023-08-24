var counter = 0;
function count() {
    for (let x in myArr) {
        counter += myArr[x];
    }

    return counter;
}

let myArr = [1, 100, 4, 50, 30, 2, 5];
const total = count(myArr);

console.log(total);
