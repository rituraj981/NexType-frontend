import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 dark:text-slate-500">
        
        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
          <Layers size={14} className="text-violet-500" />
          <span>FILECONV</span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Terms</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Privacy</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Status</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300">Contact</a>
        </div>

        <div>
          © 2024 NexType Project. Released under MIT.
        </div>
      </div>
    </footer>
  );
}