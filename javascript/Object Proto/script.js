// Prototype Inheritance


let andhra_bank = {
    person1: {
        name:"suribabu",
        joinedIn: 2000
    },
    person2: {
        name:"diwakar",
        joinedIn: 2020
    }
}

let postOfficeStaff = {
    postalId: "553821",
    __proto__: andhra_bank   //Method 1 inherits all the bank1 staff props
}

let union_bank = {
    person4: {
        name: "apparao",
    }
}

/* when we log postOfficeStaff O/P is: 
postalId: "553821"
[[Prototype]]: Object
person1: {name: 'suribabu', joinedIn: 2000}
person2: {name: 'diwakar', joinedIn: 2020}
[[Prototype]]: Object

postOfficeStaff.person1 O/P is:
{name: 'suribabu', joinedIn: 2000}
*/

// Method 2

union_bank.__proto__ = andhra_bank;  // now union bank inherits all members of andhra bank

// Method 3

Object.setPrototypeOf(union_bank, postOfficeStaff);  // union_bank inherits props of postoff

/* If we log union_bank.postalId '553821' we can easily access prop*/


/* we doesn't have reverse default function in strings.. So here we are adding reverse to string prototype..

So whenever we call name.reverse it logs below message..

Similarly we can add for Array,Object prototypes also..

*/

String.prototype.reverse = function(){
    console.log(`Reversed String is: ${this.split('').reverse().join('')}`)
}


// we can create Object prototype so that array,object,class are of objects so that we can access with our variable..

let ipl_qteams = ["gt","csk","mi"];

Object.prototype.capitalFirst = function(){
    console.log(`${athis.map(item=>item[0].toUpperCase() + item.slice(1))}`);
} 

console.log(typeof ipl_qteams.capitalFirst());    // o/p: Gt,Csk,Mi