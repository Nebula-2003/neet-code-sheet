const trap = require("../src/trappingRainWater.js");

const testCases = [
    {
        inputs: [1, 2],
        expected: 3,
    },
    {
        inputs: [-1, 1],
        expected: 0,
    },
    {
        inputs: [0, 0],
        expected: 0,
    },
];

testCases.forEach(({ inputs, expected }) => {
    test(`trap ${inputs} to equal ${expected}`, () => {
        expect(trap(inputs)).toBe(expected);
    });
});
