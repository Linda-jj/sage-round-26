import React from "react";
import { useState } from "react";
import "./../Book/Book.css";

export default function Book() {
  const [days, setDays] = useState(2);
  const pricePerDay = 200;
  return (
    <div>
      <div className="book-boxx">
        <div className="hearder-book">
          <h2>Lion of Sheba</h2>
          <h1>Grand Hotel</h1>
          <hr />
        </div>
        <div className="rounting">
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
        </div>
        <div className="book-box">
          <div className="book-header">
            <h1>Booking Information </h1>
            <p>Please fill up the blank felds below</p>
          </div>
          <div className="book-continer">
            <div>
              <img src="/pic/lion-statue-entrance_1195984-13180.jpg" alt="" />
              <p>Lion of sheba Grand Hotel</p>
            </div>
            <div className="book-box">
              <form>
                <label>How long you will stay?</label>
                <div className="counter">
                  <button onClick={() => setDays(Math.max(1, days - 1))}>
                    −
                  </button>

                  <span>{days} Days</span>

                  <button className="plus" onClick={() => setDays(days + 1)}>
                    +
                  </button>
                </div>
                <label>Pick a Date </label>
                <input
                  className="input-cale"
                  type="text"
                  placeholder="Select date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                />
              </form>
              <div className="price">
                You will pay <strong>${days * pricePerDay} USD</strong> <br />
                per {days} Days
              </div>
              <div className="book-btn">
                <button className="book-btn1">Book Now</button>
                <button className="book-btn2">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="book2">
        <div className="book-header">
          <h1>Payment </h1>
          <p>Kindly follow the instruction blow</p>
        </div>
        <div className="book-main">
          <div className="book-info">
            <p>
              {" "}
              {} Days at Lion of Sheba
              <br />
              Grand Hotel
            </p>
            <p>Total :${}</p>
            <p>Initial Payment :${}</p>
          </div>
          <div className="book-card">
            <form>
              <label>Card Number</label>
              <input name="number" placeholder="payment card number" />
              <label>Bank</label>
              <input name="text" placeholder="Bank Name" />
              <label>Exp Date</label>
              <input name="number" placeholder="payment card number" />
              <label>CVV</label>
              <input name="number" placeholder="XXX" />
            </form>
          </div>
        </div>
        <div className="book-btnn">
          <button className="book-btn1">Book Now</button>
          <button className="book-btn2">Cancel</button>
        </div>
      </div>
      {/* Final Booking */}
      <div className="final-Booking">
        <div className="book-header">
          <h2>Yay! Payment Completed</h2>{" "}
        </div>

        <img src="/pic/images.png" alt="" />
        <p>
          Please check your email & phone Message.
          <br />
          We have sent all the information.
        </p>
        <button className="book-btn1">Go to Home</button>
      </div>
    </div>
  );
}
