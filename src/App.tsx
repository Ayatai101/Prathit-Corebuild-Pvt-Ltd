/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Phone, 
  MessageCircle, 
  Info, 
  Building2, 
  Hammer, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Users,
  TrendingUp,
  Clock,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'projects' | 'landowners' | 'contact';

// --- Components ---

const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Landowners', id: 'landowners' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-charcoal py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <div className="w-10 h-10 bg-brand-gold flex items-center justify-center font-serif font-bold text-xl text-brand-charcoal group-hover:rotate-12 transition-transform duration-300">
            P
          </div>
          <div className={`font-serif text-2xl tracking-tighter ${isScrolled ? 'text-white' : 'text-brand-charcoal'}`}>
            PRATHIT <span className="font-light opacity-70">COREBUILD</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-brand-gold ${activePage === item.id ? 'text-brand-gold' : (isScrolled ? 'text-gray-300' : 'text-brand-charcoal')}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setPage('contact')}
            className="bg-brand-gold text-brand-charcoal px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors flex items-center gap-2"
          >
            Get Consultation <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-brand-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-white' : ''} /> : <Menu className={isScrolled ? 'text-white' : ''} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-charcoal p-8 flex flex-col gap-6 md:hidden border-t border-white/10"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setPage(item.id); setIsMobileMenuOpen(false); }}
                className={`text-xl font-serif text-left ${activePage === item.id ? 'text-brand-gold' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
             <button 
              onClick={() => { setPage('contact'); setIsMobileMenuOpen(false); }}
              className="bg-brand-gold text-brand-charcoal p-4 text-center text-sm uppercase tracking-widest font-bold"
            >
              Get Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center group"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
      Connect on WhatsApp
    </span>
  </a>
);

const SectionHeading = ({ subtitle, title, dark = false }: { subtitle: string, title: string, dark?: boolean }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-xs uppercase tracking-[0.3em] font-bold mb-4 ${dark ? 'text-brand-gold' : 'text-brand-gold'}`}
    >
      {subtitle}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`text-4xl md:text-6xl font-serif leading-tight ${dark ? 'text-white' : 'text-brand-charcoal'}`}
    >
      {title}
    </motion.h2>
  </div>
);

// --- Pages ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-charcoal -z-10 hidden lg:block" />
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-6"
            >
              Excellence in Indian Infrastructure
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-8 text-brand-charcoal"
            >
              Building The <br />
              <span className="italic">Future</span> of <br />
              Core Living.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed"
            >
              Prathit CoreBuild brings precision engineering and luxury aesthetics to Pune's skyline. Specializing in high-value redevelopment and modern residential masterpieces.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => setPage('contact')}
                className="bg-brand-charcoal text-white px-8 py-5 text-sm uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 flex items-center gap-3 group"
              >
                Project Inquiry <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button 
                 onClick={() => setPage('projects')}
                className="border border-brand-charcoal/20 px-8 py-5 text-sm uppercase tracking-widest font-bold hover:bg-brand-charcoal hover:text-white transition-all duration-300"
              >
                Our Portfolio
              </button>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="aspect-[4/5] relative z-10 overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply" />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-brand-gold hidden md:block" />
            <div className="absolute top-10 -right-10 bg-brand-gold p-8 text-white hidden md:block z-20 shadow-2xl">
              <div className="text-4xl font-serif font-bold">15+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Years of Built Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-brand-charcoal py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Units Delivered', value: '500+' },
            { label: 'Sq Ft Constructed', value: '1.2M' },
            { label: 'Ongoing Projects', value: '08' },
            { label: 'Happy Families', value: '100%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-brand-gold text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</div>
              <div className="text-white/50 text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <SectionHeading 
              subtitle="What We Offer" 
              title="Expertise Across The Lifecycle." 
            />
            <button 
              onClick={() => setPage('services')}
              className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4 group"
            >
              View Detailed Services <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 overflow-hidden">
            {[
              { 
                icon: <Building2 className="mb-6 text-brand-gold" size={40} />,
                title: 'Urban Redevelopment',
                desc: 'Transforming legacy properties into modern masterpieces with transparency and legal integrity.'
              },
              { 
                icon: <Hammer className="mb-6 text-brand-gold" size={40} />,
                title: 'Quality Construction',
                desc: 'Superior material sourcing and structural engineering that stands the test of time.'
              },
              { 
                icon: <TrendingUp className="mb-6 text-brand-gold" size={40} />,
                title: 'Joint Development',
                desc: 'Strategic partnerships with landowners to maximize asset value and ROI through professional execution.'
              }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-12 border border-brand-charcoal/5 hover:bg-brand-paper transition-colors"
              >
                {s.icon}
                <h3 className="text-2xl font-serif mb-4">{s.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                  {s.desc}
                </p>
                <div className="w-12 h-[1px] bg-brand-gold" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-brand-paper relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Zero Litigation', icon: <ShieldCheck size={20}/> },
                  { title: 'On-Time Delivery', icon: <Clock size={20}/> },
                  { title: 'Premium Sourcing', icon: <Building2 size={20}/> },
                  { title: 'Transparent Process', icon: <Info size={20}/> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-8 bg-white border border-brand-charcoal/5 shadow-sm"
                  >
                    <div className="text-brand-gold mb-4">{item.icon}</div>
                    <div className="font-serif text-lg">{item.title}</div>
                  </motion.div>
                ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading 
              subtitle="The Prathit Edge" 
              title="Built On Trust, Mastered With Precision." 
            />
            <p className="text-gray-600 mb-8 leading-relaxed">
              In a crowded market, Prathit CoreBuild stands out for its commitment to structural longevity and legal transparency. We don't just build apartments; we build legacies for the next generation.
            </p>
            <ul className="space-y-4 mb-10">
              {['Vastu compliant designs', 'Sustainable building practices', 'High-speed automated elevators', 'Premium Italian marble finishes'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-brand-gold" /> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setPage('about')}
              className="bg-brand-charcoal text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-all"
            >
              Learn Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <SectionHeading 
              subtitle="Flagship Developments" 
              title="Redesigning Pune's Landmarks." 
            />
            <div className="flex gap-4">
               {/* Controls placeholder */}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Core Heights', 
                loc: 'Baner, Pune', 
                img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600',
                status: 'Ongoing'
              },
              { 
                name: 'The Sovereign', 
                loc: 'Kothrud, Pune', 
                img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
                status: 'Completed'
              },
              { 
                name: 'Prathit Heritage', 
                loc: 'Model Colony, Pune', 
                img: 'https://images.unsplash.com/photo-1449156001437-3a166aebbb35?auto=format&fit=crop&q=80&w=600',
                status: 'Upcoming'
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setPage('projects')}
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute top-6 left-6 bg-brand-charcoal text-white px-4 py-1 text-[10px] uppercase font-bold tracking-widest">
                    {p.status}
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-1 group-hover:text-brand-gold transition-colors">{p.name}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest font-bold">
                  <MapPin size={12} className="text-brand-gold" /> {p.loc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="text-[20rem] font-serif font-bold leading-none -tracking-widest absolute bottom-0 right-0">PRATHIT</div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-brand-gold font-bold uppercase tracking-[0.4em] text-xs mb-8">Ready to Start?</div>
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-12 leading-tight">
             Looking for Redevelopment? <br />
             <span className="italic text-brand-paper/50">Let's talk your ROI.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setPage('contact')}
              className="bg-brand-gold text-brand-charcoal px-10 py-6 text-sm uppercase tracking-widest font-bold hover:bg-white transition-all flex items-center gap-3"
            >
              Consult Now <Phone size={18} />
            </button>
            <button 
               onClick={() => setPage('landowners')}
              className="border border-white/20 text-white px-10 py-6 text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all"
            >
              Investor Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => (
  <div className="pt-40 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeading subtitle="What We Master" title="Our Core Expertise" />
      <div className="grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Redevelopment Projects",
            desc: "Breathe new life into aging residential societies. We handle everything from legal paperwork to premium reconstruction, ensuring residents get expanded spaces with modern amenities.",
            points: ["Legal compliance", "Alternate accommodation", "Corpus fund benefits", "Premium finish"]
          },
          {
            title: "Joint Development (JD)",
            desc: "Partner with us to transform your land into a high-value asset. We bring capital and construction expertise, sharing the profits fairly and transparently.",
            points: ["Market analysis", "Architectural planning", "Fast execution", "Marketing & sales"]
          },
          {
            title: "Construction Contracts",
            desc: "Hire our engineering team for specialized construction mandates. We follow strict international ISO standards for material and safety.",
            points: ["Project management", "Vendor coordination", "Budget optimization", "Quality audits"]
          },
          {
            title: "Turnkey Solutions",
            desc: "End-to-end design and build services for luxury bungalows and commercial complexes.",
            points: ["Interior design", "MEP services", "Landscaping", "Digital integration"]
          }
        ].map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 border border-brand-charcoal/5 shadow-sm hover:shadow-xl transition-shadow"
          >
            <h3 className="text-3xl font-serif mb-6 text-brand-gold">{s.title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">{s.desc}</p>
            <div className="grid grid-cols-2 gap-4">
              {s.points.map((p, j) => (
                <div key={j} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-charcoal/70">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> {p}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
    <div className="pt-40 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <SectionHeading subtitle="The Portfolio" title="Pune's New Landmarks" />
        <div className="flex gap-4 border-b border-brand-charcoal/10 pb-2">
            {['All', 'Ongoing', 'Completed'].map(f => (
                <button key={f} className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-charcoal/50 hover:text-brand-gold transition-colors">{f}</button>
            ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16">
        {[
          { name: 'Crystal Plaza', area: 'Baner', type: 'Commercial', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800' },
          { name: 'The Azure', area: 'Kothrud', type: 'Residential', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
          { name: 'Prathit Heights', area: 'Viman Nagar', type: 'Redevelopment', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
          { name: 'Bungalow 7', area: 'Aundh', type: 'Private', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' }
        ].map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group"
          >
            <div className="aspect-video overflow-hidden mb-8 relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-brand-gold text-brand-charcoal px-6 py-3 text-xs font-bold uppercase tracking-widest">Project Details</button>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <div>
                   <h3 className="text-3xl font-serif mb-2">{p.name}</h3>
                   <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500">{p.area} • {p.type}</div>
                </div>
                <ArrowUpRight className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-40 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1574621100236-d25b64cfd647?auto=format&fit=crop&q=80&w=1000" 
            alt="Leadership" 
            className="w-full aspect-[3/4] object-cover grayscale"
          />
          <div className="absolute -bottom-10 -right-10 bg-brand-gold p-12 text-brand-charcoal hidden md:block">
            <h4 className="text-4xl font-serif font-bold mb-2">Our Mission</h4>
            <p className="text-sm font-medium leading-relaxed italic opacity-80">
              "Honesty in structure, Transparency in transaction."
            </p>
          </div>
        </div>
        <div>
          <SectionHeading subtitle="Our Legacy" title="Masters of Traditional & Modern Craft." />
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Prathit CoreBuild was founded with a singular vision: To bridge the gap between architectural elegance and structural integrity in the Indian landscape. Based in Pune, we have grown from a small family firm into a powerhouse of redevelopment.
            </p>
            <p>
              Our leadership team brings together decades of expertise in civil engineering, legal verification, and luxury interior design. This unique combination allows us to handle complex land deals that other developers shy away from.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-10">
                <div>
                    <h5 className="font-serif text-2xl text-brand-charcoal mb-2">Precision</h5>
                    <p className="text-sm">Every millimeter matters in luxury construction.</p>
                </div>
                <div>
                    <h5 className="font-serif text-2xl text-brand-charcoal mb-2">Integrity</h5>
                    <p className="text-sm">RERA compliant and clear legal titles, always.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LandownersPage = () => (
  <div className="pt-40 pb-32 px-6">
    <div className="max-w-4xl mx-auto text-center mb-24">
      <SectionHeading subtitle="Exclusive Opportunities" title="Unlocking Your Land's True Potential." />
      <p className="text-lg text-gray-600">
        If you own a society, bungalow, or commercial plot in Pune, you are sitting on a goldmine. We provide the capital and expertise to transform your asset.
      </p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-32">
        {[
          { title: 'Redevelopment', desc: 'Old societies getting modern amenities, larger carpet areas, and corpus funds.' },
          { title: 'Joint Development', desc: 'Share the profits. We build, you hold the land. Highest ROI model.' },
          { title: 'Outright Purchase', desc: 'Direct sale with immediate settlements and white transactions.' }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-brand-charcoal text-white text-center">
            <div className="text-brand-gold font-serif text-6xl mb-6 opacity-30">0{i+1}</div>
            <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">{item.desc}</p>
            <button className="text-brand-gold font-bold uppercase text-[10px] tracking-widest border-b border-brand-gold/30 pb-2">Learn More</button>
          </div>
        ))}
    </div>

    <div className="max-w-7xl mx-auto bg-white p-12 border border-brand-charcoal/5 shadow-2xl">
        <h3 className="text-3xl font-serif mb-12 text-center">The Landowner Process</h3>
        <div className="grid md:grid-cols-4 gap-8">
            {[
              { t: 'Feasibility Study', d: 'We analyze your FSI and market rates.' },
              { t: 'Strategic Proposal', d: 'Clear terms on area sharing and finances.' },
              { t: 'Legal Execution', d: 'Standard contracts with full compliance.' },
              { t: 'Phased Handover', d: 'Construction begins with clear timelines.' }
            ].map((p, i) => (
              <div key={i} className="text-center relative">
                <div className="w-12 h-12 bg-brand-gold text-brand-charcoal rounded-full flex items-center justify-center mx-auto mb-6 font-bold">{i+1}</div>
                <h4 className="font-serif text-xl mb-3">{p.t}</h4>
                <p className="text-xs text-gray-500">{p.d}</p>
                {i < 3 && <ChevronRight className="hidden md:block absolute top-6 -right-4 text-brand-gold opacity-30" />}
              </div>
            ))}
        </div>
    </div>
  </div>
);

const ContactPage = () => {
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <div className="pt-40 pb-32 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
                <div>
                   <SectionHeading subtitle="Connect" title="Start Your Construction Journey." />
                   <div className="space-y-12">
                      <div className="flex items-start gap-6">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <MapPin className="text-brand-gold" />
                         </div>
                         <div>
                            <div className="font-bold uppercase tracking-widest text-[10px] text-gray-400 mb-2">Our Office</div>
                            <div className="font-serif text-xl">Laxmi Road, Camp, Pune - 411001</div>
                         </div>
                      </div>
                      <div className="flex items-start gap-6">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <Phone className="text-brand-gold" />
                         </div>
                         <div>
                            <div className="font-bold uppercase tracking-widest text-[10px] text-gray-400 mb-2">Call Directly</div>
                            <div className="font-serif text-xl">+91 98230 00000</div>
                         </div>
                      </div>
                      <div className="flex items-start gap-6">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <MessageCircle className="text-brand-gold" />
                         </div>
                         <div>
                            <div className="font-bold uppercase tracking-widest text-[10px] text-gray-400 mb-2">WhatsApp</div>
                            <div className="font-serif text-xl">+91 99999 00000</div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="bg-brand-charcoal p-12 text-white">
                    <h3 className="text-3xl font-serif mb-8 text-brand-gold">Inquiry Form</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-[10px] uppercase tracking-widest font-bold block mb-2 opacity-60">Full Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-gold transition-colors" required />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="text-[10px] uppercase tracking-widest font-bold block mb-2 opacity-60">Phone</label>
                                <input type="tel" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-gold transition-colors" required />
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-widest font-bold block mb-2 opacity-60">Interest</label>
                                <select className="w-full bg-brand-charcoal border border-white/10 p-4 outline-none focus:border-brand-gold transition-colors">
                                    <option>New Home</option>
                                    <option>Redevelopment</option>
                                    <option>Joint Venture</option>
                                    <option>Investment</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-widest font-bold block mb-2 opacity-60">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-gold transition-colors"></textarea>
                        </div>
                        <button 
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className="w-full bg-brand-gold text-brand-charcoal p-5 uppercase font-bold tracking-widest text-sm hover:bg-white transition-all disabled:opacity-50"
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-brand-charcoal text-white pt-32 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-brand-gold flex items-center justify-center font-serif font-bold text-xl text-brand-charcoal">P</div>
                <div className="font-serif text-3xl tracking-tighter">PRATHIT <span className="opacity-70 font-light">COREBUILD</span></div>
            </div>
            <p className="text-white/50 max-w-sm mb-10 leading-relaxed text-sm">
                Redefining the residential landscape of Pune through innovation, engineering excellence, and unwavering trust since 2012.
            </p>
            <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                        <Icon size={18} />
                    </a>
                ))}
            </div>
        </div>
        <div>
            <h4 className="font-serif text-xl mb-8 border-b border-brand-gold pb-4 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
                {['About Us', 'Our Projects', 'Services', 'Landowners', 'Contact'].map((item) => (
                    <li key={item} className="hover:text-brand-gold transition-colors cursor-pointer" onClick={() => setPage(item.toLowerCase().replace(' ', '') as Page)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h4 className="font-serif text-xl mb-8 border-b border-brand-gold pb-4 inline-block">Our Portfolio</h4>
            <ul className="space-y-4 text-sm text-white/60">
                {['Core Heights, Baner', 'The Sovereign, Kothrud', 'Heritage Park, Camp', 'Crystal Tower, KP'].map((item) => (
                    <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
                ))}
            </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-30">© 2024 Prathit CoreBuild Pvt Ltd. All Rights Reserved.</div>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold opacity-30">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms of Use</a>
                <a href="#" className="hover:opacity-100 transition-opacity">RERA Compliance</a>
            </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'projects': return <ProjectsPage />;
      case 'landowners': return <LandownersPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activePage={currentPage} setPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <Footer setPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}
