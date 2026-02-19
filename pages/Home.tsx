
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, FEATURED_PROJECTS, REVIEWS, PHONE_NUMBER } from '../constants';
import ServiceGrid from '../components/ServiceGrid';
import ContactForm from '../components/ContactForm';

interface HomeProps {
  section?: string;
}

const Home: React.FC<HomeProps> = ({ section }) => {
  useEffect(() => {
    if (section === 'contact') {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://www.houle.ca/wp-content/uploads/2024/05/Houle-Team-Collaborating-On-Site.jpg" 
            className="w-full h-full object-cover" 
            alt="PipeForce team at work"
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl space-y-6">
            <h4 className="rift-font text-orange border-b-2 border-orange inline-block pb-1 text-lg">
              Pipe Repair, Redefined
            </h4>
            <h1 className="text-5xl md:text-7xl font-black rift-font leading-tight">
              EmPowering Modern <br/><span className="text-orange">Infrastructure.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Stop digging up your property. Our trenchless sewer repair and CIPP lining technologies restore your pipes from the inside out with zero destruction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="bg-orange hover:bg-red-700 text-white px-8 py-4 rounded-md font-black rift-font text-xl transition-all shadow-xl text-center">
                Get a Free Estimate
              </Link>
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/50 px-8 py-4 rounded-md font-black rift-font text-xl transition-all text-center">
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Badges */}
      <section className="bg-linen py-12 border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 grayscale opacity-60">
            <div className="flex items-center space-x-2"><span className="text-4xl">🏆</span> <span className="font-bold">BBB Accredited</span></div>
            <div className="flex items-center space-x-2"><span className="text-4xl">👷</span> <span className="font-bold">WorkSafeBC</span></div>
            <div className="flex items-center space-x-2"><span className="text-4xl">💎</span> <span className="font-bold">Licensed & Insured</span></div>
            <div className="flex items-center space-x-2"><span className="text-4xl">⭐</span> <span className="font-bold">4.9/5 Google Reviews</span></div>
        </div>
      </section>

      {/* 3. Introduction / Delivering Quality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="rift-font text-orange mb-4">Quality Workmanship</h4>
              <h2 className="text-4xl md:text-5xl font-black rift-font text-navy mb-6">
                Creating Value through <br/>Innovative Engineering.
              </h2>
              <p className="text-lg mb-8">
                As BC’s leading trenchless contractor, we believe in delivering safe, reliable infrastructure for the future. From residential sewer lines to major municipal airport upgrades, we use industry-leading CIPP (Cured-In-Place Pipe) technology to ensure your project is completed with minimal disruption.
              </p>
              <Link to="/services/cipp-lining" className="inline-flex items-center text-orange font-bold hover:translate-x-2 transition-transform">
                <span className="mr-2">Explore Our Technology</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
            <div className="relative">
              <img src="https://www.houle.ca/wp-content/uploads/2023/02/houle-2023-brand-imagery-team-3.jpg" className="rounded-xl shadow-2xl" alt="Technician inspecting pipe" />
              <div className="absolute -bottom-6 -right-6 bg-orange text-white p-8 rounded rift-font shadow-xl hidden md:block">
                <p className="text-4xl font-black">25+</p>
                <p className="text-lg">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Grid */}
      <section className="py-24 bg-linen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="rift-font text-orange mb-2">Our Expertise</h4>
            <h2 className="text-4xl md:text-5xl font-black rift-font text-navy">Comprehensive Sewer Solutions</h2>
          </div>
          <ServiceGrid />
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl rift-font font-black mb-16 text-center">The Trenchless Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Inspection", desc: "HD Camera diagnostic to map cracks and root intrusions." },
              { step: "02", title: "Cleaning", desc: "Hydro-jetting to clear debris and restore original diameter." },
              { step: "03", title: "Installation", desc: "Saturating the felt liner with structural epoxy resin." },
              { step: "04", title: "Curing", desc: "Inflatable bladder holds the liner until it cures hard." },
              { step: "05", title: "Restoration", desc: "Removing the bladder and testing the new structural pipe." }
            ].map((p, idx) => (
              <div key={idx} className="relative group p-6 border border-white/10 hover:border-orange/50 transition-colors">
                <span className="text-5xl font-black text-white/5 absolute top-2 right-2 group-hover:text-orange/20 transition-colors">{p.step}</span>
                <h3 className="text-xl rift-font font-bold mb-4 text-orange">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="rift-font text-orange">Portfolio</h4>
              <h2 className="text-4xl rift-font font-black text-navy">Recent Projects</h2>
            </div>
            <Link to="/" className="text-orange font-bold border-b-2 border-orange">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_PROJECTS.map(project => (
              <div key={project.id} className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-orange rift-font font-bold text-sm mb-2">{project.serviceType}</p>
                  <h3 className="text-2xl font-black rift-font">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{project.location}, BC</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reviews Section */}
      <section className="py-24 bg-linen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl rift-font font-black mb-12">Trusted by Hundreds</h2>
          <div className="space-y-8">
            {REVIEWS.map((r, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-linen italic">
                <div className="flex justify-center mb-4">
                  {[...Array(r.rating)].map((_, i) => <span key={i} className="text-orange text-xl">★</span>)}
                </div>
                <p className="text-lg text-grey mb-6">"{r.text}"</p>
                <div className="font-black rift-font text-navy">— {r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action / Quote Section */}
      <section id="contact-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-navy rounded-3xl p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full -mr-32 -mt-32"></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black rift-font mb-6">Ready to fix your pipes <br/><span className="text-orange">for good?</span></h2>
              <p className="text-gray-300 text-lg mb-8">
                Tell us about your project or schedule a camera inspection. Our specialists are standing by to provide a transparent, flat-rate quote.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange p-3 rounded-full"><svg className="w-6 h-6" fill="white" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg></div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us Anytime</p>
                    <p className="text-xl font-black rift-font">{PHONE_NUMBER}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange p-3 rounded-full"><svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                  <div>
                    <p className="text-sm text-gray-400">Emergency Service</p>
                    <p className="text-xl font-black rift-font">24/7 Availability</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 9. SEO City Links (NAP Consistency) */}
      <section className="py-12 bg-linen border-t border-linen">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs text-grey uppercase tracking-widest font-bold mb-4">Serving these communities</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                {['Vancouver', 'Burnaby', 'Surrey', 'Richmond', 'Coquitlam', 'Abbotsford', 'Langley', 'Kelowna'].map(city => (
                    <Link key={city} to={`/location/${city.toLowerCase()}`} className="text-sm hover:text-orange transition">{city} Trenchless Repair</Link>
                ))}
            </div>
        </div>
      </section>

      {/* 10. Final Footer is handled by App.tsx wrapper */}
    </div>
  );
};

export default Home;
