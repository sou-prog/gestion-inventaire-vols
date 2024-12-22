import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Display.css";
import { DataTable } from "./DataTable";

export const Display = () => {
  const [flightData, setFlightData] = useState([
    { flightId: 1, airportCode: "JFK", flightStatus: "On Time", totalNumOfSeat: 180, bookedSeat: 150, arrivalTime: "10:00", departureTime: "14:00" },
    // More flight data...
  ]);

  const [airportData, setAirportData] = useState([
    { airportCode: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "USA", contactInfo: "123-456-7890" },
    // More airport data...
  ]);

  const handleUpdate = (data, setter, idKey, idValue, field, value) => {
    const updatedData = data.map((item) =>
      item[idKey] === idValue ? { ...item, [field]: value } : item
    );
    setter(updatedData);
  };

  return (
    <div>
      <Header />
      <div className="display-container">
        <h2 className="display-title">Flight Details</h2>
        <DataTable
          data={flightData}
          columns={[
            { key: "flightId", label: "Flight ID", editable: false },
            { key: "airportCode", label: "Airport Code", editable: true },
            { key: "flightStatus", label: "Flight Status", editable: true },
            { key: "totalNumOfSeat", label: "Total Seats", editable: true },
            { key: "bookedSeat", label: "Booked Seats", editable: true },
            { key: "arrivalTime", label: "Arrival Time", editable: true },
            { key: "departureTime", label: "Departure Time", editable: true },
          ]}
          onUpdate={(idValue, field, value) =>
            handleUpdate(flightData, setFlightData, "flightId", idValue, field, value)
          }
        />

        <h2 className="display-title">Airport Details</h2>
        <DataTable
          data={airportData}
          columns={[
            { key: "airportCode", label: "Airport Code", editable: false },
            { key: "name", label: "Name", editable: true },
            { key: "city", label: "City", editable: true },
            { key: "country", label: "Country", editable: true },
            { key: "contactInfo", label: "Contact Info", editable: true },
          ]}
          onUpdate={(idValue, field, value) =>
            handleUpdate(airportData, setAirportData, "airportCode", idValue, field, value)
          }
        />
      </div>
      <Footer />
    </div>
  );
};
