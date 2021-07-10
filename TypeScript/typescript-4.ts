/** TS 4 */

class Deprecated {
    /** @deprecated */
    static sayHi() {
        console.log('hi');
    }
}

// TS tells you it is deprecated
Deprecated.sayHi();

/** @deprecated *
 class ClassDeprecated {}

 // TS tells you it is deprecated
 new ClassDeprecated();

*/

let a = 10;
let b = 20;
let c = 30;

// Operators
a &&= b;
a ||= b;
a ??= c;

a += b;
a -= b;
a *= b;
a /= b;
a **= b;
a <<= b;


// Inference from constructor

class Student {
    // age is number type
    age;

    construtor() {
        this.age = 10;
    }

    // return type is number
    getDoubleAge() {
        return this.age * 2;
    }
}
