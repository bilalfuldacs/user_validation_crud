import React from "react";
import "./Modal.css";
const Modal = ({ isOpen, onClose, resultData }) => {
  let description;
  if (!isOpen) {
    return null;
  }

  if (
    resultData.name === null ||
    resultData.age === null ||
    resultData.name.trim() === ""
  ) {
    description = " Enter all fields name and age";
  } else if (resultData.age <= 0) {
    description = " Enter valid age greater then 0";
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>{description}</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
