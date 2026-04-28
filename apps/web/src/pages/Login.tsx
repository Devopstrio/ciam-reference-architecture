import React from 'react';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

const Login = () => {
  return (
    <div className="max-w-md mx-auto pt-20 px-6">
      <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-slate-400 mb-10">Please enter your details to sign in.</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-400 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-slate-500" size={18} />
              <input 
                type="email" 
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-400 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-slate-500" size={18} />
              <input 
                type="password" 
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>
            <div className="flex justify-end mt-2">
              <button type="button" className="text-xs font-bold text-indigo-400 hover:text-indigo-300">Forgot Password?</button>
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-2xl font-bold text-lg transition flex items-center justify-center gap-2 group shadow-lg shadow-indigo-900/40">
            Sign In
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-900 px-4 text-slate-500 font-bold">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SocialButton icon={<Chrome size={20} />} label="Google" />
          <SocialButton icon={<Github size={20} />} label="GitHub" />
        </div>

        <p className="text-center mt-10 text-sm text-slate-400">
          Don't have an account? <button className="text-indigo-400 font-bold hover:text-indigo-300">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, label }: any) => (
  <button className="flex items-center justify-center gap-3 bg-slate-950 border border-slate-800 py-3 rounded-2xl hover:bg-slate-800 transition text-sm font-bold">
    {icon}
    {label}
  </button>
);

export default Login;
