// src/components/Login.jsx
import React, { useState } from 'react';
import LoginModal from './LoginModal';

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <LoginModal isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
}

export default Login;

