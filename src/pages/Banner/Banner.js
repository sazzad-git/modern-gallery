import React from "react";
import './Banner.css'

import onion from "../../images/home.jpg";

const Banner = () => {
  return (
    <div>
      <img src={onion} className='img-fluid shadow-4' alt='...' />
    </div>
  );
};

export default Banner;
