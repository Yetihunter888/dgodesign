import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'motion/react';
import ZoomableImage from '../components/ZoomableImage';

interface ImpartnerPortfolioProps {
  onContactClick: () => void;
}

export default function ImpartnerPortfolio({ onContactClick }: ImpartnerPortfolioProps) {
  const [activePhase, setActivePhase] = useState<'initial' | 'design' | 'final'>('initial');

  const phases = [
    {
      id: 'initial',
      label: 'PHASE 01',
      title: 'Context & Discovery',
      icon: 'search',
      description: 'At Impartner, our product establishes a robust portal for clients, facilitating effective management and success for their partners. We recognized the importance of offering a user-friendly solution for our clients to preview and validate the modifications they make before deploying them live.',
      points: ['Stakeholder Interviews', 'Workflow Analysis'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Discovery+Phase'
    },
    {
      id: 'design',
      label: 'PHASE 02',
      title: 'Design & Iteration',
      icon: 'brush',
      description: 'The tool is crafted to load seamlessly in a new browser tab, ensuring a hassle-free transition between your portal editing tab and a preview of the upcoming changes. We focused on flexibility, allowing users to modify the view using parameters such as location, device type, and user segmentation.',
      points: ['Interactive Prototyping', 'Device Preview Layouts'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Design+Iteration'
    },
    {
      id: 'final',
      label: 'PHASE 03',
      title: 'MVP & Validation',
      icon: 'verified',
      description: 'The swift release of the MVP effectively addressed the key challenges faced by our users, providing them with immediate solutions. This feature enhances the experience by providing a convenient way to assess and fine-tune edits before they go live.',
      points: ['Usability Validation', 'Roadmap Definition'],
      image: 'https://placehold.co/1200x800/e1e3e4/57423b?text=Final+MVP'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] selection:bg-[#FF5733]/20 selection:text-[#6c2000] font-sans">
      <Helmet>
        <title>Impartner Preview | Darren Ottley UX Portfolio</title>
        <meta name="description" content="Designing a seamless preview experience for Impartner's Partner Portal, allowing users to validate changes before going live." />
      </Helmet>
      <Header onContactClick={onContactClick} />
      
      <main className="pt-24">
        {/* Section 1: Project Overview */}
        <section className="px-12 py-12 lg:py-24 min-h-[90vh] flex items-center max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl lg:text-8xl font-black text-[#161d30] tracking-tighter leading-[0.9] mb-8">New Impartner <span className="text-[#FF5733]">Preview</span></h1>
              <p className="text-xl lg:text-2xl text-[#57423b] leading-relaxed font-light mb-12">
                Allow the user to easily preview Partner Portal changes before going live. A streamlined bridge between editing and deployment.
              </p>
              <div className="flex gap-16">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#dec0b6] font-bold mb-2">Role</div>
                  <div className="text-[#191c1d] font-semibold text-lg">Lead UX Designer</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#dec0b6] font-bold mb-2">Duration</div>
                  <div className="text-[#191c1d] font-semibold text-lg">3 Months</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(22,29,48,0.15)] border border-[#e1e3e4] transition-transform duration-700 group-hover:scale-[1.02]">
                <ZoomableImage 
                  alt="Impartner Preview interface" 
                  className="w-full h-auto object-cover" 
                  src="https://placehold.co/1200x800/e1e3e4/57423b?text=Impartner+Preview+Hero"
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
                Design an easy way for our customers to see <span className="text-[#161d30]">changes made to their Partner Portals</span> before they are pushed live.
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
                <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Review Without Risk</h2>
                <p className="text-lg text-[#57423b] leading-relaxed">
                  The Partner Portal faced several significant challenges, including the absence of a convenient method to review modifications without saving a live version. Additionally, users encountered difficulties in accessing unpublished pages.
                </p>
              </div>
              <div className="space-y-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#575e74]">The Pain Point</div>
                <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Dynamic Context</h2>
                <p className="text-lg text-[#57423b] leading-relaxed">
                  There was a pressing need to establish a solution that allowed users to seamlessly view pages while adjusting filters, such as language, tiers, sales districts, and devices.
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
              <h2 className="text-4xl font-black text-[#161d30] tracking-tighter">Empowering Portal Admins</h2>
              <p className="text-lg text-[#57423b] leading-relaxed"> Improving our dashboards started with an honest look at where we were falling short. Setup had become overwhelming, with too many options and data points leaving users uncertain whether they were pulling the correct information. We knew usability issues existed, but we wanted to let our users surface the full picture beyond what we already suspected. </p>
            </div>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e1e3e4] transition-transform duration-700 group-hover:scale-[1.02]">
                <ZoomableImage 
                  alt="Research session" 
                  className="w-full h-64 object-cover" 
                  src="https://placehold.co/1200x800/e1e3e4/57423b?text=Impartner+Research+Insights"
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
                  Conducted deep-dive interviews with portal administrators to uncover the frustration of "blind editing" without real-time feedback.
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
                  Organized preview parameters into logical groups, ensuring that filters like 'Tier' and 'Language' were always accessible.
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
                  Validated the "New Tab" preview model, confirming it provided the best balance between editing focus and validation.
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
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 1: Admins were hesitant to make complex changes to deal registration workflows due to the lack of a "safe" preview environment.</p>
                </li>
                <li className="flex gap-5 items-start text-left max-w-2xl">
                  <span className="material-symbols-outlined text-3xl shrink-0 mt-1 text-[#FF5733]">error_outline</span>
                  <p className="text-lg text-[#57423b] leading-relaxed">Finding 2: Multi-persona validation was the top request; admins needed to see how a Bronze partner vs. a Gold partner would view the same page.</p>
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
                <div className="text-[#FF5733] font-bold tracking-widest text-xs uppercase mb-6">Seamless Transitions</div>
                <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Live <span className="text-[#FF5733]">Preview Canvas</span></h2>
                <p className="text-xl text-[#dec0b6]/70 leading-relaxed mb-10">
                  Our product is crafted to load seamlessly in a new browser tab, ensuring a hassle-free transition between your portal editing tab and a preview of the upcoming changes.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#FF5733]">devices</span>
                    <div>
                      <h4 className="font-bold">Multi-Parameter View</h4>
                      <p className="text-sm opacity-60">Modify the view using parameters such as location, device type, user, and segmentation tools.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-[#1e273d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <ZoomableImage 
                    alt="Design Iteration" 
                    className="w-full h-full object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Impartner+Preview+Solution"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#FF5733] p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-xs uppercase font-bold tracking-widest mb-1">Validation Speed</div>
                  <div className="font-black text-2xl">3x Faster</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mt-32">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-video bg-[#1e273d] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <ZoomableImage 
                    alt="Persona Preview" 
                    className="w-full h-full object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Persona+Preview+Mode"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-[#FF5733] font-bold tracking-widest text-xs uppercase mb-6">Persona Mapping</div>
                <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Switching <span className="text-[#FF5733]">Contexts</span></h2>
                <p className="text-xl text-[#dec0b6]/70 leading-relaxed mb-10">
                  Admins can instantly toggle between partner tiers and regions. This ensures that a global campaign looks correct for a partner in EMEA while maintaining local compliance in APAC.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#FF5733]">public</span>
                    <div>
                      <h4 className="font-bold">Global Compliance</h4>
                      <p className="text-sm opacity-60">Easily validate translation strings and regional assets in seconds.</p>
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
              <h2 className="text-5xl font-black text-[#161d30] tracking-tighter mb-6">Validation Hub</h2>
              <p className="text-xl text-[#57423b] max-w-3xl mx-auto">The final solution provided a risk-free environment for administrators to innovate and optimize their partner experience.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e1e3e4]">
                  <ZoomableImage 
                    alt="Final Impartner Preview" 
                    className="w-full h-auto object-cover" 
                    src="https://placehold.co/1200x800/e1e3e4/57423b?text=Final+Impartner+Hub"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e3e4]">
                  <h3 className="font-bold text-xl mb-3">Live Sandbox</h3>
                  <p className="text-sm text-[#57423b]">A fully interactive mirror of the production environment where changes can be tested without impacting live partners.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e3e4]">
                  <h3 className="font-bold text-xl mb-3">Persona Toggle</h3>
                  <p className="text-sm text-[#57423b]">Instantly shift between different user segments to ensure personalized content delivery is accurate.</p>
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
                <div className="text-7xl font-black text-[#FF5733] mb-4">-65%</div>
                <div className="text-xl font-bold mb-2">Reduced Errors</div>
                <p className="text-sm text-[#dec0b6]/50">Drastic reduction in live site errors reported by partners after portal updates.</p>
              </div>
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">+300%</div>
                <div className="text-xl font-bold mb-2">Admin Speed</div>
                <p className="text-sm text-[#dec0b6]/50">Admins can now validate regional updates in minutes instead of hours.</p>
              </div>
              <div>
                <div className="text-7xl font-black text-[#FF5733] mb-4">92%</div>
                <div className="text-xl font-bold mb-2">User Adoption</div>
                <p className="text-sm text-[#dec0b6]/50">High daily usage rates among portal managers within the first month of launch.</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto border-t border-white/10 pt-16">
              <p className="text-2xl font-light italic text-[#dec0b6] mb-8">"This feature effectively addressed the key challenges faced by our users. It provides a convenient way to assess and fine-tune edits before they go live."</p>
              <div className="font-bold text-lg">Lead UX Designer Reflection</div>
              <div className="text-sm opacity-50 uppercase tracking-widest">Impartner Portfolio Project</div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="px-12 py-32 max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-black text-[#161d30] tracking-tighter mb-12">Looking Ahead</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-[#FF5733] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#FF5733] mb-4">PHASE 2</div>
              <h3 className="font-bold text-xl mb-2">Collaborative Review</h3>
              <p className="text-sm text-[#57423b]">Allowing multiple stakeholders to leave comments and feedback directly on the preview canvas.</p>
            </div>
            <div className="p-8 border-l-4 border-[#575e74] bg-[#f3f4f5]">
              <div className="text-xs font-bold text-[#575e74] mb-4">PHASE 3</div>
              <h3 className="font-bold text-xl mb-2">Automated QA</h3>
              <p className="text-sm text-[#57423b]">Visual regression testing to highlight differences between the current live view and the proposed changes.</p>
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
            <div className="font-bold text-[#161d30] uppercase tracking-widest text-sm">Impartner Preview</div>
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
