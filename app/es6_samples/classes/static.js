/**
 * Created by chetan on 8/6/17.
 */
//you can declare static functions
class Util {
static inc(x) { return x + 1 }
static dec(x) { return x - 1 }
}
console.log(Util.inc(3)); // 4
//it’s the same as placing them on the prototype object