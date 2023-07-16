import React, { useEffect, useState } from 'react';
import './a.css';

const ScrollspyComponent = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scrollspy-section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="scrollspy-nav">
        <ul>
          <li className={activeSection === 'section1' ? 'active' : ''}>
            <a href="#section1">Section 1</a>
          </li>
          <li className={activeSection === 'section2' ? 'active' : ''}>
            <a href="#section2">Section 2</a>
          </li>
          <li className={activeSection === 'section3' ? 'active' : ''}>
            <a href="#section3">Section 3</a>
          </li>
        </ul>
      </nav>

      <div className="scrollspy-content">
        <div id="section1" className="scrollspy-section">
          <h4>Section 1</h4>
          <p>This is the content of Section 1</p>
        </div>

        <div id="section2" className="scrollspy-section">
          <h4>Section 2</h4>
          <p>This is the content of Section 2</p>
        </div>

        <div id="section3" className="scrollspy-section">
          <h4>Section 3</h4>
          <p>This is the content of Section 3</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollspyComponent;