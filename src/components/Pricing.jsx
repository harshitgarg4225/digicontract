// src/components/Pricing.jsx
import React from 'react';

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '₹499',
      features: ['Standard Agreement Template', 'Email Support'],
    },
    {
      name: 'Standard',
      price: '₹999',
      features: ['All Basic Features', 'Customizable Templates', 'Priority Email Support'],
    },
    {
      name: 'Premium',
      price: '₹1499',
      features: ['All Standard Features', 'Aadhaar-Based Signing', 'Phone Support'],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-text">Pricing Plans</h2>
        <p className="mt-4 text-text">Choose a plan that suits your needs.</p>
        <div className="mt-12 flex flex-wrap justify-center">
          {plans.map((plan, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 py-6">
              <div className="bg-background rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                <p className="mt-2 text-text">{plan.price} per agreement</p>
                <ul className="mt-4 text-text text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mt-2">
                      - {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-primary text-white px-4 py-2 rounded hover:bg-secondary">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

