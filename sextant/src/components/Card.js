import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/150" // Replace with your image URL
        alt="Card Image"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-heading">Card Heading</h2>
        <p className="card-description">
          This is a description of the card. You can provide some information
          about the card's content here.
        </p>
        <ul className="card-details">
          <li>Detail 1: Some information</li>
          <li>Detail 2: More information</li>
          <li>Detail 3: Additional details</li>
        </ul>
        <button className="card-cta">Call to Action</button>
      </div>
    </div>
  );
};

export default Card;
