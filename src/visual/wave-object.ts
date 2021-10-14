import { Point } from "./wave-point";

export class Wave {
    points : Array<Point>;

    constructor(
        public index : number,
        public totalPoints : number,
        public color : string,
        public stageWidth : number,
        public stageHeight : number,
    ) { this.points = []; }

    resize(waveHeight: number):void {
        // const centerX = this.stageWidth * (1/2);
        const centerY = this.stageHeight * waveHeight;
        const pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init(centerY, pointGap);
    }


    init(centerY:number, pointGap:number):void {
        for (let i = 0; i < this.totalPoints; i++) {
            this.points[i] = new Point(this.index + i, pointGap * i, centerY);
        }
    }

    
    draw(ctx:CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 0; i < this.totalPoints; i++) {
            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);

            prevX = this.points[i].x;
            prevY = this.points[i].y;

            if (i > 0 && i < this.totalPoints - 1) {
                this.points[i].update();
            }
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}