import React from "react";
import "./CardElement.css";

function Card({ children }) {
  return (
    <div className="card">
      <img className="card_img" src="" alt="#" />
      <div className="card_body">
        <p className="card_body-title">First palnt</p>
        <p className="card_body-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        {/* <a className="card_body-link" href="">
          Test
        </a> */}
      </div>
    </div>
  );
}

export default Card;
