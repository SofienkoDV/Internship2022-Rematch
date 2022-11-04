// 1. Write a function that accepts your firstName and lastName
// Should return 'I'm firstName lastName'

const sayWho = (firstName, lastName) => `I'm ${firstName} ${lastName}`;

console.log(sayWho('Denis', 'Sofienko'));

// 2. Write a function that accepts numbers and return their sum
// No limits for arguments count

function countSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(countSum(4, 5, 23));
console.log(countSum(10, 50, 212, 300, 22));
console.log(countSum(1, 2));

// 3. Write a function that count number of letters in provided string

const countLetters = (string, letter) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter++;
    }
  }
  return counter;
};

console.log(countLetters('Node developer', 'd'));

// 4. Write function that will return random integer in range that you provided

const getRandom = (start, end) =>
  Math.floor(Math.random() * (end - start + 1)) + start;

console.log(getRandom(0, 10));
console.log(getRandom(90, 200));
