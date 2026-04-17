import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';

interface CCPulseCaseStudyProps {
  onContactClick?: () => void;
  title?: string;
  subtitle?: string;
  heroImage?: string;
  company?: string;
  task?: string;
  role?: string;
  timeline?: string;
}

export default function CCPulseCaseStudy({ 
  onContactClick,
  title = "CC Pulse: Content Control Redefined",
  subtitle = "A deep-dive into the UX transformation of the CC Pulse dashboard for real-time monitoring and high-stakes content moderation.",
  heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDO3cf4mu76dSUTfsjETUGzk9jLwWuWaSjezokMH4L4hnvdzGqhJbEEaInpzDzBe7JMbmb4kOW52lCMAxaozCvImdC6bSI3EfXnu0vv_TIwuOEJeL5vqcvszxnxHZHn82TNVZzwfp51X1mb5bG3pWkQGZZbTg4CozHcYa6IDzTexsmfXL0DErVogQKa7onOktNKFsVRMgzP1X7P775zfBYBaaiFxh1SonQjemEOaB4ydVX_5S-DxQGmLJA7dHvLQs-k_C0llhY0tpaa",
  company = "CC Pulse",
  task = "UX Transformation",
  role = "Lead UX Designer",
  timeline = "8 Months"
}: CCPulseCaseStudyProps) {
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
                  <p className="font-medium text-primary-container" style={{ color: '#FF7F50' }}>Operational Excellence</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative bg-surface-container-low min-h-[400px]">
            <img 
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
                <p className="mt-6 text-on-surface-variant max-w-2xl text-lg">Through deep contextual inquiry, we uncovered the friction in the daily life of a content moderator.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container-high transition-all group hover:!shadow-[0_30px_60px_rgba(0,0,0,0.08),0_1px_8px_rgba(0,0,0,0.04)]" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)' }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">account_tree</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-on-secondary-fixed mb-4">The Fragmented Workflow</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Observed moderators jumping between <span className="font-semibold text-on-surface">multiple siloed tools</span> just to gather context and take single moderation actions.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container-high transition-all group hover:!shadow-[0_30px_60px_rgba(0,0,0,0.08),0_1px_8px_rgba(0,0,0,0.04)]" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)' }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">bolt</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-on-secondary-fixed mb-4">Real-time Pressure</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Identified a constant cycle of high-volume content streams followed by the <span className="font-semibold text-on-surface">burden of manual classification</span> under strict SLAs.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl border border-primary/20 transition-all group ring-1 ring-primary/5 hover:!shadow-[0_30px_60px_rgba(0,0,0,0.08),0_1px_8px_rgba(0,0,0,0.04)]" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)' }}>
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">space_dashboard</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-on-secondary-fixed mb-4">The Opportunity</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Identified the need for a <span className="font-bold text-primary" style={{ color: '#FF7F50' }}>unified "Control Center"</span> that consolidates real-time monitoring and immediate action in a single editorial lens.
                  </p>
                </div>
              </div>

              {/* Interactive Research Module */}
              <div className="mt-16 bg-on-secondary-fixed text-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                <div className="flex flex-col lg:flex-row min-h-[460px] gap-0">
                  {/* Left Tabbed Sidebar */}
                  <aside className="w-full lg:w-80 bg-on-secondary-fixed text-white flex border-r border-white/10">
                    <div className="w-20 border-r border-white/10 flex flex-col items-center py-8 gap-12">
                      <div className="vertical-text text-white font-bold tracking-widest text-[10px] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" style={{ backgroundColor: '#FF7F50' }}></span> INITIAL
                      </div>
                      <div className="vertical-text text-slate-500 font-medium tracking-widest text-[10px] hover:text-white transition-colors cursor-pointer">DESIGN</div>
                      <div className="vertical-text text-slate-500 font-medium tracking-widest text-[10px] hover:text-white transition-colors cursor-pointer">FINAL</div>
                    </div>
                    <div className="flex-1 py-8 flex flex-col">
                      <div className="px-8 mb-6">
                        <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-black" style={{ color: '#FF7F50' }}>Process & Research</h3>
                        <p className="text-[9px] text-slate-400 mt-1">Foundational Discovery</p>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <button className="flex items-center gap-4 text-white font-bold border-l-4 border-primary pl-6 py-3 bg-white/5 transition-all duration-200" style={{ borderColor: '#FF7F50' }}>
                          <span className="material-symbols-outlined text-primary text-lg" style={{ color: '#FF7F50' }}>search</span>
                          <span className="text-xs">User Interviews</span>
                        </button>
                        <button className="flex items-center gap-4 text-slate-400 font-medium pl-8 py-3 hover:text-slate-200 hover:bg-white/5 transition-colors group">
                          <span className="material-symbols-outlined group-hover:text-primary transition-colors text-lg">groups</span>
                          <span className="text-xs">Stakeholder Interviews</span>
                        </button>
                        <button className="flex items-center gap-4 text-slate-400 font-medium pl-8 py-3 hover:text-slate-200 hover:bg-white/5 transition-colors group">
                          <span className="material-symbols-outlined group-hover:text-primary transition-colors text-lg">person_search</span>
                          <span className="text-xs">Persona Building</span>
                        </button>
                        <button className="flex items-center gap-4 text-slate-400 font-medium pl-8 py-3 hover:text-slate-200 hover:bg-white/5 transition-colors group">
                          <span className="material-symbols-outlined group-hover:text-primary transition-colors text-lg">route</span>
                          <span className="text-xs">Journey Mapping</span>
                        </button>
                        <button className="flex items-center gap-4 text-slate-400 font-medium pl-8 py-3 hover:text-slate-200 hover:bg-white/5 transition-colors group">
                          <span className="material-symbols-outlined group-hover:text-primary transition-colors text-lg">grid_view</span>
                          <span className="text-xs">Card Sorting</span>
                        </button>
                      </div>
                    </div>
                  </aside>

                  {/* Main Content Area */}
                  <div className="flex-1 bg-surface-container-lowest relative overflow-hidden flex flex-col text-on-background">
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
                    <div className="p-12 lg:p-16 flex-1 flex flex-col justify-center relative z-10">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary mb-6 shadow-lg shadow-primary/10">
                          <span className="material-symbols-outlined text-3xl">search</span>
                        </div>
                        <h2 className="text-4xl font-black text-on-background tracking-tighter mb-4">User Interviews</h2>
                        <div className="h-1 w-16 bg-primary mb-6" style={{ backgroundColor: '#FF7F50' }}></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        <div>
                          <p className="text-on-surface-variant text-lg leading-relaxed font-light mb-4">
                            I conduct structured and semi-structured interviews (Quantitative and Qualitative) to uncover the underlying "why" behind user behaviors.
                          </p>
                          <p className="text-on-surface-variant text-sm leading-relaxed">
                            By isolating pain points in their natural context, we transition from assumptions to validated insights, ensuring the final product solves real-world frictions.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-surface-container-low p-4 rounded-xl">
                            <h4 className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2" style={{ color: '#FF7F50' }}>Key Deliverables</h4>
                            <ul className="text-xs space-y-2 text-on-surface">
                              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Transcribed Insights</li>
                              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Affinity Mapping Clusters</li>
                              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Empathy Map Synthesis</li>
                            </ul>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex-1 aspect-video rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                              <img alt="interview session" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2dMftglvumKhpHZ-HbKHzLRbZIPKMCSLSYqAziH9XSCfUym9jLHmGWCldmxMGo1sk-jIxAKr0uApx1ttRFShUW8cBxh1YDPtNy3k5a0cfmJlwCcFGrv6o5aOh4VqhS_g6genQiKdIbVObCGdT3pinX53uluxXuqwJpmUmcwEws3sPD42cgnaW5Uf9ETweyoK35Yi1v3mNja4d4uTwRIhaAZo93eWMUn2wSPyypnc0kZ6is_DEscaPJFW9x02AA75gQmUWyLAzAwkq" referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex-1 aspect-video rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                              <img alt="brainstorming" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAjcHyS4WjLCPoQ8HcjC3lJkG_So1b0P8yjlTVUNpv-x12_FKCdHIpmx5TjDhMXc6zXqMcuV4KtCoYJ9MK_br4CpmshjWeVHAb9iTbwVg8XB0PrfZ0PHuFhjGSccu6_llBot5jChBSEbcEZxjRZwRDcmq5d1a4hiMuW_fr8GUhtvovOG5qrsPXtbDOjL6DeTWGoTkq5E-bSShyCjEiP7RMgHJ2IWmGs-TBHtttsN9vHkgC4VPgDyP63u3bBp5IuoSx3zsr-i5Xr67y" referrerPolicy="no-referrer" />
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
              Moderators faced constant real-time challenges, navigating a fragmented ecosystem where managing content across multiple platforms required jumping between siloed tools, leading to missed violations and operational drift.
            </p>
            <div className="mb-16 aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-on-secondary-fixed">
              <img alt="Intelligent Architecture: Data Flow & Control" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujc5mgkcTmcZxqsrURaOxqsrM3mOxlt-QwUBBbYxdg1AZztzzlHwHAOBuoMqPOWQP4P4ADPJrzCPXzf_0A_UKG6zowYCRFenlnNWELb17XTPs2B22lgoPwu6G7sGOxMCvG96hyCY1zmkVnnkrrYkB9vmg_C-Vm-aCKDT3H8J0b62hspeTj17WtVmOL8ubtOFwZk9KwNX44CbOaOii7GiRzbUZT9hf_PTTJSlAPQ3xwN4zPv_Gv49m7DRIL4QO6xlHyKrD-JHjoGsw" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-xs font-black tracking-[0.2em] uppercase mb-8 text-center" style={{ color: '#FF7F50' }}>Key research outtakes for MVP</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ color: '#FF7F50' }}>groups</span>
                <h3 className="text-lg font-bold text-on-secondary-fixed mb-4">Content Volume</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Balancing content streams with fluctuating traffic volumes in real-time was a manual, error-prone guessing game.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ color: '#FF7F50' }}>account_tree</span>
                <h3 className="text-lg font-bold text-on-secondary-fixed mb-4">Operational Complexity</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Moderators navigated between multiple different browser tabs to perform a single moderation action.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ color: '#FF7F50' }}>speed</span>
                <h3 className="text-lg font-bold text-on-secondary-fixed mb-4">Efficiency Gaps</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">SLA lag times meant moderators were reacting to issues that had already resolved or escalated beyond control.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ color: '#FF7F50' }}>history</span>
                <h3 className="text-lg font-bold text-on-secondary-fixed mb-4">Manual Classification</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">SLA lag times meant moderators were reacting to issues that had already resolved or escalated beyond control, requiring manual classification of content throughout the day.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Solution */}
        <section className="py-24 px-12 md:px-24 bg-surface">
          <div className="max-w-6xl mx-auto">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF7F50] mb-4">03 / DESIGN SOLUTION</span>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-secondary-fixed uppercase leading-tight mb-6">The Design Solution: The Unified Platform</h2>
                <p className="text-on-surface-variant">We architected a dashboard that functions as a command tower, prioritizing the "Human Element" of content moderation. The platform was built from scratch to strategically avoid legacy tech debt, ensuring a very lightweight and high-performance product experience.</p>
              </div>
            </div>
            <div className="space-y-32">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block" style={{ color: '#FF7F50' }}>Real-time Visibility</span>
                  <h3 className="text-2xl font-bold text-on-secondary-fixed mb-6">The Moderation Dashboard</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    A high-level view of the entire content stream. Items are visualized not as numbers, but as dynamic status indicators that highlight what needs review immediately.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      Color-coded priority states
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      Predictive SLA overlays
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-on-background">
                      <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                      MVP Focus: Dashboard, Streams, Classification, and Quality Control
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl bg-surface-container-high aspect-video">
                  <img alt="Moderation Dashboard Screenshot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGB8qZsasZyAbUDMhN1SZMpHHs8xVg5fvbZYuYzdNGdQ4a0pXUAzlJtdggOjjFZ5Ps0HCObIjfXdNUA6KNLB8jLlnS8JIV9q0LAei8KGaT-b1HvwEmfWpQM5oEoQGFkCi3tVV_7dM8aiPXsb0-6W965PR6mi5_gyFPJWXFR1t9D4YHCOUCNoAYT62ZyzU1zyblG1zxQ9fz3Al7VqQyFWZvarzdUjTV2-nvjpqLNilc5CzSVqlV940Xsu-cMeD5F7flsx1i4YTHS2BK" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-2xl bg-surface-container-high aspect-video">
                  <img alt="Granular Drill-ins View" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDQPpQy5ujJ34QnrXH-pcYqwiq11YvmTTtpbxGD1fHQ0Eq_WeU5zoLu-ZWieu1Li4vgZxiaHEz3XbxH2n6TVOaeUfoMlFzmwhF2TZIR0zXs7W6Y7orab7y50MZbyrs84hGTf8Q9Zm6rATA_JbyZCcs6ywVuRoQWprlhh-L_RiT8jFfxWnT5n7MQ88QBLG5BA95jhuqM7WoIEuVm8dorH3sMTwe3PlXeax2L7aVbwr8Gce7EoDwnPwCCucnyVKqcAYLCVFfZD89VZM" referrerPolicy="no-referrer" />
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block" style={{ color: '#FF7F50' }}>Contextual Depth</span>
                  <h3 className="text-2xl font-bold text-on-secondary-fixed mb-6">Granular Drill-ins</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    Clicking a content item doesn't take you to a new page; it unfolds a contextual layer. View sentiment analysis, history, and trends without losing stream context.
                  </p>
                  <div className="p-6 bg-surface-container-low rounded-lg">
                    <p className="text-sm font-semibold text-on-background mb-2">Direct Intervention Tools:</p>
                    <div className="flex gap-4">
                      <span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold rounded uppercase tracking-tighter">Review</span>
                      <span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold rounded uppercase tracking-tighter">Flag</span>
                      <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-tighter" style={{ backgroundColor: '#FF7F50' }}>Remove</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block" style={{ color: '#FF7F50' }}>Innovation</span>
                  <h3 className="text-2xl font-bold text-on-secondary-fixed mb-6">Dynamic 'Levers' & Automated Reversion</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    Instead of complex mapping, we introduced 'Levers'—a tactile way to rebalance moderation focus. Shift a moderator's focus from Video to Text with a single slider.
                  </p>
                  <div className="bg-on-secondary-fixed text-white p-8 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="material-symbols-outlined text-primary-container" style={{ color: '#FF7F50' }}>auto_mode</span>
                      <p className="font-bold">Automated Reversion</p>
                    </div>
                    <p className="text-sm text-secondary-fixed-dim">Set temporary focus boosts that automatically revert after a period, preventing the common "forgotten setting" that causes long-term operational drift.</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl bg-surface-container-high aspect-video">
                  <img alt="Direct Intervention Interface" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArODthAc4813VMJt7e2BEELX3TsT6dpUKT38IAQSgkgg45AwMfDp2sLbWpapzRGHhz08VYsl78K9UR0b7f8teT-tWH9-NWep0ucqhlfjyLOoMSzHWXvj8UtCKwFz_Ifo8xwqmFznRc9jxVl10sgleVZr558nKKHLJ36eDqzO52bcMypWyfB6vbiD4alLYKoPAqcCDi6jfVkowRISaZo5PErFOiAOmh0r04RQ3BFdJR2DeJCTqDlCtjbBv4lCcoAGbe9WEGdxQbabJk" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact & Success Section */}
        <section className="py-24 px-12 md:px-24 bg-[#161d30]">
          <div className="max-w-6xl mx-auto text-left">
            <span className="block text-[0.75rem] tracking-[0.2em] font-extrabold uppercase text-[#FF7F50]/80 mb-4">04 / BUSINESS IMPACT</span>
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
                    <div className="bg-primary/20 w-full h-[30%] rounded-t-sm"></div>
                    <div className="bg-primary/40 w-full h-[50%] rounded-t-sm"></div>
                    <div className="bg-primary/60 w-full h-[40%] rounded-t-sm"></div>
                    <div className="bg-primary/80 w-full h-[70%] rounded-t-sm"></div>
                    <div className="bg-primary w-full h-[95%] rounded-t-sm shadow-[0_-4px_12px_rgba(255,127,80,0.3)]" style={{ backgroundColor: '#FF7F50' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-black block text-white">Top Seller</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary" style={{ color: '#FF7F50' }}>Global Performance</span>
                </div>
                <p className="text-sm leading-relaxed mb-6 h-12 text-slate-300">Became one of CC Pulse's highest-performing products.</p>
                <div className="mt-auto bg-[#161d30] h-32 rounded-xl flex items-center justify-center p-6 relative overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path d="M0,35 Q20,35 30,25 T50,20 T70,10 T100,5" fill="none" stroke="#FF7F50" strokeLinecap="round" strokeWidth="3"></path>
                    <circle cx="100" cy="5" fill="#FF7F50" r="3"></circle>
                    <path d="M0,35 Q20,35 30,25 T50,20 T70,10 T100,5 L100,40 L0,40 Z" fill="url(#grad1)" opacity="0.1"></path>
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
                <p className="text-sm leading-relaxed mb-6 h-12 text-slate-300">Explosive adoption across enterprise-tier content moderation organizations.</p>
                <div className="mt-auto bg-white/5 h-32 rounded-xl flex items-end p-4 relative overflow-hidden border border-white/10">
                  <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-20">
                    <div className="w-full h-[1px] bg-white"></div>
                    <div className="w-full h-[1px] bg-white"></div>
                    <div className="w-full h-[1px] bg-white"></div>
                  </div>
                  <div className="w-full flex flex-col justify-end h-full">
                    <div className="w-full h-1 bg-primary rounded-full mb-4 relative overflow-hidden" style={{ backgroundColor: '#FF7F50' }}>
                      <div className="absolute left-0 top-0 h-full w-[85%] bg-primary shadow-[0_0_8px_#FF7F50]"></div>
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded-full mb-4">
                      <div className="h-full w-[40%] bg-white"></div>
                    </div>
                    <div className="w-full h-1 bg-primary rounded-full relative overflow-hidden" style={{ backgroundColor: '#FF7F50' }}>
                      <div className="absolute left-0 top-0 h-full w-[95%] bg-primary shadow-[0_0_8px_#FF7F50]"></div>
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
        <p className="font-inter text-xs tracking-wide uppercase text-slate-400">© 2024 CC Pulse Content Control. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-orange-400 transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-orange-400 transition-colors opacity-80 hover:opacity-100" href="#">Dribbble</a>
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-orange-400 transition-colors opacity-80 hover:opacity-100" href="#">Email</a>
        </div>
      </footer>
    </div>
  );
}
