import React from "react";
import "./review.css";

const Review = ({ reviewer }) => {
  const { name, rating, text, img } = reviewer;
  return (
    <div className="col">
      <div className="card">
        <div className="d-flex  align-items-center p-2">
          <img
            src={img}
            className="card-img-top user-profile-pic"
            alt="User profile"
          />
          <h5 className="card-title ms-3">{name}</h5>
        </div>

        <div className="card-body">
          <h6>Ratings: {rating}</h6>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
