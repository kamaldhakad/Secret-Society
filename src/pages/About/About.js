import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="row mb-3 align-items-md-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <img src="./assets/images/img1.jpg" />
          </div>
          <div className="col-md-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="row align-items-md-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
          </div>
          <div className="col-md-6">
            <img src="./assets/images/img2.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
