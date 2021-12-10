import { Wave } from "./wave-object";

export class WaveGroup {
    colors:Array<string> = [
        '#002e31', '#8c78693b',
        '#004549', '#a091823b',
        '#005f65', '#c8b9aa3b',
        '#008a93', '#d2dc9650'
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

        console.log('뉴 옵젝');
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