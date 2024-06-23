import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="div-1">
        <div className="div-2">
          <img
            src="../../Assets/mile2-aseets/footer/logo-footer.svg"
            className="footer-logo"
          />
          <div className="div-3">
            <div className="div-4">
              <img src="../../Assets/mile2-aseets/footer/icons/icon-1.png" />
              <span>
                341 Londonderry Road, <br /> Istanbul Türkiye{" "}
              </span>
            </div>
            <div className="footer-text1">
              <img src="../../Assets/mile2-aseets/footer/icons/icon-2.png" />
              <span>aciktim@teknolojikyemekler.com </span>
            </div>
            <div className="footer-text1">
              <img src="../../Assets/mile2-aseets/footer/icons/icon-3.png" />
              <span>+90 216 123 45 67 </span>
            </div>
          </div>
          <div className="div-5">
            <h1>Sıccacık Menuler</h1>
            <ul style={{ listStyleType: "none" }}>
              <p>Terminal Pizza</p>
              <p>5 Kişilik Hackathlon Pizza</p>
              <p>useEffect Tavuklu Pizza</p>
              <p>Beyaz Console Frosty</p>
              <p>Testler Geçti Mutlu Burger</p>
              <p>Position Absolute Acı Burger</p>
            </ul>
          </div>
        </div>
        <div className="div-6">
          <h1>Instagram</h1>
          <ul className="footer-ul">
            <li>
              <img src="../../Assets/mile2-aseets/footer/insta/li-0.png" />
            </li>
            <li>
              <img src="../../Assets/mile2-aseets/footer/insta/li-1.png" />
            </li>
            <li>
              <img src="../../Assets/mile2-aseets/footer/insta/li-2.png" />
            </li>
            <li>
              <img src="../../Assets/mile2-aseets/footer/insta/li-3.png" />
            </li>
            <li>
              <img src="../../Assets/mile2-aseets/footer/insta/li-4.png" />
            </li>
            <li>
              <img src="../../Assets/mile2-aseets/footer/insta/li-5.png" />
            </li>
          </ul>
        </div>
      </div>
      <div className="div-7">
        <div className="div-8">
          <p>© 2023 Teknolojik Yemekler.</p>
          <ul>
            <img
              src="../../Assets/mile2-aseets/footer/tw.png"
              style={{ width: "18px", height: "15px" }}
            />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
