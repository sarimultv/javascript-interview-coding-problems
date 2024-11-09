function stringCompress(chars) {
  let idx = 0;
  let n = chars.length;

  for (let i = 0; i < n; i++) {
    let ch = chars[i];
    let count = 0;

    while (i < n && chars[i] === ch) {
      count++;
      i++;
    }

    if (count === 1) {
      chars[idx] = ch;
      idx++;
    } else {
      chars[idx] = ch;
      idx++;
      let str = count.toString();
      for (let dig of str) {
        chars[idx] = dig;
        idx++;
      }
    }
    i--;
  }
  chars.length = idx;
  return { idx, chars };
}

const chars = ["a", "b", "b", "c", "c", "c", "c"];

console.log(stringCompress(chars));
