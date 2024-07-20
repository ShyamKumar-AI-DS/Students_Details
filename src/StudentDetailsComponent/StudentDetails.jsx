import React, { useState } from "react";
import "./StudentDetails.css";
import Photo from "./ME.jpg"
const StudentDetails = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name : Shyam Kumar A</h2>
      <p className="details"><b>Registration No :</b> 212221230098</p>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p> <b>Department :</b> Artificial Intelligence and Data Science</p>
          <p><b>Email ID :</b> Shyamsantino42@gmail.com</p>
          <p><b>Location :</b> Chennai - 600122</p>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;