import { useDropzone } from 'react-dropzone'; // 1. THIS IS REQUIRED FOR THE BOX TO WAKE UP
import { FileText, Image as ImageIcon, ChevronDown, Plus } from "lucide-react";

export function ActiveConversionList({ files, onCancelAll, onAddMoreFiles }) {
  
  // 2. This initializes the dropzone "brain" for the dashed box
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const formattedFiles = acceptedFiles.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        size: file.size,
        type: file.type,
        status: "ready"
      }));
      
      // Send new files to the main list
      if (onAddMoreFiles) {
        onAddMoreFiles(formattedFiles);
      }
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
                <span className="uppercase">{file.name.split('.').pop() || 'FILE'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
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

      {/* --- 3. The newly awakened dashed box --- */}
      <div 
        {...getRootProps()} 
        className={`mt-4 p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center transition-colors cursor-pointer 
          ${isDragActive 
            ? 'border-violet-500 bg-violet-50/50 dark:bg-violet-900/10' 
            : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0a0a0f]/50 hover:border-violet-500/50 dark:hover:border-violet-500/50'
          }`}
      >
        {/* 4. This hidden input is what actually opens your computer's file browser! */}
        <input {...getInputProps()} />
        
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {isDragActive ? "Drop them here!" : "Drag & Drop files here"}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 max-w-[250px]">
          or click to browse. Supports PDF, JPG, PNG, DOCX up to 50MB.
        </p>
        
        {/* Note: pointer-events-none ensures clicking the button clicks the box underneath it */}
        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-[#12121a] hover:bg-slate-800 dark:hover:bg-[#1a1a24] text-white text-sm font-medium rounded-lg border border-transparent dark:border-slate-800 transition-colors pointer-events-none">
          <Plus size={16} /> Add more files
        </button>
      </div>
    </div>
  );
}