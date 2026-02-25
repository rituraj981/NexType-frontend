import { useState, useEffect } from "react";
import { Layers } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { SignInModal } from "../../features/auth/components/SignInModal.jsx";
import { SignUpModal } from "../../features/auth/components/SignUpModal.jsx";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [activeModal, setActiveModal] = useState(null); // 'signin', 'signup', or null

  const closeModal = () => setActiveModal(null);

  // Manage body scroll lock centrally
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeModal]);

  return (
    <>
      <nav className="absolute top-0 w-full z-40 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg tracking-wide text-slate-900 dark:text-white">
            <div className="w-7 h-7 bg-violet-600 rounded flex items-center justify-center text-white">
              <Layers size={16} fill="currentColor" />
            </div>
            <span>NexType</span>
          </div>

          <div className="hidden md:flex gap-8 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
            {['HOME', 'TOOLS', 'HELP', 'ABOUT US'].map((item) => (
              <a key={item} href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setActiveModal('signin')}
              className="hidden sm:flex text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600"
            >
              Sign In
            </button>
            <button 
              onClick={() => setActiveModal('signup')}
              className="px-5 py-2 bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* --- CENTRALIZED MODAL MANAGER --- */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* The single, shared backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
            />

            {/* Smooth Form Swapping inside the backdrop */}
            <AnimatePresence mode="wait">
              {activeModal === 'signin' && (
                <SignInModal 
                  key="signin" 
                  onClose={closeModal} 
                  onSwitchToSignUp={() => setActiveModal('signup')} 
                />
              )}
              {activeModal === 'signup' && (
                <SignUpModal 
                  key="signup" 
                  onClose={closeModal} 
                  onSwitchToSignIn={() => setActiveModal('signin')} 
                />
              )}
            </AnimatePresence>
            
          </div>
        )}
      </AnimatePresence>
    </>
  );
}