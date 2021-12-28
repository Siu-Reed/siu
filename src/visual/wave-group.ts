import { Wave } from "./wave-object";

export class WaveGroup {
    colors:Array<string> = [
        '#a3b8dd50', '#005cff',
        '#a3b8dd50', '#0050dc',
        '#a3b8dd50', '#0047c4',
        '#a3b8dd50', '#003ca6'
    ];
    totalPoints:number = 7;
    waves:Array<null | any> = [];
    randoms:Array<Array<number>> = this.colors.map(() => {
        const waveRandoms = [];
        for (let i = 0; i < this.totalPoints; i++) {
            waveRandoms[i] = Math.random();
        }
        return waveRandoms;
    });

    constructor(
        public stageWidth : number,
        public stageHeight : number,
        public waveHeights : Array<number>,
    ) {
        this.colors.forEach((value, i) => {
            const wave = new Wave(
                i,
                this.totalPoints,
                value,
                this.stageWidth,
                this.stageHeight,
                this.randoms[i]
            );
            this.waves[i] = wave;
        });
    }

    resize(waveHeights: Array<number> = this.waveHeights):void {
        this.waves.forEach((wave, i) => {
            wave.resize(waveHeights[i]);
        });
    }

    draw(ctx:CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waves.forEach((wave) => {
            wave.draw(ctx);
        });
    }

}