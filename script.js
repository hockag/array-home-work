const array = [1,2,3];
array[1] = 10;
console.log(array);
//1

const array1 = ['1', '2', '3'];
array1.push('4');
console.log(array1);
//2

const array2 = [1,2,3,4,5,6];

let sum = 0;

for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
}

console.log(sum);
//3


const array3 = [1,2,3];

for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}
//4

let strings = ["один", "два два", "три три три", "чотири чотири чотири чотири", "п'ять п'ять п'ять п'ять п'ять"];

for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
        console.log(strings[i]);
    }
}
//5

const numbers = [1,2,3,4,5,6,7,8,9,10];

let max = Math.max(...numbers);
console.log(max)
//6


let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        console.log(numbers2[i]);
    }
}