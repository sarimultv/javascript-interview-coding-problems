function doSomething() {
  return new Promise((resolve, reject) => {
    console.log("did something before 200ms delay");

    let itIsTrue = false;

    if (itIsTrue) {
      setTimeout(() => {
        console.log("did something after 200ms delay");
        resolve(2);
      }, 200);
    } else {
      setTimeout(() => {
        console.log("could not do anything after 200ms delay");
        reject("this is from reject section");
      }, 200);
    }
  });
}

const promise = doSomething();

promise
  .then(function (result) {
    if (result === 2) {
      return result;
    } else {
      return result;
    }
  })
  .then(function (result) {
    console.log(result);
    return console.log(result + 3);
  })
  .catch(function (error) {
    return console.log(error);
  });
