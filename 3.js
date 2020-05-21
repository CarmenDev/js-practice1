// 1. Create a function to merge two arrays. This function should have 2 arguments: example :
// concat([4, 8, 9], [2, 6, 8]) ➞ [4, 8, 9, 2, 6, 8]

// Concat() string method                                                                                                                                                                                                        
// let people1 = ["A", "B", "C"];
// let people2 = ["D", "E", "F"];
// let people = people1.concat(people2);

// console.log(people);

let array = [4, 8, 9];
let array2 = [2, 6, 8];
function mergArray (a ,b){
   let array3 = [a + "," + b] ;
   console.log (array3);
}
mergArray(array, array2);