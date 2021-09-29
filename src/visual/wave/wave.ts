export class Wave {
    points : Array<null | any>;
    
    constructor(
        public index : number,
        public totalPoints : number,
        public color : string
        ) {
            this.points = [];
        }

    resize(
        stageWidth: number,
        stageHeight: number
        ) {

        this.centerX = stageWidth * (1/2);
        this.centerY = stageHeight * (1/4);

        this.pointGap = stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init() {
        for (let i = 0; i < this.totalPoints; i++) {
            this.points[i] = new Point(this.index + i, this.pointGap * i, this.centerY);
        }
    }
}