function findTotal(numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

const numbers = [1, 100, 4, 50, 30, 2, 5];
const total = findTotal(numbers);

console.log(total);
