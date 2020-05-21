/* 4. Create a function to Skip the Drinks with Too Much Sugar, this function takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar. Drinks that contain too much sugar (in this challenge) are:

Cola Fanta

skipSugarDrinks(["fanta", "cola", "water"]) ➞ [water] 
*/

const arr = ["fanta", "cola", "water"];
function drinks(arr){
    const result = arr.filter(erg => erg !== 'fanta' && erg !== 'cola');
    console.log(result);
}
drinks(arr);


