import React, {useEffect, useRef, useState} from 'react'

interface Point {
    x: number;
    y: number;
}

const MouseEffect: React.FC = () => {
    const [point, setPoint] = useState<Point>({ x: 0, y: 0});

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
 
            const x = event.clientX;
            const y = event.clientY;
            setPoint({ x, y });
        };

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        }; 
    }, []);
    

  return (
    <div className='mouse-follow fixed rounded-full pointer-events-none'
        style={{
        transform: `translate(${point.x}px, ${point.y}px)`,
    }}/>
  );
};

export default MouseEffect