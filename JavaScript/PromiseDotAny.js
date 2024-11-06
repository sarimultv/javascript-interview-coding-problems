const promise1 = Promise.reject("It is from rejected Promise");
// const promise2 = Promise.reject("It is from rejected Promise");
// const promise3 = Promise.reject("It is from rejected Promise");

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("it is from 1st fulfilled Promise"), 1000);
});
const promise3 = Promise.resolve("it is from 2nd fulfilled Promise");

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
