import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import happy from "../assets/happy.png";
import "../navbar.css";

const Navbar = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNavBackground(true);
      } else {
        setShowNavBackground(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${showNavBackground && "nav__black"}`}>
      <div className="img-box l-icon">
        <img src={logo} alt="logo" />
      </div>
      <div className="img-box r-icon">
        <img src={happy} alt="happy" />
      </div>
    </div>
  );
};

export default Navbar;
