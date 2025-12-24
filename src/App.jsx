import React, { useState } from 'react';
import { 
  Power, 
  Play, 
  Check, 
  Wind, 
  Mail, 
  Phone, 
  HelpCircle 
} from 'lucide-react';

/**
 * Custom SVG Icons for Features
 */
const PrayingHandsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M18 8c0-3.3-2.7-6-6-6S6 4.7 6 8c0 4 3 8 6 8s6-4 6-8Z" />
    <path d="M12 16v6" />
    <path d="M9 22h6" />
  </svg>
);

const RainbowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M6 14a6 6 0 1 1 12 0" />
    <path d="M2 14a10 10 0 1 1 20 0" />
  </svg>
);

/**
 * Pricing Card Sub-component
 */
const PricingCard = ({ 
  title, 
  price, 
  period, 
  features, 
  buttonText, 
  isFeatured = false 
}) => {
  return (
    <div className={`relative flex flex-col items-center p-8 rounded-3xl bg-gray-100 shadow-sm transition-transform duration-300 hover:shadow-md ${isFeatured ? 'border-2 border-blue-500 md:scale-105 z-10' : 'border border-transparent'}`}>
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg">
          Most Popular
        </div>
      )}

      <div className="w-full bg-white rounded-2xl py-8 mb-8 flex flex-col items-center justify-center shadow-sm">
        <span className="text-4xl font-extrabold text-black tracking-tight">
          {price}/
        </span>
        <span className="text-xl font-bold text-black mt-1">
          {period}
        </span>
      </div>

      <div className="flex-1 w-full text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full max-w-[200px] py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors duration-200 shadow-lg shadow-blue-200">
        {buttonText}
      </button>
    </div>
  );
};

/**
 * Footer Sub-component
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-3">
            <Wind className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900 tracking-tight">MonoSid</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Mental Wellness, Made Accessible</p>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-4">
          <div>
            <h4 className="text-gray-600 font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {['About us', 'Join us', 'Products', 'Services'].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-[15px]">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gray-600 font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              {['Blog', 'Reviews', 'Privacy policy', 'Terms of service'].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-blue-600 transition-colors text-[15px]">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gray-600 font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-[15px]"><Mail className="w-4 h-4 text-gray-300" /><span>info@monosid.com</span></li>
              <li className="flex items-center gap-3 text-gray-400 text-[15px]"><Phone className="w-4 h-4 text-gray-300" /><span>+27 043 585 4765</span></li>
              <li className="flex items-center gap-3 text-gray-400 text-[15px] cursor-pointer hover:text-blue-600 transition-colors"><HelpCircle className="w-4 h-4 text-gray-300" /><span>Frequently Asked Questions</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-50 mt-16 pt-8 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} MonoSid Wellness. All rights reserved.
      </div>
    </footer>
  );
};

/**
 * Main Combined App Component
 */
const App = () => {
  const [isOn, setIsOn] = useState(true);

  const navItems = ["About us", "Features", "Pricing", "Contact us"];
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces"
  ];

  const plans = [
    {
      title: "Basic",
      price: "R59",
      period: "month",
      buttonText: "Choose Basic",
      features: ["Unlimited chats with Sky", "Basic mood tracking", "Multilingual support", "Crisis resources access"]
    },
    {
      title: "Premium",
      price: "R199",
      period: "month",
      isFeatured: true,
      buttonText: "Choose Premium",
      features: ["Everything in Basic", "Advanced mood detection", "Anonymous peer support", "Personalized insights", "Progress tracking & analytics", "Priority support"]
    },
    {
      title: "Lifetime",
      price: "R1999",
      period: "one-time",
      buttonText: "Choose Lifetime",
      features: ["Everything in Premium", "Lifetime access", "Early access to new features", "Exclusive wellness content", "Family sharing (up to 3)", "Dedicated support", "One-time payment"]
    }
  ];

  return (
    <div className="min-h-screen w-full font-sans overflow-x-hidden select-none bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070')`,
            filter: 'brightness(0.9)'
          }}
        />

        <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
          <div className="text-white text-2xl font-bold tracking-tight cursor-pointer">MonoSid</div>
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/90 text-sm font-medium hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
          {/* Status Toggle Button */}
          <div 
            onClick={() => setIsOn(!isOn)}
            className={`flex items-center space-x-2 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 cursor-pointer transition-all ${isOn ? 'bg-white/20' : 'bg-black/40'}`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${isOn ? 'bg-white' : 'bg-gray-400'}`}>
               <Power size={12} className={`${isOn ? 'text-black fill-current' : 'text-white'}`} />
            </div>
            <span className="text-white text-xs font-semibold uppercase tracking-wider pr-1">
                {isOn ? 'On' : 'Off'}
            </span>
          </div>
        </header>

        <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-grow animate-fade-in">
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mb-8">
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg">
                  <img src={url} alt={`User ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium tracking-wide">Join thousands on this wellness journey.</span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl tracking-tight">
            A safe space <br className="hidden md:block" /> for your mind
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-normal">
            Mental Wellness Support, Made Accessible. Talk openly with Dr. Sky, an AI therapist who listens patiently and supports you at your own pace.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-base hover:bg-opacity-90 transition-all shadow-xl active:scale-95 w-full sm:w-auto">
              Get Started
            </button>
            <button className="bg-transparent text-white border-2 border-white/40 backdrop-blur-sm px-10 py-4 rounded-full font-bold text-base hover:bg-white hover:text-black transition-all active:scale-95 w-full sm:w-auto">
              Sign In
            </button>
          </div>
        </main>
      </section>

      {/* --- KEY FEATURES SECTION --- */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-slate-900">Key Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#f0f7ff] rounded-[2rem] shadow-sm border border-blue-50/50 flex flex-col overflow-hidden transition-all hover:shadow-md">
            <div className="p-4 w-full h-[300px] sm:h-[400px]">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200" alt="Support" className="w-full h-full object-cover rounded-[1.5rem]" />
            </div>
            <div className="p-10 pt-4">
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Conversations that feel human.</h3>
              <p className="text-slate-600 text-lg">Sky responds with empathy and care.</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-[#f0f7ff] rounded-[2rem] p-10 shadow-sm border border-blue-50/50 flex gap-6 transition-all hover:shadow-md flex-1">
              <div className="mt-1 flex-shrink-0 bg-white p-3 rounded-2xl shadow-sm h-fit"><PrayingHandsIcon /></div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Understanding your mood.</h3>
                <p className="text-slate-600 leading-relaxed">Optional mood detection that helps you name how you feel.</p>
              </div>
            </div>
            <div className="bg-[#f0f7ff] rounded-[2rem] p-10 shadow-sm border border-blue-50/50 flex gap-6 transition-all hover:shadow-md flex-1">
              <div className="mt-1 flex-shrink-0 bg-white p-3 rounded-2xl shadow-sm h-fit"><RainbowIcon /></div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Shared support</h3>
                <p className="text-slate-600 leading-relaxed">Anonymous peer connections when you want to feel less alone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50/30">
        <h2 className="text-4xl font-extrabold text-center mb-20 tracking-tight text-slate-900">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-12">
          {/* Testimonial Card 1 */}
          <div className="relative group w-full max-w-[280px] h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 -rotate-3 md:-rotate-6 hover:rotate-0 z-0">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover blur-[1px] scale-110" alt="User" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-sm mb-6 font-medium leading-relaxed opacity-90">"I never realized how much I needed to just name my feelings until I used Sky. It's truly life-changing."</p>
              <button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full py-2.5 px-6 flex items-center justify-center gap-2 text-sm w-fit transition-all hover:bg-white/20 active:scale-95">
                <div className="bg-white rounded-full p-1"><Play size={10} className="text-slate-900 ml-0.5 fill-slate-900" /></div>
                Play video
              </button>
            </div>
          </div>
          {/* Testimonial Card 2 */}
          <div className="relative group w-full max-w-[280px] h-[440px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 z-10 -translate-y-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover blur-[1px] scale-110" alt="User" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-sm mb-6 font-medium leading-relaxed opacity-90">"Finding a community that understands without judgment was exactly what I was looking for."</p>
              <button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full py-2.5 px-6 flex items-center justify-center gap-2 text-sm w-fit transition-all hover:bg-white/20 active:scale-95">
                <div className="bg-white rounded-full p-1"><Play size={10} className="text-slate-900 ml-0.5 fill-slate-900" /></div>
                Play video
              </button>
            </div>
          </div>
          {/* Testimonial Card 3 */}
          <div className="relative group w-full max-w-[280px] h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 rotate-3 md:rotate-6 hover:rotate-0 z-0">
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover blur-[1px] scale-110" alt="User" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
              <p className="text-white text-sm mb-6 font-medium leading-relaxed opacity-90">"The empathy in the responses is better than any other service I've tried. Highly recommended."</p>
              <button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full py-2.5 px-6 flex items-center justify-center gap-2 text-sm w-fit transition-all hover:bg-white/20 active:scale-95">
                <div className="bg-white rounded-full p-1"><Play size={10} className="text-slate-900 ml-0.5 fill-slate-900" /></div>
                Play video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Our pricing plans</h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium">Made just to suit your pocket</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>All plans include standard encryption and privacy protections.</p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', system-ui, -apple-system, sans-serif;
          margin: 0;
          background: #fff;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.75rem !important;
            line-height: 1.2 !important;
          }
        }
      `}} />
    </div>
  );
};

export default App;