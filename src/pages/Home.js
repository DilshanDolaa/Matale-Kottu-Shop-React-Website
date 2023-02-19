import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/rotti.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Matale Kottu Spot </h1>
        <p> Best Kottu in Town</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;