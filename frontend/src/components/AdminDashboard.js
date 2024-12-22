import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [flights, setFlights] = useState([]);
  const [airports, setAirports] = useState([]);
  const [newFlight, setNewFlight] = useState({ departure: "", arrival: "", date: "" });
  const [newAirport, setNewAirport] = useState({ name: "", location: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const fetchFlights = async () => {
    try {
      const response = await axios.get("/api/v1/flights"); // Remplacez par l'API appropriée
      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  const fetchAirports = async () => {
    try {
      const response = await axios.get("/api/v1/airports"); // Remplacez par l'API appropriée
      setAirports(response.data);
    } catch (error) {
      console.error("Error fetching airports:", error);
    }
  };

  const handleAddFlight = async () => {
    try {
      await axios.post("/api/v1/flights", newFlight); // Remplacez par l'API appropriée
      setStatusMessage("Flight added successfully!");
      fetchFlights(); // Recharger les vols après l'ajout
      setNewFlight({ departure: "", arrival: "", date: "" });
    } catch (error) {
      console.error("Error adding flight:", error);
      setStatusMessage("Failed to add flight.");
    }
  };

  const handleAddAirport = async () => {
    try {
      await axios.post("/api/v1/airports", newAirport); // Remplacez par l'API appropriée
      setStatusMessage("Airport added successfully!");
      fetchAirports(); // Recharger les aéroports après l'ajout
      setNewAirport({ name: "", location: "" });
    } catch (error) {
      console.error("Error adding airport:", error);
      setStatusMessage("Failed to add airport.");
    }
  };

  const handleDeleteFlight = async (id) => {
    try {
      await axios.delete(`/api/v1/flights/${id}`); // Remplacez par l'API appropriée
      setStatusMessage("Flight deleted successfully!");
      fetchFlights(); // Recharger les vols après la suppression
    } catch (error) {
      console.error("Error deleting flight:", error);
      setStatusMessage("Failed to delete flight.");
    }
  };

  const handleDeleteAirport = async (id) => {
    try {
      await axios.delete(`/api/v1/airports/${id}`); // Remplacez par l'API appropriée
      setStatusMessage("Airport deleted successfully!");
      fetchAirports(); // Recharger les aéroports après la suppression
    } catch (error) {
      console.error("Error deleting airport:", error);
      setStatusMessage("Failed to delete airport.");
    }
  };

  useEffect(() => {
    fetchFlights();
    fetchAirports();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>{statusMessage}</p>

      {/* Add Flight */}
      <h3>Add a Flight</h3>
      <input
        type="text"
        placeholder="Departure"
        value={newFlight.departure}
        onChange={(e) => setNewFlight({ ...newFlight, departure: e.target.value })}
      />
      <input
        type="text"
        placeholder="Arrival"
        value={newFlight.arrival}
        onChange={(e) => setNewFlight({ ...newFlight, arrival: e.target.value })}
      />
      <input
        type="datetime-local"
        value={newFlight.date}
        onChange={(e) => setNewFlight({ ...newFlight, date: e.target.value })}
      />
      <button onClick={handleAddFlight}>Add Flight</button>

      {/* Flight List */}
      <h3>Flights</h3>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.departure} →  {flight.arrival} at {flight.date}
            <button onClick={() => handleDeleteFlight(flight.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Add Airport */}
      <h3>Add an Airport</h3>
      <input
        type="text"
        placeholder="Airport Name"
        value={newAirport.name}
        onChange={(e) => setNewAirport({ ...newAirport, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={newAirport.location}
        onChange={(e) => setNewAirport({ ...newAirport, location: e.target.value })}
      />
      <button onClick={handleAddAirport}>Add Airport</button>

      {/* Airport List */}
      <h3>Airports</h3>
      <ul>
        {airports.map((airport) => (
          <li key={airport.id}>
            {airport.name} - {airport.location}
            <button onClick={() => handleDeleteAirport(airport.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
