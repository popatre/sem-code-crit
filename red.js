function findTotal(numbers) {
    const total = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return total;
}

const numbers = [1, 100, 4, 50, 30, 2, 5];
const total = findTotal(numbers);

console.log(total);
