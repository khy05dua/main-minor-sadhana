import React, { useEffect, useState } from 'react';
import './CSS/carousel.css'; // Make sure to import your CSS file if it's separate
import meditation from '../components/Assets/meditation.png';
import meditation1 from '../components/Assets/meditation1.png';
import meditation2 from '../components/Assets/meditation2.png';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex].style.display = "block";
      dots[slideIndex].className += " active";
    };

    const intervalId = setInterval(showSlides, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        <div className={`mySlides fade ${slideIndex === 0 ? 'active' : ''}`}>
          <div className="numbertext">1 / 3</div>
          <img src={meditation} style={{ width: '100%' }} alt="Nature 1" />
        </div>

        <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
          <div className="numbertext">2 / 3</div>
          <img src={meditation1} style={{width: '100%' }} alt="Snow 1" />
        </div>

        <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
          <div className="numbertext">3 / 3</div>
          <img src={meditation2} style={{ width: '100%' }} alt="Mountains 1" />
        </div>
      </div>

      <br />

      <div style={{ textAlign: 'center' }}>
        <span className={`dot ${slideIndex === 0 ? 'active' : ''}`}></span>
        <span className={`dot ${slideIndex === 1 ? 'active' : ''}`}></span>
        <span className={`dot ${slideIndex === 2 ? 'active' : ''}`}></span>
      </div>
    </div>
  );
};

export default Slideshow;
