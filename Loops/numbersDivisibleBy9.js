function numbersDivisibleBy9(input) {
let n1 = Number(input[0]);
let n2 = Number(input[1]);

let res = 0;
let output = '';

for (let i = n1; i <= n2; i++) {
    if (i % 9 === 0) {
        res += i;
        output += i + '\n';
        }
   }
console.log(`The sum: ${res}`);
console.log(output);
}

numbersDivisibleBy9(["100", "200"])
