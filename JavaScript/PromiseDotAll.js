const promise1 = Promise.resolve("Hi, this is resolved");
const promise2 = 3;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(
    () => {
      resolve("from setTimeout api");
    },
    5000,
    "foo"
  );
});

Promise.all([])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

Promise.all([1, 2, 3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); // Promise is fulfilled

Promise.all([3, 2, 1, Promise.resolve("Promise is resolved")])
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); // Promise is resolved

Promise.all([3, 2, 1, Promise.reject("Promise is rejected")])
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); // Promise is rejected
