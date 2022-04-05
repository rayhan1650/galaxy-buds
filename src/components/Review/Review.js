import React from "react";
import "./review.css";

const Review = ({ reviewer }) => {
  const { name, rating, text, img } = reviewer;
  return (
    <div className="col">
      <div className="card shadow">
        <div className="d-flex bg-primary bg-opacity-10  align-items-center p-2">
          <img src={img} className="user-profile-pic" alt="User profile" />
          <h5 className="card-title ms-3">{name}</h5>
        </div>

        <div className="card-body">
          <h6>Ratings: {rating}</h6>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
