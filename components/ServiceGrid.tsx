
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {SERVICES.map((service) => (
        <Link 
          key={service.id} 
          to={service.path}
          className="bg-white group p-8 rounded-xl shadow-sm border-b-4 border-white hover:border-orange transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
        >
          <div className="w-16 h-16 bg-linen rounded-lg flex items-center justify-center text-4xl mb-6 group-hover:bg-orange transition-colors">
            {service.icon}
          </div>
          <h3 className="text-2xl rift-font font-black text-navy mb-4 group-hover:text-orange transition-colors">
            {service.title}
          </h3>
          <p className="text-grey mb-6 flex-grow">
            {service.description}
          </p>
          <div className="flex items-center text-orange font-bold uppercase tracking-wider text-sm">
            Learn More
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceGrid;
