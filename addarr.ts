const numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(`The sum is: ${sum}`);
