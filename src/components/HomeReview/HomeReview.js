import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const HomeReview = () => {
  const [reviewers, setReviewers] = useReviews();
  return (
    <div className="mt-4">
      <h2 className="text-center">Customer Reviews(3)</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 container mx-auto mt-4">
        {reviewers.slice(0, 3).map((reviewer) => (
          <Review key={reviewer.id} reviewer={reviewer} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Link to="/reviews">
          <Button variant="primary">See All Reviews</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomeReview;
