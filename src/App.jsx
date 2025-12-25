import React, { useState } from 'react';
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
    className={`relative flex flex-col items-center p-8 rounded-3xl bg-gray-50 shadow-sm transition-transform duration-300 hover:shadow-md ${
      isFeatured ? 'border-2 border-blue-500 md:scale-105 z-10' : 'border border-transparent'
    }`}
  >
    {isFeatured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg">
        Most Popular
      </div>
    )}
    <div className="w-full bg-white rounded-2xl py-8 mb-8 flex flex-col items-center justify-center shadow-sm">
      <span className="text-4xl font-extrabold text-black tracking-tight">{price}/</span>
      <span className="text-xl font-bold text-black mt-1">{period}</span>
    </div>
    <div className="flex-1 w-full text-center md:text-left">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
          >
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
    const navItems = ['About us', 'Features', 'Pricing', 'Contact us'];
    const avatars = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces',
    ];

    const plans = [
      {
        title: 'Basic',
        price: 'R59',
        period: 'month',
        buttonText: 'Choose Basic',
        features: [
          'Unlimited chats with Sky',
          'Basic mood tracking',
          'Multilingual support',
          'Crisis resources access',
        ],
      },
      {
        title: 'Premium',
        price: 'R199',
        period: 'month',
        isFeatured: true,
        buttonText: 'Choose Premium',
        features: [
          'Everything in Basic',
          'Advanced mood detection',
          'Anonymous peer support',
          'Personalized insights',
          'Progress tracking & analytics',
          'Priority support',
        ],
      },
      {
        title: 'Lifetime',
        price: 'R1999',
        period: 'one-time',
        buttonText: 'Choose Lifetime',
        features: [
          'Everything in Premium',
          'Lifetime access',
          'Early access to new features',
          'Exclusive wellness content',
          'Family sharing (up to 3)',
          'Dedicated support',
          'One-time payment',
        ],
      },
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

          <header className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12">
            <div
              className="text-white text-2xl font-bold tracking-tight cursor-pointer"
              onClick={() => navigateTo('home')}
            >
              MonoSid
            </div>

            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/90 text-sm font-medium hover:text-white transition-colors"
                >
                  {item}
                </a>
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
                className="md:hidden text-white"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </header>

          {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 bg-slate-900/95 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white text-2xl font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-4 w-full px-12">
                <button
                  onClick={() => navigateTo('signin')}
                  className="bg-white text-black py-4 rounded-full font-bold"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigateTo('signup')}
                  className="border-2 border-white text-white py-4 rounded-full font-bold"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}

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

        {/* Features Section */}
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
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

        {/* Pricing */}
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our pricing plans
            </h2>
            <p className="text-xl text-gray-500 font-medium">
              Made just to suit your pocket
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((p, i) => (
              <PricingCard key={i} {...p} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-4">
                <Wind className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-slate-900">MonoSid</span>
              </div>
              <p className="text-gray-500 text-sm">Mental Wellness, Made Accessible.</p>
            </div>
            {['Company', 'Resources', 'Contact'].map((section, idx) => (
              <div key={idx} className="text-center md:text-left">
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
                  {section}
                </h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  {section === 'Company' &&
                    ['About us', 'Join us', 'Products'].map((i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {i}
                        </a>
                      </li>
                    ))}
                  {section === 'Resources' &&
                    ['Blog', 'Privacy policy', 'Terms'].map((i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {i}
                        </a>
                      </li>
                    ))}
                  {section === 'Contact' &&
                    ['info@monosid.com', '+27 043 585 4765'].map((i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {i}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center text-gray-400 text-xs border-t border-slate-50 pt-8">
            &copy; {new Date().getFullYear()} MonoSid Wellness. All rights reserved.
          </div>
        </footer>
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
            <p className="text-slate-400 text-sm mt-1">
              Sign in to your MonoSid account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-10 pb-6 space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
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
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] font-bold text-blue-600"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
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
              className="w-full bg-[#518C8C] hover:bg-[#3F6E6E] text-white font-bold py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Sign In <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="px-10 pb-12">
            <div className="flex items-center gap-3 my-6">
              <div className="h-[1px] bg-slate-100 flex-1" />
              <span className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">
                or
              </span>
              <div className="h-[1px] bg-slate-100 flex-1" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                <Chrome size={16} className="text-red-500" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                <Facebook size={16} className="text-blue-600" /> Facebook
              </button>
            </div>
            <p className="text-center text-sm text-slate-400">
              New here?{' '}
              <button
                onClick={() => navigateTo('signup')}
                className="text-blue-600 font-bold"
              >
                Create account
              </button>
            </p>
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
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (error) setError(null);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      setLoading(true);
      await new Promise((r) => setTimeout(r, 2000));
      setLoading(false);
      setSuccess(true);
    };

    if (success) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-md w-full border border-slate-100">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="text-green-500 w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome!</h2>
            <p className="text-slate-500 mb-8">
              Your journey to mental wellness begins now. Please verify your email to
              continue.
            </p>
            <button
              onClick={() => navigateTo('home')}
              className="w-full bg-[#518C8C] text-white py-4 rounded-full font-bold shadow-lg"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-in zoom-in-95 duration-300">
        <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
          <button
            onClick={() => navigateTo('home')}
            className="absolute top-6 left-6 text-slate-400 hover:text-slate-600 p-2"
          >
            <ArrowRight className="rotate-180" size={20} />
          </button>

          <div className="pt-12 pb-6 px-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#518C8C]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#518C8C]/20">
              <UserPlus className="text-[#518C8C] w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Create Account</h1>
            <p className="text-slate-400 text-sm mt-1">Start your free wellness journey</p>
          </div>

          <form onSubmit={handleSubmit} className="px-10 pb-4 space-y-4">
            {error && (
              <div className="flex items-center gap-2 text-xs font-semibold text-red-500 bg-red-50 p-3 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-1">
                <AlertCircle size={14} />
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Jane Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-[#518C8C]/10 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-[#518C8C]/10 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-[#518C8C]/10 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-2xl focus:ring-4 outline-none transition-all ${
                    error
                      ? 'border-red-200 focus:ring-red-100'
                      : 'border-slate-100 focus:ring-[#518C8C]/10'
                  }`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#518C8C] hover:bg-[#3F6E6E] text-white font-bold py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Sign Up <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Social Auth Section for Sign Up */}
          <div className="px-10 pb-10">
            <div className="flex items-center gap-3 my-6">
              <div className="h-[1px] bg-slate-100 flex-1" />
              <span className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">
                or
              </span>
              <div className="h-[1px] bg-slate-100 flex-1" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                <Chrome size={16} className="text-red-500" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                <Facebook size={16} className="text-blue-600" /> Facebook
              </button>
            </div>
            <p className="text-center text-sm text-slate-400">
              Already have an account?{' '}
              <button
                onClick={() => navigateTo('signin')}
                className="text-blue-600 font-bold"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  };

  /**
   * --- RENDERER ---
   */
  return (
    <div className="min-h-screen w-full font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
      {view === 'home' && <HomePage />}
      {view === 'signin' && <SignInPage />}
      {view === 'signup' && <SignUpPage />}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        :root {
          font-family: 'Poppins', system-ui, -apple-system, sans-serif;
        }

        body {
          margin: 0;
          overflow-x: hidden;
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
      `,
        }}
      />
    </div>
  );
};

export default App;
