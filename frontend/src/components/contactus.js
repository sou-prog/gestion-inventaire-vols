import React, { useState } from "react";
import "./contactus.css";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter votre logique pour envoyer le message (API, service backend, etc.)
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setStatus("Votre message a été envoyé avec succès !");
    setTimeout(() => {
        setStatus(""); // Efface le message de succès
      }, 10000); // 10 secondes (10000 ms)
    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-body">
        <Nav/>
    <div className="contact-container">
        
      <h2>Contactez-nous</h2>
      <p>Nous serions ravis de recevoir vos questions ou commentaires.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
      {status && <p className="status-message">{status}</p>}
      
    </div>
    <Footer />
    </div>
  );
};
