import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Reservation.css";
export const backendUrl = "http://localhost:7000";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/reservation/all`,
        );
        if (response.data.success) {
          setReservations(response.data.reservations);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservation();
  }, []);
  return (
    <div className="reservation-container">
      <h2 className="reservation-title">Room Reservation</h2>

      <div className="table-wrapper">
        <table className="reservation-table">
          <thead>
            <tr className="table-header">
              <th>Room Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Guests</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="9" className="no-data">
                  No Reservations Available
                </td>
              </tr>
            ) : (
              reservations.map((res) => (
                <tr key={res._id} className="table-row">
                  <td>{res.roomName}</td>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.phone}</td>
                  <td>{res.guests}</td>
                  <td>{new Date(res.checkin).toLocaleDateString()}</td>
                  <td>{new Date(res.checkout).toLocaleDateString()}</td>
                  <td>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
