'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Globe } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // High-fidelity cursor tracking for light mode ambient spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 150, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-[9999] bg-[#ffffff] text-neutral-900 flex flex-col justify-between overflow-hidden font-sans select-none"
    >
      {/* Subtle Premium spotlight tracker */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none blur-[150px] opacity-45 mix-blend-multiply transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, rgba(99,102,241,0.06) 40%, rgba(255,255,255,0) 70%)',
          left: smoothX,
          top: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Corporate Dot Matrix Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none opacity-70" />

      {/* Ambient Floating Bubble Loop Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -120, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-sky-400/12 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 90, 0],
            y: [0, 140, -80, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-400/10 blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 90, -70, 0],
            y: [0, -70, 110, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 left-1/4 w-[550px] h-[550px] rounded-full bg-purple-400/10 blur-[130px]"
        />
      </div>

      {/* Top Spacer to replace header */}
      <div className="relative w-full pt-8 z-20" />

      {/* MAIN CONTAINER: High-End Corporate Layout */}
      <main className="relative flex-grow flex flex-col items-center justify-center px-6 z-10">
        <div className="w-full max-w-4xl flex flex-col items-center">
          
          {/* Corporate Logo with Minimalist Platinum Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-24 h-24 md:w-28 md:h-28 mb-8 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-2xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] p-5 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="OVIC Labs Logo"
                width={100}
                height={100}
                priority
                className="object-contain w-full h-full"
              />
            </div>
          </motion.div>

          {/* Micro-badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-400 bg-neutral-50 border border-neutral-200/50 px-4 py-1.5 rounded-full">
              PIONEERING MOBILITY
            </span>
          </motion.div>

          {/* Clean Corporate Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-6 text-center max-w-2xl leading-[1.1]"
          >
            Establishing the next frontier in autonomous technology
          </motion.h1>

          {/* Clean Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-500 text-sm md:text-base text-center max-w-lg leading-relaxed mb-10"
          >
            OVIC Labs is designing, developing, and deploying enterprise-grade robotic systems. Our new digital platform is launching shortly.
          </motion.p>

          {/* CORPORATE NEWSLETTER INTEGRATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md"
          >
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative flex items-center p-1.5 rounded-full border border-neutral-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] focus-within:border-neutral-400/80 focus-within:ring-2 focus-within:ring-neutral-100 transition-all">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-5 pr-3 py-2 text-sm text-neutral-800 placeholder-neutral-400 bg-transparent focus:outline-none"
                />
                <button 
                  type="submit"
                  className="bg-neutral-900 text-white rounded-full p-2.5 md:px-5 md:py-2 flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all font-medium text-xs whitespace-nowrap shrink-0 shadow-sm"
                >
                  <span className="hidden md:inline">Request Access</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-neutral-50 border border-neutral-200/80 px-6 py-4 rounded-2xl shadow-sm"
              >
                <p className="text-sm font-semibold text-neutral-800 mb-1">Registration Confirmed</p>
                <p className="text-xs text-neutral-500">Your email address has been added to our notification queue.</p>
              </motion.div>
            )}
          </motion.div>

        </div>
      </main>

      {/* BOTTOM FOOTER: Corporate Pillars Grid */}
      <footer className="relative w-full z-20 bg-neutral-50 border-t border-neutral-200/70 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-4"
          >
            <div className="p-2 bg-white rounded-lg border border-neutral-200/80 shadow-sm text-neutral-600">
              <Cpu size={16} />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-1">Advanced Mobility</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Designing dynamic physical architectures and versatile locomotion systems for complex workspaces.</p>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-4"
          >
            <div className="p-2 bg-white rounded-lg border border-neutral-200/80 shadow-sm text-neutral-600">
              <Shield size={16} />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-1">Robust Security</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Engineered with fail-safe architectures and state-of-the-art sensory safety mechanisms.</p>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-4"
          >
            <div className="p-2 bg-white rounded-lg border border-neutral-200/80 shadow-sm text-neutral-600">
              <Globe size={16} />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-1">Universal Command</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Enabling seamless remote administration and cloud fleet management at global scale.</p>
            </div>
          </motion.div>

        </div>

        {/* Corporate Legal Footer */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-neutral-200/50 text-[10px] tracking-[0.1em] font-semibold text-neutral-400 uppercase gap-4">
          <span>© {new Date().getFullYear()} OVIC Labs International. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-neutral-600 cursor-pointer">Security Protocol</span>
            <span className="hover:text-neutral-600 cursor-pointer">Terms of Operation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
