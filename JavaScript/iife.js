/**
 * IIFE - Immediately invoked function expressions
 *
 * function wrapped with a parentheses which signals JS engine to
 * treat it as a function expression
 * Trailing parentheses invokes the function expression immediately
 *
 * Pros: It is used for creating modular & encapsulated code by exposing
 * which is necessary and hiding which is not.
 *
 * Functions & variables declared inside the IIFEs are not accessable outside
 * the functions scope ensuring data privacy
 */

// (function greet() {
//   console.log(`Hi Sarimul`);
// })();

const iifiFunc = (function sayHi() {
  //console.log(`Hi Sarimul`);

  function privateFunc() {
    console.log("This is from private");
  }

  return {
    readName: function (firstName) {
      console.log(`Hi, ${firstName}`);
    },
    readPrivate: privateFunc,
  };
})();

iifiFunc.readName("laskar");
iifiFunc.readPrivate();
