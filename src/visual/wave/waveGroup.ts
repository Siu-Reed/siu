import { Wave } from "./wave";

export class WaveGroup {
    colors:Array<string> = ['rgba(175,132,115,0.6)', 'rgba(169,132,115,0.6)', 'rgba(196,180,171,0.6)', 'rgba(200,180,171,0.6)'];
    totalPoints:number = 7;
    waves:Array<null | any> = [];

    constructor() {
        this.colors.forEach((value, i) => {
            const wave = new Wave(
                i,
                this.totalPoints,
                value,
            );
            this.waves[i] = wave;
        });
    }

    resize(stageWidth:number, stageHeight:number) {
        this.waves.forEach((value) => {
            const wave = value;
            wave.resize(stageWidth, stageHeight);
        });
    }

    draw(ctx:CanvasRenderingContext2D) {
        this.waves.forEach((value) => {
            const wave = value;
            wave.draw(ctx);
        });
    }
}