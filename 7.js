/* 
5. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (222) 222-222). Don't forget the space after the closing parenthesis.
formatPhoneNumber([0, 1, 5, 7, 5, 5, 4, 4, 6, 8]) ➞ "(015) 755-4468"
*/

const arr = [0, 1, 7, 6, 5, 5, 8, 8, 9, 2];

function formatPhoneNumber(arr){
    result = "(" + arr[0]+arr[1]+arr[2]+arr[3]+")"+ " "+ arr[4]+arr[5]+arr[6]+ " " +arr[7]+arr[8]+arr[9];
    console.log(result);
}
formatPhoneNumber(arr);