// let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let o = ["th","st","nd","rd"];

// for (let i = 0; i < colors.length ; i++) {
//   let suffix;
//   if (i+1 == 1) {
//     suffix = o[1];
//   } else if (i+1 == 2) {
//     suffix = o[2];
//   } else if (i+1 == 3) {
//     suffix = o[3];
//   }
//   console.log((i+1) + suffix + " choice is " + colors[i] + ".");
// }


// let fruits = ["Blue ", "Green", "Red", null, "Violet", "Indigo", "Yellow "];
// fruits.length = 10;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[1]); // undefined

// const letters = ["a", "b", "c"];
// const numbers = [1, 2, 3];

// const mixed = letters.concat(numbers);
// console.log(mixed);

// const letters = ["a", "b", "c"];

// const alpha = letters.concat(1, [[[2, 3]]]);
// console.log(alpha.flat(3));
// console.log(alpha);
// results in ['a', 'b', 'c', 1, 2, 3]



// const num1 = [1];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
// console.log(numbers.flat(1));
// const sga = numbers[1].push(4);
// console.log(sga);
// const sga = numbers[0].push(4);
// console.log(sga);


// results in [[1, 4], 2, [3]]


// console.log([4, 1].concat([2, 3])); 


// console.log([1, , 3].every((x) => x !== 5)); // true
// console.log([2, , 2].every((x) => x === 2)); // true



// const v=[1, [2], [3, [[4]]],[5,6]];
// function result(arr){
//     let output=[];
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//            output= output.concat(result(arr[i]));
//         }else{
//             output.push(arr[i]);
//         }
//     }
    
//           return output;
// }
// console.log(result(v));


var Arr = [1, [2], [3, [[4]]], [5, 6]];
var flattenedArr = Arr.reduce( (acc, val) => {
  return acc.concat(Array.isArray(val) ? flatten(val) : val);
}, []);
console.log(flattenedArr);

// const person={
//     firstname:'vijay',
//     lastname:'t',
//      fullname(){
//         return person.firstname+" "+person.lastname;
//     },
//      fullname(value){
//         const v=value.split('');
//         this.firstname=v[0];
//         this.lastname=v[1];

//     }
// };

// person.fullname="vishnu vinod";
// console.log(person);