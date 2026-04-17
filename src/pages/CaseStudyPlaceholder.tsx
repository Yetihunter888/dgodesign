/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Zap,
  Clock,
  Mail
} from 'lucide-react';

interface CaseStudyPlaceholderProps {
  onContactClick: () => void;
}

export default function CaseStudyPlaceholder({ onContactClick }: CaseStudyPlaceholderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background-light text-slate-900 antialiased font-display min-h-screen flex flex-col">
      {/* Navigation */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/40 backdrop-blur-md border-slate-200/50 py-3' 
          : 'bg-white/80 backdrop-blur-md border-slate-200 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Zap className="size-5 fill-current" />
            </div>
            <div className="font-display font-bold text-2xl text-primary">DGO</div>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest" to="/">Work</Link>
            <Link className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest" to="/">About</Link>
            <button 
              onClick={onContactClick}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest hover:bg-primary"
            >
              Get in touch
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Clock className="w-12 h-12" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900"
          >
            Case Study Coming Soon
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            I'm currently putting the finishing touches on this case study. It involves complex problem-solving, user research, and iterative design that I can't wait to share.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link 
              to="/"
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Home
            </Link>
            <button 
              onClick={onContactClick}
              className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:border-primary hover:text-primary transition-all"
            >
              <Mail className="w-5 h-5" /> Contact Me
            </button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="size-6 bg-primary rounded-md flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Zap className="size-3.5 fill-current" />
            </div>
            <div className="font-display font-bold text-xl text-primary">DGO</div>
          </div>
          <p className="text-slate-400 text-sm">© 2024 Darren Ottley. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
