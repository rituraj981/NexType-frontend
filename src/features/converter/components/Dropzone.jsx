import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { FilePlus, FileText, Image as ImageIcon, Film, Layers, ShieldCheck, Cloud, Code } from 'lucide-react';
import { useFileUpload } from '../hooks/useFileUpload';

// --- Sub-component 1: Floating Background Icons (Unchanged) ---
const FloatingIcon = ({ icon: Icon, delay, className }) => {
  return (
    <motion.div 
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute p-4 bg-white dark:bg-[#1a1a24] shadow-xl rounded-xl border border-slate-100 dark:border-slate-800 hidden md:block z-0 ${className}`}
    >
      <Icon size={20} />
    </motion.div>
  );
};

// --- Sub-component 2: Trust Badges (Unchanged) ---
const TrustBadges = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-8 text-[11px] font-bold text-slate-400 tracking-wider uppercase">
      <div className="flex items-center gap-2">
        <ShieldCheck size={14} /> NO TRACKING
      </div>
      <div className="flex items-center gap-2">
        <Cloud size={14} /> CLOUD OPTIMIZED
      </div>
      <div className="flex items-center gap-2">
        <Code size={14} /> OPEN SOURCE
      </div>
    </div>
  );
};

// --- Main Component: Dropzone ---
export function Dropzone({ onFilesAdded }) {
  const { onDrop: hookOnDrop } = useFileUpload();
  
  const handleDrop = (acceptedFiles) => {
    console.log("1. DROPZONE: File dropped!", acceptedFiles);

    // --- TEMPORARILY COMMENT THESE 3 LINES OUT ---
    // if (hookOnDrop) {
    //   hookOnDrop(acceptedFiles);
    // }
    // ---------------------------------------------

    const formattedFiles = acceptedFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: file.size,
      type: file.type,
      status: "ready"
    }));

    console.log("2. DROPZONE: Checking if onFilesAdded exists...", !!onFilesAdded);

    if (onFilesAdded) {
      onFilesAdded(formattedFiles);
      console.log("3. DROPZONE: Success! Files sent to Home.jsx");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop: handleDrop 
  });

  return (
    <div className="relative max-w-2xl mx-auto mt-12 mb-24">
      
      {/* Floating Animated Icons */}
      <FloatingIcon icon={Layers} delay={0} className="-left-32 top-0 text-red-500" />
      <FloatingIcon icon={FileText} delay={1} className="-left-24 top-32 text-blue-500" />
      <FloatingIcon icon={Film} delay={0.5} className="-right-32 -top-4 text-violet-500" />
      <FloatingIcon icon={ImageIcon} delay={1.5} className="-right-24 top-28 text-orange-500" />

      {/* Main Drop Area */}
      <motion.div 
        {...getRootProps()}
        className={`
          relative z-10 cursor-pointer overflow-hidden
          bg-white dark:bg-[#0c0c12] backdrop-blur-sm
          border rounded-3xl p-16 transition-all duration-300 shadow-2xl shadow-slate-200/50 dark:shadow-none
          ${isDragActive ? 'border-violet-500 bg-violet-50/50 dark:bg-violet-900/10' : 'border-slate-200 dark:border-slate-800/50'}
        `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 rounded-lg flex items-center justify-center mb-2">
            <FilePlus size={24} />
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Drop your files here
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Supports Video, Image, Document, and Audio formats
          </p>

          {/* Added type="button" to prevent accidental form submissions */}
          <button type="button" className="px-6 py-2.5 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2 text-sm z-20 pointer-events-none">
            <FilePlus size={16} /> Select Files to Convert
          </button>
        </div>
      </motion.div>

      <TrustBadges />
      
    </div>
  );
}