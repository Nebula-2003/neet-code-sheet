/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        if (n === -1) return 1 / x;
        return (1 / x) * myPow(x, n + 1);
    }
    if (n === 1) return x;
    return x * myPow(x, n - 1);
};

// myPow(10, 2);
console.log("🚀 ~ file: pow.js:15 ~ myPow(2, 2);:", myPow(10, -2));
