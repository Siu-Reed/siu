import { Wave } from "./wave-object";

export class WaveGroup {
    colors:Array<string> = ['rgba(175,132,115,0.6)', 'rgba(169,132,115,0.6)', 'rgba(196,180,171,0.6)', 'rgba(200,180,171,0.6)'];
    totalPoints:number = 7;
    waves:Array<null | any> = [];

    constructor(
        public stageWidth : number,
        public stageHeight : number,
        public waveHeight : number | Array<number> = 1/4
    ) {
        this.colors.forEach((value, i) => {
            const wave = new Wave(
                i,
                this.totalPoints,
                value,
                this.stageWidth,
                this.stageHeight
            );
            this.waves[i] = wave;
        });
    }

    resize(waveHeight: number | Array<number> = 1/4):void {
        this.waves.forEach((value, i) => {
            if (typeof(waveHeight) === 'number') {
                value.resize(waveHeight);
            } else {
                value.resize(waveHeight[i])
            }
        });
    }

    draw(ctx:CanvasRenderingContext2D) {
        this.waves.forEach((value) => {
            value.draw(ctx);
        });
    }
}