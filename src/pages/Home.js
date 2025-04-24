import React from "react";
import Products from "./Products";
import Image1 from "../images/luxury_and_rich_home_exterior_side_view.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div id="Top">
        <div className="text">
          <h1>Find Your Dream Home</h1>
          <p>Explore our curated selection of exquisite</p>
          <p>properties meticulously tailored to your </p>
          <p>unique dream home vision</p>
          <button>Explore Now</button>
        </div>

        <div>
          <img src={Image1} alt={Image1} />
        </div>
      </div>

      <div id="Help">
        <div>
          <img src={Image1} alt={Image1} />
        </div>

        <div className="text2">
          <h1>We Help You To Find </h1>
          <h1>Your Dream Home </h1>
          <br></br>
          <p>From cozy cottages to luxurious estates, our</p>
          <p>dedicated team guides you through every step of the </p>
          <p>journey, ensuring your dream home becomes a reality</p>
        </div>
      </div>





    <div id="">
      <h1 style={{fontSize:40,}}>Why Choose Us</h1>
      <p></p>
    </div>














    </div>
  );
};

export default Home;
