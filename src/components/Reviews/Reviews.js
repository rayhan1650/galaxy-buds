import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviewers, setReviewers] = useReviews();

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 container mx-auto mt-4">
      {reviewers.map((reviewer) => (
        <Review key={reviewer.id} reviewer={reviewer} />
      ))}
    </div>
  );
};

export default Reviews;
