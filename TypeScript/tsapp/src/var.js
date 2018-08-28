"use strict";
// var myName: string = "konark";
// var myAge: number = 26;
// var canVote: boolean = true;
// var anyThing: any = "anything";
// document.getElementById("root").innerHTML() = "my name is " + myName;
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return ("Hello, " +
        person.firstName +
        " " +
        person.middleInitial +
        " " +
        person.lastName);
}
var user = new Student("a", "b", "c");
document.body.innerHTML = greeter(user);
