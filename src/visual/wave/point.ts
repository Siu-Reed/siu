export class Point {
    constructor(
        public index : number,
        public x : number,
        public y : number
    ) {}
    
    fixedY = this.y;
    speed = 0.035;
    cur = this.index;
    max = Math.random() * 30 + 10;
    
    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}