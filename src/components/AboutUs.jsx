// eslint-disable-next-line no-unused-vars
import React from 'react';

const AboutUs = () => {
  return (
    <div id='about' className="aboutus">
      <h1>Explore Our Identity!</h1>
      <div className="aboutus-card">
        <div className="aboutus-content">
          <h1 style={{ color: '#FFD166', fontWeight: '500' }}>ABOUT US</h1>
          <button>Know More</button>
        </div>
        <div className="aboutus-info">
          <p>MyPerro, a cutting-edge pet startup, is revolutionizing the pet care industry with a comprehensive range of services, including dog walking, grooming, sitting, and training.
            With a focus on holistic pet well-being, MyPerro&apos;s dog walking service ensures physical and mental health, while grooming pampers pets for enhanced comfort and appearance. For pet owners seeking reliable care, MyPerro offers dog sitting services, providing peace of mind during their
            absence. Notably, the startup excels in dog training, using positive reinforcement to instill good behavior and strengthen the human-pet bond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
