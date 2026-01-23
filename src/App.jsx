import React, { useState, useEffect } from 'react';
import {
  Mail,
  Lock,
  Chrome,
  Facebook,
  ArrowRight,
  LogIn,
  Loader2,
  AlertCircle,
  User,
  UserPlus,
  Power,
  Play,
  Wind,
  Menu,
  X,
  Check,
  Target,
  Heart,
  Shield,
  Zap,
  Globe,
  ShieldCheck,
  Activity,
  HelpCircle,
  MapPin,
  MessageSquare,
  Phone
} from 'lucide-react';

/**
 * --- CUSTOM SVG ICONS ---
 */
const PrayingHandsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-600"
  >
    <path d="M18 8c0-3.3-2.7-6-6-6S6 4.7 6 8c0 4 3 8 6 8s6-4 6-8Z" />
    <path d="M12 16v6" />
    <path d="M9 22h6" />
  </svg>
);

const RainbowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-600"
  >
    <path d="M6 14a6 6 0 1 1 12 0" />
    <path d="M2 14a10 10 0 1 1 20 0" />
  </svg>
);

/**
 * --- SHARED COMPONENTS ---
 */
const PricingCard = ({
  title,
  price,
  period,
  features,
  buttonText,
  isFeatured = false,
}) => (
  <div
    className={`relative flex flex-col items-center p-8 rounded-[2.5rem] bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${
      isFeatured ? 'border-2 border-blue-500 md:scale-105 z-10' : 'border border-slate-100'
    }`}
  >
    {isFeatured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
        Most Popular
      </div>
    )}
    <div className="w-full bg-slate-50 rounded-3xl py-8 mb-8 flex flex-col items-center justify-center border border-slate-100 shadow-sm">
      <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{price}/</span>
      <span className="text-xl font-bold text-slate-400 mt-1 uppercase tracking-widest text-xs">{period}</span>
    </div>
    <div className="flex-1 w-full">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">{title}</h3>
      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-slate-600 text-sm md:text-base"
          >
            <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-200 active:scale-95">
      {buttonText}
    </button>
  </div>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-2 mb-4">
          <Wind className="w-8 h-8 text-[#518C8C]" />
          <span className="text-2xl font-bold text-slate-900">MonoSid</span>
        </div>
        <p className="text-slate-500 text-sm">Mental Wellness, Made Accessible.</p>
      </div>
      <div className="text-center md:text-left">
        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          <li><button className="hover:text-blue-600 transition-colors">About us</button></li>
          <li><button className="hover:text-blue-600 transition-colors">Join the family</button></li>
          <li><button className="hover:text-blue-600 transition-colors">Product Ecosystem</button></li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          <li><button className="hover:text-blue-600 transition-colors">Crisis Resources</button></li>
          <li><button className="hover:text-blue-600 transition-colors">Privacy Policy</button></li>
          <li><button className="hover:text-blue-600 transition-colors">Terms of Service</button></li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          <li>info@monosid.com</li>
          <li>+27 043 585 4765</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-slate-200 mt-16 pt-8 text-center text-gray-400 text-xs uppercase tracking-widest">
      &copy; {new Date().getFullYear()} MonoSid Wellness. All rights reserved.
    </div>
  </footer>
);

/**
 * --- MAIN APP COMPONENT ---
 */
const App = () => {
  const [view, setView] = useState('home');
  const [isOn, setIsOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (newView) => {
    setView(newView);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * --- COMPONENT: HOMEPAGE ---
   */
  const HomePage = () => {
    const avatars = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces',
    ];

    return (
      <div className="animate-in fade-in duration-700">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070')",
              filter: 'brightness(0.9)',
            }}
          />

          <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-grow animate-in slide-in-from-bottom-10 duration-1000">
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mb-8">
              <div className="flex -space-x-3">
                {avatars.map((url, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg"
                  >
                    <img
                      src={url}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium tracking-wide">
                Join thousands on this wellness journey.
              </span>
            </div>

            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl tracking-tight">
              A safe space <br className="hidden md:block" /> for your mind
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-normal">
              Mental Wellness Support, Made Accessible. Talk openly with Dr. Sky, an AI
              therapist who listens patiently and supports you at your own pace.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => navigateTo('signup')}
                className="bg-white text-black px-10 py-4 rounded-full font-bold text-base hover:bg-opacity-90 transition-all shadow-xl active:scale-95 w-full sm:w-auto"
              >
                Get Started
              </button>
              <button
                onClick={() => navigateTo('signin')}
                className="bg-transparent text-white border-2 border-white/40 backdrop-blur-sm px-10 py-4 rounded-full font-bold text-base hover:bg-white hover:text-black transition-all active:scale-95 w-full sm:w-auto"
              >
                Sign In
              </button>
            </div>
          </main>
        </section>

        {/* Home Features Snippet */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-slate-900">
            Key Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#f0f7ff] rounded-[2rem] shadow-sm border border-blue-50/50 flex flex-col overflow-hidden transition-all hover:shadow-md">
              <div className="p-4 w-full h-[300px] sm:h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200"
                  alt="Support"
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>
              <div className="p-10 pt-4">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">
                  Conversations that feel human.
                </h3>
                <p className="text-slate-600 text-lg">
                  Sky responds with empathy and care.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-[#f0f7ff] rounded-[2rem] p-10 shadow-sm border border-blue-50/50 flex gap-6 transition-all hover:shadow-md flex-1">
                <div className="mt-1 flex-shrink-0 bg-white p-3 rounded-2xl shadow-sm h-fit">
                  <PrayingHandsIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">
                    Understanding your mood.
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Optional mood detection that helps you name how you feel.
                  </p>
                </div>
              </div>
              <div className="bg-[#f0f7ff] rounded-[2rem] p-10 shadow-sm border border-blue-50/50 flex gap-6 transition-all hover:shadow-md flex-1">
                <div className="mt-1 flex-shrink-0 bg-white p-3 rounded-2xl shadow-sm h-fit">
                  <RainbowIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">Shared support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Anonymous peer connections when you want to feel less alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 max-w-7xl mx-auto bg-slate-50/50 rounded-[3rem] mb-20">
          <h2 className="text-4xl font-extrabold text-center mb-20 tracking-tight text-slate-900">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-12">
            {[
              {
                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
                text: "I never realized how much I needed to just name my feelings until I used Sky. It's truly life-changing.",
                rotate: '-rotate-3',
              },
              {
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
                text: 'Finding a community that understands without judgment was exactly what I was looking for.',
                rotate: 'rotate-0',
                scale: 'scale-105',
              },
              {
                img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600',
                text: 'The empathy in the responses is better than any other service I have tried. Highly recommended.',
                rotate: 'rotate-3',
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className={`relative group w-full max-w-[280px] h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-110 ${t.rotate} hover:rotate-0 ${
                  t.scale || ''
                }`}
              >
                <img
                  src={t.img}
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-[0.5px]"
                  alt="User"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <p className="text-white text-sm mb-6 font-medium leading-relaxed opacity-90">
                    "{t.text}"
                  </p>
                  <button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full py-2.5 px-6 flex items-center justify-center gap-2 text-sm w-fit">
                    <div className="bg-white rounded-full p-1">
                      <Play
                        size={10}
                        className="text-slate-900 ml-0.5 fill-slate-900"
                      />
                    </div>
                    Play video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  };

  /**
   * --- COMPONENT: ABOUT US ---
   */
  const AboutUsPage = () => (
    <div className="animate-in fade-in pt-20 font-sans">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase">Our Mission</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">Democratizing mental health by making support accessible to everyone, everywhere.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" alt="Team" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-10">
            {[
              { icon: <Target className="text-blue-600" />, title: "The Why", text: "Founded in South Africa, MonoSid solves the gap between expensive therapy and the need for immediate support." },
              { icon: <Heart className="text-red-500" />, title: "Our Values", text: "Empathy, total privacy, and radical accessibility guide every line of code we write." },
              { icon: <Shield className="text-blue-600" />, title: "Anonymity First", text: "We use banking-grade encryption to ensure your safe space remains truly private." }
            ].map((v, i) => (
              <div key={i} className="flex gap-6 group p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                <div className="w-16 h-16 bg-white shadow-md border border-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">{v.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Hearts Reached", value: "500k+", sub: "Total users globally" },
              { label: "Crisis Avoided", value: "12k+", sub: "Successful interventions" },
              { label: "Available In", value: "45+", sub: "Languages spoken by Sky" }
            ].map((stat, i) => (
              <div key={i} className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100">
                <div className="text-6xl font-black text-blue-600 mb-4 italic tracking-tighter">{stat.value}</div>
                <div className="text-xl font-black text-slate-900 uppercase tracking-widest mb-1">{stat.label}</div>
                <p className="text-slate-400 font-medium">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );

  /**
   * --- COMPONENT: FEATURES ---
   */
  const FeaturesPage = () => (
    <div className="animate-in fade-in pt-20 font-sans">
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-16 tracking-tighter italic uppercase">The AI Ecosystem</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <Wind size={36} />, title: "Sky AI Chat", text: "Empathetic real-time conversation trained on clinical frameworks." },
            { icon: <Zap size={36} />, title: "Instant Exercises", text: "Grounding breathwork and mindfulness available in one tap." },
            { icon: <Globe size={36} />, title: "Peer Support", text: "Connect anonymously with others on similar journeys." }
          ].map((f, i) => (
            <div key={i} className="p-12 bg-white rounded-[3rem] border border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all group">
              <div className="mb-8 text-[#518C8C] flex justify-center group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">{f.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-32 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14}/> Security First
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-tight">Your mind is a <br/><span className="text-blue-500">Private Fortress.</span></h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">We never store your real name. Every conversation is fragmented across encrypted data-silos.</p>
            <div className="space-y-4">
               {["Military-grade 256-bit encryption", "Zero-Knowledge identity logs", "Automatic chat clearing"].map((t, i) => (
                 <div key={i} className="flex items-center gap-3 text-slate-200 font-bold">
                   <Check className="text-blue-500" size={20}/> {t}
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
             <div className="bg-white/5 border border-white/10 p-10 rounded-[4rem] backdrop-blur-xl relative z-10 text-center">
                <Activity className="w-20 h-20 text-blue-500 mb-8 mx-auto" />
                <h4 className="text-2xl font-bold uppercase italic tracking-tighter">Encrypted Sharding</h4>
                <p className="text-slate-500 text-sm mt-4">Every packet of emotional data is scrambled across independent safety nodes.</p>
             </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );

  /**
   * --- COMPONENT: PRICING ---
   */
  const PricingPage = () => {
    const plans = [
      { title: "Basic", price: "Free", period: "Forever", features: ["10 Chats with Sky/mo", "Basic Mood Trends", "Crisis Contacts", "Public Forums"] },
      { title: "Premium", price: "R199", period: "Monthly", isFeatured: true, features: ["Unlimited Sky AI Chats", "Full Analytics", "Guided Meditations", "Sleep Stories", "Priority Support"] },
      { title: "Lifetime", price: "R1999", period: "Once", features: ["Forever Access", "Family Sharing (3 Slots)", "Early updates", "Exclusive Wellness Library"] }
    ];

    return (
      <div className="animate-in fade-in pt-20 font-sans">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase">Invest in you</h1>
            <p className="text-xl text-slate-500">Wellness should be a human right, not a luxury.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((p, i) => <PricingCard key={i} {...p} buttonText={`Start ${p.title}`} />)}
          </div>
        </section>

        <section className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-12 text-center">Frequently Asked</h2>
          <div className="space-y-6">
             {[
               { q: "Is Sky a replacement for therapy?", a: "Dr. Sky is an AI support tool designed to bridge the gap between sessions. We always recommend clinical therapy for complex conditions." },
               { q: "Is my data really anonymous?", a: "Yes. We don't require names or official IDs. You can even use a burner email to sign up." }
             ].map((faq, i) => (
               <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-3"><HelpCircle className="text-blue-600" size={18}/> {faq.q}</h4>
                  <p className="text-slate-500 text-sm">{faq.a}</p>
               </div>
             ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  };

  /**
   * --- COMPONENT: CONTACT US ---
   */
  const ContactUsPage = () => {
    const [formState, setFormState] = useState('idle');

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormState('sending');
      setTimeout(() => setFormState('sent'), 1500);
    };

    return (
      <div className="animate-in fade-in pt-20 font-sans">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter italic uppercase leading-none">Reach out.</h1>
              <p className="text-xl text-slate-600 mb-12 font-medium">Our human team is available for technical support, partnerships, or feedback.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group transition-all hover:bg-white hover:shadow-xl">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors"><Mail /></div>
                  <div><h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Support Email</h4><p className="text-slate-500 font-bold">support@monosid.com</p></div>
                </div>
                <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group transition-all hover:bg-white hover:shadow-xl">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors"><MapPin /></div>
                  <div><h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Headquarters</h4><p className="text-slate-500 font-bold">East London, South Africa</p></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100">
              {formState === 'sent' ? (
                <div className="text-center py-20 animate-in zoom-in-95">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500"><Check size={48} /></div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Message Sent!</h3>
                  <button onClick={() => setFormState('idle')} className="mt-10 text-blue-600 font-black uppercase tracking-widest text-sm">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 font-bold" />
                    <input type="text" placeholder="Last Name" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 font-bold" />
                  </div>
                  <textarea rows="4" placeholder="Your Message" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 font-bold resize-none"></textarea>
                  <button disabled={formState === 'sending'} className="w-full py-5 bg-blue-600 text-white font-black rounded-full uppercase tracking-widest shadow-xl hover:bg-blue-700 disabled:bg-slate-300 transition-all">
                    {formState === 'sending' ? <Loader2 className="animate-spin mx-auto" /> : "Dispatch Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <MessageSquare/>, title: "Community Live", desc: "Join anonymous moderated discussions with peers." },
               { icon: <Activity/>, title: "Tech Support", desc: "Found a bug? Our devs are standing by." },
               { icon: <Phone/>, title: "Crisis Hotline", desc: "Immediate link to local emergency services." }
             ].map((t, i) => (
               <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 text-center hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">{t.icon}</div>
                  <h4 className="text-xl font-bold italic uppercase mb-4 tracking-tighter">{t.title}</h4>
                  <p className="text-slate-500 text-sm mb-8">{t.desc}</p>
                  <button className="text-blue-600 font-bold hover:underline">Get Help</button>
               </div>
             ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  };

  /**
   * --- COMPONENT: SIGN IN ---
   */
  const SignInPage = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1500));
      setLoading(false);
      navigateTo('home');
    };

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-in zoom-in-95 duration-300">
        <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
          <button
            onClick={() => navigateTo('home')}
            className="absolute top-6 left-6 text-slate-400 hover:text-slate-600 p-2"
          >
            <ArrowRight className="rotate-180" size={20} />
          </button>

          <div className="pt-16 pb-8 px-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#518C8C]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#518C8C]/20">
              <LogIn className="text-[#518C8C] w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
            <p className="text-slate-400 text-sm mt-1">Sign in to your MonoSid account</p>
          </div>

          <form onSubmit={handleSubmit} className="px-10 pb-6 space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-[#518C8C]/10 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] font-bold text-blue-600">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-[#518C8C]/10 outline-none transition-all"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#518C8C] hover:bg-[#3F6E6E] text-white font-bold py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 mt-4 active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <>Sign In <ArrowRight size={18} /></>}
            </button>
          </form>

          <div className="px-10 pb-12">
            <div className="flex items-center gap-3 my-6"><div className="h-[1px] bg-slate-100 flex-1" /><span className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">or</span><div className="h-[1px] bg-slate-100 flex-1" /></div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"><Chrome size={16} className="text-red-500" /> Google</button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"><Facebook size={16} className="text-blue-600" /> Facebook</button>
            </div>
            <p className="text-center text-sm text-slate-400">New here? <button onClick={() => navigateTo('signup')} className="text-blue-600 font-bold">Create account</button></p>
          </div>
        </div>
      </div>
    );
  };

  /**
   * --- COMPONENT: SIGN UP ---
   */
  const SignUpPage = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (error) setError(null);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) { setError('Passwords do not match'); return; }
      setLoading(true);
      await new Promise((r) => setTimeout(r, 2000));
      setLoading(false);
      setSuccess(true);
    };

    if (success) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-md w-full border border-slate-100">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"><UserPlus className="text-green-500 w-10 h-10" /></div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome!</h2>
            <p className="text-slate-500 mb-8">Your journey to mental wellness begins now. Please verify your email to continue.</p>
            <button onClick={() => navigateTo('home')} className="w-full bg-[#518C8C] text-white py-4 rounded-full font-bold shadow-lg active:scale-95 transition-all">Go to Home</button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-in zoom-in-95 duration-300">
        <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
          <button onClick={() => navigateTo('home')} className="absolute top-6 left-6 text-slate-400 hover:text-slate-600 p-2"><ArrowRight className="rotate-180" size={20} /></button>
          <div className="pt-12 pb-6 px-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#518C8C]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#518C8C]/20"><UserPlus className="text-[#518C8C] w-8 h-8" /></div>
            <h1 className="text-2xl font-bold text-slate-800">Create Account</h1>
            <p className="text-slate-400 text-sm mt-1">Start your free wellness journey</p>
          </div>
          <form onSubmit={handleSubmit} className="px-10 pb-4 space-y-4">
            {error && <div className="flex items-center gap-2 text-xs font-semibold text-red-500 bg-red-50 p-3 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-1"><AlertCircle size={14} />{error}</div>}
            <div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label><div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} /><input type="text" name="fullName" required placeholder="Jane Doe" value={formData.fullName} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-[#518C8C]/10 outline-none transition-all" /></div></div>
            <div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} /><input type="email" name="email" required placeholder="jane@email.com" value={formData.email} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-[#518C8C]/10 outline-none transition-all" /></div></div>
            <div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label><div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} /><input type="password" name="password" required placeholder="••••••••" value={formData.password} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-[#518C8C]/10 outline-none transition-all" /></div></div>
            <div className="space-y-1.5"><label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Confirm Password</label><div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} /><input type="password" name="confirmPassword" required placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-2xl focus:ring-4 outline-none transition-all ${error ? 'border-red-200 focus:ring-red-100' : 'border-slate-100 focus:ring-[#518C8C]/10'}`} /></div></div>
            <button type="submit" disabled={loading} className="w-full bg-[#518C8C] hover:bg-[#3F6E6E] text-white font-bold py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 mt-4 active:scale-95">{loading ? <Loader2 className="animate-spin" size={20} /> : <>Sign Up <ArrowRight size={18} /></>}</button>
          </form>
          <div className="px-10 pb-10">
            <div className="flex items-center gap-3 my-6"><div className="h-[1px] bg-slate-100 flex-1" /><span className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">or</span><div className="h-[1px] bg-slate-100 flex-1" /></div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"><Chrome size={16} className="text-red-500" /> Google</button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"><Facebook size={16} className="text-blue-600" /> Facebook</button>
            </div>
            <p className="text-center text-sm text-slate-400">Already have an account? <button onClick={() => navigateTo('signin')} className="text-blue-600 font-bold">Sign In</button></p>
          </div>
        </div>
      </div>
    );
  };

  /**
   * --- RENDERER ---
   */
  const navItems = ['Home', 'About us', 'Features', 'Pricing', 'Contact us'];
  const isAuthPage = view === 'signin' || view === 'signup';

  return (
    <div className="min-h-screen w-full font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* GLOBAL NAVBAR - Conditionally Transparent on Hero */}
      {!isAuthPage && (
        <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300 ${view === 'home' ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm'}`}>
          <div
            className={`text-2xl font-bold tracking-tight cursor-pointer ${view === 'home' ? 'text-white' : 'text-slate-900'}`}
            onClick={() => navigateTo('home')}
          >
            MonoSid
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item.toLowerCase().replace(' ', ''))}
                className={`text-sm font-medium transition-colors ${view === item.toLowerCase().replace(' ', '') ? 'text-blue-600' : view === 'home' ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div
              onClick={() => setIsOn(!isOn)}
              className={`hidden sm:flex items-center space-x-2 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 cursor-pointer transition-all ${
                isOn ? 'bg-white/20' : 'bg-black/40'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  isOn ? 'bg-white' : 'bg-gray-400'
                }`}
              >
                <Power
                  size={12}
                  className={isOn ? 'text-black fill-current' : 'text-white'}
                />
              </div>
              <span className="text-white text-xs font-semibold uppercase tracking-wider pr-1">
                {isOn ? 'On' : 'Off'}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${view === 'home' ? 'text-white' : 'text-slate-900'}`}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-4">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32}/></button>
          {navItems.map((item) => (
            <button
              key={item}
              className="text-white text-2xl font-bold"
              onClick={() => navigateTo(item.toLowerCase().replace(' ', ''))}
            >
              {item}
            </button>
          ))}
          <div className="flex flex-col space-y-4 w-full px-12">
            <button onClick={() => navigateTo('signin')} className="bg-white text-black py-4 rounded-full font-bold">Sign In</button>
            <button onClick={() => navigateTo('signup')} className="border-2 border-white text-white py-4 rounded-full font-bold">Get Started</button>
          </div>
        </div>
      )}

      {/* VIEW CONTENT */}
      {view === 'home' && <HomePage />}
      {view === 'aboutus' && <AboutUsPage />}
      {view === 'features' && <FeaturesPage />}
      {view === 'pricing' && <PricingPage />}
      {view === 'contactus' && <ContactUsPage />}
      {view === 'signin' && <SignInPage />}
      {view === 'signup' && <SignUpPage />}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        :root {
          font-family: 'Poppins', system-ui, -apple-system, sans-serif;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        .animate-in {
          animation-duration: 0.5s;
          animation-fill-mode: both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInFromBottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in { animation-name: fadeIn; }
        .zoom-in-95 { animation-name: zoomIn; }
        .slide-in-from-bottom-10 { animation-name: slideInFromBottom; }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.75rem !important;
            line-height: 1.1 !important;
          }
        }
      `,
        }}
      />
    </div>
  );
};

export default App;
