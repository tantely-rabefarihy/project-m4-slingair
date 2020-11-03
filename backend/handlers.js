"use strict";

const { restart } = require("nodemon");
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {
  const allFlights = Object.keys(flights) ;

if (!allFlights) { 
res.status(400).json({status: 400 , data : {allFlights}, message:"flight number doesn't exist."})
} else { 
res.status(200).json({status: 200 , data: {allFlights}})
}
  
};

// console.log("DISPLAY FLIGHTS", getFlights()) ;

const getFlight = (req, res) => {
  const flightId = req.params.id ;
  const flightSeating = flights[flightId] ; 
  if (!flightSeating) {
    res.status(400).json({status:400 , data : {flightSeating}, message: "Seating is not available for this flight."})
  } else {
    res.status(200).json({status:200 , data : {flightSeating} })
  }
};


const getReservations = (req, res) => {
if (!reservations) {
  res.status(400).json({status: 400, data : {reservations}, message: "No reservations available."})
} else {
  res.status(200).json({status:200, data: {reservations} })
}
};



const getSingleReservation = (req, res) => {
  const bookId = req.params.id;
  const singleBooking = reservations.find(reservation => reservation.id == bookId) ;

  if (!singleBooking) {
    res.status(400).json({status:400 , data: {singleBooking}, message: "This reservation doesn't exist."})
  } else {
    res.status(200).json({status:200 , data: singleBooking })
  }

};


const addReservations = (req, res) => {
  const newReservation = req.body ;

  const { flight, seat, givenName, surname, email } = newReservation ;
  newReservation.id = uuidv4();

  console.log("NEW RESERVATION DATA:  ",  newReservation);

// check if customer already have a reservation
  const reservationInDb = reservations.find(reservation => reservation.flight == flight && reservation.surname ==  surname && reservation.email == email)


  if (reservationInDb) {
    res.status(400).json({status:400 ,data:{newReservation},  message:"We already have this reservation."})
  } else if (!newReservation) {
  res.status(400).json({status:400, data : {newReservation}, message: "We have some infos missing."})
  } else {
    reservations.push(newReservation);
    res.status(201).json({status:201, data : newReservation })
  }

};


const deleteReservation = (req, res) => {
  const reservationId = req.params.id ;
  const selectedRes = reservations.find(reservation => reservation.id === reservationId);
  if (!selectedRes) {
    res.status(400).json({status:400 , data: {}, message: "this reservation doesn't exist."})
} else { 
    res.status(202).json({status:202, data: {}, message: "reservation cancelled."})
}

};


const updateReservation = (req, res) => {
  const reservationId = req.params.id ;
  const selectedRes = reservation.find(reservation => reservation.id === reservationId);
  const reservationUpdate = req.body ;
  const { flight, seat, givenName, surname, email } = reservationUpdate ;

  if (!selectedRes) { 
    res.status(400).json({status:400 , data:{}, message: "this reservation doesn't exist."})
  } else {
    res.status(204).json({status:204, data:{}, message: "reservation updated."})
  }

};


module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
