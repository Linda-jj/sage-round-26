import React, { useState } from "react";
import "./../Book/Book.css";
import Book2 from "./Book2/Book2";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const [showBook, setShowBook] = useState(false);
  const [days, setDays] = useState(1); // ✅ start from 1
  const pricePerDay = 200;

  const navigate = useNavigate();

  return (
    <div className="book-boxx">
      <div className="hearder-book">
        <h2>Lion of Sheba</h2>
        <h1>Grand Hotel</h1>
        <hr />
      </div>

      <div className="book-box">
        <div className="book-header">
          <h1>Booking Information</h1>
          <p>Please fill up the blank fields below</p>
        </div>

        <div className="book-continer">
          <div>
            <img
              src="/pic/lion-statue-entrance_1195984-13180.jpg"
              alt="Hotel"
            />
            <p>Lion of Sheba Grand Hotel</p>
          </div>

          <div className="book-box">
            <form onSubmit={(e) => e.preventDefault()}>
              <label>How long will you stay?</label>

              <div className="counter">
                <button
                  type="button"
                  onClick={() => setDays((prev) => Math.max(1, prev - 1))}
                >
                  −
                </button>

                <span>{days} Days</span>

                <button
                  type="button"
                  className="plus"
                  onClick={() => setDays((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <label>Pick a Date</label>
              <input className="input-cale" type="date" />
            </form>

            <div className="price">
              You will pay <strong>${days * pricePerDay} USD</strong> <br />
              for {days} Days
            </div>

            <div className="book-btn">
              <button
                className="book-btn1"
                type="button"
                onClick={() => navigate("/book2")}
              >
                Book Now
              </button>
              <button
                className="book-btn2"
                type="button"
                onClick={() => setShowBook(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Render confirmation */}
      {showBook && <Book2 />}
    </div>
  );
}
