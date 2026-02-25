import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Code, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Globe, 
  Layers 
} from 'lucide-react';
import myProfilePhoto from '../assets/rituraj.png'; 

const StatCard = ({ label, value }) => (
  <div className="p-6 bg-white dark:bg-[#1a1a24] border border-slate-100 dark:border-slate-800 rounded-2xl text-center shadow-sm">
    <div className="text-3xl font-bold text-violet-500 mb-1">{value}</div>
    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4 p-4">
    <div className="flex-shrink-0 w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-500">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white dark:bg-[#0c0c12]">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <section className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-violet-500 bg-violet-500/10 rounded-full"
          >
            Our Mission
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Breaking format barriers, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              one byte at a time.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            NexType was born out of a simple frustration: file conversion should be fast, 
            private, and beautiful. We're building the ultimate toolbox for creators, 
            developers, and professionals.
          </motion.p>
        </section>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <StatCard label="Conversions" value="1M+" />
          <StatCard label="Formats" value="50+" />
          <StatCard label="Uptime" value="99.9%" />
          <StatCard label="Security" value="AES-256" />
        </div>

        {/* --- CORE VALUES & WHY SECTION --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why we built NexType</h2>
            <p className="text-slate-500 dark:text-slate-400 italic border-l-4 border-violet-500 pl-4 py-2">
              "We believe that tools should stay out of your way. Your data belongs to you, and your workflow should be frictionless."
            </p>
            <div className="grid gap-4 pt-4">
              <Feature 
                icon={Shield} 
                title="Privacy First" 
                desc="We don't track your files. Our conversion engine processes data in temporary isolated environments that are wiped instantly."
              />
              <Feature 
                icon={Code} 
                title="Open Source" 
                desc="Transparency is key. Our frontend and core conversion logic are open for the community to inspect and improve."
              />
              <Feature 
                icon={Zap} 
                title="Blazing Fast" 
                desc="Powered by high-performance clusters, we ensure that your conversion happens in seconds, not minutes."
              />
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full" />
             <div className="relative bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Join the Evolution</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  NexType is a community-driven project. Whether you're a developer wanting to contribute or a user with a feature request, we'd love to hear from you.
                </p>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold text-sm transition-transform hover:-translate-y-1">
                    <Github size={18} /> Star on GitHub
                  </button>
                  <button className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl font-bold text-sm transition-transform hover:-translate-y-1">
                    <Globe size={18} /> Visit Documentation
                  </button>
                </div>
            </div>
          </div>
        </div>

        {/* --- MEET THE DEVELOPER SECTION --- */}
        <section className="pt-20 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Behind the Code</h2>
            <p className="text-slate-500 dark:text-slate-400">The developer building the future of file conversion.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-10">
              
              {/* Profile Image */}
              {/* <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-[#0c0c12] bg-slate-200 dark:bg-slate-800">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rituraj" 
                    alt="Rituraj Pandey" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div> */}
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-[#0c0c12] bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={myProfilePhoto} // Use the imported variable here
                    alt="Rituraj Pandey" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bio Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Rituraj Pandey</h3>
                <p className="text-violet-500 font-medium mb-4 uppercase tracking-widest text-xs font-bold">Full Stack Developer</p>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  I'm a Web Developer and MCA graduate with a passion for building high-performance 
                  applications. With expertise in React, Python, and AI integration, I created 
                  NexType to simplify how we handle digital assets while maintaining 100% 
                  user privacy.
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a href="#" className="p-2.5 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:text-violet-500 hover:border-violet-500 transition-all">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-2.5 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:text-violet-500 hover:border-violet-500 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:rituraj@example.com" className="p-2.5 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:text-violet-500 hover:border-violet-500 transition-all">
                    <Mail size={20} />
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-violet-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-violet-500/20 hover:bg-violet-600 transition-all hover:-translate-y-0.5">
                    Resume <ExternalLink size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}