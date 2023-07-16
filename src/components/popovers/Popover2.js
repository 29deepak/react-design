import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover } from 'bootstrap';

const MyComponent = () => {
  const buttons = [
    { id: 1, text: 'Button 1', popoverContent: 'Popover 1 fcjvj vjjvgfchxjhgvfhdj ghfdjdbhvb n ghfjdsbfhjd ghjdbxncxbn hjdxbn' ,angle:"left" },
    { id: 2, text: 'Button 2', popoverContent: 'Popover 2',angle:"top" },
    { id: 3, text: 'Button 3', popoverContent: 'Popover 3',angle:"bottom"},
    // Add more buttons with popover content as needed
  ];

  useEffect(() => {
    buttons.forEach((button) => {
      const popover = new Popover(`#button-${button.id}`, {
        html:true,
        content: `<h2>${button.popoverContent}</h2>`,
        title:"hello",
        trigger: 'focus',
        placement:button.angle,
        delay:{"show":100,"hide":1000},
      });
      return () => {
        popover.dispose();
      };
    });
  }, [buttons]);

  return (
    <div class="container">
        <div class="row">
            <div class="col">
            {buttons.map((button) => (
        <button
          key={button.id}
          id={`button-${button.id}`}
          className="btn btn-primary"
          data-bs-toggle="popover"
        >
          {button.text}
        </button>
      ))}
            </div>
        </div>
      
    </div>
  );
};

export default MyComponent;