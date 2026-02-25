import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Dropzone } from "../features/converter/components/Dropzone";
import { Upload, Wand2, Download, Star, Code2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050508] transition-colors duration-300 font-sans">
      <Navbar />
      
      {/* Ambient Background Glow (Dark Mode only) */}
      <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-900/20 rounded-full blur-[150px] pointer-events-none" />

      <main className="pt-36 px-6 relative z-10 max-w-6xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">
            Free File Conversion, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-400 font-normal">
              Without Limits
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-12">
            The developer-friendly converter that respects your data. No accounts required, no hidden fees, just pure performance.
          </p>

          <Dropzone />
        </div>

        {/* --- PROCESS STEPS --- */}
        <div className="relative max-w-4xl mx-auto py-16">
          {/* Connecting Line */}
          <div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-slate-200 dark:bg-slate-800/80 -z-10" />
          
          <div className="grid grid-cols-3 gap-8 text-center">
            <Step icon={Upload} title="1. Upload Source" desc="Drag and drop any file type. We handle massive batches with ease." />
            <Step icon={Wand2} title="2. Magic Happens" desc="Our high-performance servers convert your files in milliseconds." />
            <Step icon={Download} title="3. Grab Results" desc="Instant download of your processed files. Zero wait time." />
          </div>
        </div>

        {/* --- COMMUNITY SECTION --- */}
        <div className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-24 pb-12 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
              Designed for speed,<br/>
              <span className="text-slate-400 dark:text-slate-500 font-medium">built for the community.</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 mb-8 leading-relaxed">
              NexType is 100% free and open source. We don't believe in paywalls or credit systems. Our infrastructure is powered by contributors who believe in a free internet.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-[#12121a] hover:bg-slate-800 dark:hover:bg-[#1a1a24] text-white text-sm font-medium rounded border border-transparent dark:border-slate-800 transition-colors">
                <Star size={16} /> Star on Github
              </button>
              <button className="px-5 py-2.5 bg-transparent border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                Documentation
              </button>
            </div>
          </div>

          {/* Right Graphic (Node Network Mockup) */}
          <div className="flex-1 w-full relative">
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#12121a] dark:to-[#0a0a0f] rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden relative shadow-lg">
              {/* Fake nodes representation - purely visual */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent dark:from-white/5 opacity-50" />
              <Code2 size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-800 opacity-20" />
              
              {/* Status Indicator */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Active Nodes Online: 1,248
                </div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  Community powered infrastructure.
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Helper component for the process steps
function Step({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 mb-6 shadow-sm z-10">
        <Icon size={20} />
      </div>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">{desc}</p>
    </div>
  );
}