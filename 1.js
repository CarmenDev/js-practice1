/*1. Create a function to convert from json to object. This function should take one argument and return the object.*/
const data = `[
 {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 },
 {
   "userId": 1,
   "id": 2,
   "title": "quis ut nam facilis et officia qui",
   "completed": false
 },
 {
   "userId": 1,
   "id": 3,
   "title": "fugiat veniam minus",
   "completed": false
 },
 {
   "userId": 1,
   "id": 4,
   "title": "et porro tempora",
   "completed": true
 }
 ]`

 function example () {
     let obj = JSON.parse(data);
     console.log(typeof obj);
 }
 example();

 /*
 Other possibility:

 function convert(jsonString) {
     let con = JSON.parse(jsonString);
     console.log(typeof con)
 }
 convert(data);
 const person = {
     name: "rami",
     age: 34,
 }

 function convertToJson(jsonObj) {
     let con2 = JSON.stringify(jsonObj);
     console.log(typeof con2);
 }
 convertToJson(person);
 */