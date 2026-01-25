import React, { useState } from "react";
import "./../nav/NavBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import BookPage from "../../screens/BookPage";

export default function NavBar() {
  const [showBook, setShowBook] = useState(false);

  return (
    <>
      <div className="nav-first">
        <div className="nav-logo">
          <h2>Lion of Sheba</h2>
          <h1>Grand Hotel</h1>
        </div>

        <div className="nav-links">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/activity">Activity</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="nav-btn">
          <button onClick={() => setShowBook(true)}>
            <i className="fa-solid fa-key"></i> BOOK NOW
          </button>

          <button>Register</button>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {showBook && <BookPage />}
    </>
  );
}
