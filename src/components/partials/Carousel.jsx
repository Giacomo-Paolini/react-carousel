import { useState } from "react";
import images from "../../data/store";

export default function Carousel() {

  const [currentImage, setCurrentImage] = useState(0);
  const [pauseOnHover, setPauseOnHover] = useState(false);

  function handleNext() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  function handlePrev() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

  (() => {
    if (!pauseOnHover) {
      setTimeout( handleNext, 3000);
    }
  })();

  return (
    <div className="flex items-center gap-6 max-w-[1200px]" onMouseEnter={() => setPauseOnHover(true)} onMouseLeave={() => setPauseOnHover(false)}>
      <button onClick={handlePrev} className="p-4 bg-red-500 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      </button>

      <div className="relative">
        <div>
          <img src={images[currentImage].image} alt="" />
        </div>
        <div className="p-4 absolute bottom-0 text-white w-full bg-[rgba(80,80,80,0.5)]">
          <h1>{images[currentImage].title}</h1>
        </div>
      </div>

      <button onClick={handleNext} className="p-4 bg-red-500 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
      </button>
    </div>
  );
}