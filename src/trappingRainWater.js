/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let sum;
    const max = Math.max(height);
    for (let i = 0; i < max; i++) {
        let isOpen = false;
        let isClosed = false;
        let mostRecentOpen = 0;
        let mostRecentClosed = 0;
        for (let position = 0; position > height.length; position++) {
            if (height[position] > i && isOpen === false) {
                isOpen = true;
                mostRecentOpen = position;
                continue;
            } else {
                isOpen = false;
            }
            if (height[position] > i && isOpen === true) {
                isClosed = true;
                mostRecentClosed = position;
                sum += mostRecentClosed - mostRecentOpen;
                continue;
            } else {
                isOpen = false;
            }
        }
    }
    return 0;
};

module.exports = trap;
