/*
8. Write a function that takes two arguments ( object , string) that returns true if the object contains the specified string as a key, and false otherwise. (Does the Object Contain a Given Key?)

keyFinder({ name: 'Rania', age: 37, id: 101 }, "address") ➞ false
keyFinder({ isProgrammer: true, city: 'Paris', hasKids: true }, "city") ➞ true

*/
const person = { 
    name: 'Rania', 
    age: 37, 
    id: 101 
}

function keyFinder(person) {
    return person.hasOwnProperty('age');
}
console.log(keyFinder(person));
