import React from "react";
import Products from "./Products";
import Image1 from "../images/luxury_and_rich_home_exterior_side_view.png";
import Map from "../images/Vector.png";
import Service from "../images/service.png";
import Process from "../images/Clip path group.png";
import Handshake from "../images/Handshake.png";
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

      <div id="Why">
        <center>
          <h1 style={{ fontSize: 40 }}>Why Choose Us</h1>
          <p style={{ fontSize: 18 }}>
            Elevating Your Home Buying Experience with Expertise, Integrity,
          </p>
          <p style={{ fontSize: 18 }}>and Unmatched Personalized Service</p>
        </center>

        <div id="Why-grid">
          <div className="box">
            <div
              style={{
                height: 83,
                width: 83,
                backgroundColor: "#FBF5F1",
                borderRadius: 18,
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              <center>
                <img style={{ paddingTop: 15 }} src={Map} />
              </center>
              <div>
                <h3 style={{ fontSize: 18, color: "#2B1B12", marginTop: 10 }}>
                  Expert Guidance
                </h3>
                <p style={{ fontSize: 16, color: "#4F3527", width: 200 }}>
                  Benefit from our team's seasoned expertise for a smooth buying
                  experience
                </p>
                <p style={{ fontSize: 16, color: "#4F3527" }}></p>
                <p style={{ fontSize: 16, color: "#4F3527" }}></p>
              </div>
            </div>
          </div>

          <div className="box">
            <div
              style={{
                height: 83,
                width: 83,
                backgroundColor: "#FBF5F1",
                borderRadius: 18,
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              <center>
                <img style={{ paddingTop: 15 }} src={Service} />
              </center>
            </div>
            <div>
              <h3 style={{ fontSize: 18, color: "#2B1B12", marginLeft: 20 }}>
                Personalized Service
              </h3>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20 }}>
                Our services adapt to your{" "}
              </p>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20  }}>
                unique needs, making your
              </p>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20  }}>
                journey stress-free
              </p>
            </div>
          </div>

          <div className="box">
            <div
              style={{
                height: 83,
                width: 83,
                backgroundColor: "#FBF5F1",
                borderRadius: 18,
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              <center>
                <img style={{ paddingTop: 15 }} src={Process} />
              </center>
            </div>
            <div>
              <h3 style={{ fontSize: 18, color: "#2B1B12",  marginLeft: 20 }}>
                Transparent Process
              </h3>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20 }}>
                Stay informed with our{" "}
              </p>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20 }}>
                clear and honest approach{" "}
              </p>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20 }}>
                to buying your home
              </p>
            </div>
          </div>

          <div className="box">
            <div
              style={{
                height: 83,
                width: 83,
                backgroundColor: "#FBF5F1",
                borderRadius: 18,
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              <center>
                <img style={{ paddingTop: 15 }} src={Handshake} />
              </center>
            </div>
            <div>
              <h3 style={{ fontSize: 18, color: "#2B1B12", marginLeft: 20 }}>
                Exceptional Support
              </h3>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20 }}>
                Providing peace of mind{" "}
              </p>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20 }}>
                with our responsive and{" "}
              </p>
              <p style={{ fontSize: 16, color: "#4F3527", width: 200, marginLeft: 20 }}>
                attentive customer service
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="Main-popular">
        <center>
          <h1>Our Popular Residences</h1>
        </center>

        <div id="Popular">
          {/* <div className="Popular">
            <img src="" />
            <p>Prizren</p>
            <div className="Popular-grid">
              <div className="Split">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-bed-double-icon lucide-bed-double"
                >
                  <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                  <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                  <path d="M12 4v6" />
                  <path d="M2 18h20" />
                </svg>
                <p>4 rooms</p>
              </div>

              <div className="Split">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-ratio-icon lucide-ratio"
                >
                  <rect width="12" height="20" x="6" y="2" rx="2" />
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                </svg>
                <p>90 m2</p>
              </div>
            </div>
          </div>
          <div className="Popular"></div>
          <div className="Popular"></div> */}

          <Products />
        </div>
      </div>
      <center>
        <a href="#Products">
          {" "}
          <button className="button">Browse More Properties </button>
        </a>
      </center>
      <div>
        <center>
          <h1>Do You Have Any Questions?</h1>
          <h1>Get Help From Us</h1>
        </center>
      </div>
    </div>
  );
};

export default Home;
