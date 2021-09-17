import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import "./home.scss";
import Search from "../../assets/icons/search.svg";
import Vehiclecard from "../../components/VehicleCard/vehiclecard";
import { data } from "../../data/data";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();
  const [text, setText] = useState("");

  const handleSearch = () => {
    if (text.length > 0) {
      history.push(`/result/${text}`);
    }
  };

  return (
    <div className="home">
      <div className="banner">
        <Navbar />
        <div className="inner-container">
          <h2>Vehicle encyclopedia</h2>
          <div className="input-container">
            <img src={Search} onClick={handleSearch} alt="Search icon" />
            <input
              type="text"
              placeholder="Seach any type of vehicle"
              className="form-control"
              onChange={(e) => setText(e.target.value)}
            ></input>
          </div>
        </div>
        <section className="main">
          <h4>Select a type of vehicle</h4>
          <div className="vehicles">
            {data.map((item, index) => {
              return <Vehiclecard item={item} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
