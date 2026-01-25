import axios from "axios";
import React, { useEffect, useState } from "react";

import { MdAutoDelete } from "react-icons/md";
import "./ListHotel.css";
export const backendUrl = "http://localhost:7000";

const ListHotel = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchRoomList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/hotel/list`, {
        headers: { token },
      });
      if (response.data.success) {
        setList(response.data.hotels);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoomList();
  }, []);
  return (
    <div className="hotel-list-container">
      <p className="hotel-list-title">Hotel Rooms List</p>

      <div className="hotel-list-wrapper">
        <div className="hotel-list-header">
          <b>Image</b>
          <b>Room Name</b>
          <b>Price</b>
          <b className="center-text">Delete</b>
        </div>
  {list.length === 0 && <p>No rooms found</p>}
        {list.map((item) => (
          <div key={item._id} className="hotel-list-row">
            <img src={item.image} alt={item.name} className="room-image" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <MdAutoDelete className="delete-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListHotel;
