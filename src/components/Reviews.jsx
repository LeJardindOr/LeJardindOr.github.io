import React, { useState } from "react";

const reviews = [
    { quote: "An unparalleled dining experience with exquisite flavors in every dish. Truly a culinary masterpiece.", name: "Emily Johnson" },
    { quote: "The ambiance, the service, and the meticulously crafted menu left us speechless. It's not just dining; it's an event.", name: "Michael Brown" },
    { quote: "Every bite was a discovery of sophisticated tastes and textures. A must-visit for those who appreciate the art of fine dining.", name: "Sarah Davis" },
    { quote: "From the moment we arrived, we were treated to what can only be described as a flawless evening. The attention to detail is unmatched.", name: "James Wilson" },
    { quote: "The chef's creativity shines through in a menu that's both innovative and deeply satisfying. The wine pairing was impeccable.", name: "Olivia Martin" },
    { quote: "A gastronomic journey that exceeded all expectations. The seasonal ingredients, the presentation, the flavors—everything was perfect.", name: "Liam Thompson" },
    { quote: "Dining here is an experience you'll want to relive. The luxurious setting, the attentive staff, and the exceptional cuisine make for an unforgettable evening.", name: "Sophia Carter" },
    { quote: "The epitome of luxury dining. Each course was a revelation, and the ambiance made us feel like royalty. Absolutely sublime.", name: "Ethan Taylor" },
    { quote: "A symphony of flavors that dances on the palate, each dish tells a story of tradition and innovation. An exquisite dining adventure from start to finish.", name: "Charlotte Green" },
  ];

  function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
  
    const changeReview = (direction) => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          let newIndex;
          if (direction === 'next') {
            newIndex = prevIndex + 3 < reviews.length ? prevIndex + 3 : 0;
          } else {
            newIndex = prevIndex - 3 >= 0 ? prevIndex - 3 : reviews.length - (reviews.length % 3 || 3);
          }
          return newIndex;
        });
        setTimeout(() => setAnimate(true), 300);
      }, 300);
    };
  
    return (
      <div className="mx-16 mb-16">
        <h3 className="mb-8">Reviews</h3>
        <div className="flex justify-between items-center">
          <button onClick={() => changeReview('prev')} className="text-4xl mr-8 transition-transform transform hover:scale-125">&#8592;</button>
          <div className="flex flex-grow space-x-4">
            {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
              <div key={index} className={`flex-1 flex flex-col justify-between p-4 border rounded-lg transition duration-500 ease-in-out shadow-lg hover:shadow-none ${animate ? 'opacity-100' : 'opacity-0'}`}>
                <p>"{review.quote}"</p>
                <p className="mt-4 text-right">- {review.name}</p>
              </div>
            ))}
          </div>
          <button onClick={() => changeReview('next')} className="text-4xl ml-8 transition-transform transform hover:scale-125">&#8594;</button>
        </div>
      </div>
    );
  }
  
  export default Reviews;