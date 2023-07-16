import React, { useEffect, useRef } from 'react';

import { Tooltip } from 'bootstrap';

const MyComponent = () => {
    const buttons = [
        { id: 1, text: 'Button 1', tooltipContent: 'Tooltip 1',angle:"top" },
        { id: 2, text: 'Button 2', tooltipContent: 'Tooltip 2',angle:"left" },
        { id: 3, text: 'Button 3', tooltipContent: 'Tooltip 3',angle:"right" },
        { id: 4, text: 'Button 4', tooltipContent: 'Tooltip 4',angle:"bottom" },
      ];
  
// dispose ---- any functionality happen taht is closed that' why we use disposeor say it delete the element
// disabled----it diasbled the element

useEffect(() => {
    buttons.forEach((button) => {
        // without as default as use 
        // const tooltip = new Tooltip(document.getElementById(`button-${button.id}`));
        // something changes ,bigger or smaller we use html true then everything is work
      const tooltip = new Tooltip(document.getElementById(`button-${button.id}`),{
        html:true,  /// for heading ,span,antyhing we do for html
        animation:false,   //for smoothness
        delay:{"show":100,"hide":1000}, // it is work for after 1s it show and when remove after 1s it remove
        // delay:{"hide":1000}
        // placement:"bottom" // hover is shown at the bottom
        // title:`heelo sir`
        title:`<img src="" /><h2>images</h2>`,
        trigger:"click", // after the click the button it show and after click the button it hide
        offset:[30,30],
      });
      return () => {
        tooltip.dispose();
      };
    });
  }, [buttons]);
  return (
    <>
  
      <div class="container">
        <h2 class="text-center py-3 ">Tooltip Plugin</h2>
      {buttons.map((button) => (
        <button
          key={button.id}
          id={`button-${button.id}`}
          className="btn btn-primary"
          data-bs-placement={button.angle}
          data-bs-toggle="tooltip"
        //   title={button.tooltipContent}
            //  title={`<h2>${button.tooltipContent}</h2>`}
        >
          {button.text}
        </button>
      ))}
    </div>
    </>
  );
};

export default MyComponent;