import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Wefo</h1>
        <div className="header-div">
        <Link to ='/'> <button>Home</button></Link>
        <Link to='/section'><button>Our Service</button></Link>
          <Link to ='/contact'><button>Contact Us</button></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
