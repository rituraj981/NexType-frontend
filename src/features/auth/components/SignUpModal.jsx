import { motion } from 'framer-motion';
import { X, Mail, Lock, User, Github, Twitter } from 'lucide-react';

export function SignUpModal({ onClose, onSwitchToSignIn }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2 }}
      className="relative w-full max-w-md bg-white dark:bg-[#0c0c12] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 p-8"
    >
      <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
        <X size={18} />
      </button>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Create an account</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Join the community for free.</p>
      </div>

      <div className="flex gap-3 mb-6">
        <button className="flex-1 flex justify-center items-center py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </button>
        <button className="flex-1 flex justify-center items-center py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 transition-colors">
          <Github size={20} />
        </button>
        <button className="flex-1 flex justify-center items-center py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-[#1DA1F2] transition-colors">
          <Twitter size={20} />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Or continue with</span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400"><User size={18} /></div>
          <input type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#12121a] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all" />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400"><Mail size={18} /></div>
          <input type="email" placeholder="Email address" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#12121a] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all" />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400"><Lock size={18} /></div>
          <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#12121a] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all" />
        </div>
        <button className="w-full py-2.5 bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-violet-500/25 transition-all transform hover:-translate-y-0.5 mt-2">
          Create Account
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
        Already have an account?{' '}
        <button onClick={onSwitchToSignIn} className="text-violet-500 hover:text-violet-600 font-semibold transition-colors">
          Sign In
        </button>
      </div>
    </motion.div>
  );
}