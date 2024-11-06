/**
 *
 * Mixin in JavaScript, it is not a build-in feature, rather it's a design pattern that
 * allows developers to reuse code by mixing in properties & methods from one Object
 * to another Object using Object.assign(targetObj, sourceObj) method
 *
 */

const objMixin = {
  firstName: "Laskar",
  sayHi() {
    console.log(`Hellow, ${this.firstName}`);
  },
};

//objMixin.sayHi();

class User {
  constructor(firstName) {
    this.firstName = firstName;
  }
}

console.log(User.prototype);

Object.assign(User.prototype, objMixin);

console.log(User.prototype);

const user = new User("Sarimul");

console.log(user.firstName);
user.sayHi();
