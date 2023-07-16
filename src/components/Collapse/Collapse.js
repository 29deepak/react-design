import React, { useEffect } from 'react';


const AccordionComponent = () => {
  useEffect(() => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  }, []);

  return (
    <div id="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="heading1">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
            Accordion Title 1
          </button>
        </h2>
        <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordion">
          <div className="accordion-body">
            <p>This is the content of Accordion 1</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="heading2">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
            Accordion Title 2
          </button>
        </h2>
        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
          <div className="accordion-body">
            <p>This is the content of Accordion 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;