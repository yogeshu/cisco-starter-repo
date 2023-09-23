import React from "react";

const Card = ({ ip, universalIp }) => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/150" // Replace with your image URL
        alt="Card Image"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-heading">IP Creation Card</h2>
        <h2 className="card-description">my ip is {ip}</h2>
        <ul className="card-details">
          <li>My IpV4 - {ip}</li>
          <li>MY IpV4(v6) is -{universalIp}</li>
        </ul>
        <button className="card-cta">Call to Action</button>
      </div>
    </div>
  );
};

export default Card;
