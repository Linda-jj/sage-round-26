const express = require("express");
const {createReservation,getAllReservation,deleteReservation} = require("../controllers/reservationController");
 const router= express.Router()



 router.post('/create', createReservation)
 router.get('/all',getAllReservation)
 router.delete('/:id',deleteReservation)


 module.exports=router