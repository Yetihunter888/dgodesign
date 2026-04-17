import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'motion/react';

interface NiceDashboardPortfolioProps {
  onContactClick: () => void;
}

export default function NiceDashboardPortfolio({ onContactClick }: NiceDashboardPortfolioProps) {
  const [activePhase, setActivePhase] = useState<'initial' | 'design' | 'final'>('initial');

  const phases = [
    {
      id: 'initial',
      label: 'PHASE 01',
      title: 'Sketching and Ideation',
      icon: 'edit_note',
      description: 'We focused on translating core research insights into initial wireframe sketches. This phase involved mapping complex user flows to ensure critical supervisor paths were streamlined, while establishing a foundational grid layout that could scale across high-density data views.',
      points: ['User Flow Mapping', 'Foundational Layouts'],
      image: 'https://www.dropbox.com/scl/fi/q303ib81dl4i8ubvxewou/IMG_9084.jpg?rlkey=vjox3y9ik54fzw8iqqm5v1ifk&raw=1'
    },
    {
      id: 'design',
      label: 'PHASE 02',
      title: 'Co-Creation Workshops',
      icon: 'brush',
      description: 'We brought supervisors into the design process. Using low-fidelity sketches, we prototyped the "Zero-Latency" dashboard together, ensuring that critical KPIs were prioritized based on actual urgency rather than technical ease.',
      points: ['3 Iterative Sprints', 'Rapid Prototyping'],
      image: 'https://lh3.googleusercontent.com/aida/ADBb0ui9qofzq8171FKDdpkFughxPb7oJrPuRjYQJRZ-ZtDFdpylxmSr-L9a7I9JPWjj30-6VMCoZBfIfcwBznvcNwbABjCVGQ6_0pJQj9qx1DMJLp0C2buz1TJVVaPZEypSwH9VzWQYHdAcOducCBZP6mMB5oCHBgUdrJzyycuWhFrK0jU5K3OoQzHf50_qNVzCr6Vy2XkZVAvUxDKlFzcpaiZVoPl0HX0sk0ZjI4yE2cX9n6-M7IGxnal0i28fHYhaqI1oOX4gePF3v8Y'
    },
    {
      id: 'final',
      label: 'PHASE 03',
      title: 'Closing the Loop',
      icon: 'verified',
      description: 'High-fidelity usability tests revealed a 42% reduction in time-to-task completion. Supervisors noted that the new "Drill-to-Action" pattern eliminated the need for external spreadsheets, keeping them in one unified environment.',
      points: ['Summative Testing', '98% CSAT Rating'],
      image: 'https://lh3.googleusercontent.com/aida/ADBb0ui9qofzq8171FKDdpkFughxPb7oJrPuRjYQJRZ-ZtDFdpylxmSr-L9a7I9JPWjj30-6VMCoZBfIfcwBznvcNwbABjCVGQ6_0pJQj9qx1DMJLp0C2buz1TJVVaPZEypSwH9VzWQYHdAcOducCBZP6mMB5oCHBgUdrJzyycuWhFrK0jU5K3OoQzHf50_qNVzCr6Vy2XkZVAvUxDKlFzcpaiZVoPl0HX0sk0ZjI4yE2cX9n6-M7IGxnal0i28fHYhaqI1oOX4gePF3v8Y'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] selection:bg-[#FF5733]/20 selection:text-[#6c2000] font-sans">
      <Helmet>
        <title>NICE Dashboard Redesign | Darren Ottley UX Portfolio</title>
        <meta name="description" content="A deep dive into transforming a fragmented supervisor experience into a unified, high-performance command center for NICE." />
        <meta property="og:title" content="NICE Dashboard Redesign | Darren Ottley UX Portfolio" />
        <meta property="og:description" content="Case study on enterprise dashboard redesign, focusing on latency reduction and data visualization." />
      </Helmet>
      <Header onContactClick={onContactClick} />
      
      <main className="pt-24">
        {/* Section 1: Project Overview */}
        <section className="px-12 py-12 lg:py-24 min-h-[90vh] flex items-center max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl lg:text-8xl font-black text-[#161d30] tracking-tighter leading-[0.9] mb-8">NICE Dashboard <span className="text-[#FF5733]">Redesign</span></h1>
              <p className="text-xl lg:text-2xl text-[#57423b] leading-relaxed font-light mb-12">
                Transforming a fragmented supervisor experience into a unified, high-performance command center. A case study in editorial data design and enterprise efficiency.
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
                <img 
                  alt="NICE Dashboard interface on a laptop" 
                  className="w-full h-auto object-cover" 
                  src="https://www.dropbox.com/scl/fi/q303ib81dl4i8ubvxewou/IMG_9084.jpg?rlkey=vjox3y9ik54fzw8iqqm5v1ifk&raw=1"
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
                Contact center agents were overwhelmed by <span className="text-[#161d30]">disconnected data sources</span> and outdated legacy interfaces. This caused slower response times and a rise in support escalations.
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
                <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">The Business Challenge</h2>
                <p className="text-lg text-[#57423b] leading-relaxed">
                  Supervisors were struggling with "tool fatigue," navigating across five disparate systems to manage agent performance. This fragmentation led to an 80% increase in operational cognitive load and delayed critical response times by 35%.
                </p>
              </div>
              <div className="space-y-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#575e74]">The Pain Point</div>
                <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">The User Experience</h2>
                <p className="text-lg text-[#57423b] leading-relaxed">
                  The previous interface treated every data point with equal visual weight. Users felt overwhelmed, describing the experience as "flying blind through a storm of numbers" without a clear path to resolution.
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
              <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">The Research Objective</h2>
              <p className="text-lg text-[#57423b] leading-relaxed">Improving our dashboards required a focused effort to uncover both strengths and shortcomings in the current experience. Our research centered on understanding what customers actively use, what capabilities are lacking, and the challenges they encounter when navigating our dashboards. These findings enabled us to identify strategic opportunities to enhance usability, fill critical gaps, and ultimately deliver a top-tier product that better supports customer needs.</p>
            </div>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e1e3e4] transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  alt="Professional affinity mapping session" 
                  className="w-full h-64 object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmQlSzvNbd71RvtzInj8bYy7Wdh5gjOB_Z8xmjp6d_eeeOz8RaBV4NZW398oMmRU5ZyRBmo5OfsCZ8ggoQnI2FnE9lhKKg3u_WPIBiY3CwHuyKDciEOFVGmjebsslEwmzELA-pRKf-oIz6zokzSiuUlhLS4-x1wLctwO43HlEMFg2DwKWWfAOFLkqs1fiB-s1KFGA6qkasQ8ua37uI7kVGoqmUK43QogkJLL9BhmOBb3ff3vBR6Gf2ceqTX6dhST8m3cAK9pvp0oab"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-20">
            {/* User Interviews Card */}
            <div className="bg-[#c7eadc]/30 p-10 rounded-2xl border border-[#c7eadc] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#c7eadc] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#45655a] text-2xl">person</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">User Interviews</h3>
                </div>
                <p className="text-[#2d4d42] leading-relaxed">
                  Conducted 15 deep-dive interviews with senior supervisors to uncover the psychological toll of fragmented data monitoring.
                </p>
              </div>
            </div>
            {/* Card Sort Card */}
            <div className="bg-[#ffdbcf]/30 p-10 rounded-2xl border border-[#ffdbcf] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#ffdbcf] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#FF5733] text-2xl">dashboard_customize</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">Card Sort</h3>
                </div>
                <p className="text-[#822800] leading-relaxed">
                  Collaborative sessions to reorganize complex information hierarchies, reducing the number of clicks required for core tasks by 40%.
                </p>
              </div>
            </div>
            {/* Usability Testing Card */}
            <div className="bg-[#dbe2fc]/30 p-10 rounded-2xl border border-[#dbe2fc] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#dbe2fc] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#575e74] text-2xl">laptop_mac</span>
                  </div>
                  <h3 className="font-bold text-2xl tracking-tighter">Usability Testing</h3>
                </div>
                <p className="text-[#3f465b] leading-relaxed">
                  Iterative prototype testing with 8 global teams to validate the 'Zero-Latency' interaction model before final development.
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
                  <span className="material-symbols-outlined text-3xl shrink-0 mt-1 text-[#FF5733]">insights</span>
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 1: Insights regarding user navigation patterns revealed a critical need for centralized access to real-time performance metrics without constant tab-switching.</p>
                </li>
                <li className="flex gap-5 items-start text-left max-w-2xl">
                  <span className="material-symbols-outlined text-3xl shrink-0 mt-1 text-[#FF5733]">error_outline</span>
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 2: Identification of key friction points highlighted that 65% of supervisor time was spent manually compiling data from disconnected legacy modules.</p>
                </li>
                <li className="flex gap-5 items-start text-left max-w-2xl">
                  <span className="material-symbols-outlined text-3xl shrink-0 mt-1 text-[#FF5733]">rocket_launch</span>
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 3: Strategic Product Alignment – Identifying opportunities for cross-product synergy to ensure a cohesive design language that integrates seamlessly with the Custom Reporting suite being developed in parallel.</p>
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
                <div className="text-[#FF5733] font-bold tracking-widest text-xs uppercase mb-6">Interaction Design</div>
                <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Zero-Latency <span className="text-[#FF5733]">Decision Making</span></h2>
                <p className="text-xl text-[#dec0b6]/70 leading-relaxed mb-10">
                  We introduced a "Drill-to-Action" pattern. Instead of separate modules, the interface expands contextually, keeping the supervisor's mental model focused on the specific agent interaction.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#FF5733]">animation</span>
                    <div>
                      <h4 className="font-bold">Fluid Transitions</h4>
                      <p className="text-sm opacity-60">Reducing disorientation during deep-dives into data, ensuring the "cockpit" remains stable.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-[#1e273d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <img 
                    alt="Professional analytics dashboard UI" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJSEj10NWLdplpgoOt0Nr7nHejN0GcX9ZJDSv27PuitygOuuXh-iXZyTPTYomYNI05UGc3hdkCHJjNbZfW8gd7Bq1L72FnVY54tZmJ1c6WpnC55kdWWkwOu7Y3C1kBsyzbWWPp7Eyps02bDFeHn7N67ra7SWvqyeDPo8q3mT8irnYpOTfgxiMqtk5kOjc3q_VzH-h_wmK5L6XFRtrdB9l6aZf2riTmNTYrTLxfzzX6Fl6u5-3DxIUK9mNck4C0jHnq1U-uPDeUS-5A"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#FF5733] p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-xs uppercase font-bold tracking-widest mb-1">Focus Mode</div>
                  <div className="font-black text-2xl">42% Faster</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Evolution */}
        <section className="bg-white px-12 py-32">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-20 items-start">
            {/* Left Side: Header and Vertical Tabs */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF5733] mb-4">04 / EVOLUTION</span>
                <h2 className="text-[52px] leading-[1] font-black tracking-tighter text-[#161d30]">Design<br/><span className="text-[#FF5733]">Process</span></h2>
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
            {/* Right Side: Content Card */}
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
                      <img 
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
              <h2 className="text-5xl font-black text-[#161d30] tracking-tighter mb-6">Omnichannel Control</h2>
              <p className="text-xl text-[#57423b] max-w-3xl mx-auto">Seamlessly bridging the gap between desktop command centers and mobile field oversight.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e1e3e4]">
                  <img 
                    alt="Dashboard global view" 
                    className="w-full h-auto object-cover" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0ui9qofzq8171FKDdpkFughxPb7oJrPuRjYQJRZ-ZtDFdpylxmSr-L9a7I9JPWjj30-6VMCoZBfIfcwBznvcNwbABjCVGQ6_0pJQj9qx1DMJLp0C2buz1TJVVaPZEypSwH9VzWQYHdAcOducCBZP6mMB5oCHBgUdrJzyycuWhFrK0jU5K3OoQzHf50_qNVzCr6Vy2XkZVAvUxDKlFzcpaiZVoPl0HX0sk0ZjI4yE2cX9n6-M7IGxnal0i28fHYhaqI1oOX4gePF3v8Y"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e3e4]">
                  <h3 className="font-bold text-xl mb-3">Desktop Master</h3>
                  <p className="text-sm text-[#57423b]">The full power of the unified command center with multi-monitor support and granular data exports for deep analysis.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e3e4]">
                  <h3 className="font-bold text-xl mb-3">Mobile Pulse</h3>
                  <p className="text-sm text-[#57423b]">Critical alerts and real-time agent status for managers on the move through the facility, ensuring oversight is never tethered.</p>
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
                <div className="text-7xl font-black text-[#FF5733] mb-4">-42%</div>
                <div className="text-xl font-bold mb-2">Reduced Task Time</div>
                <p className="text-sm text-[#dec0b6]/50">Supervisors spend less time hunting for data and more time coaching agents.</p>
              </div>
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">+60%</div>
                <div className="text-xl font-bold mb-2">Onboarding Speed</div>
                <p className="text-sm text-[#dec0b6]/50">New hires become proficient with the toolset in half the previous time.</p>
              </div>
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">+28%</div>
                <div className="text-xl font-bold mb-2">Agent Performance</div>
                <p className="text-sm text-[#dec0b6]/50">Measured increase in First Call Resolution (FCR) due to better supervision.</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto border-t border-white/10 pt-16">
              <p className="text-2xl font-light italic text-[#dec0b6] mb-8">"This redesigned dashboard has completely changed how we work. I can finally focus on coaching my team instead of fighting with the software."</p>
              <div className="font-bold text-lg">Sarah Jenkins</div>
              <div className="text-sm opacity-50 uppercase tracking-widest">Customer Operations Manager</div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="px-12 py-32 max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-black text-[#161d30] tracking-tighter mb-12">Looking Ahead</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-[#FF5733] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#FF5733] mb-4">PHASE 2</div>
              <h3 className="font-bold text-xl mb-2">Predictive AI Coaching</h3>
              <p className="text-sm text-[#57423b]">Surfacing intervention suggestions before a customer sentiment turns negative using real-time NLP.</p>
            </div>
            <div className="p-8 border-l-4 border-[#575e74] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#575e74] mb-4">PHASE 3</div>
              <h3 className="font-bold text-xl mb-2">Voice Interface</h3>
              <p className="text-sm text-[#57423b]">Allowing hands-free metric queries during intense operational periods for immediate situational awareness.</p>
            </div>
            <div className="p-8 border-l-4 border-[#89ab9e] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#89ab9e] mb-4">PHASE 4</div>
              <h3 className="font-bold text-xl mb-2">Cross-Platform Sync</h3>
              <p className="text-sm text-[#57423b]">Deep integration with enterprise CRM systems for a unified customer history across all touchpoints.</p>
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
            <div className="font-bold text-[#161d30] uppercase tracking-widest text-sm">NICE Dashboard</div>
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
