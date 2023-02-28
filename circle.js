const _radius = new WeakMap();

 export class Circle {    //export key word sends it out
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}