const promise1 = Promise.resolve("this is from resolved promise");
const promise2 = Promise.reject("this is from rejected Promise");

Promise.allSettled([promise1, promise2])
  .then((result) => {
    console.log(result);
    result.forEach((item) => console.log(item.status, item.value, item.reason));
  })
  .catch((error) => console.log(error));
