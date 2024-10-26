// src/components/Features.jsx
import React from 'react';
import { FiFileText, FiEdit, FiShield } from 'react-icons/fi';

function Features() {
  const features = [
    {
      icon: <FiFileText size={48} className="text-primary mx-auto" />,
      title: 'Government Stamp Paper',
      description:
        'Easily procure and integrate government-compliant stamp paper in your agreements.',
    },
    {
      icon: <FiShield size={48} className="text-primary mx-auto" />,
      title: 'Aadhaar-Based Digital Signing',
      description:
        'Secure, legally binding agreements with Aadhaar-enabled digital signatures.',
    },
    {
      icon: <FiEdit size={48} className="text-primary mx-auto" />,
      title: 'Seamless Editing',
      description:
        'Modify agreements on the go with an intuitive editing interface for quick changes.',
    },
    // Add more features as needed
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-text">Our Features</h2>
        <p className="mt-4 text-text">
          Explore our powerful features designed specifically for the Indian rental market.
        </p>
        <div className="mt-12 flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 py-6">
              <div className="bg-gray-100 rounded-lg p-6">
                {feature.icon}
                <h3 className="mt-4 text-2xl font-bold text-primary">{feature.title}</h3>
                <p className="mt-2 text-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
