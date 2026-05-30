'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { title: 'Home', href: '/', sublinks: [] },
  { title: 'About', href: '/about', sublinks: [] },
  {
    title: 'Robotics',
    href: '#robotics',
    sublinks: ['Delivery Robots', 'Autonomous Platforms', 'Mobility Systems', 'Fleet Robotics', 'Humanoid Robotics', 'Industrial Robotics', 'Robotics Labs']
  },
  {
    title: 'Technology',
    href: '#technology',
    sublinks: ['Artificial Intelligence', 'Computer Vision', 'Autonomous Navigation', 'Mobility Engineering', 'Battery Technology', 'Sensor Systems', 'Connectivity', 'Cloud Robotics', 'Safety System', 'Robotics Software']
  }
];

const SECONDARY_LINKS = [
  {
    title: 'Research',
    sublinks: ['AI Development', 'Future Concept', 'Publications', 'Open Innovations']
  },
  {
    title: 'Solution',
    sublinks: ['Residential Communities', 'Smart Campus', 'Logistics', 'Hospitality', 'Resorts', 'Warehouse Automation', 'Industrial Mobility', 'Airport Mobility', 'Retail and Food Delivery', 'Smart Cities', 'Enterprise Robots']
  },
  {
    title: 'Safety',
    sublinks: []
  },
  {
    title: 'Journal',
    sublinks: []
  },
  {
    title: 'Careers',
    sublinks: []
  }
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isScrolled) {
      setDesktopMenuOpen(false);
      setMobileMenuOpen(false);
    }
  }, [isScrolled]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window !== 'undefined') {
      const threshold = window.innerHeight * 0.05;
      setIsScrolled(latest > threshold);
    }
  });

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-0 right-0 mx-auto w-full max-w-[1100px] flex justify-center z-50 pointer-events-none px-4 md:px-8">
      <motion.header
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        style={{ borderRadius: 9999 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.7 }}
        className={`pointer-events-auto flex items-center p-2 bg-white border border-neutral-200 shadow-xl overflow-visible relative z-50 ${
          isScrolled ? "w-full justify-between" : "w-[64px] md:w-[72px] justify-center"
        }`}
      >
        {/* Logo Container */}
        <Link href="/" className="flex items-center z-20 shrink-0">
          <motion.div layout transition={{ type: 'spring', bounce: 0, duration: 0.7 }} style={{ borderRadius: 9999 }} className="w-12 h-12 md:w-14 md:h-14 relative flex items-center justify-center overflow-hidden shrink-0 bg-transparent cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation (Centered) */}
        <AnimatePresence mode="popLayout">
          {isScrolled && (
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8"
            >
              {NAV_LINKS.map((item) => (
                <div key={item.title} className="relative group">
                  <Link href={item.href || '#'} className="text-sm font-medium text-neutral-600 hover:text-black transition-colors flex items-center gap-1">
                    {item.title}
                    {item.sublinks.length > 0 && <ChevronRight size={14} className="opacity-40 group-hover:rotate-90 transition-transform" />}
                  </Link>
                  {item.sublinks.length > 0 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-[100]">
                      <div className="bg-white border border-neutral-200 shadow-xl rounded-2xl p-4 flex flex-col gap-3 min-w-[200px]">
                        {item.sublinks.map(sub => (
                          <a key={sub} href={`#${sub.toLowerCase().replace(' ', '-')}`} className="text-[13px] text-neutral-600 hover:text-black transition-colors whitespace-nowrap">
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Desktop CTA & Mobile Hamburger */}
        <AnimatePresence mode="popLayout">
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex items-center gap-2 z-20"
            >
              {/* Desktop Hamburger */}
              <button
                onClick={() => setDesktopMenuOpen(prev => !prev)}
                className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-neutral-100 text-black transition-colors overflow-hidden relative z-50"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={desktopMenuOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute"
                  >
                    {desktopMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* Desktop CTA */}
              <Link href="/contact" className="hidden md:block px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors mr-1">
                Contact
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 text-black overflow-hidden relative z-50"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileMenuOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute"
                  >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0 }}
            className="fixed top-[96px] left-4 right-4 bottom-[50px] bg-white/95 backdrop-blur-2xl border border-neutral-200 rounded-3xl p-6 flex flex-col shadow-2xl pointer-events-auto md:hidden z-30 origin-top overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <nav className="flex flex-col gap-6 mb-8">
              {NAV_LINKS.map((item) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  key={item.title}
                  className="flex flex-col gap-2 border-b border-neutral-100 pb-4"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href || '#'}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-semibold text-neutral-800 hover:text-black flex-1"
                    >
                      {item.title}
                    </Link>
                    {item.sublinks.length > 0 && (
                      <button
                        onClick={() => setExpandedMenu(expandedMenu === item.title ? null : item.title)}
                        className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                      >
                        <motion.div
                          animate={{ rotate: expandedMenu === item.title ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={20} strokeWidth={2} className="text-[#333333]" />
                        </motion.div>
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.sublinks.length > 0 && expandedMenu === item.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pl-4 border-l-2 border-neutral-100 ml-1 mt-2 mb-2">
                          {item.sublinks.map(sub => (
                            <a
                              key={sub}
                              href={`#${sub.toLowerCase().replace(' ', '-')}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[16px] text-neutral-500 hover:text-black transition-colors"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>

            {/* Secondary Links for Mobile */}
            <div className="flex flex-col gap-5 mb-8 px-2">
              {SECONDARY_LINKS.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                  key={item.title}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={`#${item.title.toLowerCase().replace(' ', '-')}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[14px] font-medium text-neutral-800 hover:text-black transition-colors flex-1 py-1"
                    >
                      {item.title}
                    </a>
                    {item.sublinks.length > 0 && (
                      <button
                        onClick={() => setExpandedMenu(expandedMenu === item.title ? null : item.title)}
                        className="p-1 hover:bg-neutral-100 rounded-md transition-colors"
                      >
                        <motion.div
                          animate={{ rotate: expandedMenu === item.title ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={16} strokeWidth={1.5} className="text-[#333333]" />
                        </motion.div>
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.sublinks.length > 0 && expandedMenu === item.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pl-4 border-l border-neutral-100 ml-1 mt-1 mb-2">
                          {item.sublinks.map(sub => (
                            <a
                              key={sub}
                              href={`#${sub.toLowerCase().replace(' ', '-')}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[13px] text-neutral-500 hover:text-black transition-colors"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Mobile Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="border border-neutral-200 rounded-[24px] p-4 flex items-center justify-between bg-white mb-8"
            >
              <span className="text-[12px] font-bold tracking-[0.2em] text-neutral-600 ml-4">SOCIALS</span>
              <div className="flex items-center gap-3 mr-2">
                <a
                  href="https://www.youtube.com/@oviclabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 hover:text-[#FF0000] hover:border-neutral-300 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/oviclabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 hover:text-[#E4405F] hover:border-neutral-300 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
              </div>
            </motion.div>

            <div className="mt-auto pt-4">
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-5 rounded-full bg-black text-white text-lg font-semibold flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Right Side Panel */}
      <AnimatePresence>
        {desktopMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setDesktopMenuOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 hidden md:block pointer-events-auto"
            />
            {/* Floating Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="absolute top-[82px] right-4 md:right-8 w-[420px] max-h-[calc(100vh-140px)] bg-white border border-neutral-200 shadow-2xl z-50 p-8 pb-6 rounded-[2rem] flex flex-col hidden md:flex origin-top-right pointer-events-auto"
            >
              {/* Nav Links */}
              <div className="flex flex-col gap-y-6 mb-6 overflow-y-auto pr-2 flex-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {SECONDARY_LINKS.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + (i * 0.05) }}
                    key={item.title}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <a
                        href={`#${item.title.toLowerCase().replace(' ', '-')}`}
                        onClick={() => setDesktopMenuOpen(false)}
                        className="text-neutral-800 hover:text-black transition-colors flex-1 py-1"
                      >
                        <h4 className="text-[14px] font-medium m-0">{item.title}</h4>
                      </a>
                      {item.sublinks.length > 0 && (
                        <button
                          onClick={() => setExpandedMenu(expandedMenu === item.title ? null : item.title)}
                          className="p-1 hover:bg-neutral-100 rounded-md transition-colors"
                        >
                          <motion.div
                            animate={{ rotate: expandedMenu === item.title ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight size={16} strokeWidth={1.5} className="text-[#333333]" />
                          </motion.div>
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.sublinks.length > 0 && expandedMenu === item.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pl-4 border-l border-neutral-100 ml-1 mt-1 mb-2">
                            {item.sublinks.map(sub => (
                              <a
                                key={sub}
                                href={`#${sub.toLowerCase().replace(' ', '-')}`}
                                onClick={() => setDesktopMenuOpen(false)}
                                className="text-[13px] text-neutral-500 hover:text-black transition-colors"
                              >
                                {sub}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Socials Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-auto border border-neutral-200 rounded-[24px] p-4 flex items-center justify-between bg-white"
              >
                <span className="text-[12px] font-bold tracking-[0.2em] text-neutral-600 ml-4">SOCIALS</span>
                <div className="flex items-center gap-3 mr-2">
                  <a
                    href="https://www.youtube.com/@oviclabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 hover:text-[#FF0000] hover:border-neutral-300 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/oviclabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 hover:text-[#E4405F] hover:border-neutral-300 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
