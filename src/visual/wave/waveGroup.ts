import { Wave } from "./wave";

export class WaveGroup {
    colors:Array<string> = ['rgba(175,132,115,0.6)', 'rgba(169,132,115,0.6)', 'rgba(196,180,171,0.6)', 'rgba(200,180,171,0.6)'];
    totalPoints:number = 7;
    waves:Array<null | any> = [];

    constructor(
        public stageWidth : number,
        public stageHeight : number,
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

    resize() {
        this.waves.forEach((value) => {
            const wave = value;
            wave.resize();
        });
    }

    draw(ctx:CanvasRenderingContext2D) {
        this.waves.forEach((value) => {
            const wave = value;
            wave.draw(ctx);
        });
    }
}