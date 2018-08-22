var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function fn(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student("konark", "jha");
document.body.innerHTML = fn(user);
