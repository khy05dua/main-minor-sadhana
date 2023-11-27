import React from 'react';
import './CSS/About.css';
import './CSS/carousel.css';
import Carousel from './carousel';
import meditationImage from '../components/Assets/banner_blog.png'; // Adjust the path as needed
import kanika from '../components/Assets/kanika.png';
import khyati from '../components/Assets/khyati.png';
import ishhita from '../components/Assets/ishhita.png';
import riya from '../components/Assets/riya.png';
import GridComponent from './grid';
import GridComp from './grid-vision';

const About = () => {
  return (
      
    <div className="final-container">
      <div className="about-container">

        <Carousel />

        
      </div>
      <br></br>
      <br></br>
      <div className='cover-content'>
        <div className='content'>
        <h1>OUR MISSION</h1>
        <br></br>
         <p>
         Welcome to our meditation and yoga community! We are dedicated to providing a peaceful and mindful space for individuals seeking relaxation, balance, and well-being.
         Our mission is to inspire and guide you on your journey towards a healthier and more harmonious life through the practices of meditation and yoga.
         Whether you are a beginner or an experienced practitioner, our diverse range of resources, classes, and articles are tailored to support your personal growth and mindfulness.
         </p><br/><br/>
         <div className='grids'><GridComponent/></div>
         
        </div>
    
        <br></br>
        <br></br>
        <br></br>
        <h1>OUR VISION</h1>
        <div className='content'>
          <br></br>
        <p>
        At Sadhana, our vision is to be a beacon of light in the digital space, inspiring and guiding individuals on their transformative journey towards holistic well-being through the practices of yoga and meditation. We envision a world where people from all walks of life embrace mindfulness, cultivate inner peace, and lead fulfilling lives grounded in self-awareness and compassion.
        We strive to create an online sanctuary that transcends geographical boundaries, fostering a global community united by a shared commitment to personal growth, mental clarity, and physical vitality.
        </p><br/><br/>
        <GridComp/>
        <br></br>
        <br></br>
        </div>
      </div>

      <br></br>
      <h1>TEAM</h1>
      <div className="grid-container">
        <div>
          <img src={kanika} alt="Kanika" height="300px" />
          <p>Kanika</p>
        </div>
        <div>
          <img src={khyati} alt="Khyati" height="300px" />
          <p>Khyati</p>
        </div>
        <div>
          <img src={riya} alt="Riya" height="300px" />
          <p>Riya</p>
        </div>
        <div>
          <img src={ishhita} alt="Ishhita" height="300px" />
          <p>Ishhita</p>
        </div>
      </div>
    </div>

    
  );
};

export default About;
