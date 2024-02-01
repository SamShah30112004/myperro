// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Increase this to make the transition animation slower and smoother
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Increase this to increase the time between auto-play transitions
    pauseOnHover: true,
    rows: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // window width to apply these settings
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1, // only one row
        },
      },
    ],
  };

  const names = ['DOG WALKING', 'DOG PREENING', 'DOG TRAINING', 'DOG BOARDING', 'DOG RETREAT', 'DOG SITTING'];

  const cards = names.map((name) => {
    return {
      title: name,
    };
  });

  return (
    <>
      <div className="carousel">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h1>{card.title}</h1>
                <button>Book Now</button>
              </div>
              <div className="card-image">
                <img src="https://via.placeholder.com/170x220" alt="Placeholder Image" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Cards;
