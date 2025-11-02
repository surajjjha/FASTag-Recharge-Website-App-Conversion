import React from "react";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-base-200 px-6">
      <h2 className="text-3xl font-bold text-center text-[#1f4037] mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            What is FASTag Recharge?
          </div>
          <div className="collapse-content">
            <p>
              It's a simulation website to demonstrate FASTag recharge flow for
              vehicles using modern frontend technologies.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            Does it connect to real payment systems?
          </div>
          <div className="collapse-content">
            <p>No. This version is purely frontend-based, with no backend integration.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            Can I install this as an app?
          </div>
          <div className="collapse-content">
            <p>
              Yes! This site can be made installable using PWA features or
              wrapped in a WebView.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
