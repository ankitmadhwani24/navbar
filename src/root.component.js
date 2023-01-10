import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import './styles/main.css'

export default function Root(props) {
  
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="link">
            Home
        </Link>
        <Link to="/about" className="link">
          About US
        </Link>
        <Link to="/contact" className="link">
          Contact US
        </Link>
      </nav>
      <Home />
    </BrowserRouter>
  );
}
