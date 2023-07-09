// whenever an object wants to use method of another object then we can use call, apply, bind inbuilt functions.

let person1 = {
    fname: "suriya",
    lname: "peddinti",
    fullName: function(age, place){
        return `${this.fname}  ${this.lname} ${age} ${place}`
    }
}

let person2 = {
    fname: "rohit",
    lname: "sharma"
}

console.log(person1.fullName.call(person2, 40, "bombay"))

// apply is same as call but we pass parameters in an array
console.log(person1.fullName.apply(person2, [42, "vizag"]))

// bind returns a function instead of immediate invoking of a function like call and apply
let res = person1.fullName.bind(person2, 32, "bezawada")

console.log(res())
