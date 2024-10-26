// src/components/Reviews.jsx
import React from 'react';

function Reviews() {
  const reviews = [
    {
      name: 'Rohan Sharma',
      role: 'Landlord',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      comment:
        'DigiContract made it so easy to create and sign rental agreements. Highly recommended!',
    },
    {
      name: 'Priya Gupta',
      role: 'Tenant',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      comment:
        'A seamless experience from start to finish. The Aadhaar-based signing is a game-changer.',
    },
    {
      name: 'Amit Patel',
      role: 'Property Manager',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      comment:
        'Managing multiple agreements has never been easier. DigiContract saves me so much time.',
    },
    // Add more reviews as needed
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-text">What Our Customers Say</h2>
        <div className="mt-12 flex flex-wrap">
          {reviews.map((review, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 py-6">
              <div className="h-full bg-gray-100 rounded-lg p-6 flex flex-col">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <h3 className="mt-4 text-xl font-bold text-center text-primary">{review.name}</h3>
                <p className="mt-1 text-center text-text">{review.role}</p>
                <p className="mt-4 text-text flex-grow">{`"${review.comment}"`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

