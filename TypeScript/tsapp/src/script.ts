interface Ifs {
  firstname: string;
  lname: string;
  sayHi: () => string;
}

var customer: Ifs = {
  firstname: "Tom",
  lname: "Hanks",
  sayHi: (): string => {
    return "hi there";
  }
};
console.log("Customer Obj");
console.log(customer.firstname);
console.log(customer.lname);
console.log(customer.sayHi());

var employee: Ifs = {
  firstname: "Jim",
  lname: "Blake",
  sayHi: (): string => {
    return "hello!!";
  }
};
console.log("employee Obj");
console.log(employee.firstname);
console.log(employee.lname);
console.log(employee.sayHi());
////////////////////////////////////////
interface person {
  age: number;
}

interface Musician extends person {
  instrument: string;
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.instrument);
/////////////////////////////////////////////////////

interface If1 {
  v1: number;
}
interface If2 {
  v2: number;
}

interface Child extends If1, If2 {}
var obj: Child = { v1: 100, v2: 200 };
console.log("value 1: " + obj.v1 + " value 2: " + obj.v2);
/////////////////////////////////////////////////////////////

class Car {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  disp(): void {
    console.log("Emgine is :" + this.engine);
  }
}
/////////////////////////////////////////////////////////////
