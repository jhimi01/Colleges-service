import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const Review = ({ onClose, onSubmitFeedback, img, author, collegeName }) => {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    const reviewData = {
      rating,
      feedbackText,
      userPhotoURL: img, 
      collegeAuthorName: author, 
      collegeName
    };

    axios.post('https://college-servic-server.vercel.app/review', reviewData)
    .then((res)=>{
        console.log('post', res.data)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Feedback done',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(reviewData)
          // Call the onSubmitFeedback function with the review data
          onSubmitFeedback(reviewData);
      
          // Close the modal after submitting
          onClose();
    }) .catch((error) => {
        console.error('Post request failed:', error);
        // Handle error if the post request fails
      });
   
  };

  return (
    <div className='bg-white p-5 rounded-lg'>
      <h2 className='text-2xl font-semibold mb-3'>Provide Review</h2>
      <Rating value={rating} onChange={handleRatingChange} isRequired />
      <div className='mb-3'>
        <textarea
          placeholder='Feedback Text'
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          className='textarea textarea-primary'
        />
      </div>
      <div className='flex justify-end'>
        <button
          className='btn btn-primary mr-2'
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Submit
        </button>
        <button className='btn btn-secondary' onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Review;
