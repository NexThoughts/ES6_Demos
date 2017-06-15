/**
 * Created by chetan on 8/6/17.
 */
class O {
    constructor() {
        this.mx = 'initial';
    }
    get x() {
        return this.mx;
    }
    set x(val) {
        console.log('x changed');
        this.mx = val;
    }
}
let o = new O();
console.log(o.x); //initial
o.x = 'newval';
// x changed
console.log(o.x); //newval