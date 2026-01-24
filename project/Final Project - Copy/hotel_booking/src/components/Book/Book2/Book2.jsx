import React from "react";
import { useState } from "react";
import "./../Book.css";

export default function Book2() {
  return (
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
  );
}
