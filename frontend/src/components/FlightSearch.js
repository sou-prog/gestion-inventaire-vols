import React, { useState } from "react";
import "./FlightSearch.css"; // Styles CSS

const FlightSearch = () => {
  const [formData, setFormData] = useState({
    departureCity: "",
    arrivalCity: "",
    travelDate: "",
    travelClass: "economy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Data: ", formData);
  };

  return (
    <div className="flight-search-container">
      <h2>Rechercher un Vol</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label>Ville de départ</label>
          <input
            type="text"
            name="departureCity"
            placeholder="Ex: Casablanca"
            value={formData.departureCity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Ville d'arrivée</label>
          <input
            type="text"
            name="arrivalCity"
            placeholder="Ex: Paris"
            value={formData.arrivalCity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date du vol</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Classe</label>
          <select
            name="travelClass"
            value={formData.travelClass}
            onChange={handleChange}
          >
            <option value="economy">Économique</option>
            <option value="business">Affaires</option>
            <option value="first">Première</option>
          </select>
        </div>
        <button type="submit" className="btn-search">Rechercher</button>
      </form>
    </div>
  );
};

export default FlightSearch;
