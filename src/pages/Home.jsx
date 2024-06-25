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
      <article className="homeArticle">
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/1.svg"
          />
          YENİ! Kore
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/2.svg"
          />
          Pizza
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/3.svg"
          />
          Burger
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/4.svg"
          />
          Kızartmalar
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/5.svg"
          />
          Fast food
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="./Assets/mile2-aseets/icons/6.svg"
          />
          Gazlı İçecek
        </p>
      </article>
      <article>
        <div className="cardPage">
          <div className="card-1">
            <div className="elements-1">
              <p className="ozel">Özel</p>
              <p
                className="ozel"
                style={{
                  margin: "0 0 5px 0",
                }}
              >
                Lezzetus
              </p>
              <p className="burger">Position:Absulute Acı Burger</p>
              <button className="siparis">Sipariş Ver</button>
            </div>
          </div>
          <div className="cardPage2">
            <div className="card-2">
              <div style={{ margin: "50px 0 0 50px" }}>
                <p>Hackathlon</p>
                <p>Burger Menü</p>
                <button className="siparis">Sipariş Ver</button>
              </div>
            </div>
            <div className="card-3">
              <div style={{ margin: "50px 0 0 50px" }}>
                <p>
                  <span style={{ color: "#CE2829" }}>Çoooook</span> hızlı
                </p>
                <p>npm gibi kurye</p>
                <button className="siparis">Sipariş Ver</button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default Home;
