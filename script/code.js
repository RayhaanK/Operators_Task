let first_number = 15; 
let second_number = 17;

// i commented the code out just to make sure the new value doesnt carry over to the next option :)

// First Option
[first_number, second_number] = [second_number, first_number]
console.log(first_number);
console.log(second_number);

// Second Option
// first_number = first_number + second_number;
// second_number = first_number - second_number;
// first_number = first_number - second_number;
// console.log(first_number);
// console.log(second_number);

// Third Option
let thirdNumber;
// thirdNumber = first_number;
// first_number = second_number;
// second_number = thirdNumber;
// console.log(first_number);
// console.log(second_number);

// I tried using an if statement too which seemed to work
// if (first_number === 15) {
//     first_number = 17;
//     console.log(first_number);
// } else {
//     console.log(first_number);
// }

// if (second_number === 17) {
//     second_number = 15;
//     console.log(second_number);   
// } else {
//     console.log(second_number);
// }