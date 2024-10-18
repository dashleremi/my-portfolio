import {useState, useEffect } from 'react'

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/public/images/gemini-clone.png',
        '/public/images/dsa-wiki.png'
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div></div>
  )
}

export default ProjectSlider