"use client"
import { useState } from "react";

const faqs = [
  {
    question: "Who can benefit from therapy with Dr. Maya?",
    answer:
      "Adults experiencing anxiety, trauma, burnout, or professional stress, especially high-achieving individuals.",
  },
  {
    question: "Where are sessions held?",
    answer:
      "In-person at Dr. Maya’s Santa Monica office or via secure telehealth for clients across California.",
  },
  {
    question: "What therapy approaches are used?",
    answer:
      "Cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "How are sessions structured?",
    answer:
      "Sessions are collaborative, grounded, and paced to support both emotional and physiological regulation.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1676197935286-14d7fbb56760?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[#223614] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#4b5f55]">
            Answers to common questions about therapy with Dr. Maya Reynolds.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#e0e0d1] rounded-xl overflow-hidden bg-white/50 backdrop-blur-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-[#223614] font-medium text-lg focus:outline-none"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-[#4b5f55] text-base md:text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
