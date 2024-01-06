const OPEN_BRACKETS = ["[", "{", "("];
const CLOSE_BRACKETS = ["]", "}", ")"];

/**
 * @param {string} s
 * @return {boolean}
 */
const isOpener = (char) => OPEN_BRACKETS.includes(char);

/**
 * @param {string} s
 * @param {string}
 * @return {boolean}
 */
const isMatch = (opener, closer) => OPEN_BRACKETS.findIndex((e) => e === opener) === CLOSE_BRACKETS.findIndex((e) => e === closer);

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (input) {
    console.log("🚀 ~ file: valid-parentheses.js:22 ~ isValid ~ input:", input);
    let stack = [];
    let isValidBool = true;
    for (let i = 0; i < input.length; i++) {
        const s = input[i];
        if (isOpener(s)) {
            stack.push(s);
        } else {
            if (!stack.length) return false;
            const recentMost = stack.pop();
            if (!isMatch(recentMost, s)) return false;
        }
    }
    if (stack.length !== 0) return false;
    return isValidBool;
};

console.log("🚀 ~ file: valid-parentheses.js:36 ", isValid("["));
