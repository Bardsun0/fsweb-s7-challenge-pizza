import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <a href="/">
        <img src="./Assets/mile1-assets/logo.svg" alt="logo" />
      </a>
    </header>
  );
}
export default Header;
