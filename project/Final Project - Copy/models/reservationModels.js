const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    checkin: { type: String, require: true },
    checkout: { type: String, require: true },
    guests: { type: String, require: true },
    roomName: { type: String, require: true },
    roomId: { type: Number, require: true },
  }
  
);
const Reservation=mongoose.model("Reservation", reservationSchema);
module.exports =Reservation
