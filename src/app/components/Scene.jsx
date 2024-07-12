import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model'; 

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
  '/image7.jpg',
];

export default function Scene() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log("Current image index:", currentImageIndex);
    console.log("Current image path:", images[currentImageIndex]);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const handleImageClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <>
      <Canvas camera={{fov: 10}}>
        <Suspense fallback={null}>
           <group>
            {images.map((img, idx) => (
              <group key={idx} position={[(idx - currentImageIndex) * 1.5, 0, 0]}>
                <Model img={img} />
              </group>
            ))}
          </group>
        </Suspense>
      </Canvas>
      <div className='carousel_list'>
      
        {images.map((item, idx) => (
          <img className={`item ${idx === currentImageIndex ? 'selected' : "" }`} key={idx} src={item} onClick={() => handleImageClick(idx)}></img>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

    </>
  );
}
