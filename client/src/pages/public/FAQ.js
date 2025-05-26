// src/pages/FAQ.js
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I report a crime?',
      answer:
        'Click on the "Report Crime" button on the homepage and fill out the required details. You will receive a confirmation once the report is submitted.',
    },
    {
      question: 'Can I track the status of my complaint?',
      answer:
        'Yes, go to the "Track Complaint" section and enter your FIR ID or reference number to check the current status.',
    },
    {
      question: 'What happens after I file a report?',
      answer:
        'After submission, your report is reviewed by authorized police personnel. If required, further investigation will be initiated and you may be contacted.',
    },
    {
      question: 'Can I report a crime anonymously?',
      answer:
        'Yes, we allow anonymous reporting. However, please note that anonymous reports may limit follow-up actions or verification.',
    },
    {
      question: 'Is my personal information secure?',
      answer:
        'Absolutely. Your data is encrypted and accessible only to authorized personnel to ensure confidentiality and protection.',
    },
    {
      question: 'I forgot my password. How do I reset it?',
      answer:
        'Click on "Forgot Password" on the login page. You will receive an email with instructions to reset your password.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;