
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white text-navy p-8 rounded-xl text-center shadow-inner">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl rift-font font-black mb-2">Request Received!</h3>
        <p className="text-grey">One of our specialists will call you within 15 minutes.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-orange font-bold">Send another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-navy p-8 rounded-xl shadow-2xl space-y-4">
      <h3 className="text-2xl rift-font font-black mb-6 text-center">Request Your Free Estimate</h3>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name *</label>
        <input required type="text" className="w-full p-3 bg-linen border border-linen rounded focus:border-orange focus:outline-none transition" placeholder="e.g. John Doe" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone *</label>
          <input required type="tel" className="w-full p-3 bg-linen border border-linen rounded focus:border-orange focus:outline-none transition" placeholder="(604) 555-0000" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email *</label>
          <input required type="email" className="w-full p-3 bg-linen border border-linen rounded focus:border-orange focus:outline-none transition" placeholder="john@example.com" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Service Needed</label>
        <select className="w-full p-3 bg-linen border border-linen rounded focus:border-orange focus:outline-none transition">
          <option>Residential CIPP Lining</option>
          <option>Commercial Trenchless Repair</option>
          <option>Sewer Camera Inspection</option>
          <option>Municipal Pipe Repair</option>
          <option>Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Project Details</label>
        <textarea rows={3} className="w-full p-3 bg-linen border border-linen rounded focus:border-orange focus:outline-none transition" placeholder="Briefly describe your issue..."></textarea>
      </div>
      <button type="submit" className="w-full bg-orange hover:bg-red-700 text-white p-4 rounded-md font-black rift-font text-xl transition shadow-lg flex items-center justify-center">
        Get Started
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
      </button>
      <p className="text-[10px] text-gray-400 text-center italic">Your data is secure. We never sell your information to 3rd parties.</p>
    </form>
  );
};

export default ContactForm;
