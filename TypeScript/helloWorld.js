var message = "HelloWorld";
console.log(message);
var global_var = 10;
var Class = /** @class */ (function () {
    function Class() {
        this.cl_var = 12;
    }
    Class.prototype.assignNum = function () {
        var local_var = 14;
    };
    return Class;
}());
console.log("Global_Var = " + global_var);
var obj = new Class();
console.log("Class variable = " + obj.cl_var);
