import React, { useEffect } from 'react';
import {Tab} from 'bootstrap';

const TabsComponent = () => {
  useEffect(() => {
    const tabItems = document.querySelectorAll('.nav-link');

    tabItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        new Tab(item).show();
      });
    });
  }, []);

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#tab1">
            Tab 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#tab2">
            Tab 2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#tab3">
            Tab 3
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab1">
          <h4>Content for Tab 1</h4>
          <p>This is the content for Tab 1</p>
        </div>
        <div className="tab-pane fade" id="tab2">
          <h4>Content for Tab 2</h4>
          <p>This is the content for Tab 2</p>
        </div>
        <div className="tab-pane fade" id="tab3">
          <h4>Content for Tab 3</h4>
          <p>This is the content for Tab 3</p>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;