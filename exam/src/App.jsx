import logo from "./logo.svg";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import ImageComponent from "./components/ImageComponents";
import Modal from "./components/RegistrationForm";
import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Sign Up TEST</button>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className="registration-page">
            <div className="left-content">
              <imageComponent />
            </div>
            <div className="right-content">
              <RegistrationForm />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
