import React from "react";
import HomeReview from "../HomeReview/HomeReview";
import HomeTop from "../HomeTop/HomeTop";

const Home = () => {
  return (
    <div className="container mt-4">
      <HomeTop />
      <HomeReview />
    </div>
  );
};

export default Home;
