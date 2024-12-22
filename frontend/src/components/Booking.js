import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import "./Booking.css"; // Import the CSS file
import { Nav } from "./Nav";
import auth from "../services/airports_service";
import { useNavigate } from 'react-router-dom';

// Liste des aéroports internationaux
const airports = [
  "Hartsfield-Jackson Atlanta International Airport (ATL)",
  "Beijing Capital International Airport (PEK)",
  "Dubai International Airport (DXB)",
  "Los Angeles International Airport (LAX)",
  "Tokyo Haneda Airport (HND)",
  "London Heathrow Airport (LHR)",
  "Hong Kong International Airport (HKG)",
  "Shanghai Pudong International Airport (PVG)",
  "Paris Charles de Gaulle Airport (CDG)",
  "Amsterdam Schiphol Airport (AMS)",
  "Frankfurt Airport (FRA)",
  "Singapore Changi Airport (SIN)",
  "Incheon International Airport (ICN)",
  "Denver International Airport (DEN)",
  "Dallas/Fort Worth International Airport (DFW)",
  "Soekarno-Hatta International Airport (CGK)",
  "Guangzhou Baiyun International Airport (CAN)",
  "John F. Kennedy International Airport (JFK)",
  "Chengdu Shuangliu International Airport (CTU)",
  "Madrid Barajas Airport (MAD)",
  "Barcelona El Prat Airport (BCN)",
  "Sydney Kingsford Smith Airport (SYD)",
  "Toronto Pearson International Airport (YYZ)",
  "São Paulo Guarulhos International Airport (GRU)",
  "Mexico City International Airport (MEX)",
  "Cairo International Airport (CAI)",
  "Istanbul Airport (IST)",
  "Munich Airport (MUC)",
  "Zurich Airport (ZRH)",
  "Vienna International Airport (VIE)",
  "Cape Town International Airport (CPT)",
  "Mumbai Chhatrapati Shivaji Maharaj Airport (BOM)",
  "Delhi Indira Gandhi International Airport (DEL)",
  "Doha Hamad International Airport (DOH)",
  "Kuala Lumpur International Airport (KUL)",
  "Bangkok Suvarnabhumi Airport (BKK)",
  "Seattle-Tacoma International Airport (SEA)",
  "San Francisco International Airport (SFO)",
  "Miami International Airport (MIA)",
];

export const Booking = () => {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [flightClass, setFlightClass] = useState("Standard");
  const [bookingDate, setBookingDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const fetchedFlights = await auth.fetchAvailableFlights();
      setFlights(fetchedFlights);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "departureAirport":
        setDepartureAirport(value);
        break;
      case "arrivalAirport":
        setArrivalAirport(value);
        break;
      case "numberOfPersons":
        setNumberOfPersons(value);
        break;
      case "flightClass":
        setFlightClass(value);
        break;
      case "bookingDate":
        setBookingDate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchedFlights = await auth.fetchAvailableFlights({
        departureAirport,
        arrivalAirport,
        bookingDate,
        numberOfPersons,
        flightClass,
      });
      setFlights(fetchedFlights);
      setSuccessMessage("Flights successfully fetched!");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const handleBookNow = (flight) => {
    navigate("./bookingForm", { state: { flight } });
  };

  return (
    <div className="body_booking">
      <Nav />
      <div className="container1">
        {successMessage && (
          <div className="success-message1">{successMessage}</div>
        )}
        <form className="form1" onSubmit={handleSubmit}>
          <label className="label1">
            Departure Airport:
            <select
              className="input1"
              name="departureAirport"
              value={departureAirport}
              onChange={handleChange}
            >
              <option value="">Select departure airport</option>
              {airports.map((airport) => (
                <option key={airport} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </label>

          <label className="label1">
            Arrival Airport:
            <select
              className="input1"
              name="arrivalAirport"
              value={arrivalAirport}
              onChange={handleChange}
            >
              <option value="">Select arrival airport</option>
              {airports.map((airport) => (
                <option key={airport} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </label>

          <label className="label1">
            Booking Date:
            <input
              className="input1"
              type="date"
              name="bookingDate"
              value={bookingDate}
              onChange={handleChange}
            />
          </label>

          <label className="label1">
            Number of Persons:
            <input
              className="input1"
              type="number"
              name="numberOfPersons"
              value={numberOfPersons}
              onChange={handleChange}
              min="1"
            />
          </label>

          <label className="label1">
            Flight Class:
            <select
              className="input1"
              name="flightClass"
              value={flightClass}
              onChange={handleChange}
            >
              <option value="Standard">Standard</option>
              <option value="Business">Business</option>
            </select>
          </label>

          <button className="button1" type="submit">
            SEARCH
          </button>
        </form>

        <div className="flights-container">
          {flights.length > 0 ? (
            <div>
              <h2>Available Flights</h2>
              <table>
                <thead>
                  <tr>
                    <th>Flight ID</th>
                    <th>Airport Code</th>
                    <th>Flight Status</th>
                    <th>Total Num Of Seat</th>
                    <th>Booked Seat</th>
                    <th>Arrival Time</th>
                    <th>Departure Time</th>
                    <th>Flight Date</th>
                    <th>Departure Airport</th>
                    <th>Arrival Airport</th>
                    <th>Booking</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight) => (
                    <tr key={flight.flightId}>
                      <td>{flight.flightId}</td>
                      <td>{flight.airportCode}</td>
                      <td>{flight.flightStatus}</td>
                      <td>{flight.totalNumOfSeat}</td>
                      <td>{flight.bookedSeat}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.flightDate}</td>
                      <td>{flight.departureAirport}</td>
                      <td>{flight.arrivalAirport}</td>
                      <td>
                        <button
                          className="booking-button"
                          onClick={() => handleBookNow(flight)}
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No flights available for the selected criteria.</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
