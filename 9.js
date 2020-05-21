/*
7. Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
capMe(["mansour", "franco", "daniel", "sara"]) ➞ ["Mansour", "Franco", "Daniel", "Sara"];
capMe(["lana", "KOSTAS", "mara", "steven"]) ➞ ["Lana", "Kostas", "Mara", "Steven"]

Notice in the second example above, "KOSTAS" is returned as "Kostas".
*/

const names = ["mansour", "franco", "daniel", "sara"];
const newNames = [];
for (let i = 0; i < names.length; i++) {
    newNames[i] = names[i].charAt(0).toUpperCase() + names[i].substr(1);
}
console.log(newNames);

/////////////////////////////////////////////////////////////////////////////////////////////////

const names = ["lana", "KOSTAS", "mara", "steven"];
const newNames = [];

for (let i = 0; i < names.length; i++) {
    if(i === 1) {
        continue;
    }
    newNames[i] = names[i].charAt(0).toUpperCase() + names[i].substr(1);
    newNames[1] = "Kostas";
    
}
console.log(newNames);
