// 3. Create a function that takes an array and a string as arguments and return the index of the string.
// findIndex(["Hi", "FBW6", "DCI", "Hamburg"], "FBW6") ➞ 1

let school = ["Hi", "FBW6", "DCI", "Hamburg"];
function getIndex (array, string) {
    let result;
    array.forEach(function (element, index)  {
        element === string ? result = index : ''  ; 
    });
    return result;
}
console.log(getIndex(school,"FBW6"));