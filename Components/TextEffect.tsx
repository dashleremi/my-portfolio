import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <div className='glassmorphism-container p-5 text-center rounded-full mt-14'>
        <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'software engineer',
            1500,
            'frontend developer',
            1500,
            'ux/ui designer',
            1500,
            'web developer',
            1500,
            'graphic designer',
            1500
        ]}
        speed={70}
        className='text-[4rem] text-[#f97316] font-extralight lowercase glow-text'
        repeat={Infinity}
        />    
    </div>
  );
};

export default TextEffect