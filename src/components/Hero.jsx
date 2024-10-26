// src/components/Hero.jsx
import React, { useState } from 'react';
import LoginModal from './LoginModal';

function Hero() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="pt-24 pb-12 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">DigiContract</h1>
        <p className="mt-6 text-text text-base md:text-lg">
          Modern digital rental agreements with government compliance.
        </p>
        <button
          onClick={openModal}
          className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-md text-md md:text-lg hover:bg-secondary"
        >
          Create Your Agreement
        </button>
        <LoginModal isOpen={modalIsOpen} onClose={closeModal} />
      </div>
    </section>
  );
}

export default Hero;
