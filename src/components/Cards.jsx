// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import train from '../assets/dog_train.jpg'
import preen from '../assets/dog_preen.png'
import walk from '../assets/dog_walk.jpg'
import sit from '../assets/dog_sit.jpg'
import retreat from '../assets/dog_retreat.jpg'

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
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 4000, // Increase this to increase the time between auto-play transitions
          pauseOnHover: true,
          rows: 1, // only one row
        },
      },
    ],
  };

  const names = ['DOG WALKING', 'DOG PREENING', 'DOG TRAINING', 'DOG BOARDING', 'DOG RETREAT', 'DOG SITTING'];
  const imgs = [train, preen, walk, retreat, train, sit];

  const cards = names.map((name, index) => {
    return {
      title: name,
      img: imgs[index]
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
                <img src={card.img} alt="Placeholder Image" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Cards;
