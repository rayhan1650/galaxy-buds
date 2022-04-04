import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviewers, setReviewers] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviewers(data));
  }, []);
  console.log(reviewers);
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 container mx-auto">
      {reviewers.map((reviewer) => (
        <Review key={reviewer.id} reviewer={reviewer} />
      ))}
    </div>
  );
};

export default Reviews;
