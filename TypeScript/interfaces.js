function fn(person) {
    return "hello " + person.fname + " " + person.lname;
}
var users = { fname: "konark", lname: "jha" };
console.log(fn(users));
