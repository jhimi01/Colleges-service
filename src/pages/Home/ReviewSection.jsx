import React from 'react';

const ReviewSection = () => {
    const reviewsData = [
        {
          name: 'John Smith',
          rating: 4.5,
          comment:
            'I had a great experience with this product. It exceeded my expectations, and the customer service was top-notch.',
        },
        {
          name: 'Emily Johnson',
          rating: 5,
          comment:
            'This is by far the best product I have ever purchased. The quality is outstanding, and I highly recommend it to everyone.',
        },
        // Add more review objects for additional reviews
      ];
    
      return (
        <div className="container mx-auto px-4 py-8 mb-20">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reviewsData.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold mr-2">{review.name}</h3>
                  <span className="text-yellow-500">
                    {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    {review.rating % 1 !== 0 && <i className="fas fa-star-half"></i>}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default ReviewSection;