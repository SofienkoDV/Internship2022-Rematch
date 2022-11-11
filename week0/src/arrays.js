const myArray = [1, 10, 3, 6, 'ArrayElement'];

// 1. Log 3 and 6 elements from myArray to console
// Please, use more than on solution

// console.log(`3: ${}`);
// console.log(`6: ${}`);

console.log(`3: ${myArray[2]}`);
console.log(`6: ${myArray[3]}`);

console.log(`3: ${myArray.at(2)}`);
console.log(`6: ${myArray.at(3)}`);

console.log(`3: ${myArray.slice(2, 3)}`);
console.log(`6: ${myArray.slice(3, 4)}`);

console.log(`3: ${myArray.splice(2, 1)}`);
console.log(`6: ${myArray.splice(2, 1)}`);

// 2. Log type of each element

myArray.forEach((element) => {
    console.log('Type of element: ', typeof element);
});

// 3. Check if all elements in array is Number
// Should return Boolean

const isNumber = myArray.every((element) => typeof element === 'number');

console.log({ isNumber });

// 4. Check if at least one element is bigger than 5
// Should return Boolean

const isBiggerThanFive = myArray.some((element) => element > 5);

console.log({ isBiggerThanFive });

// 5. Create another variable that will include only elements that bigger than 5
// Should return another Array

const elementsBiggerThanFive = myArray.filter((element) => element > 5);

console.log({ elementsBiggerThanFive });

// 6. Multiply numbers of Array by 2
// Should return another Array

const multiplied = myArray
    .filter((element) => typeof element === 'number')
    .map((element) => element * 2);

console.log({ multiplied });

// 7. Calculate array sum

const sum = myArray
    .filter((element) => typeof element === 'number')
    .reduce((acc, element) => acc + element, 0);

console.log({ sum });

// 8. Sort array in ascending and descending order

const asc = [...myArray].sort((a, b) => a - b);

const desc = [...myArray].sort((a, b) => b - a);

console.log({ asc, desc });
