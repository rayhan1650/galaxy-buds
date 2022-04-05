import React from "react";

const HomeTop = () => {
  return (
    <div>
      <h1 className="text-center fw-bold display-2">Galaxy Buds</h1>
      <div className="d-flex flex-column-reverse flex-md-row">
        <div className="w-100 d-flex flex-column justify-content-center">
          <h2 className="fs-1">Galaxy Buds Pro</h2>
          <p className="fs-5">
            Our most immersive buds yet deliver powerful studio sound and
            crystal-clear call quality. Use Intelligent Active Noise
            Cancellation to escape into your music at a moment's notice. Answer
            calls with just your voice and let in the sounds that matter most
            with adjustable ambient sound. Active Noise Cancellation gives you
            the power to adjust your settings based on the world around you, so
            you always hear what you want to hear.
          </p>
        </div>
        <div className="w-100 d-flex justify-content-center my-3 my-md-0">
          <img className="img-fluid mx-auto" src="galaxy-buds-pro.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
