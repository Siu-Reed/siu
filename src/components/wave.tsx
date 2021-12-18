import React, {useMemo , useState, useRef, useEffect} from 'react';
import { WaveGroup } from '../visual/wave-group';
import styles from '../css/wave.module.css';

interface Props {
    heights : Array<number>;
}

const Wave:React.FC<Props> = ({heights}) => {
    console.log('wave');

    const [waveHeights, setWaveHeights] = useState<Array<number>>(heights);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D>();
    const newWavesRef = useRef<Array<number>>();
    const previousWavesRef = useRef<Array<number>>();
    const requestRef = useRef<number>();
    const animationRef = useRef<Function>();

    const ratio = useMemo(() => window.devicePixelRatio, []);

    const stageWidth = useMemo(() => document.body.clientWidth, []);
    const stageHeight =  useMemo(() => document.body.clientHeight, []);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const waveGroup = useMemo(() => (new WaveGroup(stageWidth, stageHeight, waveHeights)), []);
    
    useEffect(() => {
        const cvs = canvasRef.current;
        const ctx = cvs!.getContext('2d');

        ctxRef.current = ctx!;
        animationRef.current = animate;
        
        resize();
        requestAnimationFrame(animate);
        
        function resize() {
            cvs!.width = waveGroup.stageWidth * ratio;
            cvs!.height = waveGroup.stageHeight * ratio;
            ctx!.scale(ratio, ratio);
            waveGroup.resize();
        }

        function animate() {
            waveGroup.draw(ctx!);
            requestAnimationFrame(animate);
        }
    }, [ratio, waveGroup]);

    const timeLimit = 800;
    let timeStart:number;

    useEffect(() => {
        newWavesRef.current = heights;
        requestRef.current = requestAnimationFrame(transition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heights]);

    useEffect(() => {
        waveGroup.resize(waveHeights);
        waveGroup.draw(ctxRef.current!);
    }, [waveGroup, waveHeights]);
    
    function transition (timestamp:DOMHighResTimeStamp) {
        if (!waveHeights) setWaveHeights(newWavesRef.current!);
        if (!previousWavesRef.current) {previousWavesRef.current = newWavesRef.current} else {
            if (!timeStart) timeStart = timestamp;
            const progress = timestamp - timeStart;
            setWaveHeights(previousWavesRef.current.map((preWave, i) => (
                preWave + (newWavesRef.current![i] - preWave)*progress/timeLimit
            )));
            if (progress < timeLimit) {
                requestRef.current = requestAnimationFrame(transition);
            } else {
                previousWavesRef.current = newWavesRef.current;
                return () => cancelAnimationFrame(requestRef.current!);
            }
        }
    }



    return (
        <canvas className={styles.wave} ref={canvasRef}/>
    );
};

export default Wave;