import { useEffect, useRef, useState } from "react";

function useCarouselSize({
  aspectRadio = 1,
  initWidth = 0,
  initHeight = 0,
} = {}) {
  const carouselRef = useRef(null);
  const [carouselSize, setCarouselSize] = useState({
    width: initWidth,
    height: initHeight,
  });

  useEffect(() => {
    if (!carouselRef.current) return;

    const carouselRect = carouselRef.current.getBoundingClientRect();
    setCarouselSize({
      width: carouselRect.width,
      height: carouselRect.width * aspectRadio,
    });
  }, [carouselRef]);

  return {
    ref: carouselRef,
    width: carouselSize.width,
    height: carouselSize.height,
  };
}

export default useCarouselSize;
