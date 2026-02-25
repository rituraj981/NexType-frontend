import { Layers } from "lucide-react";

/**
 * NexType Project Footer
 * @author: rituraj981
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-medium text-slate-500">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
          <div className="w-6 h-6 bg-violet-600 rounded flex items-center justify-center text-white">
            <Layers size={12} fill="currentColor" />
          </div>
          <span className="tracking-widest uppercase">NexType</span>
        </div>

        {/* Footer Navigation */}
        <div className="flex gap-8">
          <a href="#" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Status</a>
          <a href="#" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Contact</a>
        </div>

        {/* Ownership & Copyright */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-slate-400">
            © 2026 NexType. Released under MIT.
          </p>
          <p className="text-slate-500">
            Designed and Developed by 
            <a 
              href="https://github.com/rituraj981" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-violet-500 font-bold hover:underline ml-1"
            >
              rituraj981
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}