/*
6. Write a function that returns the number of users in a chatroom based on the following rules:
- If there is no one, return "no one online".
- If there is 1 person, return "[user1] online".
- If there are 2 people, return [user 1] and [user 2] online".
- If there are n>2 people, return the first two names and add "and n-2 more online".
*/

let members = ['John', 'Sarah'/* , 'Lucas', 'Franco' */];
function showOnline (a) {
    console.log(a.length);
    switch (a.length) {
        case 0 :
            console.log('no one online');
            break;
        case 1 :
            console.log(`${a[0]}is online`);
            break;
        case 2 :
            console.log(`${a[0]} and ${a[1]} are online`);
            break;
        default:
            let b = a.length - 2;
            console.log(`${a[0]} and ${a[1]} are online and ${b}  more online`);
            break; 
    }
}
showOnline(members);