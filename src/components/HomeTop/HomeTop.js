import React from "react";

const HomeTop = () => {
  return (
    <div>
      <h1 className="text-center fw-bold display-2">Galaxy Buds</h1>
      <div className="d-flex flex-column-reverse flex-md-row">
        <div className="w-100 d-flex flex-column justify-content-center">
          <h2 className="fs-1">Galaxy buds pro</h2>
          <p className="fs-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            deleniti quas, quo eaque nostrum exercitationem repudiandae
            doloribus consequuntur mollitia reprehenderit, tenetur magnam.
            Voluptatem, voluptatum ullam.
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
