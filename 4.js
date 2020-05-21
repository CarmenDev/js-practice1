// 2. Create a function that accepts an array and returns the last item in the array.
// getLast([1, 2, 3]) ➞ 3
// getLast(["cat", "rabbit", "penguin"]) ➞ "penguin"

let Array = [ 1, 2, 3, 4, 5];

function getLast(arrayLength) {
    console.log(arrayLength[arrayLength.length - 1]);
}

getLast(Array);
