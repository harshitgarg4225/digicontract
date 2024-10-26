// src/components/AgreementsList.jsx
import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';

function AgreementsList() {
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(firestore, 'agreements'),
      where('userId', '==', auth.currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const agreementsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAgreements(agreementsData);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-primary">Your Agreements</h2>
      {agreements.length === 0 ? (
        <p className="text-text">You have no agreements yet.</p>
      ) : (
        <ul>
          {agreements.map((agreement) => (
            <li key={agreement.id} className="mb-4 border p-4 rounded-lg shadow">
              <p className="text-text">
                <strong>Property Address:</strong> {agreement.propertyAddress}
              </p>
              <p className="text-text">
                <strong>Landlord Name:</strong> {agreement.landlordName}
              </p>
              <p className="text-text">
                <strong>Tenant Name:</strong> {agreement.tenantName}
              </p>
              <p className="text-text">
                <strong>Rent Amount:</strong> ₹{agreement.rentAmount}
              </p>
              <p className="text-text">
                <strong>Created At:</strong> {agreement.createdAt.toDate().toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AgreementsList;

