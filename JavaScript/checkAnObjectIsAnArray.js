const checkArrayOrNot = (param) => {
  if (typeof param === "string") {
    return param + " is a string";
  } else {
    if (Object.prototype.toString.call(param) === "[object Array]") {
      return (
        param +
        " is an object of type " +
        Object.prototype.toString.call(param) +
        Object.prototype
      );
    }
  }
};

let param = [{ name: "Sarimul" }];

console.log(checkArrayOrNot(param));
