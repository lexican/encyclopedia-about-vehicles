import React from "react";
import Car from "../../assets/images/car.jpg"
import './vehiclecard.scss'
export default function Vehiclecard(props) {
  return (
    <div className="card">
      <img src={props.item.images[0]}></img>
      <div className="inner-text-container">
        <p>{props.item.name}</p>
      </div>
    </div>
  );
}
