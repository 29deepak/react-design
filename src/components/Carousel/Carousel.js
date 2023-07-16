import React, { useRef, useEffect } from 'react';
import {Carousel} from 'bootstrap';
import S1 from '../../assests/d4.jpg'
import S2 from '../../assests/d3.jpg'
import S3 from '../../assests/deepak.png'
const CarouselComponent = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current);
    }
  }, []);

  return (
    <div ref={carouselRef} id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={S1} alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src={S2} alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src={S3} alt="Image 3" />
        </div>
      </div>

      <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
  
};

export default CarouselComponent;