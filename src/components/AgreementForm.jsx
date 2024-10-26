// src/components/AgreementForm.jsx
import React, { useState } from 'react';
import { firestore, auth } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function AgreementForm() {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    tenantName: '',
    landlordName: '',
    rentAmount: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(firestore, 'agreements'), {
        ...formData,
        userId: auth.currentUser.uid,
        createdAt: Timestamp.now(),
      });
      // Clear form after submission
      setFormData({
        propertyAddress: '',
        tenantName: '',
        landlordName: '',
        rentAmount: '',
      });
      alert('Agreement successfully created!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting form: ' + error.message);
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-primary">Create New Agreement</h2>
      <div className="mb-4">
        <label className="block text-text">Property Address</label>
        <input
          type="text"
          name="propertyAddress"
          value={formData.propertyAddress}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-text">Landlord Name</label>
        <input
          type="text"
          name="landlordName"
          value={formData.landlordName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-text">Tenant Name</label>
        <input
          type="text"
          name="tenantName"
          value={formData.tenantName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-text">Rent Amount (₹)</label>
        <input
          type="number"
          name="rentAmount"
          value={formData.rentAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
          min="0"
        />
      </div>
      <button
        type="submit"
        className={`bg-primary text-white px-4 py-2 rounded ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary'
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default AgreementForm;

