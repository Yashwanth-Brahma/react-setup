import React, { useState } from "react";
import reviews from "../data";
const Reviews = () => {
  const [i, setI] = useState(0);
  const [review, setReview] = useState(reviews[i]);
  const left = () => {
    if (i >= 0) {
      setI(i - 1);
      setReview(reviews[i]);
    }
  };

  const right = () => {
    if (i < reviews.length) {
      setI(i + 1);

      setReview(reviews[i]);
    }
  };
  return (
    <div>
      <img src={review.image} alt={review.name} />
      <p>{review.name}</p>
      <p>{review.job}</p>
      <p>{review.text}</p>

      <button className="arrow" onClick={() => left()}>
        <i className="bi bi-caret-left"></i>
      </button>
      <button className="arrow" onClick={() => right()}>
        <i className="bi bi-caret-right"></i>
      </button>
      <br />
      <button id="random">Surprise Me</button>
    </div>
  );
};

export default Reviews;
