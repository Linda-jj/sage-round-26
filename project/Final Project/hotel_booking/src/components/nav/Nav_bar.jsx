import React from "react";
import "./../nav/Nav-bar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Nav_bar() {
  return (
    <div className="nav-first">
      <div className="nav-logo">
        <img className=" nav-logo " src="\pic\logo (8).png" alt="logo" />
      </div>
      <div>
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About us{" "}
        </a>
        <a className="nav-link" href="#">
          Catagorty
        </a>
        <a className="nav-link" href="#">
          Rooms
        </a>
        <a className="nav-link" href="#">
          Testimoes
        </a>
        <a className="nav-link" href="#">
          Blogs
        </a>
      </div>
      <div className="nav-btn">
        <button>Book Now</button>
        <i class="fa-solid fa-bars" id="bar"></i>
      </div>
    </div>
  );
}
