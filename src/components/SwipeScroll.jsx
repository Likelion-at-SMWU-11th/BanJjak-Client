import React, { useState, useRef } from 'react';
import '../css/Home.css';

function SwipeScroll({ children }) {
    const containerRef = useRef(null);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
      setScrollLeft(containerRef.current.scrollLeft);
    };
  
    const handleTouchMove = (e) => {
      if (!startX) return;
      const x = e.touches[0].clientX;
      const dx = startX - x;
      containerRef.current.scrollLeft = scrollLeft + dx;
    };
  
    const handleTouchEnd = () => {
      setStartX(null);
    };
  
    return (
      <div
        ref={containerRef}
        className="swipeable-scroll-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    );
  }

export default SwipeScroll;
