import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About us', 
      path: '/about-us',
      subLinks: [
        { name: 'Our Mission', path: '/about-us' },
        { name: 'Members', path: '/members' },
        { name: 'Certificates', path: '/certificates' },
      ]
    },
    { name: 'What we do', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D5C4A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <img src="/logo_kdtf.png" alt="KDTF Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-base tracking-tight leading-tight uppercase">Kalwati Devi</span>
              <span className="text-[#BEF264] text-[10px] font-bold uppercase tracking-[0.1em]">Trust Foundation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group/item">
                {link.subLinks ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[#BEF264] cursor-pointer h-20",
                        location.pathname.startsWith(link.path) || link.subLinks.some(sl => sl.path === location.pathname) ? "text-[#BEF264]" : "text-white/80"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover/item:rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                      <div className="bg-[#0D5C4A] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={cn(
                              "block px-4 py-2 text-sm rounded-xl transition-colors",
                              location.pathname === sub.path 
                                ? "bg-[#BEF264] text-[#0D5C4A] font-bold" 
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-[#BEF264]",
                      location.pathname === link.path ? "text-[#BEF264]" : "text-white/80"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#BEF264] text-[#0D5C4A] rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(190,242,100,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D5C4A] border-b border-white/10 px-4 py-6 space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <div key={link.path} className="space-y-2">
                {link.subLinks ? (
                  <>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] px-2">{link.name}</p>
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block py-2 px-2 text-lg font-medium rounded-xl transition-all",
                          location.pathname === sub.path ? "text-[#BEF264] bg-white/5" : "text-white"
                        )}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-2 px-2 text-lg font-medium rounded-xl transition-all",
                      location.pathname === link.path ? "text-[#BEF264] bg-white/5" : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 bg-[#BEF264] text-[#0D5C4A] rounded-xl font-bold text-center"
            >
              Donate Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
