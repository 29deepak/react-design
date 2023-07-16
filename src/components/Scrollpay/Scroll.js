import React, { useRef, useState } from 'react';
import './Scroll.css';
import Scroll from './Scrolls'
const CustomScrollbar = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScroll = (e) => {
    const { scrollTop, scrollLeft } = e.target;
    setScrollPosition({ x: scrollLeft, y: scrollTop });
  };

  const handleWheel = (e) => {
    const { deltaX, deltaY } = e;
    const container = containerRef.current;

    container.scrollTo({
      top: container.scrollTop + deltaY,
      left: container.scrollLeft + deltaX,
      behavior: 'smooth',
    });

    e.preventDefault();
  };

  return (
    <div
      className="custom-scrollbar-container"
      ref={containerRef}
      onScroll={handleScroll}
      onWheel={handleWheel}
    >
      <div className="custom-scrollbar-content">
        {/* Your component content */}
        <Scroll/>
      </div>

      <div
        className="custom-scrollbar-track"
        style={{
          top: scrollPosition.y,
          left: scrollPosition.x,
        }}
      />
    </div>
  );
};

export default CustomScrollbar;