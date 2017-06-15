/**
 * Created by chetan on 15/6/17.
 */
function f(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}
console.log(f(3));

