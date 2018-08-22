interface Person {
  fname: string;
  lname: string;
}

function fn(person: Person) {
  return "hello " + person.fname + " " + person.lname;
}
let users = { fname: "konark", lname: "jha" };

console.log(fn(users));
