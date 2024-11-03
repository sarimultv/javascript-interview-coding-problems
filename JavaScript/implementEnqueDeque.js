let inputStack = [];
let outputStack = [];

function enque(inputStack, item) {
  return inputStack.push(item);
}

function deque(inputStack, outputStack) {
  if (outputStack.length <= 0) {
    while (inputStack.length > 0) {
      let elementToOutput = inputStack.pop();
      console.log("this is popped " + elementToOutput);
      outputStack.push(elementToOutput);
      console.log("this is pushed " + outputStack);
    }
  }
  //console.log("this is pushed " + outputStack);
  return outputStack.pop();
}

const item = [2, 3];
//console.log(inputStack);
console.log(enque(inputStack, item));
console.log(inputStack);

console.log(
  deque(inputStack, outputStack) + " has been pushed and popped from queue"
);
// console.log(inputStack);
// console.log(outputStack);
