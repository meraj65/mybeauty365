import React from "react";
import { Button, Card } from "react-bootstrap";
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png";
import "../../assets/css/Card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CardProduct() {
  return (
    <div className="row main-card">
      <div className="col-6">
        <Card className="main-card card-h">
          <Link to="/category " className="img-link ">
            <Card.Img variant="top" src={card1} />

            <Card.Body>
              PRODUCT <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Card.Body>
          </Link>
        </Card>
      </div>

      <div className="col-6">
        <Card className="main-card card-h">
          <Link to="/category" className="img-link">
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              PRODUCT <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Card.Body>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default CardProduct;
