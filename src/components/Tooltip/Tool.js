import React, { useEffect, useRef } from 'react';
import './Tool.css';
import { Tooltip } from 'bootstrap';

const Tool = () => {
    const tooltipRef = useRef(null);
    useEffect(() => {
    if (tooltipRef.current) {
      const tooltip = new Tooltip(tooltipRef.current);
      return () => {
        tooltip.dispose();
      };
    }
  }, []);
  return (
    <>
      <button
      ref={tooltipRef}
      className="btn btn-primary"
      data-bs-toggle="tooltip"
      title="Tooltip content"
    >
      Hover Me
      
    </button>
    </>
  )
}

export default Tool