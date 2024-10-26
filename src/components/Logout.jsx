import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  };
  

  return (
    <button
      onClick={handleLogout}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Logout
    </button>
  );
};

export default Logout;

