import React from "react";
import "./../nav/NavBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Nav_bar() {
  return (
    <div className="nav-first">
      <div className="nav-logo">
        <h2>Lion of Sheba</h2>
        <h1>Grand Hotel</h1>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Rooms</a>
        <a href="#">Services</a>
        <a href="#">Activities</a>
      </div>
      <div className="nav-btn">
        <button>
          <i class="fa-solid fa-key"></i> BOOK NOW
        </button>

        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
