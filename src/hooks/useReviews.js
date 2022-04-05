import { useEffect, useState } from "react";
const useReviews = () => {
  const [reviewers, setReviewers] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviewers(data));
  }, []);
  return [reviewers, setReviewers];
};
export default useReviews;
