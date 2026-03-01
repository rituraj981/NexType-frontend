import { useState } from "react";
import { useDropzone } from "react-dropzone"; // 1. Added this import!
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Dropzone } from "../features/converter/components/Dropzone";
import { Upload, Wand2, Download, Star, Code2, FileText, Image as ImageIcon, ChevronDown, Plus } from "lucide-react";

export default function Home() {
  // --- STATE: Tracks the files uploaded by the user ---
  const [selectedFiles, setSelectedFiles] = useState([]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050508] transition-colors duration-300 font-sans">
      <Navbar />
      
      {/* Ambient Background Glow (Dark Mode only) */}
      <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-900/20 rounded-full blur-[150px] pointer-events-none" />

      <main className="pt-36 px-6 relative z-10 max-w-6xl mx-auto">
        
        {/* --- HERO SECTION BANNER --- */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">
            Free File Conversion, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-400 font-normal">
              Without Limits
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            The developer-friendly converter that respects your data. No accounts required, no hidden fees, just pure performance.
          </p>
        </div>

        {/* --- DYNAMIC WORKSPACE --- */}
        <div className="max-w-3xl mx-auto mb-20">
          {selectedFiles.length === 0 ? (
            <Dropzone onFilesAdded={(files) => setSelectedFiles(files)} />
          ) : (
            <ActiveConversionList 
              files={selectedFiles} 
              onCancelAll={() => setSelectedFiles([])} 
              onAddMoreFiles={(newFiles) => setSelectedFiles(prev => [...prev, ...newFiles])} 
            />
          )}
        </div>

        {/* --- PROCESS STEPS --- */}
        <div className="relative max-w-4xl mx-auto py-16">
          <div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-slate-200 dark:bg-slate-800/80 -z-10" />
          <div className="grid grid-cols-3 gap-8 text-center">
            <Step icon={Upload} title="1. Upload Source" desc="Drag and drop any file type. We handle massive batches with ease." />
            <Step icon={Wand2} title="2. Magic Happens" desc="Our high-performance servers convert your files in milliseconds." />
            <Step icon={Download} title="3. Grab Results" desc="Instant download of your processed files. Zero wait time." />
          </div>
        </div>

        {/* --- COMMUNITY SECTION --- */}
        <div className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-24 pb-12 flex flex-col md:flex-row items-center justify-between gap-12">
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

          <div className="flex-1 w-full relative">
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#12121a] dark:to-[#0a0a0f] rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent dark:from-white/5 opacity-50" />
              <Code2 size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-800 opacity-20" />
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

// --- HELPER COMPONENTS ---

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

// 2. Added onAddMoreFiles to the props here!
function ActiveConversionList({ files, onCancelAll, onAddMoreFiles }) {
  
  // 3. Added the dropzone logic specific to this dashed box
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const formattedFiles = acceptedFiles.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        size: file.size,
        type: file.type,
        status: "ready"
      }));
      if (onAddMoreFiles) onAddMoreFiles(formattedFiles);
    }
  });

  return (
    <div className="w-full flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex items-center justify-between px-2 mb-2">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Converting {files.length} files...
        </h3>
        <button onClick={onCancelAll} className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors">
          Cancel all
        </button>
      </div>

      {/* File Cards */}
      {files.map((file, index) => (
        <div key={file.id || index} className="relative flex items-center justify-between p-4 bg-white dark:bg-[#12121a] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-[#1a1a24] text-slate-500 dark:text-slate-400">
              {file.type?.includes("image") ? <ImageIcon size={24} /> : <FileText size={24} />}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[200px] md:max-w-xs">{file.name}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                <span>•</span>
                <span className="uppercase">{file.name.split('.').pop()}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Format Selector */}
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-[#0a0a0f] border border-slate-200 dark:border-slate-800 rounded-lg cursor-pointer">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {file.type?.includes("image") ? "PNG" : "PDF"}
              </span>
              <ChevronDown size={14} className="text-slate-500" />
            </div>

            <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition-colors">
              Convert
            </button>
          </div>
        </div>
      ))}

      {/* 4. Attached getRootProps and getInputProps to wake the box up! */}
      <div 
        {...getRootProps()}
        className={`mt-4 p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center transition-colors cursor-pointer
          ${isDragActive 
            ? 'border-violet-500 bg-violet-50/50 dark:bg-violet-900/10' 
            : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0a0a0f]/50 hover:border-violet-500/50 dark:hover:border-violet-500/50'
          }`}
      >
        <input {...getInputProps()} />
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {isDragActive ? "Drop files here!" : "Drag & Drop files here"}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 max-w-[250px]">
          or click to browse. Supports PDF, JPG, PNG, DOCX up to 50MB.
        </p>
        {/* 5. Added pointer-events-none so the click goes through to the div */}
        <button className="pointer-events-none flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-[#12121a] hover:bg-slate-800 dark:hover:bg-[#1a1a24] text-white text-sm font-medium rounded-lg border border-transparent dark:border-slate-800 transition-colors">
          <Plus size={16} /> Add more files
        </button>
      </div>
    </div>
  );
}