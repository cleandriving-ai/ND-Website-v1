
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, ADDRESS, PHONE_NUMBER, EMAIL, CITIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-linen pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-orange rounded flex items-center justify-center">
                <span className="text-white text-2xl font-black">PF</span>
              </div>
              <span className="text-3xl rift-font text-white">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              BC's leader in no-dig sewer technology. Restoring infrastructure safely and efficiently since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl rift-font text-orange">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/cipp-lining" className="hover:text-orange transition">CIPP Pipe Lining</Link></li>
              <li><Link to="/services/trenchless-repair" className="hover:text-orange transition">Trenchless Sewer Repair</Link></li>
              <li><Link to="/services/pipe-bursting" className="hover:text-orange transition">Pipe Bursting</Link></li>
              <li><Link to="/services/municipal" className="hover:text-orange transition">Municipal Solutions</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h4 className="text-xl rift-font text-orange">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2">
              {CITIES.map(city => (
                <Link key={city} to={`/location/${city.toLowerCase()}`} className="hover:text-orange transition text-sm">{city}</Link>
              ))}
            </div>
          </div>

          {/* Contact & NAP */}
          <div className="space-y-6">
            <h4 className="text-xl rift-font text-orange">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-orange shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>{PHONE_NUMBER}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>{EMAIL}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} {SITE_NAME} Trenchless Solutions. Licensed, Insured, and Bonded.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-linen">Privacy Policy</Link>
            <Link to="#" className="hover:text-linen">Terms of Service</Link>
            <Link to="#" className="hover:text-linen">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
