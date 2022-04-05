import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviewers, setReviewers] = useReviews();

  return (
    <div className="my-4">
      <h2 className="text-center mb-4">What our customers say!</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 container mx-auto ">
        {reviewers.map((reviewer) => (
          <Review key={reviewer.id} reviewer={reviewer} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
