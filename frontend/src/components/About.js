import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import logofb from "./fb.png";
import logoinsta from "./insta.png";
import logotiktok from "./tiktok.png";

const pageContainerStyle = {
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: "#fafafa",
  padding: "0 20px",
  color: "#333",
};

const centeredSectionStyle = {
  textAlign: "center",
  margin: "50px auto",
  padding: "30px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "#003366",
  marginBottom: "20px",
};

const subheadingStyle = {
  fontSize: "2rem",
  color: "#003366",
  marginBottom: "15px",
};

const paragraphStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.8",
  marginBottom: "20px",
  color: "#555",
};

const strongTextStyle = {
  fontWeight: "bold",
  color: "#003366",
};

const contactInfoStyle = {
  fontSize: "1rem",
  color: "#003366",
  marginBottom: "10px",
};

const footerImageStyle = {
  width: "40px",
  height: "40px",
  margin: "0 10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const footerImageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15px",
};

const FooterContainerStyle = {
  backgroundColor: "#003366",
  padding: "20px 0",
  textAlign: "center",
  color: "#fff",
};

export const About = () => {
  return (
    <div style={pageContainerStyle}>
      <Nav />
      <div style={centeredSectionStyle}>
        <h1 style={headingStyle}>About SIFSKY Airline Booking Systems</h1>
        <p style={paragraphStyle}>
          Welcome to SIFSKY, your premier destination for seamless and luxurious airline booking experiences. At SIFSKY, we understand that travel is not just a journey; it's an expression of your aspirations, a testament to your taste, and a reflection of your individuality. That's why we've crafted a sophisticated and user-centric airline booking platform that caters to your every travel need.
        </p>
      </div>

      <div style={centeredSectionStyle}>
        <h2 style={subheadingStyle}>Our Mission</h2>
        <p style={paragraphStyle}>
          Our mission at SIFSKY is to redefine the way you experience airline travel. We strive to elevate your journey from the moment you decide to explore the world. We're committed to providing a personalized, efficient, and exquisite booking process that ensures your travel plans are as exceptional as your destination.
        </p>
      </div>

      <div style={centeredSectionStyle}>
        <h2 style={subheadingStyle}>Why Choose SIFSKY?</h2>
        <p style={paragraphStyle}>
          <strong style={strongTextStyle}>Luxury at Your Fingertips:</strong> SIFSKY brings the world's most opulent airlines and destinations to your screen, making luxury travel accessible and convenient. We curate a selection of premium airlines and routes, allowing you to indulge in sophistication and elegance.
        </p>
        <p style={paragraphStyle}>
          <strong style={strongTextStyle}>Seamless Booking: </strong> Our state-of-the-art booking system ensures a seamless and hassle-free experience. From choosing your flight to securing your seat, SIFSKY's intuitive interface guides you through the process with ease.
        </p>
        <p style={paragraphStyle}>
          <strong style={strongTextStyle}>Personalized Experiences: </strong> We believe that every traveler is unique. SIFSKY tailors your journey to your preferences, whether it's seat preferences, dietary requirements, or special accommodations. Your satisfaction is our priority.
        </p>
        <p style={paragraphStyle}>
          <strong style={strongTextStyle}>Exceptional Customer Support: </strong> Our dedicated customer support team is available around the clock to assist you. Whether you have a query about your booking, need to make changes, or require assistance during your travel, we're here to help.
        </p>
        <p style={paragraphStyle}>
          <strong style={strongTextStyle}>Global Connectivity:</strong> SIFSKY covers a vast network of destinations, connecting you to the world's most sought-after cities and hidden gems. Wherever your wanderlust takes you, we're there to ensure your voyage is unforgettable.
        </p>
      </div>

      <div style={centeredSectionStyle}>
        <h2 style={subheadingStyle}>Join the SIFSKY Experience</h2>
        <p style={paragraphStyle}>
          Fly luxuriously. Fly elegantly. Fly with SIFSKY.
        </p>
        <div style={contactInfoStyle}>
        <p>
            Email:{" "}
            <a href="mailto:SIFSKY@gmail.com" style={{ color: "#003366", textDecoration: "underline" }}>
              SIFSKY@gmail.com
            </a>
          </p>
          <p>Phone: 05 23245634</p>
          <p>Follow us on social media: </p>
          <div style={footerImageContainerStyle}>
            <a href="https://www.facebook.com/SIFSKY" target="_blank" rel="noopener noreferrer">
              <img src={logofb} alt="Facebook" style={footerImageStyle} />
            </a>
            <a href="https://www.instagram.com/SIFSKY" target="_blank" rel="noopener noreferrer">
              <img src={logoinsta} alt="Instagram" style={footerImageStyle} />
            </a>
            <a href="https://www.tiktok.com/@SISSKY" target="_blank" rel="noopener noreferrer">
              <img src={logotiktok} alt="TikTok" style={footerImageStyle} />
            </a>
          </div>
        </div>
      </div>

      <Footer style={FooterContainerStyle} />
    </div>
  );
};
