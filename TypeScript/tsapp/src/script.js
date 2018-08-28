"use strict";
var customer = {
    firstname: "Tom",
    lname: "Hanks",
    sayHi: function () {
        return "hi there";
    }
};
console.log("Customer Obj");
console.log(customer.firstname);
console.log(customer.lname);
console.log(customer.sayHi());
var employee = {
    firstname: "Jim",
    lname: "Blake",
    sayHi: function () {
        return "hello!!";
    }
};
console.log("employee Obj");
console.log(employee.firstname);
console.log(employee.lname);
console.log(employee.sayHi());
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.instrument);
var obj = { v1: 100, v2: 200 };
console.log("value 1: " + obj.v1 + " value 2: " + obj.v2);
/////////////////////////////////////////////////////////////
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Emgine is :" + this.engine);
    };
    return Car;
}());
/////////////////////////////////////////////////////////////
