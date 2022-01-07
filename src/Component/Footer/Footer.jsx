import React from "react";
import "../../assets/css/Footer.css";
import logo from "../../assets/images/favicon.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
  
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-6 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="#">
                  <img src={logo} className="img-fluid" alt="logo" />
                </a>
              </div>
              <div className="footer-text">
                <p>
                  At My Beauty 365 we like to bring you all things beauty and
                  wellness! Be in the know and level up with the latest in
                  skincare, make-up, mental and physical.
                </p>
              </div>
             
            </div>
          </div>

          <div className="col-xl-6 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>
                Sign up for subscriber-only discounts, first look at newly-curated items & K-beauty skincare tips
                </p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button>
                   <FontAwesomeIcon className="subscribe-form-i" icon={faArrowRight} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>&copy; 2021, My Beauty 365</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu ">
              <ul>
                <li>
                  <a href="">
                    <FontAwesomeIcon  icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

{
  /* <div className="footer-copyright text-center py-3">
  © 2021 Copyright:
  <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
</div> */
}
export default Footer;
