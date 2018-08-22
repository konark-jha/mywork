var message: string = "HelloWorld";
console.log(message);

var global_var = 10;

class Class {
  cl_var = 12;
  assignNum(): void {
    var local_var = 14;
  }
}
console.log("Global_Var = " + global_var);
var obj = new Class();
console.log("Class variable = " + obj.cl_var);
