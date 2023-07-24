import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Review = ({ onClose, onSubmitFeedback, img, author }) => {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [userPhotoURL, setUserPhotoURL] = useState(''); // State to store user photo URL
  const [collegeAuthorName, setCollegeAuthorName] = useState(''); // State to store college author name

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  console.log(img, author)

  const handleSubmit = () => {
    // Construct the review object
    const reviewData = {
      rating,
      feedbackText,
      userPhotoURL: img, // Use the img prop passed from MyCollege component
      collegeAuthorName: author, // Use the author prop passed from MyCollege component
    };
  console.log(reviewData)
    // Call the onSubmitFeedback function with the review data
    onSubmitFeedback(reviewData);
  
    // Close the modal after submitting
    onClose();
  };
  

  return (
    <div className='bg-white p-5 rounded-lg'>
      <h2 className='text-2xl font-semibold mb-3'>Provide Review</h2>
      <Rating value={rating} onChange={handleRatingChange} isRequired />
      <div className='mb-3'>
        <input
          type='text'
          placeholder='User Photo URL'
          defaultValue={img} // Use defaultValue instead of value
          className='input input-primary'
        />
      </div>
      <div className='mb-3'>
        <input
          type='text'
          placeholder='College Author Name'
          defaultValue={author} // Use defaultValue instead of value
          className='input input-primary'
        />
      </div>
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
