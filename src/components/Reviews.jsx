// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import rating from '../assets/ratings.png';

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // window width to apply these settings
        settings: {
          dots: false,
        },
      },
    ],
  };

  const reviewsData = [
  { 
    name: 'Ravi Kumar', 
    rating: 4, 
    review: 'Excellent service! The team was professional, efficient, and friendly. I am very satisfied with the service provided and would definitely recommend them to others.' 
  },
  { 
    name: 'Sunita Sharma', 
    rating: 5, 
    review: 'Loved the service! The team went above and beyond to ensure my needs were met. They were quick, responsive, and very professional. I couldn\'t have asked for better service.' 
  },
  { 
    name: 'Anil Gupta', 
    rating: 4, 
    review: 'Very good service! The team was professional and efficient. They did a great job and I am very happy with the results. I would definitely use their services again.' 
  },
  { 
    name: 'Priya Singh', 
    rating: 5, 
    review: 'Fantastic service! The team was extremely professional and efficient. They went above and beyond to ensure I was satisfied with their service. I would highly recommend them.' 
  },
  { 
    name: 'Vijay Patel', 
    rating: 4, 
    review: 'Great service! The team was professional, efficient, and friendly. They did a great job and I am very satisfied with the service provided. I would definitely recommend them to others.' 
  }
];

  function StarRating({ rating, totalStars }) {
    const stars = Array.from({ length: totalStars }, (_, i) => (
      <span className="star" key={i}>
        {i < rating ? '★' : '☆'}
      </span>
    ));
    return <div>{stars}</div>;
  }
  StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    totalStars: PropTypes.number.isRequired,
  };
  const overallRatingsData = [
    { category: 'Dog Training', rating: 4 },
    { category: 'Dog Preening', rating: 5 },
  ];

  return (
    <div className="our-reviews">
      <h1>Our Reviews</h1>
      <div className="reviews-section">
        <div className="overall-ratings">
          <img style={{width:"20%", alignSelf: "flex-start", transform: "translateY(-20px)"}} src={rating} alt="overall-ratings" />
          <div className='overall-content'>
          <h2>Overall Ratings</h2>
          {overallRatingsData.map((rating, index) => (
            <div key={index} className="rating-category">
              <h3>{rating.category}</h3>
              <StarRating rating={rating.rating} totalStars={5} />
            </div>
          ))}
        </div>
        <button>Rate Us</button>
        </div>
        <div className="reviews">
          <Slider {...settings}>
            {reviewsData.map((review, index) => (
              <div key={index} className="reviews-card">
                <h3>{review.name}</h3>
                <StarRating rating={review.rating} totalStars={5} />
                <p>{review.review}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
