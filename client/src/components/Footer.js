import React from "react";
// import "./footer.css";
// import { Row } from 'react-bootstrap';

function Footer() {
  return (
    <div id="footer">
      <div
        className="text-center"
        style={{
          color: "white",
          fontSize: "20px",
          backgroundColor: "darkred",
          fontFamily: "'Playfair Display', serif",
          padding: "10px"
        }}
      >
        Powered by: The World Network &#169; 2020
      </div>
    </div>
  );
}

export default Footer;
