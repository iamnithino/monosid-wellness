import React, { useState } from 'react';
import { Target, Heart, Shield, Wind, Menu, X, Power, Mail, Phone, HelpCircle } from 'lucide-react';

const AboutUsPage = ({ navigateTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="animate-in fade-in bg-white min-h-screen font-sans">
      {/* --- HEADER (Exact match to App.jsx with Home added) --- */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div 
          className="text-white text-xl font-bold tracking-tight cursor-pointer"
          onClick={() => navigateTo('home')}
        >
          MonoSid
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => navigateTo('home')} className="text-white/90 text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors">Home</button>
          <button onClick={() => navigateTo('about')} className="text-white text-xs font-bold uppercase tracking-wider border-b border-white pb-1">About us</button>
          <button onClick={() => navigateTo('home')} className="text-white/90 text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors">Features</button>
          <button onClick={() => navigateTo('home')} className="text-white/90 text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors">Pricing</button>
          <button onClick={() => navigateTo('home')} className="text-white/90 text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors">Contact us</button>
        </nav>

        <div className="flex items-center space-x-4">
          <div
            onClick={() => setIsOn(!isOn)}
            className={`hidden sm:flex items-center space-x-2 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 cursor-pointer transition-all ${isOn ? 'bg-white/20' : 'bg-black/40'}`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${isOn ? 'bg-white' : 'bg-gray-400'}`}>
              <Power size={10} className={isOn ? 'text-black fill-current' : 'text-white'} />
            </div>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest pr-1">{isOn ? 'On' : 'Off'}</span>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/98 flex flex-col items-center justify-center space-y-6 animate-in fade-in slide-in-from-top-4">
          <button onClick={() => navigateTo('home')} className="text-white text-xl font-bold uppercase tracking-widest">Home</button>
          <button onClick={() => navigateTo('about')} className="text-white text-xl font-bold uppercase tracking-widest">About us</button>
          <div className="flex flex-col space-y-4 w-full px-12 pt-6">
            <button onClick={() => navigateTo('signin')} className="bg-white text-black py-3 rounded-full font-bold text-sm">Sign In</button>
          </div>
        </div>
      )}

      {/* --- MAIN CONTENT (Reduced sizes) --- */}
      <main className="pt-28 pb-20">
        {/* Mission Section */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Our Mission
            </h1>
            <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Democratizing mental health by making support accessible to everyone, everywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Reduced Image Size */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              {[
                { icon: <Target size={20} className="text-blue-600" />, title: "The Why", text: "Founded in South Africa, MonoSid solves the gap between expensive therapy and the need for immediate support." },
                { icon: <Heart size={20} className="text-red-500" />, title: "Our Values", text: "Empathy, total privacy, and radical accessibility guide every line of code we write." },
                { icon: <Shield size={20} className="text-blue-600" />, title: "Anonymity First", text: "We use banking-grade encryption to ensure your safe space remains truly private." }
              ].map((v, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 uppercase italic tracking-tight">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section (Smaller font sizes) */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Hearts Reached", value: "500k+" },
                { label: "Crisis Avoided", value: "12k+" },
                { label: "Available In", value: "45+" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100">
                  <div className="text-4xl font-black text-blue-600 mb-2 italic tracking-tighter">{stat.value}</div>
                  <div className="text-xs font-black text-slate-900 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER (Exact clone of App.jsx) --- */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Wind className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">MonoSid</span>
            </div>
            <p className="text-gray-400 text-xs">Mental Wellness, Made Accessible.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-[0.2em]">Company</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li><button onClick={() => navigateTo('about')} className="hover:text-blue-600 transition-colors">About us</button></li>
              <li><button className="hover:text-blue-600 transition-colors">Join us</button></li>
              <li><button className="hover:text-blue-600 transition-colors">Products</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-[0.2em]">Resources</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li><button className="hover:text-blue-600 transition-colors">Blog</button></li>
              <li><button className="hover:text-blue-600 transition-colors">Privacy policy</button></li>
              <li><button className="hover:text-blue-600 transition-colors">Terms</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-[0.2em]">Contact</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li className="flex items-center gap-2 justify-center md:justify-start"><Mail size={12} /> info@monosid.com</li>
              <li className="flex items-center gap-2 justify-center md:justify-start"><Phone size={12} /> +27 043 585 4765</li>
              <li className="flex items-center gap-2 justify-center md:justify-start"><HelpCircle size={12} /> Support Center</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center text-gray-300 text-[10px] border-t border-slate-50 pt-8 uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} MonoSid Wellness. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;