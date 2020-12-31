function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result:' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let conbineValues: (a: number, b: number) => number;
conbineValues = add;
console.log(conbineValues(3, 6));

addAndHandle(10, 20, (res) => {
  console.log(res)
})
