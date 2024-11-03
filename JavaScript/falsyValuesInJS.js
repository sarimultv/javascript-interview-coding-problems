const values = [false, 0, null, undefined, NaN, "", true, 12, "hello", {}, []];

values.forEach((item) => {
  if (!item) {
    console.log(`${item} is falsy!`);
  } else {
    console.log(`${item} is not falsy.`);
  }
});
