/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Layout, 
  Menu as MenuIcon, 
  ArrowRight, 
  AlertTriangle, 
  Users, 
  Map, 
  Grid, 
  ExternalLink,
  Zap
} from 'lucide-react';

interface NiceCaseStudyProps {
  onContactClick: () => void;
}

export default function NiceCaseStudy({ onContactClick }: NiceCaseStudyProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background-light text-slate-900 antialiased font-display">
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
            <a className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest" href="#">Resume</a>
            <a className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest" href="#">Contact</a>
            <button 
              onClick={onContactClick}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest hover:bg-primary"
            >
              Get in touch
            </button>
          </nav>
          <button className="md:hidden text-slate-900">
            <MenuIcon />
          </button>
        </div>
      </header>

      <main>
        {/* Section 1: Hero Section */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-5 space-y-8 z-10">
                <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest">
                  Enterprise UX Case Study
                </div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
                  NICE/inContact Supervisor Experience
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  Reimagining the contact center management dashboard for increased efficiency and reduced cognitive load for high-stakes environments.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    View Prototype <ArrowRight />
                  </button>
                </div>
              </div>
              {/* Right Image Column */}
              <div className="lg:col-span-7 relative">
                <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="relative lg:-mr-24 xl:-mr-48 transition-transform hover:scale-[1.02] duration-500">
                  <div className="aspect-[16/10] bg-slate-200 rounded-3xl overflow-hidden border-8 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Modern enterprise dashboard interface" 
                      src="https://www.dropbox.com/scl/fi/q303ib81dl4i8ubvxewou/IMG_9084.jpg?rlkey=vjox3y9ik54fzw8iqqm5v1ifk&raw=1"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10 animate-pulse"></div>
                </div>
              </div>
            </div>
            {/* Project Metadata */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-200">
              <div>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">Company</p>
                <p className="text-lg font-bold">NICE/inContact</p>
              </div>
              <div>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">Task</p>
                <p className="text-lg font-bold">Dashboard Redesign</p>
              </div>
              <div>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">Role</p>
                <p className="text-lg font-bold">Lead UX Designer</p>
              </div>
              <div>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">Timeline</p>
                <p className="text-lg font-bold">6 Months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Problem Statement */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <AlertTriangle className="text-primary w-12 h-12" />
              <h2 className="text-4xl font-black tracking-tight uppercase">The Problem Statement</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              <p className="text-2xl text-slate-600 leading-relaxed italic">
                "Contact center supervisors were overwhelmed by fragmented data sources and outdated legacy interfaces, leading to high response times and frequent support escalations."
              </p>
              <p className="text-lg text-slate-500">
                The existing system required supervisors to toggle between 12 different tabs to get a complete picture of agent performance. This cognitive overload directly impacted their ability to provide real-time coaching, resulting in a 15% decrease in customer satisfaction scores over the last two quarters.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Research & Discovery */}
        <section className="py-24 px-6 bg-background-light">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-primary text-xs font-black uppercase tracking-widest mb-4">Phase 01</h2>
              <h3 className="text-4xl font-black mb-6">Research & Discovery</h3>
              <p className="text-lg text-slate-600 max-w-2xl">
                To understand the complex workflow of a supervisor, we conducted extensive field research and qualitative analysis across three different continents.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users />
                </div>
                <h4 className="text-xl font-bold mb-4">Contextual Interviews</h4>
                <p className="text-slate-600 leading-relaxed">
                  Shadowed 15 supervisors in live call center environments to identify pain points in real-time decision making.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Map />
                </div>
                <h4 className="text-xl font-bold mb-4">Journey Mapping</h4>
                <p className="text-slate-600 leading-relaxed">
                  Visualized the emotional and functional path of a supervisor during high-volume peak hours to find "friction hotspots."
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Grid />
                </div>
                <h4 className="text-xl font-bold mb-4">Card Sorting</h4>
                <p className="text-slate-600 leading-relaxed">
                  Conducted remote card sorting with 40+ users to reorganize information architecture based on mental models.
                </p>
              </div>
            </div>
            <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200">
              <img 
                className="w-full h-[400px] object-cover" 
                alt="Research whiteboard" 
                src="https://picsum.photos/seed/research/1200/400"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Definition & Ideation */}
        <section className="py-24 px-6 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[4/5] bg-slate-800 rounded-xl overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Sketching" src="https://picsum.photos/seed/sketch/400/500" referrerPolicy="no-referrer" />
                    </div>
                    <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Wireframes" src="https://picsum.photos/seed/wireframe/400/400" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="pt-12 space-y-4">
                    <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden">
                      <img className="w-full h-full object-cover" alt="User flow" src="https://picsum.photos/seed/flow/400/400" referrerPolicy="no-referrer" />
                    </div>
                    <div className="aspect-[4/5] bg-slate-800 rounded-xl overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Design system" src="https://picsum.photos/seed/system/400/500" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-primary text-xs font-black uppercase tracking-widest">Phase 02</h2>
                <h3 className="text-4xl md:text-5xl font-black leading-tight">Definition & Ideation</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Synthesizing our findings led to a core design principle: <span className="text-white font-bold">"Progressive Disclosure of Complexity."</span> We shifted from a static dashboard to a dynamic, widget-based interface.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary shrink-0 mt-1">check_circle</span>
                    <div>
                      <p className="font-bold">Lo-Fi Prototyping</p>
                      <p className="text-slate-400 text-sm">Rapidly iterating on the layout using paper prototypes to validate the 'glanceability' of KPIs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary shrink-0 mt-1">check_circle</span>
                    <div>
                      <p className="font-bold">Information Hierarchy</p>
                      <p className="text-slate-400 text-sm">Prioritizing real-time alerts over historical data to ensure immediate actionability.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Final Solution/Delivery */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-primary text-xs font-black uppercase tracking-widest">Final Impact</h2>
              <h3 className="text-5xl font-black">The Solution & Results</h3>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold">Streamlined Agent Monitoring</h4>
                  <p className="text-slate-600 leading-relaxed">
                    The final design consolidated 12 screens into a single unified workspace. Supervisors can now see agent status, queue health, and customer sentiment in one cohesive view.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-4xl font-black text-primary mb-1">45%</p>
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-tight">Reduction in click-paths</p>
                  </div>
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-4xl font-black text-primary mb-1">-30s</p>
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-tight">Average response time</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Final dashboard" 
                  src="https://picsum.photos/seed/final/800/600"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Call to Action */}
            <div className="bg-background-dark text-white rounded-3xl p-12 text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h4 className="text-3xl font-black">Want to see the full process?</h4>
                <p className="text-slate-400 max-w-xl mx-auto">
                  I'd love to walk you through the full prototype and the user testing documentation for this project.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <button 
                    onClick={onContactClick}
                    className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest transition-all"
                  >
                    Get In Touch
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest transition-all">
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
          <div className="flex gap-8 text-slate-400">
            <Link className="hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest" to="/">Work</Link>
            <Link className="hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest" to="/">About</Link>
            <a className="hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest" href="#">Dribbble</a>
          </div>
          <p className="text-slate-400 text-sm">© 2024 Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
