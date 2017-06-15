/**
 * Created by chetan on 4/6/17.
 */
// Expression bodies
var evens = [2, 4, 6, 8, 10];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

console.log(odds);
// -> [3, 5, 7, 9, 11]

console.log(nums);
// -> [2, 5, 8, 11, 14]

var pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log(pairs);
// Statement bodies
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});