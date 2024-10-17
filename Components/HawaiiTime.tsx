import React, {useState, useEffect} from 'react'

const zeroPadding = (num: number, digit: number) => {
    return String(num).padStart(digit, '0');
  };

const HawaiiTime = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hawaiiOffset = -10;

            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const hawaiiTime = new Date(utc + (3600000 * hawaiiOffset));

            const hours = zeroPadding(hawaiiTime.getHours(), 2);
            const minutes = zeroPadding(hawaiiTime.getMinutes(), 2);
            const seconds = zeroPadding(hawaiiTime.getSeconds(), 2);

            const year = hawaiiTime.getFullYear();
            const month = zeroPadding(hawaiiTime.getMonth() + 1, 2);
            const day = zeroPadding(hawaiiTime.getDate(), 2);
            const weekDayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            const weekDay = weekDayNames[hawaiiTime.getDay()];

            setTime(`${hours}:${minutes}:${seconds}`);
            setDate(`${year}-${month}-${day} ${weekDay}`);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);
    
  return (
    <div className='text-white font-extralight'>
        <p className="text-lg text-[#f97316]">{date}</p>
        <h1 className="text-6xl font-light mt-3 glow-text">{time}</h1>
        <p className='text-[#f97316] mt-4'>Currently based in <span className='font-normal'>Honolulu, HI</span></p>
    </div>
  )
}

export default HawaiiTime