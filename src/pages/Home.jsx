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
      <div className="homeArticle">
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="/1.svg"
          />
          YENİ! Kore
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="/2.svg"
          />
          Pizza
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="/3.svg"
          />
          Burger
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="/4.svg"
          />
          Kızartmalar
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="/5.svg"
          />
          Fast food
        </p>
        <p>
          <img
            style={{ paddingRight: "10px" }}
            src="/6.svg"
          />
          Gazlı İçecek
        </p>
      </div>
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
      <div className="menu-section">
        <h2>en çok paketlenen menüler</h2>
        <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
        <div className="menu-categories">
          <button onClick={handleClick} className="category-button">
            <img src="/1.svg" alt="Ramen" />{" "}
            Ramen
          </button>
          <button onClick={handleClick} className="category-button">
            <img src="/2.svg" alt="Pizza" />{" "}
            Pizza
          </button>
          <button onClick={handleClick} className="category-button">
            <img src="/3.svg" alt="Burger" />{" "}
            Burger
          </button>
          <button onClick={handleClick} className="category-button">
            <img
              src="/4.svg"
              alt="French fries"
            />{" "}
            French fries
          </button>
          <button onClick={handleClick} className="category-button">
            <img src="/5.svg" alt="Fast food" />{" "}
            Fast food
          </button>
          <button onClick={handleClick} className="category-button">
            <img
              src="/6.svg"
              alt="Soft drinks"
            />{" "}
            Soft drinks
          </button>
        </div>
        <div className="menu-items">
          <div className="menu-item">
            <img
              onClick={handleClick}
              src="/food-1.png"
              alt="Terminal Pizza"
            />
            <h4>Terminal Pizza</h4>
            <p>4.9 (200)</p>
            <p>60₺</p>
          </div>
          <div className="menu-item">
            <img
              onClick={handleClick}
              src="/food-2.png"
              alt="Position Absolute Acı Pizza"
            />
            <h4>Position Absolute Acı Pizza</h4>
            <p>4.9 (928)</p>
            <p>85₺</p>
          </div>
          <div className="menu-item">
            <img
              onClick={handleClick}
              src="/food-3.png"
              alt="useEffect Tavuklu Burger"
            />
            <h4>useEffect Tavuklu Burger</h4>
            <p>4.9 (462)</p>
            <p>75₺</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
