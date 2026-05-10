import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'motion/react';
import ZoomableImage from '../components/ZoomableImage';

interface MaxPortfolioProps {
  onContactClick: () => void;
}

export default function MaxPortfolio({ onContactClick }: MaxPortfolioProps) {
  const [activePhase, setActivePhase] = useState<'initial' | 'design' | 'final'>('initial');

  const phases = [
    {
      id: 'initial',
      label: 'PHASE 01',
      title: 'Context & Discovery',
      icon: 'search',
      description: 'Recognizing the limitations of our legacy software, we embarked on a transformative journey. By establishing a dedicated UX department and integrating their expertise into the product cycle, we prioritized the creation of intuitive experiences.',
      points: ['Legacy Audit', 'Stakeholder Alignment'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Discovery+Phase'
    },
    {
      id: 'design',
      label: 'PHASE 02',
      title: 'Design & Iteration',
      icon: 'brush',
      description: 'The design process for MAX involved creating low and high-fidelity mockups using Sketch and InVision. This allowed us to iterate quickly based on user feedback and technical constraints.',
      points: ['Sketching Ideation', 'Interactive Prototyping'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Design+Iteration'
    },
    {
      id: 'final',
      label: 'PHASE 03',
      title: 'MVP & Validation',
      icon: 'verified',
      description: 'The final outcome was a state-of-the-art agent experience that not only satisfied users but also provided a robust foundation for future development.',
      points: ['Usability Validation', 'Platform Launch'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Final+MVP'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] selection:bg-[#FF5733]/20 selection:text-[#6c2000] font-sans">
      <Helmet>
        <title>Max Agent Experience | Darren Ottley UX Portfolio</title>
        <meta name="description" content="A complete overhaul of NICE inContact's agent experience, moving from legacy software to a user-centric, modern platform." />
      </Helmet>
      <Header onContactClick={onContactClick} />
      
      <main className="pt-24">
        {/* Section 1: Project Overview */}
        <section className="px-12 py-12 lg:py-24 min-h-[90vh] flex items-center max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl lg:text-8xl font-black text-[#161d30] tracking-tighter leading-[0.9] mb-8">Max <span className="text-[#FF5733]">(Agent Experience)</span></h1>
              <p className="text-xl lg:text-2xl text-[#57423b] leading-relaxed font-light mb-12">
                A complete overhaul of NICE inContact's agent experience. Transforming legacy software into a user-centric power tool.
              </p>
              <div className="flex gap-16">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#dec0b6] font-bold mb-2">Role</div>
                  <div className="text-[#191c1d] font-semibold text-lg">UX Designer</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#dec0b6] font-bold mb-2">Duration</div>
                  <div className="text-[#191c1d] font-semibold text-lg">12 Months</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(22,29,48,0.15)] border border-[#e1e3e4] transition-transform duration-700 group-hover:scale-[1.02]">
                <ZoomableImage 
                  alt="Max interface" 
                  className="w-full h-auto object-cover" 
                  src="https://placehold.co/1200x800/e1e3e4/57423b?text=Max+Hero"
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
                Our dated agent experience frustrates users and hinders customer journeys. The <span className="text-[#161d30]">legacy code base</span> has become difficult to maintain.
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
                <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Legacy Limitations</h2>
                <p className="text-lg text-[#57423b] leading-relaxed">
                  We recognized the limitations of our legacy software for both users and our development team. Users were struggling with unintuitive workflows, and developers were slowed down by technical debt.
                </p>
              </div>
              <div className="space-y-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#575e74]">The Pain Point</div>
                <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Operational Friction</h2>
                <p className="text-lg text-[#57423b] leading-relaxed">
                  Agents on the front lines needed a dedicated experience that prioritized efficiency and reduced cognitive load during high-stress customer interactions.
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
              <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Understanding the Agent</h2>
              <p className="text-lg text-[#57423b] leading-relaxed"> Our journey began by immersing ourselves in the agent's world. We needed to understand not just what they did, but how they felt during peak hours. The research aimed to identify friction points that dashboards alone couldn't reveal. </p>
            </div>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e1e3e4] transition-transform duration-700 group-hover:scale-[1.02]">
                <ZoomableImage 
                  alt="Research session" 
                  className="w-full h-64 object-cover" 
                  src="https://placehold.co/1200x800/e1e3e4/57423b?text=Max+Research+Insights"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-20">
            {/* Contextual Inquiry Card */}
            <div className="bg-[#c7eadc]/30 p-10 rounded-2xl border border-[#c7eadc] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#c7eadc] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#45655a] text-2xl">visibility</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">Contextual Inquiry</h3>
                </div>
                <p className="text-[#2d4d42] leading-relaxed">
                  Observed agents in their actual work environments, noting the physical and digital shortcuts they created to overcome legacy software limitations.
                </p>
              </div>
            </div>
            {/* Pain Point Mapping Card */}
            <div className="bg-[#ffdbcf]/30 p-10 rounded-2xl border border-[#ffdbcf] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#ffdbcf] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#FF5733] text-2xl">list_alt</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">Pain Point Mapping</h3>
                </div>
                <p className="text-[#822800] leading-relaxed">
                  Cataloged hundreds of small "micro-frictions" that added up to significant daily frustration and lost productivity.
                </p>
              </div>
            </div>
            {/* Persona Refinement Card */}
            <div className="bg-[#dbe2fc]/30 p-10 rounded-2xl border border-[#dbe2fc] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#dbe2fc] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#575e74] text-2xl">group_work</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">Persona Refinement</h3>
                </div>
                <p className="text-[#3f465b] leading-relaxed">
                  Developed detailed agent personas that helped the engineering team understand the emotional impact of UI performance.
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
                  <span className="material-symbols-outlined text-3xl shrink-0 mt-1 text-[#FF5733]">psychology</span>
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 1: High cognitive load from excessive browser tabs was the #1 cause of agent burnout during peak volume.</p>
                </li>
                <li className="flex gap-5 items-start text-left max-w-2xl">
                  <span className="material-symbols-outlined text-3xl shrink-0 mt-1 text-[#FF5733]">history</span>
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 2: Agents spent an average of 15% of their interaction time navigating between disconnected customer history views.</p>
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
                <div className="text-[#FF5733] font-bold tracking-widest text-xs uppercase mb-6">Modern Agent Interface</div>
                <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Focus <span className="text-[#FF5733]">Mode Console</span></h2>
                <p className="text-xl text-[#dec0b6]/70 leading-relaxed mb-10">
                  By integrating specialized knowledge into the product cycle, we prioritized the creation of intuitive experiences that help agents stay focused on the customer.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#FF5733]">auto_awesome</span>
                    <div>
                      <h4 className="font-bold">Intelligent Workflows</h4>
                      <p className="text-sm opacity-60">Guided steps that anticipate the agent's next move based on real-time sentiment analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-[#1e273d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <ZoomableImage 
                    alt="Design Iteration" 
                    className="w-full h-full object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Max+Solution+Overview"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#FF5733] p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-xs uppercase font-bold tracking-widest mb-1">Efficiency Gain</div>
                  <div className="font-black text-2xl">+22% AHT</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mt-32">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-video bg-[#1e273d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <ZoomableImage 
                    alt="Agent Desktop" 
                    className="w-full h-full object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Max+Agent+Desktop"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-[#FF5733] font-bold tracking-widest text-xs uppercase mb-6">Omnichannel Harmony</div>
                <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Unified <span className="text-[#FF5733]">Canvas</span></h2>
                <p className="text-xl text-[#dec0b6]/70 leading-relaxed mb-10">
                  Phone, email, and chat interactions are no longer siloed. A single unified timeline provides the full context of the customer journey in a glance.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#FF5733]">hub</span>
                    <div>
                      <h4 className="font-bold">Context Persistence</h4>
                      <p className="text-sm opacity-60">Customer data follows the agent across every channel, eliminating repetitive questions.</p>
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
              <h2 className="text-5xl font-black text-[#161d30] tracking-tighter mb-6">The Modern Agent Desktop</h2>
              <p className="text-xl text-[#57423b] max-w-3xl mx-auto">A high-performance workspace designed for the speed of modern customer service.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e1e3e4]">
                  <ZoomableImage 
                    alt="Final Max Interface" 
                    className="w-full h-auto object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Final+Max+Agent+Experience"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e3e4]">
                  <h3 className="font-bold text-xl mb-3">Adaptive Layout</h3>
                  <p className="text-sm text-[#57423b]">Interface automatically scales to the agent's needs, prioritizing active communication channels.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e3e4]">
                  <h3 className="font-bold text-xl mb-3">Instant Action Bar</h3>
                  <p className="text-sm text-[#57423b]">Common resolutions are always one click away, drastically reducing average handle time.</p>
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
                <div className="text-7xl font-black text-[#FF5733] mb-4">+45%</div>
                <div className="text-xl font-bold mb-2">CSAT Increase</div>
                <p className="text-sm text-[#dec0b6]/50">Customer satisfaction scores saw an immediate lift following the nationwide rollout.</p>
              </div>
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">-30%</div>
                <div className="text-xl font-bold mb-2">Training Time</div>
                <p className="text-sm text-[#dec0b6]/50">New agents become proficient in the platform 30% faster than the legacy software.</p>
              </div>
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">Top 5</div>
                <div className="text-xl font-bold mb-2">Market Rank</div>
                <p className="text-sm text-[#dec0b6]/50">The redesign helped propel the product into the top tier of contact center software.</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto border-t border-white/10 pt-16">
              <p className="text-2xl font-light italic text-[#dec0b6] mb-8">"This transformation prioritized creating intuitive experiences that satisfied users and provided a robust foundation for future development."</p>
              <div className="font-bold text-lg">UX Designer Reflection</div>
              <div className="text-sm opacity-50 uppercase tracking-widest">NICE inContact MAX Project</div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="px-12 py-32 max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-black text-[#161d30] tracking-tighter mb-12">Looking Ahead</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-[#FF5733] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#FF5733] mb-4">PHASE 2</div>
              <h3 className="font-bold text-xl mb-2">AI Copilot</h3>
              <p className="text-sm text-[#57423b]">Real-time coaching and response suggestions powered by conversational intelligence.</p>
            </div>
            <div className="p-8 border-l-4 border-[#575e74] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#575e74] mb-4">PHASE 3</div>
              <h3 className="font-bold text-xl mb-2">Predictive Staffing</h3>
              <p className="text-sm text-[#57423b]">Personalized agent scheduling based on individual performance peaks and channel expertise.</p>
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
            <div className="font-bold text-[#161d30] uppercase tracking-widest text-sm">Max Agent Experience</div>
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
