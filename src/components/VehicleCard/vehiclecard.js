import React from "react";
import Car from "../../assets/images/car.jpg"
import './vehiclecard.scss'
export default function Vehiclecard() {
  return (
    <div className="card">
      <img src={Car}></img>
      <div className="inner-text-container">
        <p>Car</p>
      </div>
    </div>
  );
}
