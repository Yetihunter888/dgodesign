import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import Header from '../components/Header';
import ZoomableImage from '../components/ZoomableImage';

interface CaseStudyTemplateProps {
  onContactClick?: () => void;
  title?: string;
  subtitle?: string;
  heroImage?: string;
  company?: string;
  task?: string;
  role?: string;
  timeline?: string;
}

export default function CaseStudyTemplate({ 
  onContactClick,
  title = "NICE/inContact EVOLVE Supervisor Experience",
  subtitle = "Contact center supervisors are the backbone of customer experience operations, yet their tools had not kept pace with the demands of the role. Through deep contextual inquiry and hands on research sessions, we built an entirely new product from the ground up that set a new standard for how supervisors work.",
  heroImage = "https://www.dropbox.com/scl/fi/q303ib81dl4i8ubvxewou/IMG_9084.jpg?rlkey=vjox3y9ik54fzw8iqqm5v1ifk&raw=1",
  company = "NICE/inContact",
  task = "Dashboard Redesign",
  role = "Lead UX Designer",
  timeline = "6 Months"
}: CaseStudyTemplateProps) {
  const researchData = {
    INITIAL: {
      subtitle: "Foundational Discovery",
      items: [
        {
          id: "user-interviews",
          icon: "search",
          title: "User Interviews",
          description1: "I conduct structured and semi-structured interviews (Quantitative and Qualitative) to uncover the underlying \"why\" behind user behaviors.",
          description2: "By isolating pain points in their natural context, we transition from assumptions to validated insights, ensuring the final product solves real-world frictions.",
          deliverables: ["Transcribed Insights", "Affinity Mapping Clusters", "Empathy Map Synthesis"],
          image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2dMftglvumKhpHZ-HbKHzLRbZIPKMCSLSYqAziH9XSCfUym9jLHmGWCldmxMGo1sk-jIxAKr0uApx1ttRFShUW8cBxh1YDPtNy3k5a0cfmJlwCcFGrv6o5aOh4VqhS_g6genQiKdIbVObCGdT3pinX53uluxXuqwJpmUmcwEws3sPD42cgnaW5Uf9ETweyoK35Yi1v3mNja4d4uTwRIhaAZo93eWMUn2wSPyypnc0kZ6is_DEscaPJFW9x02AA75gQmUWyLAzAwkq",
          image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAjcHyS4WjLCPoQ8HcjC3lJkG_So1b0P8yjlTVUNpv-x12_FKCdHIpmx5TjDhMXc6zXqMcuV4KtCoYJ9MK_br4CpmshjWeVHAb9iTbwVg8XB0PrfZ0PHuFhjGSccu6_llBot5jChBSEbcEZxjRZwRDcmq5d1a4hiMuW_fr8GUhtvovOG5qrsPXtbDOjL6DeTWGoTkq5E-bSShyCjEiP7RMgHJ2IWmGs-TBHtttsN9vHkgC4VPgDyP63u3bBp5IuoSx3zsr-i5Xr67y"
        },
        {
          id: "stakeholder-interviews",
          icon: "groups",
          title: "Stakeholder Interviews",
          description1: "Dummy text for Stakeholder Interviews context and goals.",
          description2: "Aligning business objectives with actionable product insights.",
          deliverables: ["Business Goal Alignment", "Success Metrics", "Project Scope"],
          image1: "https://picsum.photos/seed/stakeholder1/800/600",
          image2: "https://picsum.photos/seed/stakeholder2/800/600"
        },
        {
          id: "persona-building",
          icon: "person_search",
          title: "Persona Building",
          description1: "Dummy text for creating user archetypes based on research data.",
          description2: "Helping the team empathize and build for a specific audience.",
          deliverables: ["User Personas", "Behavioral Traits", "Frustrations & Needs"],
          image1: "https://picsum.photos/seed/persona1/800/600",
          image2: "https://picsum.photos/seed/persona2/800/600"
        },
        {
          id: "journey-mapping",
          icon: "route",
          title: "Journey Mapping",
          description1: "Dummy text mapping the end-to-end user experience.",
          description2: "Identifying key touchpoints and potential friction areas.",
          deliverables: ["Current State Map", "Future State Map", "Opportunity Areas"],
          image1: "https://picsum.photos/seed/journey1/800/600",
          image2: "https://picsum.photos/seed/journey2/800/600"
        },
        {
          id: "card-sorting",
          icon: "grid_view",
          title: "Card Sorting",
          description1: "Dummy text about organizing information architecture.",
          description2: "Ensuring navigation matches user mental models.",
          deliverables: ["Site Map", "Information Architecture", "Taxonomy"],
          image1: "https://picsum.photos/seed/card1/800/600",
          image2: "https://picsum.photos/seed/card2/800/600"
        }
      ]
    },
    DESIGN: {
      subtitle: "Iterative Prototyping",
      items: [
        {
          id: "wireframing",
          icon: "draw",
          title: "Wireframing",
          description1: "Dummy text for the low-fidelity layout process.",
          description2: "Focusing on structure and hierarchy before visual design.",
          deliverables: ["Low-Fi Screens", "User Flows", "Component outlines"],
          image1: "https://picsum.photos/seed/wire1/800/600",
          image2: "https://picsum.photos/seed/wire2/800/600"
        },
        {
          id: "prototyping",
          icon: "animation",
          title: "Prototyping",
          description1: "Dummy text for connecting screens to simulate the experience.",
          description2: "Used for stakeholder alignment and early user testing.",
          deliverables: ["Interactive Prototype", "Motion Studies"],
          image1: "https://picsum.photos/seed/proto1/800/600",
          image2: "https://picsum.photos/seed/proto2/800/600"
        },
        {
          id: "usability-testing",
          icon: "biotech",
          title: "Usability Testing",
          description1: "Dummy text for validating designs with real users.",
          description2: "Identifying usability issues early in the design phase.",
          deliverables: ["Testing Script", "Results Summary", "Actionable Insights"],
          image1: "https://picsum.photos/seed/test1/800/600",
          image2: "https://picsum.photos/seed/test2/800/600"
        }
      ]
    },
    FINAL: {
      subtitle: "Visual Polish & Handoff",
      items: [
        {
          id: "visual-design",
          icon: "palette",
          title: "Visual Design",
          description1: "Dummy text for applying the design system and high-fidelity styling.",
          description2: "Ensuring a premium, accessible, and consistent aesthetic.",
          deliverables: ["Hi-Fi Mockups", "UI Kit Updates", "Design Specs"],
          image1: "https://picsum.photos/seed/visual1/800/600",
          image2: "https://picsum.photos/seed/visual2/800/600"
        },
        {
          id: "dev-handoff",
          icon: "code",
          title: "Developer Handoff",
          description1: "Dummy text for preparing assets and documentation for engineering.",
          description2: "Collaborating to ensure the final build matches the vision.",
          deliverables: ["Redlines", "Asset Exports", "QA Review"],
          image1: "https://picsum.photos/seed/dev1/800/600",
          image2: "https://picsum.photos/seed/dev2/800/600"
        }
      ]
    }
  };

  type TabType = 'INITIAL' | 'DESIGN' | 'FINAL';
  const [activeTab, setActiveTab] = useState<TabType>('INITIAL');
  const [activeItem, setActiveItem] = useState(researchData.INITIAL.items[0]);

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setActiveItem(researchData[tab].items[0]);
  };

  return (
    <div className="bg-surface font-body text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Helmet>
        <title>{title} | Darren Ottley UX Portfolio</title>
        <meta name="description" content={subtitle} />
        <meta property="og:title" content={`${title} | Darren Ottley UX Portfolio`} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:image" content={heroImage} />
      </Helmet>
      <Header onContactClick={onContactClick} />

      <main className="pt-20">
        {/* Split Hero Section */}
        <section className="min-h-[921px] flex flex-col md:flex-row bg-on-secondary-fixed text-white overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-24 py-20 bg-on-secondary-fixed">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-8">{title}</h1>
              <p className="text-xl text-secondary-fixed-dim/80 mb-12 font-light leading-relaxed">{subtitle}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">Role</p>
                  <p className="font-medium">{role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">Timeline</p>
                  <p className="font-medium">{timeline}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary-fixed-dim mb-2">Impact</p>
                  <p className="font-medium text-primary-container" style={{ color: '#FF7F50' }}>Top-Selling Product</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative bg-surface-container-low min-h-[400px]">
            <ZoomableImage 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover" 
              src={heroImage}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-on-secondary-fixed/40"></div>
          </div>
        </section>

        {/* Product Genesis */}
        <section className="py-24 px-12 md:px-24 bg-surface">
          <div className="max-w-6xl mx-auto bg-surface-container-low/50 p-8 md:p-16 rounded-[2rem] border border-surface-container-high relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="mb-16">
                <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF7F50] mb-4">01 / PRODUCT GENESIS</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-on-secondary-fixed uppercase leading-tight pb-4 border-b-4 border-primary/20 inline-block">Product Genesis & Vision</h2>
                <p className="mt-6 text-on-surface-variant max-w-2xl text-lg">As we dug deeper into our research, something became clear and it stuck with us. Contact center supervisors were facing real, significant challenges, yet the industry had largely left them behind. This was not just a gap we had uncovered. It was a chance to design something meaningful for a persona that truly deserved more attention.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container-high transition-all group hover:!shadow-[0_30px_60px_rgba(0,0,0,0.08),0_1px_8px_rgba(0,0,0,0.04)]" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)' }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">account_tree</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-on-secondary-fixed mb-4">The Fragmented Workflow</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Observed supervisors jumping between <span className="font-semibold text-on-surface">5-7 different products</span> just to gather basic data and take single corrective actions.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container-high transition-all group hover:!shadow-[0_30px_60px_rgba(0,0,0,0.08),0_1px_8px_rgba(0,0,0,0.04)]" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)' }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">bolt</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-on-secondary-fixed mb-4">KPI Firefighting</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Identified a constant cycle of manual agent adjustments followed by the <span className="font-semibold text-on-surface">burden of manual resets</span> once the "fire" was put out.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-surface-container-lowest p-8 rounded-2xl border border-primary/20 transition-all group ring-1 ring-primary/5 hover:!shadow-[0_30px_60px_rgba(0,0,0,0.08),0_1px_8px_rgba(0,0,0,0.04)]" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)' }}>
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">space_dashboard</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-on-secondary-fixed mb-4">The Opportunity</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Identified the need for a <span className="font-bold text-primary" style={{ color: '#FF7F50' }}>unified "Home Base"</span> that consolidates real-time monitoring and immediate action in a single editorial lens.
                  </p>
                </motion.div>
              </div>

              {/* Interactive Research Module */}
              <div className="mt-16 bg-on-secondary-fixed text-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                <div className="flex flex-col lg:flex-row lg:h-[640px] min-h-[640px] gap-0">
                  {/* Left Tabbed Sidebar */}
                  <aside className="w-full lg:w-80 bg-on-secondary-fixed text-white flex border-r border-white/10">
                    <div className="w-20 border-r border-white/10 flex flex-col items-center py-8 gap-12">
                      <div 
                        onClick={() => handleTabClick('INITIAL')}
                        className={`vertical-text font-bold tracking-widest text-[10px] flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'INITIAL' ? 'text-white' : 'text-slate-500 hover:text-white'}`}
                      >
                        {activeTab === 'INITIAL' && <span className="w-1.5 h-1.5 bg-primary rounded-full" style={{ backgroundColor: '#FF7F50' }}></span>} INITIAL
                      </div>
                      <div 
                        onClick={() => handleTabClick('DESIGN')}
                        className={`vertical-text font-bold tracking-widest text-[10px] flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'DESIGN' ? 'text-white' : 'text-slate-500 hover:text-white'}`}
                      >
                        {activeTab === 'DESIGN' && <span className="w-1.5 h-1.5 bg-primary rounded-full" style={{ backgroundColor: '#FF7F50' }}></span>} DESIGN
                      </div>
                      <div 
                        onClick={() => handleTabClick('FINAL')}
                        className={`vertical-text font-bold tracking-widest text-[10px] flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'FINAL' ? 'text-white' : 'text-slate-500 hover:text-white'}`}
                      >
                        {activeTab === 'FINAL' && <span className="w-1.5 h-1.5 bg-primary rounded-full" style={{ backgroundColor: '#FF7F50' }}></span>} FINAL
                      </div>
                    </div>
                    <div className="flex-1 py-8 flex flex-col">
                      <div className="px-8 mb-6">
                        <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-black" style={{ color: '#FF7F50' }}>Process & Research</h3>
                        <p className="text-[9px] text-slate-400 mt-1">{researchData[activeTab].subtitle}</p>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {researchData[activeTab].items.map((item) => {
                          const isActive = activeItem.id === item.id;
                          return (
                            <button 
                              key={item.id}
                              onClick={() => setActiveItem(item)}
                              className={`flex items-center gap-4 py-3 transition-all duration-200 ${isActive ? 'text-white font-bold border-l-4 border-primary pl-6 bg-white/5' : 'text-slate-400 font-medium pl-8 hover:text-slate-200 hover:bg-white/5 group'}`}
                              style={isActive ? { borderColor: '#FF7F50' } : {}}
                            >
                              <span className={`material-symbols-outlined text-lg ${isActive ? 'text-primary' : 'group-hover:text-primary transition-colors'}`} style={isActive ? { color: '#FF7F50' } : {}}>{item.icon}</span>
                              <span className="text-xs">{item.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </aside>

                  {/* Main Content Area */}
                  <div className="flex-1 bg-surface-container-lowest relative overflow-hidden flex flex-col text-on-background">
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
                    <div className="p-12 lg:p-16 flex-1 flex flex-col justify-center relative z-10">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary mb-6 shadow-lg shadow-primary/10">
                          <span className="material-symbols-outlined text-3xl">{activeItem.icon}</span>
                        </div>
                        <h2 className="text-4xl font-black text-on-background tracking-tighter mb-4">{activeItem.title}</h2>
                        <div className="h-1 w-16 bg-primary mb-6" style={{ backgroundColor: '#FF7F50' }}></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        <div>
                          <p className="text-on-surface-variant text-lg leading-relaxed font-light mb-4">
                            {activeItem.description1}
                          </p>
                          <p className="text-on-surface-variant text-sm leading-relaxed">
                            {activeItem.description2}
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-surface-container-low p-4 rounded-xl">
                            <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2" style={{ color: '#FF7F50' }}>Key Deliverables</h4>
                            <ul className="text-xs space-y-2 text-on-surface">
                              {activeItem.deliverables.map((del, i) => (
                                <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> {del}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex-1 aspect-video rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                              <ZoomableImage alt="process preview 1" className="w-full h-full object-cover" src={activeItem.image1} referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex-1 aspect-video rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                              <ZoomableImage alt="process preview 2" className="w-full h-full object-cover" src={activeItem.image2} referrerPolicy="no-referrer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Challenges */}
        <section className="py-24 px-12 md:px-24 bg-surface-container-low">
          <div className="max-w-6xl mx-auto">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF7F50] mb-4">02 / CORE CHALLENGES</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-secondary-fixed uppercase mb-4">Core Challenges</h2>
            <p className="text-on-surface-variant max-w-3xl mb-16 leading-relaxed">
              Supervisors faced constant real-time challenges, navigating a fragmented ecosystem where managing agent adjustments across phone, email, and chat required jumping between siloed tools, leading to missed automated reversions and operational drift.
            </p>
            <div className="mb-16 aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-on-secondary-fixed">
              <ZoomableImage alt="Intelligent Architecture: Data Flow & Control" className="w-full h-full object-cover" src="/data-flow.png" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-xs font-black tracking-[0.2em] uppercase mb-8 text-center" style={{ color: '#FF7F50' }}>Key research outtakes for MVP</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ color: '#FF7F50' }}>groups</span>
                <h3 className="text-lg font-bold text-on-secondary-fixed mb-4">Workforce Management</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Balancing agent skills with fluctuating call volumes in real-time was a manual, error-prone guessing game.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ color: '#FF7F50' }}>account_tree</span>
                <h3 className="text-lg font-bold text-on-secondary-fixed mb-4">Operational Complexity</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Supervisors navigated between 5-7 different browser tabs to perform a single corrective action.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ color: '#FF7F50' }}>speed</span>
                <h3 className="text-lg font-bold text-on-secondary-fixed mb-4">Efficiency Gaps</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">KPI lag times meant supervisors were reacting to issues that had already resolved or escalated beyond control.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ color: '#FF7F50' }}>history</span>
                <h3 className="text-lg font-bold text-on-secondary-fixed mb-4">Manual Resets</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">KPI lag times meant supervisors were reacting to issues that had already resolved or escalated beyond control, requiring manual resetting of agent settings throughout the day.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Iterations */}
        <section className="py-24 px-12 md:px-24 bg-surface">
          <div className="max-w-6xl mx-auto">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF7F50] mb-4">03 / DESIGN ITERATIONS</span>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-secondary-fixed uppercase leading-tight mb-6">Design Iterations: Unifying the Platform</h2>
                <p className="text-on-surface-variant">Moving into the ideation phase, our goal was clear: unify data and functionality from many different platforms into one streamlined experience that worked seamlessly across both laptop and tablet. Through multiple layout explorations and deeply engaged supervisors, our vision quickly started to take shape.</p>
              </div>
            </div>
            <div className="space-y-32">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block" style={{ color: '#FF7F50' }}>Sketching and lo-fi designs</span>
                  <h3 className="text-2xl font-bold text-on-secondary-fixed mb-6">Sketching Ideation</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    With our direction set, sketching allowed us to quickly visualize ideas and start making decisions about what would best serve the supervisor experience.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      Color-coded availability states
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      Predictive wait time overlays
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      MVP Focus: Dashboard, Agents, Skills, Contact, and Voice Quality
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl bg-surface-container-high aspect-video">
                  <ZoomableImage alt="Agents Dashboard Screenshot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGB8qZsasZyAbUDMhN1SZMpHHs8xVg5fvbZYuYzdNGdQ4a0pXUAzlJtdggOjjFZ5Ps0HCObIjfXdNUA6KNLB8jLlnS8JIV9q0LAei8KGaT-b1HvwEmfWpQM5oEoQGFkCi3tVV_7dM8aiPXsb0-6W965PR6mi5_gyFPJWXFR1t9D4YHCOUCNoAYT62ZyzU1zyblG1zxQ9fz3Al7VqQyFWZvarzdUjTV2-nvjpqLNilc5CzSVqlV940Xsu-cMeD5F7flsx1i4YTHS2BK" referrerPolicy="no-referrer" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Design Solution */}
        <section className="py-24 px-12 md:px-24 bg-surface-container-low">
          <div className="max-w-6xl mx-auto">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF7F50] mb-4">04 / PRODUCT DESIGN SOLUTION</span>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-secondary-fixed uppercase leading-tight mb-6">The Design Solution: The Unified Platform</h2>
                <div className="text-on-surface-variant">
                  <p className="mb-6">The final design brought together everything we had learned into a clean, purposeful experience built around the supervisor. Three principles guided every decision we made throughout the process.</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">check_circle</span>
                      <div>
                        <span className="font-bold">Responsive Design:</span> A seamless experience whether working from a laptop or tablet, adapting naturally to how and where supervisors work.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">check_circle</span>
                      <div>
                        <span className="font-bold">Unified Platform:</span> Data and functionality from multiple platforms consolidated into one cohesive workspace.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg shrink-0 mt-0.5">check_circle</span>
                      <div>
                        <span className="font-bold">Ease of Use:</span> An intuitive layout that reduced complexity, allowing supervisors to focus on what mattered most.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-[1.5rem] overflow-hidden bg-[#dcdcdc] aspect-[4/3] md:aspect-[16/10] w-full">
                {/* Image Placeholder */}
              </div>
            </div>
            <div className="space-y-32">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block" style={{ color: '#FF7F50' }}>Real-time Visibility</span>
                  <h3 className="text-2xl font-bold text-on-secondary-fixed mb-6">The Agents Dashboard</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    A high-level view of the entire floor. Agents are visualized not as numbers, but as dynamic status indicators that highlight who needs help immediately.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      Color-coded availability states
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      Predictive wait time overlays
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      MVP Focus: Dashboard, Agents, Skills, Contact, and Voice Quality
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl bg-surface-container-high aspect-video">
                  <ZoomableImage alt="Agents Dashboard Screenshot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGB8qZsasZyAbUDMhN1SZMpHHs8xVg5fvbZYuYzdNGdQ4a0pXUAzlJtdggOjjFZ5Ps0HCObIjfXdNUA6KNLB8jLlnS8JIV9q0LAei8KGaT-b1HvwEmfWpQM5oEoQGFkCi3tVV_7dM8aiPXsb0-6W965PR6mi5_gyFPJWXFR1t9D4YHCOUCNoAYT62ZyzU1zyblG1zxQ9fz3Al7VqQyFWZvarzdUjTV2-nvjpqLNilc5CzSVqlV940Xsu-cMeD5F7flsx1i4YTHS2BK" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-2xl bg-surface-container-high aspect-video">
                  <ZoomableImage alt="Granular Drill-ins View" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDQPpQy5ujJ34QnrXH-pcYqwiq11YvmTTtpbxGD1fHQ0Eq_WeU5zoLu-ZWieu1Li4vgZxiaHEz3XbxH2n6TVOaeUfoMlFzmwhF2TZIR0zXs7W6Y7orab7y50MZbyrs84hGTf8Q9Zm6rATA_JbyZCcs6ywVuRoQWprlhh-L_RiT8jFfxWnT5n7MQ88QBLG5BA95jhuqM7WoIEuVm8dorH3sMTwe3PlXeax2L7aVbwr8Gce7EoDwnPwCCucnyVKqcAYLCVFfZD89VZM" referrerPolicy="no-referrer" />
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block" style={{ color: '#FF7F50' }}>Contextual Depth</span>
                  <h3 className="text-2xl font-bold text-on-secondary-fixed mb-6">Actionable Drill-ins</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    One of the most impactful features was giving supervisors the ability to dig deeper and take action without ever losing context. From any data table, whether viewing agents, skills, or queues, a single click expands any row to reveal the metrics that matter most. From there, supervisors can act on that data instantly, something that previously required jumping between multiple platforms. This alone dramatically reduced the time it takes to address real time challenges.
                  </p>
                  <div className="p-6 bg-surface-container-low rounded-lg">
                    <p className="text-sm font-semibold text-on-background mb-2">Direct Intervention Tools:</p>
                    <div className="flex gap-4">
                      <span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold rounded uppercase tracking-tighter">Agent Monitoring</span>
                      <span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold rounded uppercase tracking-tighter">Skill Reassignment</span>
                      <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-tighter" style={{ backgroundColor: '#FF7F50' }}>Team Management</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block" style={{ color: '#FF7F50' }}>Innovation</span>
                  <h3 className="text-2xl font-bold text-on-secondary-fixed mb-6">Dynamic 'Levers' & Automated Reversion</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    We also introduced what we called Dynamic Levers, giving supervisors the ability to make changes with built in intention. When a supervisor adjusts an agent's skills or configuration, they can set conditions that will automatically revert those changes once a target KPI is met. For example, a skill added to an agent during a high volume period will be removed automatically once the queue returns to its acceptable threshold, no manual follow up needed.
                  </p>
                  <div className="bg-on-secondary-fixed text-white p-8 rounded-xl mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="material-symbols-outlined text-primary-container" style={{ color: '#FF7F50' }}>auto_mode</span>
                      <p className="font-bold">Automated Reversion</p>
                    </div>
                    <p className="text-sm text-secondary-fixed-dim">Set temporary skill boosts that automatically revert after a period, preventing the common "forgotten setting" that causes long-term operational drift.</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl bg-surface-container-high aspect-video md:mt-8">
                  <ZoomableImage alt="Direct Intervention Interface" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArODthAc4813VMJt7e2BEELX3TsT6dpUKT38IAQSgkgg45AwMfDp2sLbWpapzRGHhz08VYsl78K9UR0b7f8teT-tWH9-NWep0ucqhlfjyLOoMSzHWXvj8UtCKwFz_Ifo8xwqmFznRc9jxVl10sgleVZr558nKKHLJ36eDqzO52bcMypWyfB6vbiD4alLYKoPAqcCDi6jfVkowRISaZo5PErFOiAOmh0r04RQ3BFdJR2DeJCTqDlCtjbBv4lCcoAGbe9WEGdxQbabJk" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-primary text-white py-12 px-12 md:px-24 mt-24" style={{ backgroundColor: '#FF7F50' }}>
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-xl md:text-2xl font-black font-sans leading-relaxed">
                    The response to the product spoke for itself. What began as a solution to a neglected problem quickly became a core product in the NICE inContact suite and went on to reshape the industry. Today, a dedicated supervisor product is considered an essential offering across the contact center space, a standard that this work helped set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact & Success Section */}
        <section className="py-24 px-12 md:px-24 bg-[#161d30]">
          <div className="max-w-6xl mx-auto text-left">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF7F50]/80 mb-4">05 / BUSINESS IMPACT</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-tight mb-16 text-white">Business Impact & Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="flex flex-col">
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-black block text-white">Green Light</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary" style={{ color: '#FF7F50' }}>From Executive Committee</span>
                </div>
                <p className="text-sm leading-relaxed mb-6 h-12 text-slate-300">Cited as the most significant leap in platform usability in a decade.</p>
                <div className="mt-auto bg-white/5 h-32 rounded-xl flex items-end p-4 relative overflow-hidden border border-white/10">
                  <div className="w-full flex items-end gap-1 h-full">
                    <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="bg-primary/20 w-full h-[30%] rounded-t-sm origin-bottom"></motion.div>
                    <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="bg-primary/40 w-full h-[50%] rounded-t-sm origin-bottom"></motion.div>
                    <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="bg-primary/60 w-full h-[40%] rounded-t-sm origin-bottom"></motion.div>
                    <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="bg-primary/80 w-full h-[70%] rounded-t-sm origin-bottom"></motion.div>
                    <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className="bg-primary w-full h-[95%] rounded-t-sm shadow-[0_-4px_12px_rgba(255,127,80,0.3)] origin-bottom" style={{ backgroundColor: '#FF7F50' }}></motion.div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-black block text-white">Top Seller</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary" style={{ color: '#FF7F50' }}>Global Performance</span>
                </div>
                <p className="text-sm leading-relaxed mb-6 h-12 text-slate-300">Became one of NICE/inContact's highest-performing products.</p>
                <div className="mt-auto bg-[#161d30] h-32 rounded-xl flex items-center justify-center p-6 relative overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut" }} viewport={{ once: true }} d="M0,35 Q20,35 30,25 T50,20 T70,10 T100,5" fill="none" stroke="#FF7F50" strokeLinecap="round" strokeWidth="3"></motion.path>
                    <motion.circle initial={{ r: 0 }} whileInView={{ r: 3 }} transition={{ duration: 0.3, delay: 0.9 }} viewport={{ once: true }} cx="100" cy="5" fill="#FF7F50"></motion.circle>
                    <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} d="M0,35 Q20,35 30,25 T50,20 T70,10 T100,5 L100,40 L0,40 Z" fill="url(#grad1)"></motion.path>
                    <defs>
                      <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FF7F50', stopOpacity: 1 }}></stop>
                        <stop offset="100%" style={{ stopColor: '#FF7F50', stopOpacity: 0 }}></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-black block text-white">+124%</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary" style={{ color: '#FF7F50' }}>Performance 2024</span>
                </div>
                <p className="text-sm leading-relaxed mb-6 h-12 text-slate-300">Explosive adoption across enterprise-tier contact center organizations.</p>
                <div className="mt-auto bg-white/5 h-32 rounded-xl flex items-end p-4 relative overflow-hidden border border-white/10">
                  <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-20">
                    <div className="w-full h-[1px] bg-white"></div>
                    <div className="w-full h-[1px] bg-white"></div>
                    <div className="w-full h-[1px] bg-white"></div>
                  </div>
                  <div className="w-full flex flex-col justify-end h-full">
                    <div className="w-full h-1 bg-primary rounded-full mb-4 relative overflow-hidden" style={{ backgroundColor: '#FF7F50' }}>
                      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} viewport={{ once: true }} className="absolute left-0 top-0 h-full w-[85%] bg-primary shadow-[0_0_8px_#FF7F50]"></motion.div>
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded-full mb-4 relative overflow-hidden">
                      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} viewport={{ once: true }} className="absolute left-0 top-0 h-full w-[40%] bg-white"></motion.div>
                    </div>
                    <div className="w-full h-1 bg-primary rounded-full relative overflow-hidden" style={{ backgroundColor: '#FF7F50' }}>
                      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }} transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }} viewport={{ once: true }} className="absolute left-0 top-0 h-full w-[95%] bg-primary shadow-[0_0_8px_#FF7F50]"></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24 pt-12 border-t border-white/10">
              <p className="text-sm font-label uppercase tracking-widest font-bold text-slate-400">Ready to collaborate?</p>
              <button 
                onClick={onContactClick}
                className="text-primary font-bold text-lg inline-block mt-4 border-b-2 border-primary hover:text-primary-container hover:border-primary-container transition-all" 
                style={{ borderColor: '#FF7F50' }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-12 bg-slate-900 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-inter text-xs tracking-wide uppercase text-slate-400">© 2024 NICE/inContact Supervisor Experience. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-orange-400 transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-orange-400 transition-colors opacity-80 hover:opacity-100" href="#">Dribbble</a>
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-orange-400 transition-colors opacity-80 hover:opacity-100" href="#">Email</a>
        </div>
      </footer>
    </div>
  );
}
