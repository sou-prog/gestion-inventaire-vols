import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service"; // Importation de AuthService
import "./Login.css";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Modal from "react-modal";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(username, password); // Appel de la méthode login d'AuthService
      console.log("Login Response:", response);
      const role = response.role;

      if (role === "admin") {
        navigate("/admin-dashboard"); // Redirection vers la page admin-dashboard
      } else if (role === "passenger") {
        navigate("/"); // Redirection vers la page passager (accueil)
      } else {
        setIsModalOpen(true); // Modal si le rôle n'est pas reconnu
      }
    } catch (err) {
      console.error(err);
      alert("Invalid credentials or an error occurred.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="login-full">
      <Nav />
      <div className="auth-form-container">
        <h2><b>Login</b></h2>
        <h3>Enter your credentials</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            required
          />
          
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
          />
          
          <button type="submit"><b>LOGIN</b></button>
        </form>
        <button
          className="link-btn"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Access Denied"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="modal-heading">Access Denied</h2>
        <p className="modal-message">Invalid credentials or unrecognized role.</p>
        <button className="modal-button" onClick={closeModal}>
          OK
        </button>
      </Modal>
    </div>
  );
};
