import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'motion/react';
import ZoomableImage from '../components/ZoomableImage';

interface SerenovaPortfolioProps {
  onContactClick: () => void;
}

export default function SerenovaPortfolio({ onContactClick }: SerenovaPortfolioProps) {
  const [activePhase, setActivePhase] = useState<'initial' | 'design' | 'final'>('initial');

  const phases = [
    {
      id: 'initial',
      label: 'PHASE 01',
      title: 'Context & Discovery',
      icon: 'search',
      description: 'The discovery phase involved identifying numerous requirements to enable supervisors to effectively manage their teams. We worked within a very short time frame to implement an MVP solution that addressed immediate needs.',
      points: ['Requirement Gathering', 'Constraint Analysis'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Discovery+Phase'
    },
    {
      id: 'design',
      label: 'PHASE 02',
      title: 'Design & Iteration',
      icon: 'brush',
      description: 'Integration into an existing product posed challenges due to limited available space. We focused on a "Supervisor Tab" model that felt native while providing powerful management tools.',
      points: ['UI Integration Study', 'Tabbed Navigation Design'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Design+Iteration'
    },
    {
      id: 'final',
      label: 'PHASE 03',
      title: 'MVP & Validation',
      icon: 'verified',
      description: 'The swift implementation allowed supervisors to effectively oversee team skills, states, and contact types within the current setup, meeting critical deadlines.',
      points: ['Team Skill Management', 'Real-time State Monitoring'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Final+MVP'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] selection:bg-[#FF5733]/20 selection:text-[#6c2000] font-sans">
      <Helmet>
        <title>Serenova Supervisor | Darren Ottley UX Portfolio</title>
        <meta name="description" content="Integrating fundamental supervisor functionalities into an existing solution under tight time constraints for Serenova." />
      </Helmet>
      <Header onContactClick={onContactClick} />
      
      <main className="pt-24">
        {/* Section 1: Project Overview */}
        <section className="px-12 py-12 lg:py-24 min-h-[90vh] flex items-center max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl lg:text-8xl font-black text-[#161d30] tracking-tighter leading-[0.9] mb-8">Serenova <span className="text-[#FF5733]">Supervisor</span></h1>
              <p className="text-xl lg:text-2xl text-[#57423b] leading-relaxed font-light mb-12">
                Integrate fundamental supervisor functionalities into an existing solution. High impact under constrained timelines.
              </p>
              <div className="flex gap-16">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#dec0b6] font-bold mb-2">Role</div>
                  <div className="text-[#191c1d] font-semibold text-lg">Lead UX Designer</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#dec0b6] font-bold mb-2">Duration</div>
                  <div className="text-[#191c1d] font-semibold text-lg">4 Months</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(22,29,48,0.15)] border border-[#e1e3e4] transition-transform duration-700 group-hover:scale-[1.02]">
                <ZoomableImage 
                  alt="Serenova interface" 
                  className="w-full h-auto object-cover" 
                  src="https://placehold.co/1200x800/e1e3e4/57423b?text=Serenova+Hero"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Problem Statement Summary */}
        <section className="px-12 py-16 bg-[#FF5733] text-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-6xl opacity-30">format_quote</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-tight">
                In need of a <span className="text-[#161d30]">swift solution</span> to integrate functionality allowing supervisors to effectively oversee team skills, states, and contact types.
              </h2>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f4f5] px-12 py-32">
          <div className="max-w-[1440px] mx-auto">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF5733] mb-4">01 / PROBLEM STATEMENT</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
              <div className="space-y-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#FF5733]">The Context</div>
                <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Constraint-Driven Design</h2>
                <p className="text-lg text-[#57423b] leading-relaxed">
                  We needed to find a way to let supervisors manage their teams effectively without rebuilding the entire platform. The timeline was non-negotiable.
                </p>
              </div>
              <div className="space-y-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#575e74]">The Pain Point</div>
                <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Space Limitations</h2>
                <p className="text-lg text-[#57423b] leading-relaxed">
                  The existing product layout was dense, leaving very little room for new complex management features without causing significant user confusion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Research & Insights */}
        <section className="px-12 py-32 max-w-[1440px] mx-auto">
          <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF5733] mb-4">02 / RESEARCH & INSIGHTS</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8 mb-16 items-center">
            <div className="space-y-8">
              <div className="text-xs font-bold uppercase tracking-widest text-[#FF5733]">The Objective</div>
              <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Essential Tools Only</h2>
              <p className="text-lg text-[#57423b] leading-relaxed"> With a tight deadline, we focused on "Essentialism." We interviewed supervisors to identify the top 3 actions they performed daily and prioritized those above all else. </p>
            </div>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e1e3e4] transition-transform duration-700 group-hover:scale-[1.02]">
                <ZoomableImage 
                  alt="Research session" 
                  className="w-full h-64 object-cover" 
                  src="https://placehold.co/1200x800/e1e3e4/57423b?text=Serenova+Research+Insights"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-20">
            {/* Feature Prioritization Card */}
            <div className="bg-[#c7eadc]/30 p-10 rounded-2xl border border-[#c7eadc] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#c7eadc] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#45655a] text-2xl">priority_high</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">Feature Prioritization</h3>
                </div>
                <p className="text-[#2d4d42] leading-relaxed">
                  Used MoSCoW prioritization to strip the MVP down to its absolute most impactful components for launch.
                </p>
              </div>
            </div>
            {/* Workflow Shadowing Card */}
            <div className="bg-[#ffdbcf]/30 p-10 rounded-2xl border border-[#ffdbcf] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#ffdbcf] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#FF5733] text-2xl">history</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">Workflow Shadowing</h3>
                </div>
                <p className="text-[#822800] leading-relaxed">
                  Discovered that skill reassignment was the single most frequent task performed by team leads during peak volume.
                </p>
              </div>
            </div>
            {/* Rapid Feedback Card */}
            <div className="bg-[#dbe2fc]/30 p-10 rounded-2xl border border-[#dbe2fc] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#dbe2fc] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#575e74] text-2xl">bolt</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">Rapid Feedback</h3>
                </div>
                <p className="text-[#3f465b] leading-relaxed">
                  Conducted daily 15-minute review sessions with stakeholders to keep the project moving at high velocity.
                </p>
              </div>
            </div>
          </div>
          {/* Findings Section */}
          <div className="mt-16 pt-16 border-t border-[#e1e3e4]">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-black text-[#161d30] tracking-tighter mb-8">Research Findings</h3>
              <ul className="space-y-8 flex flex-col items-center">
                <li className="flex gap-5 items-start text-left max-w-2xl">
                  <span className="material-symbols-outlined text-3xl shrink-0 mt-1 text-[#FF5733]">visibility_off</span>
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 1: Supervisors were currently using external spreadsheets to track agent states because the primary UI was too slow to refresh.</p>
                </li>
                <li className="flex gap-5 items-start text-left max-w-2xl">
                  <span className="material-symbols-outlined text-3xl shrink-0 mt-1 text-[#FF5733]">warning</span>
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 2: Skill management was hidden behind four levels of nested menus, making it impossible to use during live interaction spikes.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Design Solution */}
        <section className="bg-[#161d30] text-white overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-12 py-32">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF5733]/80 mb-4">03 / DESIGN SOLUTION</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mt-8">
              <div>
                <div className="text-[#FF5733] font-bold tracking-widest text-xs uppercase mb-6">Supervisor Console</div>
                <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Unified <span className="text-[#FF5733]">Team View</span></h2>
                <p className="text-xl text-[#dec0b6]/70 leading-relaxed mb-10">
                  Integration into an existing product posed challenges due to limited space. We delivered a focused "Supervisor Tab" that provided high-density information without clutter.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#FF5733]">view_quilt</span>
                    <div>
                      <h4 className="font-bold">Density Optimized UI</h4>
                      <p className="text-sm opacity-60">Every pixel was scrutinized to ensure critical team metrics were visible without scrolling.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-[#1e273d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <ZoomableImage 
                    alt="Design Iteration" 
                    className="w-full h-full object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Serenova+Solution+Overview"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#FF5733] p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-xs uppercase font-bold tracking-widest mb-1">Time to MVP</div>
                  <div className="font-black text-2xl">4 Months</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mt-32">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-video bg-[#1e273d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <ZoomableImage 
                    alt="Skill Management" 
                    className="w-full h-full object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Serenova+Skill+Management"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-[#FF5733] font-bold tracking-widest text-xs uppercase mb-6">Reactive Management</div>
                <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Live <span className="text-[#FF5733]">Skill Reassignment</span></h2>
                <p className="text-xl text-[#dec0b6]/70 leading-relaxed mb-10">
                  Supervisors can now move agents between skills in two clicks, allowing them to react instantly to queue spikes and maintain service level agreements.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#FF5733]">dynamic_form</span>
                    <div>
                      <h4 className="font-bold">Real-time State Sync</h4>
                      <p className="text-sm opacity-60">Changes are reflected across the system instantly, with no browser refresh required.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Evolution */}
        <section className="bg-white px-12 py-32">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3 space-y-12">
              <div>
                <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF5733] mb-4">04 / EVOLUTION</span>
                <h2 className="text-[52px] leading-[1] font-black tracking-tighter text-[#161d30]">Project<br/><span className="text-[#FF5733]">Timeline</span></h2>
              </div>
              <div className="flex flex-col gap-6">
                {phases.map((phase) => (
                  <button 
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id as any)}
                    className={`text-left px-8 py-6 rounded-2xl border-2 transition-all duration-300 ${
                      activePhase === phase.id 
                        ? 'border-[#FF5733] bg-[#FF5733]/5' 
                        : 'border-transparent hover:bg-[#f3f4f5]'
                    }`}
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#dec0b6] mb-2">{phase.label}</div>
                    <div className="text-xl font-bold text-[#161d30]">{phase.title}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3 bg-[#f3f4f5]/30 rounded-[32px] p-16 border border-[#e1e3e4]/50 min-h-[500px]">
              <AnimatePresence mode="wait">
                {phases.filter(p => p.id === activePhase).map((phase) => (
                  <motion.div 
                    key={phase.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col lg:flex-row gap-16 items-start"
                  >
                    <div className="flex-1 space-y-8">
                      <div className="w-16 h-16 bg-[#FF5733]/10 rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#FF5733] text-3xl">{phase.icon}</span>
                      </div>
                      <h3 className="text-[40px] leading-[1] font-black tracking-tighter text-[#161d30]">{phase.title}</h3>
                      <p className="text-lg text-[#57423b] leading-relaxed font-light">
                        {phase.description}
                      </p>
                      <div className="space-y-4">
                        {phase.points.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-4 text-base font-bold text-[#161d30]">
                            <span className="material-symbols-outlined text-tertiary font-bold">check_circle</span>
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 w-full">
                      <ZoomableImage 
                        alt={phase.title} 
                        className="w-full rounded-2xl shadow-xl" 
                        src={phase.image}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Section 6: Final Result */}
        <section className="bg-[#e1e3e4]/30 px-12 py-32">
          <div className="max-w-[1440px] mx-auto">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF5733] mb-4">05 / FINAL RESULT</span>
            <div className="text-center mb-24 mt-8">
              <h2 className="text-5xl font-black text-[#161d30] tracking-tighter mb-6">A Unified Supervisor Hub</h2>
              <p className="text-xl text-[#57423b] max-w-3xl mx-auto">Swift solution allowing contact center supervisors to effectively oversee team skills, states, and contact types.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e1e3e4]">
                  <ZoomableImage 
                    alt="Final Serenova Interface" 
                    className="w-full h-auto object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Final+Serenova+Supervisor+Experience"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e3e4]">
                  <h3 className="font-bold text-xl mb-3">State Monitoring</h3>
                  <p className="text-sm text-[#57423b]">Real-time visibility into agent availability and interaction status across the entire team.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e3e4]">
                  <h3 className="font-bold text-xl mb-3">Contact Type Insight</h3>
                  <p className="text-sm text-[#57423b]">Immediate understanding of what channels are most active, allowing for reactive staffing adjustments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reflection & Impact */}
        <section className="px-12 py-32 bg-[#161d30] text-white">
          <div className="max-w-[1440px] mx-auto text-left">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF5733]/80 mb-12">06 / REFLECTION & IMPACT</span>
            <h2 className="text-4xl font-black tracking-tighter mb-16">The Quantitative Result</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">100%</div>
                <div className="text-xl font-bold mb-2">Requirement Match</div>
                <p className="text-sm text-[#dec0b6]/50">Delivered all critical supervisor management features requested for the initial MVP.</p>
              </div>
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">-80%</div>
                <div className="text-xl font-bold mb-2">Task Latency</div>
                <p className="text-sm text-[#dec0b6]/50">Reduced the time to reassign agent skills from minutes to seconds.</p>
              </div>
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">Zero</div>
                <div className="text-xl font-bold mb-2">System Rework</div>
                <p className="text-sm text-[#dec0b6]/50">Successfully integrated into the existing setup without requiring a core architectural change.</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto border-t border-white/10 pt-16">
              <p className="text-2xl font-light italic text-[#dec0b6] mb-8">"Successfully integrated fundamental supervisor functionalities into our existing solution, given our constrained timeline."</p>
              <div className="font-bold text-lg">Lead UX Designer Reflection</div>
              <div className="text-sm opacity-50 uppercase tracking-widest">Serenova Portfolio Project</div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="px-12 py-32 max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-black text-[#161d30] tracking-tighter mb-12">Looking Ahead</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-[#FF5733] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#FF5733] mb-4">PHASE 2</div>
              <h3 className="font-bold text-xl mb-2">Automated Thresholds</h3>
              <p className="text-sm text-[#57423b]">Setting triggers that automatically alert supervisors when team KPIs fall outside acceptable ranges.</p>
            </div>
            <div className="p-8 border-l-4 border-[#575e74] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#575e74] mb-4">PHASE 3</div>
              <h3 className="font-bold text-xl mb-2">Mobile Supervisor</h3>
              <p className="text-sm text-[#57423b]">Porting core team management features to a mobile-first experience for managers on the floor.</p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-12 py-32 bg-[#f8f9fa] text-center">
          <h2 className="text-5xl font-black text-[#161d30] tracking-tighter mb-8">Want to see more projects?</h2>
          <p className="text-[#57423b] mb-12 text-lg">Discover how we approach design across different industries.</p>
          <a className="inline-flex items-center gap-4 bg-[#161d30] text-white px-10 py-5 rounded-full font-bold hover:bg-[#FF5733] transition-colors group" href="/">
            View Gallery
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </a>
        </section>

        {/* Footer */}
        <footer className="w-full py-16 border-t border-[#dec0b6]/15 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-bold text-[#161d30] uppercase tracking-widest text-sm">Serenova Supervisor</div>
            <div className="flex gap-10">
              <a className="font-inter text-xs uppercase tracking-widest text-[#57423b] hover:underline decoration-2 underline-offset-4" href="#">Case Studies</a>
              <a className="font-inter text-xs uppercase tracking-widest text-[#57423b] hover:underline decoration-2 underline-offset-4" href="#">Design System</a>
              <a className="font-inter text-xs uppercase tracking-widest text-[#57423b] hover:underline decoration-2 underline-offset-4" href="#">Privacy</a>
              <a className="font-inter text-xs uppercase tracking-widest text-[#57423b] hover:underline decoration-2 underline-offset-4" href="#">Twitter</a>
            </div>
            <div className="font-inter text-xs uppercase tracking-widest text-[#57423b]">
              © 2024 Architectural Minimalist. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
