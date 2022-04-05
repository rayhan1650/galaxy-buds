import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center bg-white py-3 sticky-top">
      <Link to="/">Home</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
