// src/components/LoginModal.jsx
import React from 'react';
import Modal from 'react-modal';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

Modal.setAppElement('#root');

function LoginModal({ isOpen, onClose }) {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        onClose();
        window.location.href = 'https://app.digicontract.in/dashboard';
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
        alert(`Sign-in error: ${error.message}`);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-primary">Login to DigiContract</h2>
        <button
          onClick={signInWithGoogle}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Sign in with Google
        </button>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 text-text py-2 px-4 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default LoginModal;

