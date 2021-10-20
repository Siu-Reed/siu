interface PointShould {
    index: number;
    x: number;
    y: number;
}

export class Point implements PointShould {
    constructor (
        public index : number,
        public x : number,
        public y : number,
        public random : number
    ) {}
    
    fixedY = this.y;
    speed = 0.038;
    cur = this.index;
    max = this.random * 30 + 10;
    
    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}