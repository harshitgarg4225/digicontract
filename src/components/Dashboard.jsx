// src/components/Dashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AgreementForm from './AgreementForm';
import AgreementsList from './AgreementsList';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/');
      }
    });
    return unsubscribe;
  }, [navigate]);

  return (
    <div className="pt-20 container mx-auto px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Dashboard</h1>
      <AgreementForm />
      <AgreementsList />
    </div>
  );
}

export default Dashboard;
