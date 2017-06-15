/**
 * Created by chetan on 15/6/17.
 */
function f(x, ...y) {
    // y is an Array
    return x * y.length;
}
f(3, "hello", true) == 6