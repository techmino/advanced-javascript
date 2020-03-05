// const number = [2, 4, 5, 6, 8];

// const output = [];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

const number = [2, 3, 4, 5, 6];
const output = number.filter(x => x < 5);
console.log(output);

//find
const numbering = [20, 30, 40, 50, 60];
const isThere = numbering.find(x => x > 30);
console.log(isThere);