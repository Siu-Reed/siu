export class PrismSpec {
    
    ratio = window.devicePixelRatio;    
    rad = Math.PI/180;
    angle = 360/this.side;
    lengthA = this.width / (Math.tan(this.rad * this.angle/2) * 2);
    lengthB = this.width / (Math.sin(this.rad * this.angle/2) * 2);
    lengthC = (this.width / (Math.sin(this.rad * this.angle/2) * 2)) * Math.sin(this.rad * this.angle)
    rotationDeg = this.rotationDegHandle();

    constructor(
        public width:number,
        public height:number,
        public side:number,
        public colors:Array<string>,
        public color:string
    ) {
    }

    rotationDegHandle() {
        if (this.side % 2 === 0) {
            if (this.side % 4 === 0) {
                return this.angle/2;
            } else {
                return 0;
            }
        } else {
            return -90;
        }
    }

    prismContainerStyle() {
        return ({
            width: `${this.lengthA*2}em`,
            height: `${this.lengthA*2}em`
        });
    }

    polygonContainerStyle() {
        return {
            transform : `rotateZ(${this.rotationDeg}deg) translateZ(${this.height}em)`
        }
    }

    polygonContentsStyle () {
        return {
            transform : `translate(-50%, -50%) rotateZ(${this.rotationDeg * -1}deg)`
        }
    }

    polygonMaker(cvs:HTMLCanvasElement) {
        cvs.style.width = `${this.lengthB * 2}em`;
        cvs.style.height = `${this.lengthB * 2}em`;
        cvs.style.position = "absolute";
        cvs.style.top = `${this.lengthA - this.lengthB}em`;
        cvs.style.left = `${this.lengthA - this.lengthB}em`;
        cvs.style.borderRadius = "100%";

        cvs.width = this.lengthB * 2 * 16 * this.ratio;
        cvs.height = this.lengthB * 2 * 16 * this.ratio;

        const ctx = cvs.getContext('2d');
        if (!ctx) return;
        
        ctx.scale(this.ratio, this.ratio);
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.translate(this.lengthB*16, this.lengthB*16);
        
        for (let j = 0; j <= this.side; j++) {
            const x = this.lengthB*16 * Math.cos((Math.PI/180) * this.angle * j);
            const y = this.lengthB*16 * Math.sin((Math.PI/180) * this.angle * j);

            (j === 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    squaresStyles(i: number) {
        return {
            width : `${this.width}em`,
            height : `${this.height}em`,
            left : `${(this.lengthA * 2 - this.width)/2}em`,
            top : `${(this.lengthA * 2 - this.height)/2}em`,
            background : `${this.colors[i%this.colors.length]}`,
            transform : `
                rotateZ(${this.angle * i}deg)
                translateY(${this.height/2 + this.lengthA}em)
                rotateX(-90deg)
                translateZ(-${this.height/2}em)
                translateY(-${this.height/2}em)
            `,
        }
    }

    controllerStyle() {
        return {
            transform: `translateX(-50%) rotateX(-90deg) translateY(-${this.height + 6}em)`
        }
    }
}