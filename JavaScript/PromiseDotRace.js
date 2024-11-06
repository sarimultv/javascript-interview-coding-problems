const promise1 = new Promise((reject) => {
  setTimeout(reject, 200, "this is rejected");
});

// const promise1 = new Promise((resolve) => {
//   setTimeout(resolve, 100, "this is resolved1");
// });

const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, "this is resolved2");
});

Promise.race([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
