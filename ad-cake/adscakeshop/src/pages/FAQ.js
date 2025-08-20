// src/pages/FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How far in advance should I order a custom cake?",
      answer: "We recommend ordering custom cakes at least 7 days in advance. For wedding cakes or elaborate designs, 2-3 weeks is preferable."
    },
    {
      question: "Do you offer gluten-free or vegan options?",
      answer: "Yes, we offer both gluten-free and vegan cake options. Please note these may require additional time to prepare and may have a slight price difference."
    },
    {
      question: "What are your delivery options?",
      answer: "We offer delivery within a 15-mile radius of our bakery for $10. For locations further away, we can arrange delivery through a third-party service. Pickup is always free."
    },
    {
      question: "How should I store my cake?",
      answer: "Cakes should be stored in the refrigerator and brought to room temperature 30 minutes before serving for best taste. Cakes with fresh fruit or cream should be consumed within 2 days."
    },
    {
      question: "Can I make changes to my order after placing it?",
      answer: "Changes can be made up to 48 hours before pickup or delivery. After that, we cannot guarantee modifications."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and cash. For custom cake orders, we require a 50% deposit at the time of ordering."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our cakes and services</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="card" style={{ marginBottom: '15px', borderRadius: '8px', overflow: 'hidden' }}>
                <button
                  className="btn"
                  style={{
                    width: '100%',
                    padding: '20px',
                    backgroundColor: 'white',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: '300' }}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;