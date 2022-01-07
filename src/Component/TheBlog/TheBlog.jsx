import React from "react";
import aboutImg from "../../assets/images/beauty.png";
import { Link } from "react-router-dom";
import "../../assets/css/Blog.css";
function Blog() {
  return (
    <div>
      <div className="abt-btn">
        <Link to="/">
          <button className="btn ">Home </button>
        </Link>
      </div>
      <img width="1349" height="500" src={aboutImg} alt="about" />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <p className="m-3 mt-5">
              At My Beauty 365 we like to bring you all things beauty and
              wellness! Be in the know and level up with the latest in skincare,
              make-up, mental, physical and sexual wellness.
            </p>
            <p className="m-3">
              Our blog articles are here to inform, so that you can make
              educated decisions on what you want and need, because this year
              all about you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
