import { Point } from "./point";

export class Wave {
    points : Array<null | any>;

    constructor(
        public index : number,
        public totalPoints : number,
        public color : string,
        public stageWidth : number,
        public stageHeight : number,
    ) { this.points = []; }

    resize():void {
        // const centerX = this.stageWidth * (1/2);
        const centerY = this.stageHeight * (1/4);
        const pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init(centerY, pointGap);
    }


    init(centerY:number, pointGap:number):void {
        for (let i = 0; i < this.totalPoints; i++) {
            this.points[i] = new Point(this.index + i, pointGap * i, centerY);
        }
    }
}