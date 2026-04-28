import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Shield, User, Settings, LogIn, UserPlus, Heart } from 'lucide-react';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
        {/* Navigation */}
        <nav className="h-20 border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition">C</div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">CIAM Portal</span>
            </Link>
            
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
                <Link to="/products" className="hover:text-white transition">Products</Link>
                <Link to="/pricing" className="hover:text-white transition">Pricing</Link>
                <Link to="/support" className="hover:text-white transition">Support</Link>
              </div>
              <div className="h-6 w-px bg-slate-800"></div>
              <Link to="/login" className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-400 transition">
                <LogIn size={18} />
                Sign In
              </Link>
              <Link to="/register" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-lg shadow-indigo-900/40">
                Join Now
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-800 bg-slate-950 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              Built with <Heart size={14} className="text-rose-500" /> by Devopstrio &copy; 2026
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

const Hero = () => (
  <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
    <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-indigo-400 text-xs font-bold mb-8 animate-fade-in">
      <Shield size={14} />
      TRUST-FIRST IDENTITY ARCHITECTURE
    </div>
    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
      Secure Identity <br /> For Every Customer.
    </h1>
    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
      The reference architecture for the next generation of CIAM. Scale to millions of users with zero-trust security and frictionless journeys.
    </p>
    <div className="flex justify-center gap-6">
      <button className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all active:scale-95">Get Started</button>
      <button className="bg-slate-900 border border-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all">Documentation</button>
    </div>
  </div>
);

export default App;
