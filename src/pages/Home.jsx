import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";

function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/OrderPizza");
  }

  return (
    <>
      <div className="home-page">
        <div className="home-page-div">
          <h1>
            <span>KOD ACIKTIRIR</span>
            <span>PİZZA, DOYURUR</span>
          </h1>
          <div className="siparis-button-div">
            <button
              className="siparis-button"
              type="button"
              onClick={handleClick}
            >
              ACIKTIM
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
