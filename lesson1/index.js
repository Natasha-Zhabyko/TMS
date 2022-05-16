function del (a, b) {
    return a / b;}

const five = del( 10, 2);

console.log (five)

function min (a, b) {
    return a - b;}

const eight = min( 10, 2);

console.log (eight)

const name = function (value) {
    if (value > 10) return 'error, number can not be grater then 10';
    if (value === 5) return 'error, number can not be grater then 10';
}