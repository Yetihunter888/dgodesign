import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Send, Linkedin, Github, MapPin, Clock, Zap, Dribbble } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-20">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] flex flex-col md:flex-row min-h-[600px]"
          >
            {/* Left Side: Editorial Content */}
            <div 
              className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden bg-zinc-900"
            >
              {/* Orange Glow Effect */}
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] -mr-40 -mb-40 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-transparent" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-16">
                  <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <Zap className="size-5 fill-current" />
                  </div>
                  <span className="font-display font-bold text-xl text-white tracking-tight">DGO</span>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-white mb-8">
                    Let's Build <br /> <span className="text-primary">Something</span> <br /> Great.
                  </h1>
                  <p className="text-lg text-slate-300 max-w-xs leading-relaxed mb-12">
                    I'm currently available for freelance projects and full-time opportunities. Let's start a conversation about your vision.
                  </p>
                  
                  <div className="space-y-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                      <span className="size-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Linkedin className="size-5 text-zinc-900" />
                      </span>
                      <span className="font-bold text-white text-sm">LinkedIn</span>
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                      <span className="size-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Dribbble className="size-5 text-zinc-900" />
                      </span>
                      <span className="font-bold text-white text-sm">Dribbble</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full md:w-7/12 p-8 md:p-12 bg-white flex flex-col">
              <div className="flex justify-end mb-4">
                <button 
                  onClick={onClose}
                  className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400"
                >
                  <X className="size-6" />
                </button>
              </div>

              <div className="max-w-md mx-auto w-full flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-8">
                  <Mail className="text-primary size-6" />
                  <h2 className="text-xl font-bold text-slate-900">Send a Message</h2>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-[#64748b] rounded-lg focus:ring-2 focus:ring-primary/50 py-3.5 px-4 placeholder:text-slate-400 text-slate-900 transition-all" 
                        placeholder="Jane Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-slate-50 border border-[#64748b] rounded-lg focus:ring-2 focus:ring-primary/50 py-3.5 px-4 placeholder:text-slate-400 text-slate-900 transition-all" 
                        placeholder="jane@example.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Subject</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-[#64748b] rounded-lg focus:ring-2 focus:ring-primary/50 py-3.5 px-4 text-slate-600 appearance-none">
                        <option>New Project Inquiry</option>
                        <option>Collaboration</option>
                        <option>General Coffee Chat</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Your Message</label>
                    <textarea 
                      className="w-full bg-slate-50 border border-[#64748b] rounded-lg focus:ring-2 focus:ring-primary/50 py-3.5 px-4 placeholder:text-slate-400 resize-none text-slate-900 transition-all" 
                      placeholder="Tell me about your project..." 
                      rows={4}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    <span>Shoot Message</span>
                    <Send className="size-5" />
                  </button>
                </form>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-8 text-xs font-medium text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>London, UK & Remote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span>Reply within 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
