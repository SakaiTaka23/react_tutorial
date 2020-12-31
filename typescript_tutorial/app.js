function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var res = cb(result);
    console.log('res:' + res);
}
printResult(add(5, 12));
var conbineValues;
conbineValues = add;
console.log(conbineValues(3, 6));
addAndHandle(10, 20, function (res) {
    console.log(res);
    return res;
});
