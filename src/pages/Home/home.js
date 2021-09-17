import React from "react";
import Navbar from "../../components/Navbar/navbar";
import "./home.scss";
import Search from "../../assets/icons/search.svg";
import Vehiclecard from "../../components/VehicleCard/vehiclecard";
export default function home() {
  return (
    <div className="home">
      <div className="banner">
        <Navbar />
        <div className="inner-container">
          <h2>Vehicle encyclopedia</h2>
          <div className="input-container">
            <img src={Search} />
            <input
              type="text"
              placeholder="Seach any type of vehicle"
              className="form-control"
            ></input>
          </div>
        </div>
        <section className="main">
          <h4>Select a type of vehicle</h4>
          <div className="vehicles">
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
            <Vehiclecard />
          </div>
        </section>
      </div>
    </div>
  );
}
