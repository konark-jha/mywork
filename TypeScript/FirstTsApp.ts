class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function fn(person: Person) {
  return "Hello " + person.firstName + " " + person.lastName;
}
let user = new Student("konark", "jha");

document.body.innerHTML = fn(user);
