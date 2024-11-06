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

Promise.all([promise1, promise2, promise3])
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

// example of Promise
function promptForDishes() {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `<form method="dialog">
        <p>what will you choose?</p>
        <options>
        <select>rice</select>
        </options>

        <menu>
        <button type="submit" value="ok">Ok</button>
        <button value="cancel">Cancel</button>
        </menu>
        <form>`;

    dialog.addEventListener("close", () => {
      console.log(dialog);
      if (dialog.returnValue === "ok") {
        resolve(dialog.querySelector("select").value + "clicked ");
      } else {
        reject(new Error("user cancelled the dialog"));
      }
    });
    document.body.appendChild(dialog);
    dialog.showModal(); //showModal();
  });
}

promptForDishes()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
