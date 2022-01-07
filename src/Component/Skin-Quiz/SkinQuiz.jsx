import React from "react";
import quiz from "../../assets/images/quiz.png";
function SkinQuiz() {
  return (
    <div className="main-div">
      <img src={quiz} alt="quiz" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter mt-4">My Beauty 365</h3>
            <p>
              Before you continue to add to cart, what products are you looking
              for? Test your skin type to determine what you need to use, daily!
              You’ll see the right products hit differently. We all have
              different skin types, so to get the glow, determine whether you’re
              combination, oily or dry by taking our skin quiz. We’ll put
              together the perfect package for you!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinQuiz;
