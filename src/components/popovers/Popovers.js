import React from 'react';
import { Popover } from 'bootstrap';

const MyComponent = () => {
  const handleButtonClick = (event) => {
    const popover = new Popover(event.target, {
      title:"Popver work",
      content: 'Popover content',
      trigger: 'focus',
      placement:'bottom',
    });
    popover.show();
  };

  return (
    
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="popover"
        onClick={handleButtonClick}
      >
        Click Me
      </button>
    
  );
};

export default MyComponent;