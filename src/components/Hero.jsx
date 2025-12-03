import React from 'react'

const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Kybans is a state-of-the-art healthcare facility dedicated to delivering comprehensive medical services with compassion and expertise.
          Our team of highly skilled professionals is committed to providing personalized care tailored to each patient’s unique needs.
          With a strong focus on innovation, trust, and patient satisfaction, Kybans strives to make every experience comforting and efficient.
          We prioritize your well-being, ensuring a seamless and harmonious journey towards optimal health and wellness.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className='animated-image' />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;