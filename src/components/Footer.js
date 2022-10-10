import React from "react";

//Styles
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="text-muted ms-4">
        María Rodriguez{" "}
          <FontAwesomeIcon icon={faRegistered} className="" />
      </div>
    </footer>
  );
};

export default Footer;
