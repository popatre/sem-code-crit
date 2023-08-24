# code-crit

-   via whiteboard.fi

-   discuss possible improvements to the code/refactors

## Points could include:

-   function naming
-   global/local variables/pure functions
-   var vs const/let
-   variable naming i.e. counter, x, myArr
-   for..in vs for..of on an array/uses
-   parameters/arguments - reusability of a function
-   refactor into reduce - possible discussion on reduce?

```
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
```

```
function findTotal(numbers) {
    const total = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return total;
}

const numbers = [1, 100, 4, 50, 30, 2, 5];
const total = findTotal(numbers);

console.log(total);

```
