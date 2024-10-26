// src/components/FAQ.jsx
import React, { useState } from 'react';

function FAQ() {
  const faqs = [
    {
      question: 'What is DigiContract?',
      answer:
        'DigiContract is an online platform that allows you to create, sign, and manage digital rental agreements easily and securely.',
    },
    {
      question: 'Is DigiContract legally valid?',
      answer:
        'Yes, agreements created and signed through DigiContract are legally binding and compliant with Indian laws.',
    },
    {
      question: 'How does Aadhaar-based digital signing work?',
      answer:
        'We use Aadhaar eSign services to enable secure and verified digital signatures using your Aadhaar number and OTP verification.',
    },
    // Add more FAQs as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-text">Frequently Asked Questions</h2>
        <div className="mt-12 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center p-4 bg-background rounded shadow"
              >
                <span className="text-lg font-medium text-text">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-2 px-4 text-text">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

