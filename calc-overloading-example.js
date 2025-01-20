
// Method OVerloading - In JavaScript, method overloading is not supported.
// Method overloading means having multiple methods with the same name but different parameters.
// Parameters can be different in terms of the number of parameters or the type of parameters.

class Calculation {
    // addition method with different number of parameters
    addition(num1, num2) {
        return num1 + num2;
    }
    // addition method with three parameters
    addition(num1, num2, num3) {
        return num1 + num2 + num3;
    }
    // addition method with different type of parameters
    addition(num1, num2, num3, num4) {
        return num1 + num2 + num3 + num4;
    }
}

var calc = new Calculation();
console.log(calc.addition(10, 20)); // 30
console.log(calc.addition(10, 20, 30)); // 60