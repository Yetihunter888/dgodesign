import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'HOME', href: isHomePage ? '#home' : '/#home' },
    { 
      name: 'CASE STUDY', 
      href: isHomePage ? '#case-study' : '/#case-study',
      dropdown: [
        { name: 'NICE/inContact', href: '/case-study/nice-incontact' },
        { name: 'CC Pulse', href: '/case-study/cc-pulse' },
      ]
    },
    { 
      name: 'PORTFOLIO', 
      href: isHomePage ? '#portfolio' : '/#portfolio',
      dropdown: [
        { name: 'NICE Dashboards', href: '/portfolio/nice-dashboard' },
        { name: 'E-commerce', href: '/case-study/placeholder' },
        { name: 'Smart Home', href: '/case-study/placeholder' },
      ]
    },
    { name: 'ABOUT', href: isHomePage ? '#about' : '/#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-md border-slate-800/50 py-3' 
          : 'bg-slate-900/95 backdrop-blur-md border-slate-800 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => isHomePage && handleNavClick(e as any, '#home')}
          >
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Zap className="size-5 fill-current" />
            </div>
            <div className="font-display font-bold text-2xl text-white">DGO</div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide uppercase text-white/80" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className={`flex items-center gap-1 hover:text-primary transition-colors ${activeDropdown === item.name ? 'text-primary' : ''}`}
                  >
                    {item.name}
                    <ChevronDown className={`size-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                )}

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 mt-4 w-48 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                      >
                        <div className="p-2 flex flex-col">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="px-4 py-3 text-[11px] font-bold text-white/70 hover:bg-white/10 hover:text-white rounded-xl transition-all"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <button 
              onClick={onContactClick}
              className="px-5 py-2.5 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-bold"
            >
              Get in Touch
            </button>
          </div>

          <button className="md:hidden text-2xl text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-900 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-2xl font-display font-bold text-white">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col space-y-4">
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      if (!item.dropdown) handleNavClick(e, item.href);
                    }}
                    className="flex items-center justify-between hover:text-primary transition-all"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4 flex flex-col space-y-4 border-l-2 border-slate-800">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg text-slate-400 font-medium hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={() => { onContactClick(); setIsMenuOpen(false); }}
                className="text-left text-primary hover:text-white transition-all pt-4"
              >
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
