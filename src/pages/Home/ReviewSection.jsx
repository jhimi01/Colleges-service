import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Rating } from '@smastrom/react-rating';

import './ReviewSection.css'; // Import your custom CSS file for styling
import { EffectCreative } from 'swiper/modules';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://college-servic-server.vercel.app/review')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log('review', data);
      });
  }, []);

  return (
    <div className='bg-base-200 py-10 my-20 '>
      <Swiper   grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2">
        {reviews.map((rev, index) => (
          <SwiperSlide key={index} className="swiper-slide card">
            <div className="bg-white card-body text-center w-1/2">
              <img className="w-32 mx-auto h-32 rounded-full object-cover" src={rev?.userPhotoURL} alt="" />
              <p className="text-3xl">{rev?.collegeName}</p>
              <p className="text-2xl capitalize">author : {rev?.collegeAuthorName}</p>
              <p className="feedback-text">{rev?.feedbackText}</p>
              <Rating className='text-center mx-auto' style={{ maxWidth: 180, }} value={rev?.rating} readOnly />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
