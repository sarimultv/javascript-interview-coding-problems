function factorialOfNum(num) {
  //   let fact = 1;
  //   for (let i = 0; i < num; i++) {
  //     fact = fact * (num - i);
  //   }
  //   return fact;

  if (num === 0 || num === 1) {
    debugger;
    return 1;
  } else {
    debugger;
    return num * factorialOfNum(num - 1);
  }
}

const num = 3;

console.log(factorialOfNum(num));
