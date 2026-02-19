
import React from 'react';
import { useParams } from 'react-router-dom';
import { SERVICES, PHONE_NUMBER } from '../constants';
import ServiceGrid from '../components/ServiceGrid';
import ContactForm from '../components/ContactForm';

const CityPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

  return (
    <div className="pt-20">
      <section className="bg-linen py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="rift-font text-orange mb-2">#1 Trenchless Specialists in {cityName}</h4>
            <h1 className="text-5xl md:text-6xl rift-font font-black text-navy leading-tight">
              Sewer Line Repair & <br/>CIPP Lining in <span className="text-orange">{cityName}, BC</span>
            </h1>
            <p className="mt-6 text-xl text-grey leading-relaxed">
              Serving the {cityName} area with advanced trenchless solutions. Whether you're in a historic neighborhood or a new development, we restore your pipes without digging up your yard.
            </p>
            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border-l-4 border-orange">
              <p className="font-bold italic">"Best pipe repair experience in {cityName}. They were in and out in one day and left my driveway untouched."</p>
              <p className="mt-2 text-sm text-gray-500">— Local {cityName} Resident</p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl rift-font font-black mb-4">Our {cityName} Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We offer 24/7 emergency repair and scheduled maintenance for residential and commercial properties throughout {cityName}.</p>
          </div>
          <ServiceGrid />
        </div>
      </section>
    </div>
  );
};

export default CityPage;
