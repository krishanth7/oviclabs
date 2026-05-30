import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 rounded-t-[2.5rem] md:rounded-t-[4rem] mt-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight">OVIC Labs</h2>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Pioneering the future of autonomous robotics and artificial intelligence. We build intelligent systems that transform industries and improve lives globally.
            </p>
            
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-neutral-600 transition-colors"
                />
                <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 w-full lg:w-auto flex-1">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2">Company</h3>
              <Link href="/about" className="text-neutral-300 hover:text-white transition-colors text-sm">About Us</Link>
              <Link href="#careers" className="text-neutral-300 hover:text-white transition-colors text-sm">Careers</Link>
              <Link href="#journal" className="text-neutral-300 hover:text-white transition-colors text-sm">Journal</Link>
              <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                Contact <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2">Expertise</h3>
              <Link href="#robotics" className="text-neutral-300 hover:text-white transition-colors text-sm">Robotics</Link>
              <Link href="#technology" className="text-neutral-300 hover:text-white transition-colors text-sm">Technology</Link>
              <Link href="#research" className="text-neutral-300 hover:text-white transition-colors text-sm">Research</Link>
              <Link href="#safety" className="text-neutral-300 hover:text-white transition-colors text-sm">Safety Systems</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2">Solutions</h3>
              <Link href="#smart-campus" className="text-neutral-300 hover:text-white transition-colors text-sm">Smart Campus</Link>
              <Link href="#logistics" className="text-neutral-300 hover:text-white transition-colors text-sm">Logistics</Link>
              <Link href="#hospitality" className="text-neutral-300 hover:text-white transition-colors text-sm">Hospitality</Link>
              <Link href="#smart-cities" className="text-neutral-300 hover:text-white transition-colors text-sm">Smart Cities</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-900" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 order-2 md:order-1">
            <a href="https://twitter.com/oviclabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://linkedin.com/company/oviclabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://instagram.com/oviclabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="https://youtube.com/@oviclabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-1 md:order-2">
            <div className="flex gap-6">
              <Link href="/privacy" className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm">Terms of Service</Link>
            </div>
            <p className="text-neutral-600 text-sm">
              © {new Date().getFullYear()} OVIC Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
