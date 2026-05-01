/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Markdown from 'react-markdown';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Download,
  Linkedin,
  Dribbble,
  Twitter,
  Instagram,
  ArrowUp,
  Heart,
  BarChart3,
  Users,
  Handshake,
} from 'lucide-react';
import ContactModal from '../components/ContactModal';
import Header from '../components/Header';

interface HomeProps {
  onContactClick: () => void;
}

export default function Home({ onContactClick }: HomeProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlaceholderClick = (label: string) => {
    console.log(`Clicked: ${label}`);
  };

  const caseStudies = [
    {
      id: 'cs-1',
      tag: 'ENTERPRISE SAAS',
      title: 'NICE/inContact Supervisor',
      description: 'Click to explore the case study, showcasing the journey from a whiteboard concept to a pivotal feature within the NICE CXOne platform.',
      goals: ['Goal: Real-time center management', 'Role: Lead UX Designer', 'Outcome: 4 Months timeline'],
      image: 'https://www.dropbox.com/scl/fi/q303ib81dl4i8ubvxewou/IMG_9084.jpg?rlkey=vjox3y9ik54fzw8iqqm5v1ifk&raw=1',
      link: '/case-study/nice-incontact'
    },
    {
      id: 'cs-2',
      tag: 'LIVE PROJECT',
      title: 'CC Pulse: Content Control Redefined',
      description: 'A deep-dive into the UX transformation of the CC Pulse dashboard for real-time monitoring and high-stakes content moderation.',
      goals: ['Goal: Content moderation efficiency', 'Role: Lead UX Designer', 'Outcome: Reduced response time and cognitive load'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO3cf4mu76dSUTfsjETUGzk9jLwWuWaSjezokMH4L4hnvdzGqhJbEEaInpzDzBe7JMbmb4kOW52lCMAxaozCvImdC6bSI3EfXnu0vv_TIwuOEJeL5vqcvszxnxHZHn82TNVZzwfp51X1mb5bG3pWkQGZZbTg4CozHcYa6IDzTexsmfXL0DErVogQKa7onOktNKFsVRMgzP1X7P775zfBYBaaiFxh1SonQjemEOaB4ydVX_5S-DxQGmLJA7dHvLQs-k_C0llhY0tpaa',
      link: '/case-study/cc-pulse'
    }
  ];

  const galleryItems = [
    {
      id: 'g-1',
      title: 'NICE/inContact Dashboards',
      description: 'Creating a more effective dashboard system that is easier to use based on customer research.',
      tags: ['UX Research', 'Dashboard', 'Lead'],
      image: 'https://www.dropbox.com/scl/fi/q303ib81dl4i8ubvxewou/IMG_9084.jpg?rlkey=vjox3y9ik54fzw8iqqm5v1ifk&raw=1',
      link: '/portfolio/nice-dashboard'
    },
    {
      id: 'g-2',
      title: 'E-commerce Micro-interactions',
      description: 'Motion design exploration to enhance the \'Add to Cart\' experience.',
      tags: ['Animation', 'UX', 'Lead'],
      image: 'https://picsum.photos/seed/ecommerce/400/300',
      link: '/case-study/placeholder'
    },
    {
      id: 'g-3',
      title: 'Smart Home Controller',
      description: 'Designing the interface for an IoT-enabled smart thermostat.',
      tags: ['IoT', 'Product Design'],
      image: 'https://picsum.photos/seed/smarthome/400/300',
      link: '/case-study/placeholder'
    },
    {
      id: 'g-4',
      title: 'Mobile Banking App Redesign',
      description: 'Focused on accessibility and ease of use for seniors, streamlining core banking tasks.',
      tags: ['Mobile', 'Fintech', 'Accessibility'],
      image: 'https://picsum.photos/seed/banking/400/300',
      link: '/case-study/placeholder'
    },
    {
      id: 'g-5',
      title: 'AI Content Moderator',
      description: 'A real-time dashboard for content moderators to filter and flag sensitive content using AI insights.',
      tags: ['AI', 'Dashboard', 'Moderation'],
      image: 'https://picsum.photos/seed/moderator/400/300',
      link: '/case-study/placeholder'
    },
    {
      id: 'g-6',
      title: 'Fitness Tracker Dashboard',
      description: 'Visualizing complex health data for professional athletes to optimize performance.',
      tags: ['Health', 'Data Viz', 'Wearables'],
      image: 'https://picsum.photos/seed/fitness/400/300',
      link: '/case-study/placeholder'
    }
  ];

  const [recommendations] = useState(() => {
    const data = [
      {
        id: 'rec-1',
        name: 'Kris Fryer',
        role: 'Product Designer',
        company: 'Impartner',
        image: 'https://picsum.photos/seed/kris/400/400',
        content: [
          "I worked with Darren on the Impartner UX team and always appreciated his **expertise and approach to design**. He has a great way of **balancing user needs with business goals**, making collaboration easy and productive. He also took the lead in **improving UX research strategy** and brought other teams into the process, helping shift the company toward a more **user-centered approach**. Darren is thoughtful, communicates clearly, and makes any team better."
        ]
      },
      {
        id: 'rec-2',
        name: "Brandon O'Neil",
        role: 'UX Designer | Design Systems, Enterprise SaaS | Figma Expert',
        company: 'Impartner',
        image: 'https://picsum.photos/seed/brandon/400/400',
        content: [
          "I worked with Darren on the Impartner UX team and can say that he is a **great team player** who is knowledgeable in his craft making collaboration easy and productive. He brings lots of experience and pushes for **finding the best design solution** for both the user and business goals. He is easy to work with and has a great ability to **communicate complex problems into user-friendly designs**."
        ]
      },
      {
        id: 'rec-3',
        name: 'Stephen Crane',
        role: 'Product & Strategy for Complex B2B SaaS | 10 Years in Product | AI CX Automation | Enterprise & Startups',
        company: '',
        image: 'https://picsum.photos/seed/stephen/400/400',
        content: [
          "Darren is **incredibly well-rounded in all facets of the design process**—from user research to journey mapping and prototyping. He brings **technical expertise** and the ability to **translate complex problems into intuitive, user-centered solutions** that drive real-world results. He has an exceptional eye for **spotting costly usability gaps** and can turn around designs with **impressive speed**. I highly recommend Darren to any team looking for a designer who can elevate products."
        ]
      },
      {
        id: 'rec-4',
        name: 'Ryan Ferguson',
        role: 'SaaS & AI Innovation | Customer Experience & Revenue Growth | Senior Product Leader | Problem Solver | Customer Advocate | Outdoor Enthusiast',
        company: '',
        image: 'https://picsum.photos/seed/ryan/400/400',
        content: [
          "Darren is an amazing product designer. He works collaboratively to **design customer journeys that simplify processes** and delights end users. Darren produces quality work and **enables engineering teams to quickly deliver new products**. He communicates clearly and maintains composure under pressure while maintaining a positive sense of humor. Darren is **wonderful with customers** and builds positive relationships. He is a talented product designer and any team would be lucky to have him."
        ]
      },
      {
        id: 'rec-5',
        name: 'Joe Burkinshaw',
        role: 'Fractional Product & UX Leader | SaaS, AI & Platform Strategy',
        company: '',
        image: 'https://picsum.photos/seed/joe/400/400',
        content: [
          "Darren is one of the **most experienced, versatile, and knowledgeable UX designers** I've known. He was a solid coach and leader to other designers. He created a **company-wide UX research strategy** and led the charge throughout the rest of the company. He diplomatically connected with other departments, involving them in the UX process and **changing the way they think about how our users experience our products**. Darren will elevate your team."
        ]
      },
      {
        id: 'rec-6',
        name: 'Sean Kirkby',
        role: 'Vice President, Engineering - CX AI',
        company: 'NICE',
        image: 'https://picsum.photos/seed/sean/400/400',
        content: [
          "Darren was assigned to an extremely ambitious project. He **soundly knocked it out of the park** with every innovation. What he successfully designed for us went on to be described by industry analysts and major partners as **'a giant leapfrog over the competition'** and **'the best in the industry.'** Darren performed steadily at the **top of his game**. I wouldn't hesitate to trust him with the most critical of projects and teams."
        ]
      },
      {
        id: 'rec-7',
        name: 'Matt Despain',
        role: 'VP Product Management',
        company: '',
        image: 'https://picsum.photos/seed/matt/400/400',
        content: [
          "I have worked with Darren at two different companies focused on cloud customer experience solutions. Beyond being a great person and fun to work with, he is an **incredible talent and key asset** for those looking to **improve their user research, UI design and overall usability**."
        ]
      },
      {
        id: 'rec-8',
        name: 'Carson Poppenger',
        role: 'More Conversations. More Conversions. More Revenue. More Profit.',
        company: '',
        image: 'https://picsum.photos/seed/carson/400/400',
        content: [
          "I've watched Darren's career **advance and gain additional skills in UX and design**. Darren is upbeat, **solutions-oriented**, and able to take feedback and apply it. As a director in creative and marketing, I'm sure his teams enjoy working with him to accomplish organization objectives. Darren is a **versatile asset**. I'd recommend him to anyone looking for a skilled creative marketing talent and **UX design lead**."
        ]
      },
      {
        id: 'rec-9',
        name: 'Dan Phillips',
        role: 'Head of Design | Omnichannel CX & Product Strategy | Transforming Legacy Systems into Market-Dominant Enterprise Platforms',
        company: 'inContact',
        image: 'https://picsum.photos/seed/danp/400/400',
        content: [
          "Darren has been a **key team member in designing the Next Generation Product**—the most ambitious project ever undertaken by inContact. He has been an **advocate for the end user** in the Interaction Design Process. We were able to create a **revolutionary product** that will set us apart from our competitors. Darren **adapts to new challenges, takes initiative, and solves**. He is an asset to any project he touches."
        ]
      },
      {
        id: 'rec-10',
        name: 'Rix Ryskamp',
        role: 'Attorney, Inventor, Entrepreneur',
        company: '',
        image: 'https://picsum.photos/seed/rix/400/400',
        content: [
          "Darren brings a refreshing sense of **style and elegance** to every project he touches."
        ]
      },
      {
        id: 'rec-11',
        name: 'Rich Nelson',
        role: 'VP Jr. Director, Digital Marketing & Ecommerce | Growth Marketing, Demand Generation & Lifecycle Strategy | Customer Experience (CX), CRO & Revenue Growth | Building High-Performing Teams | DTC & Direct Selling',
        company: '',
        image: 'https://picsum.photos/seed/rich/400/400',
        content: [
          "Darren is an **accomplished designer** with an **eye for creative design and balance**. He is respected by his peers for his **professionalism, cool, and tempered demeanor**. I've worked with Darren at two different companies and he has been an immense pleasure to work with. I enthusiastically recommend and respect Darren for his creativity, design, and team-enhancing skills!"
        ]
      },
      {
        id: 'rec-12',
        name: 'Tyler Forbes Cook',
        role: 'Product',
        company: 'Prosper',
        image: 'https://picsum.photos/seed/tyler/400/400',
        content: [
          "I had the opportunity to hire and work with Darren at Prosper. I found Darren to be **dedicated to his work** and a desire to really ensure that the **customer was always put first**. Darren **cares about quality work**!"
        ]
      },
      {
        id: 'rec-13',
        name: 'Nick Thomas',
        role: 'CEO @ Nordmark | Ecosystem Builder | 5X Founder | Board Member | Investor',
        company: 'Nordmark',
        image: 'https://picsum.photos/seed/nick/400/400',
        content: [
          "Darren is a **talented designer**, an **amazing work-horse**, and an **absolute pleasure to work with**."
        ]
      }
    ];
    return [...data].sort(() => Math.random() - 0.5);
  });

  const [currentRec, setCurrentRec] = useState(0);

  const nextRec = () => {
    setCurrentRec((prev) => (prev + 1) % recommendations.length);
  };

  const prevRec = () => {
    setCurrentRec((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  return (
    <div className="min-h-screen bg-background-light text-slate-900 font-sans antialiased">
      <Helmet>
        <title>Darren Ottley | Lead UX Designer Portfolio</title>
        <meta name="description" content="Portfolio of Darren Ottley, a Lead UX Designer specializing in complex enterprise dashboards, contact center management, and high-stakes user experiences." />
        <meta property="og:title" content="Darren Ottley | Lead UX Designer Portfolio" />
        <meta property="og:description" content="Explore user-centric solutions and deep-dive case studies in enterprise UX design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://darrenottley.com/" />
      </Helmet>
      <Header onContactClick={onContactClick} />

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Hello, I’m Darren
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-12 font-light"
          >
            My focus is on crafting collaborative solutions fueled by data and user insights. Through the application of UX design and principles, I strive to enact meaningful change that benefits both end users and company objectives.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#case-study"
              className="px-6 py-2.5 bg-primary text-white font-bold rounded-full text-sm shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all uppercase tracking-wider"
            >
              View Case Study
            </a>
            <a 
              href="#portfolio"
              className="px-6 py-2.5 bg-white/10 text-white font-bold rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all uppercase tracking-wider backdrop-blur-sm"
            >
              Recent Work
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-[28px] h-[45px] border-2 border-white/50 rounded-full relative">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white absolute top-2 left-1/2 -translate-x-1/2 rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Case Studies */}
      <section id="case-study" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Case Studies</h2>
            <p className="text-slate-500 max-w-xl">In-depth explorations of complex problems and the user-centric solutions delivered.</p>
          </div>

          <div className="space-y-32 md:space-y-48">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
              >
                <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] lg:h-[500px] bg-slate-50 shadow-sm transition-all duration-500 group-hover:shadow-xl ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link 
                      to={study.link}
                      className="px-6 py-2.5 bg-white/10 text-white font-bold rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all uppercase tracking-wider backdrop-blur-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      View Study
                    </Link>
                  </div>
                </div>
                
                <div className={`space-y-8 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="space-y-4">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm block">{study.tag}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-slate-900">{study.title}</h2>
                  </div>
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">{study.description}</p>
                  <ul className="space-y-4 pb-4">
                    {study.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-600 font-medium">
                        <span className="material-symbols-outlined text-tertiary text-[1.25rem] shrink-0">check_circle</span>
                        <span className="text-sm md:text-base">{goal}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={study.link}
                    className="inline-flex items-center font-bold text-slate-900 border-b-2 border-primary pb-1 hover:text-primary transition-all group/link text-sm md:text-base"
                  >
                    Read Case Study <ArrowUpRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-24 bg-[#A2b59f]/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => {
              const Content = (
                <motion.div 
                  whileHover={{ 
                    scale: 1.05,
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all cursor-pointer h-[335px] flex flex-col"
                >
                  <div className="relative overflow-hidden flex-1">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {index === 0 && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase rounded-full shadow-lg">
                        Featured Case Study
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-6 py-2.5 bg-white/10 text-white font-bold rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all uppercase tracking-wider backdrop-blur-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 duration-300">
                        View Project
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-5 h-[142px] flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-1 text-tertiary truncate">{item.title}</h4>
                    <p className="text-base text-slate-600 leading-tight line-clamp-3">{item.description}</p>
                  </div>
                </motion.div>
              );

              return item.link ? (
                <Link key={item.id} to={item.link}>
                  {Content}
                </Link>
              ) : (
                <div key={item.id} onClick={() => handlePlaceholderClick(`Gallery Item: ${item.title}`)}>
                  {Content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">My Strengths and Expertise</h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Passionate about simplicity and innovation, I bridge business goals with user satisfaction, specializing in turning complex challenges into enjoyable experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Passion And Commitment', icon: Heart, items: ['Strong advocate for user initiatives', 'Consistent dedication and perseverance'] },
              { title: 'Analytical Approach', icon: BarChart3, items: ['Well-thought-out insights', 'Encouraging open dialogue'] },
              { title: 'Inclusive And Empowering', icon: Users, items: ['Promoting professional growth', 'Empathy for colleague needs'] },
              { title: 'Collaboration', icon: Handshake, items: ['Fostering teamwork', 'Resolving team conflicts'] }
            ].map((strength) => (
              <div key={strength.title} className="space-y-4">
                <div className="flex items-center gap-3">
                  <strength.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-primary font-bold tracking-widest uppercase text-sm">{strength.title}</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  {strength.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-[72px] bg-[#648782] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Recommendations</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-start">
            {/* Image area: 180px fixed width */}
            <div className="w-full md:w-[180px] flex-shrink-0 flex justify-center md:justify-start mb-8 md:mb-0">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={recommendations[currentRec].id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-48 h-48 md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-white/5"
                >
                  <img 
                    src={recommendations[currentRec].image} 
                    alt={recommendations[currentRec].name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Gap: 32px */}
            <div className="hidden md:block w-[32px] flex-shrink-0" />
            
            {/* Opening Quote: 42px fixed width */}
            <div className="hidden md:block w-[42px] flex-shrink-0 pt-2">
              <span className="text-8xl font-serif text-black leading-none select-none opacity-80">“</span>
            </div>
            
            {/* Gap: 24px */}
            <div className="hidden md:block w-[24px] flex-shrink-0" />
            
            {/* Main Text Area: Expand */}
            <div className="flex-1 min-w-0 pt-4 text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={recommendations[currentRec].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-white/90">
                    {recommendations[currentRec].content.map((paragraph, i) => (
                      <div key={i}>
                        <Markdown 
                          components={{
                            p: ({ children }) => <p className="m-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>
                          }}
                        >
                          {paragraph}
                        </Markdown>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <h4 className="text-2xl font-bold font-display">{recommendations[currentRec].name}</h4>
                    <p className="text-white/80">{recommendations[currentRec].role}</p>
                    <p className="text-white/60 text-sm">{recommendations[currentRec].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Gap: 24px */}
            <div className="hidden md:block w-[24px] flex-shrink-0" />
            
            {/* Closing Quote: 42px fixed width */}
            <div className="hidden md:block w-[42px] flex-shrink-0 pt-2 text-right">
              <span className="text-8xl font-serif text-black leading-none select-none opacity-80">”</span>
            </div>
          </div>
          
          {/* Bottom Area: 64px padding area with arrows and indicators */}
          <div className="mt-16 flex items-center justify-between">
            <button 
              onClick={prevRec}
              className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="flex justify-center gap-3">
              {recommendations.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentRec(i)}
                  className={`w-3 h-3 rounded-full transition-all border-2 border-white/40 ${currentRec === i ? 'bg-white border-white w-8' : 'bg-transparent hover:bg-white/20'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextRec}
              className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-3"></div>
                <img 
                  src="/profile.png" 
                  alt="Darren" 
                  className="relative rounded-2xl w-full aspect-square object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Bridging the gap between human needs and digital solutions.</h2>
              <p className="text-lg text-slate-600">
                I am a UX/UI Designer with over 7 years of experience helping brands build products that people love. My approach is rooted in design thinking and an obsessive attention to detail.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => handlePlaceholderClick('Download CV')}
                  className="px-6 py-3 bg-slate-900 text-white font-bold rounded-full flex items-center gap-2"
                >
                  <Download className="w-5 h-5" /> Download CV
                </button>
                <div className="flex items-center space-x-4">
                  {[
                    { icon: <Linkedin />, label: 'LinkedIn' },
                    { icon: <Dribbble />, label: 'Dribbble' },
                    { icon: <Twitter />, label: 'Twitter' },
                    { icon: <Instagram />, label: 'Instagram' }
                  ].map((social) => (
                    <button 
                      key={social.label}
                      onClick={() => handlePlaceholderClick(`Social: ${social.label}`)}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:border-primary transition-colors"
                    >
                      <social.icon.type className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Let's build something great together.</h2>
              <a href="mailto:hello@dgodesign.com" className="text-2xl md:text-3xl font-light hover:text-primary transition-colors border-b border-white/20 pb-2">
                hello@dgodesign.com
              </a>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-slate-400 mb-8 max-w-sm">I'm currently available for freelance opportunities and full-time senior design roles.</p>
              <div className="flex space-x-8 text-sm font-bold tracking-widest uppercase">
                <button onClick={() => handlePlaceholderClick('Footer: Behance')} className="hover:text-primary transition-colors">Behance</button>
                <button onClick={() => handlePlaceholderClick('Footer: Instagram')} className="hover:text-primary transition-colors">Instagram</button>
                <button onClick={() => handlePlaceholderClick('Footer: Twitter')} className="hover:text-primary transition-colors">Twitter</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-slate-500 text-sm">
            <p>© 2024 Darren Ottley. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => handlePlaceholderClick('Privacy Policy')}>Privacy Policy</button>
              <button onClick={() => handlePlaceholderClick('Cookie Policy')}>Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
