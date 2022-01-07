import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import prdc1 from "../../assets/images/product-1.jpg";
import prdc2 from "../../assets/images/product-2.jpg";
import prdc3 from "../../assets/images/product-3.jpg";
import "../../assets/css/product.css";

function Category() {
  return (
    <div>
      <ToastContainer />
      <main className="container-fluid">
        
        <section className="container cards-wrapper">
          <div className="row main-container">
            <div className="col-md-4">
              <div className="product-card card">
                <img className="card-img img-src" src={prdc1} alt="product-1" />
                <div className="card-body">
                  <h4 className="product-title">BEAUTY- ITEM-1</h4>
                  <div className="price_icon_wrap">
                    <h3 className="product-price">$80.00</h3>
                  </div>
                  <div className="button_wrap">
                  
                    <a className="btn button" href="">
                      add to cart
                    </a>
                    <a className="btn button" href="">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-card card">
                <img className="card-img img-src" src={prdc2} alt="product-2" />
                <div className="card-body">
                  <h4 className="product-title">BEAUTY- ITEM-2</h4>
                  <div className="price_icon_wrap">
                    <h3 className="product-price">$80.00</h3>
                  </div>
                  <div className="button_wrap">
                    <a className="btn button" href="">
                      Add to cart{" "}
                    </a>
                    <a className="btn button" href="">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-card card">
                <img className="card-img img-src" src={prdc3} alt="" />

                <div className="card-body">
                  <h4 className="product-title">BEAUTY- ITEM-3</h4>
                  <div className="price_icon_wrap">
                    <h3 className="product-price">$80.00</h3>
                  </div>
                  <div className="button_wrap">
                    <a className="btn button" href="">
                      Add to cart{" "}
                    </a>
                    <a className="btn button" href="">
                      Buy Now
                    </a>
                    <span className="hide">{toast.error('page is under devlopping by Meraj')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default Category;
