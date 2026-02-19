
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, PHONE_NUMBER } from '../constants';
import ContactForm from '../components/ContactForm';

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <div className="py-24 text-center">Service not found.</div>;
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="rift-font text-orange">Service Expertise</h4>
            <h1 className="text-5xl md:text-6xl rift-font font-black">{service.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed">{service.description}</p>
            <div className="flex gap-4">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="bg-orange px-8 py-3 rounded rift-font font-black hover:bg-red-700 transition">Call Expert</a>
            </div>
          </div>
          <div className="relative group">
            <img src={`https://picsum.photos/seed/${service.id}/800/500`} className="rounded-xl shadow-2xl" alt={service.title} />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl rift-font font-black mb-6">How It Works</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our {service.title} technology is designed to fix leaking, root-infested, or broken pipes without the need for traditional excavation. This "no-dig" solution involves pulling a resin-saturated felt tube into the damaged pipe. Once in place, the resin cures, creating a "pipe within a pipe" that is structural and joint-less.
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminates root intrusion permanently",
                  "Increases flow capacity",
                  "Prevents future ground infiltration",
                  "Structural repair with 50-year design life",
                  "Cost-effective compared to digging"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-orange font-bold">✔</span>
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-linen p-8 rounded-xl">
              <h3 className="text-2xl rift-font font-black mb-4">FAQ: {service.title}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">How long does the repair take?</h4>
                  <p className="text-gray-600">Most residential projects are completed in 1-2 days, with water service restored by evening.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Is it as strong as a new pipe?</h4>
                  <p className="text-gray-600">Yes. The structural epoxy used in CIPP lining is designed to withstand ground movement and external pressure better than PVC or clay.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <ContactForm />
              <div className="mt-8 bg-linen p-6 rounded-lg text-center">
                <h4 className="rift-font font-bold mb-2">Related Keywords</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.keywords.map(k => (
                    <span key={k} className="text-[10px] bg-white px-2 py-1 rounded text-gray-500 uppercase">{k}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
