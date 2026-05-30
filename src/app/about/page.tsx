'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { 
  Cpu, Zap, ChevronRight, CircleDot, 
  Battery, Box, ShieldCheck, Eye, Map, 
  Network, Activity, Wifi, Shield, Navigation,
  ArrowRight, Users, Sparkles, Globe
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function AboutPage() {
  const springAnim = { duration: 1, type: "spring" as const, bounce: 0.1 };

  // Vision Pillars Data
  const visionPillers = [
    {
      title: "Autonomous Robotics",
      desc: "Building intelligent robotic systems capable of operating independently in dynamic environments.",
      icon: Cpu,
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600"
    },
    {
      title: "Intelligent Mobility",
      desc: "Creating reliable mobility solutions that redefine delivery, logistics, and transportation.",
      icon: Navigation,
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600"
    },
    {
      title: "Human-Centered Innovation",
      desc: "Designing technology that enhances productivity, accessibility, and quality of life.",
      icon: Users,
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600"
    },
    {
      title: "Engineering Excellence",
      desc: "Developing robust, high-performance systems built for real-world reliability.",
      icon: ShieldCheck,
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600"
    },
    {
      title: "Future Infrastructure",
      desc: "Contributing to the foundation of smart cities and connected robotic ecosystems.",
      icon: Globe,
      color: "from-cyan-500/10 to-sky-500/10",
      iconColor: "text-cyan-600"
    }
  ];

  // 8 Core Technologies Data
  const techCoreSystems = [
    {
      title: "Intelligent Mobility Engine",
      description: "Advanced autonomous mobility system designed for reliable operation in real-world environments, enabling smooth navigation across campuses, residential communities, hospitals, and logistics facilities.",
      icon: Navigation,
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600"
    },
    {
      title: "AI Vision System",
      description: "Multi-camera perception system that continuously analyzes the environment, detects obstacles, identifies pathways, and enhances situational awareness for safer navigation.",
      icon: Eye,
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600"
    },
    {
      title: "Autonomous Navigation",
      description: "Combines GPS positioning, onboard sensors, and intelligent path-planning algorithms to deliver accurate and efficient route execution.",
      icon: Map,
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600"
    },
    {
      title: "Embedded Computing Platform",
      description: "Powered by a high-performance edge computing architecture capable of real-time decision-making, sensor processing, and autonomous control.",
      icon: Cpu,
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600"
    },
    {
      title: "Smart Sensor Fusion",
      description: "Integrates data from cameras, ultrasonic sensors, IMU, and navigation modules to create a comprehensive understanding of the surrounding environment.",
      icon: Activity,
      color: "from-cyan-500/10 to-sky-500/10",
      iconColor: "text-cyan-600"
    },
    {
      title: "Advanced Battery Management",
      description: "Intelligent power management system that optimizes energy consumption, monitors battery health, and maximizes operational runtime.",
      icon: Battery,
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600"
    },
    {
      title: "Connected Robotics Platform",
      description: "Supports Wi-Fi, cellular connectivity, remote monitoring, software updates, and fleet-level management capabilities.",
      icon: Wifi,
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500"
    },
    {
      title: "Safety & Reliability Layer",
      description: "Built with multiple fail-safe mechanisms including obstacle avoidance, emergency stopping, remote override, and continuous system diagnostics.",
      icon: Shield,
      color: "from-rose-500/10 to-red-500/10",
      iconColor: "text-rose-600"
    }
  ];

  // 5 Core Highlights Data
  const techHighlights = [
    {
      title: "AI-Powered Navigation",
      desc: "Real-time route planning and adaptive movement."
    },
    {
      title: "Vision Intelligence",
      desc: "Advanced perception for obstacle detection and environment understanding."
    },
    {
      title: "Smart Connectivity",
      desc: "Cloud-enabled monitoring and management."
    },
    {
      title: "Energy Optimization",
      desc: "Efficient battery usage and intelligent power control."
    },
    {
      title: "Autonomous Operation",
      desc: "Designed for minimal human intervention."
    }
  ];

  // Who We Are Loop Carousel Data
  const [activeTab, setActiveTab] = useState(0);

  const whoWeArePillars = [
    {
      id: "01",
      tag: "Strategic Intent",
      title: "Accelerating Automation",
      desc: "Founded to accelerate the future of intelligent robotics, OVIC Labs focuses on building reliable, scalable, and high-performance solutions that address practical challenges faced by modern communities, businesses, and infrastructure.",
      icon: Cpu,
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600"
    },
    {
      id: "02",
      tag: "Tech Synthesis",
      title: "Integrated Intelligence",
      desc: "We bring together deep multi-disciplinary expertise in autonomous navigation, artificial intelligence, computer vision, embedded systems, and connected robotics to build unified, real-time decision-making platforms.",
      icon: Navigation,
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600"
    },
    {
      id: "03",
      tag: "Engineering Standard",
      title: "Operational Excellence",
      desc: "Every robotic platform we develop is engineered with an uncompromising focus on safety, reliability, efficiency, and adaptability, ensuring they can seamlessly evolve alongside changing demands of society.",
      icon: ShieldCheck,
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600"
    },
    {
      id: "04",
      tag: "Future Infrastructure",
      title: "Cooperative Ecosystems",
      desc: "We believe the future belongs to intelligent machines working alongside humans. OVIC Labs exists to establish the foundation of secure, connected robotic platforms that empower people and smart cities.",
      icon: Globe,
      color: "from-cyan-500/10 to-sky-500/10",
      iconColor: "text-cyan-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % whoWeArePillars.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-[#0A1A2F] relative overflow-hidden ${inter.className}`}>
      
      {/* Subtle modern corporate grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a1a2f02_1px,transparent_1px),linear-gradient(to_bottom,#0a1a2f03_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* 1. COMPANY VISION */}
      <section className="relative pt-44 pb-36 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-slate-100/80">
        
        {/* Muted luxury executive backdrop glowing gradient */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/40 to-blue-50/10 rounded-full filter blur-[120px] pointer-events-none opacity-40" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Authoritative Executive Position */}
          <div className="lg:col-span-5 flex flex-col items-start justify-between min-h-[480px]">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
                className={`text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#0A1A2F] mb-8 leading-[1.05] tracking-tight ${jakarta.className}`}
              >
                Company Vision
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 0.05 }}
                className="border-l-2 border-blue-600/30 pl-8 mb-12"
              >
                <p className="text-[#0A1A2F] text-xl font-normal leading-relaxed mb-4">
                  OVIC Labs envisions a world where autonomous robotics seamlessly integrates into everyday life, enabling safer, smarter, and more efficient mobility.
                </p>
                <p className="text-slate-500 text-base font-light leading-relaxed">
                  We are committed to developing next-generation robotic platforms designed for real-world environments, empowering industries, communities, and cities through innovation in artificial intelligence, autonomous navigation, and advanced engineering.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 0.1 }}
            >
              <button 
                onClick={() => document.getElementById('ovic-vision-x1')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex justify-center items-center gap-3 bg-[#0A1A2F] text-white px-9 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#112240] hover:scale-[1.01] transition-all duration-300 shadow-xl shadow-[#0A1A2F]/10 font-mono"
              >
                Explore OVIC Vision X1 <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Premium Linear Corporate Pillars */}
          <div className="lg:col-span-7 flex flex-col w-full">
            <div className="flex flex-col w-full divide-y divide-slate-100">
              {visionPillers.map((piller, idx) => {
                const IconComponent = piller.icon;
                const formattedNum = String(idx + 1).padStart(2, '0');
                
                return (
                  <motion.div
                    key={piller.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: idx * 0.05 }}
                    className="py-8 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-between group cursor-default transition-all duration-300 hover:px-4 -mx-4 rounded-2xl hover:bg-slate-50/50"
                  >
                    {/* Index & Icon */}
                    <div className="flex items-center gap-6 shrink-0">
                      <span className="text-xs font-mono font-bold tracking-wider text-slate-300 group-hover:text-blue-600 transition-colors duration-300">
                        {formattedNum}
                      </span>
                      <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0A1A2F] group-hover:text-white transition-all duration-300`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold text-[#0A1A2F] mb-2 tracking-tight transition-colors duration-300 group-hover:text-blue-600 ${jakarta.className}`}>
                        {piller.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light max-w-xl">
                        {piller.desc}
                      </p>
                    </div>

                    {/* Interactive Arrow Indicator */}
                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-slate-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#0A1A2F]">
                      <ChevronRight size={16} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 WHO WE ARE */}
      <section className="relative py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left side: Heading & Corporate Thesis */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-8">
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
                  className={`text-4xl sm:text-5xl font-extrabold text-[#0A1A2F] tracking-tight leading-tight mb-6 ${jakarta.className}`}
                >
                  Who We Are
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 0.05 }}
                  className="text-slate-500 text-base md:text-lg font-light leading-relaxed mb-10"
                >
                  OVIC Labs is a robotics and artificial intelligence company dedicated to developing next-generation autonomous systems designed for real-world environments.
                </motion.p>
              </div>

              {/* Interactive Vertical Loop Control Tabs */}
              <div className="flex flex-col gap-3">
                {whoWeArePillars.map((p, idx) => (
                  <button
                    key={p.tag}
                    onClick={() => setActiveTab(idx)}
                    className="flex items-center gap-4 text-left w-full group py-2"
                  >
                    {/* Circle Indicator */}
                    <div className="relative flex items-center justify-center shrink-0">
                      <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeTab === idx ? 'bg-blue-600 scale-125' : 'bg-slate-300 scale-100 group-hover:bg-slate-400'}`} />
                      {activeTab === idx && (
                        <motion.div 
                          layoutId="activeDotRing"
                          className="absolute w-5 h-5 rounded-full border border-blue-600/30"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                    
                    <span className={`text-xs font-bold tracking-wider uppercase transition-colors duration-300 font-mono ${activeTab === idx ? 'text-[#0A1A2F]' : 'text-slate-400 group-hover:text-slate-600'}`}>
                      {p.id} // {p.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side: High-Performance Looping Visual Terminal Card */}
            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
              <div className="bg-white border border-slate-100 rounded-[2rem] p-10 md:p-12 shadow-2xl relative overflow-hidden min-h-[380px] w-full max-w-[560px] flex flex-col justify-between">
                {/* Looping Active State Animation Container */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Icon Container with beautiful gradient circle */}
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${whoWeArePillars[activeTab].color} flex items-center justify-center`}>
                        {(() => {
                          const IconComp = whoWeArePillars[activeTab].icon;
                          return <IconComp className={`w-6 h-6 ${whoWeArePillars[activeTab].iconColor}`} />;
                        })()}
                      </div>
                      
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 font-mono">
                          Pillar {whoWeArePillars[activeTab].id}
                        </span>
                        <h4 className={`text-2xl font-bold text-[#0A1A2F] tracking-tight ${jakarta.className}`}>
                          {whoWeArePillars[activeTab].title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-slate-500 text-[15px] leading-relaxed font-light mt-2 max-w-xl">
                      {whoWeArePillars[activeTab].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Micro-Progress Loading Indicator Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-50 overflow-hidden">
                  <motion.div 
                    key={activeTab}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1.7 WHAT WE BUILD */}
      <section className="relative py-32 bg-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 z-10">
          
          {/* Section Header */}
          <div className="mb-20">
            
            <h2 className={`text-4xl sm:text-5xl font-extrabold text-[#0A1A2F] tracking-tight mb-10 leading-tight ${jakarta.className}`}>
              What We Build
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <p className="lg:col-span-5 text-slate-600 text-lg md:text-xl font-normal leading-relaxed">
                At OVIC Labs, we develop intelligent robotic technologies designed to bridge the gap between artificial intelligence, autonomous mobility, and real-world automation. Our focus is on creating advanced robotic platforms that can operate reliably in dynamic environments while delivering practical value across industries.
              </p>
              <p className="lg:col-span-7 text-slate-400 text-base md:text-lg font-light leading-relaxed">
                We believe the future of robotics extends beyond machines—it is about building intelligent systems that can perceive, navigate, communicate, and interact with the world around them. Through the integration of AI, autonomous navigation, embedded computing, and connected technologies, we are engineering solutions that redefine how people, businesses, and communities move, deliver, and automate.
              </p>
            </div>
          </div>

          {/* 3-Column Core Capabilities Grid with Premium 3D Y-Axis Flipping Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            
            {/* Card 1: Autonomous Delivery Robotics */}
            <div className="[perspective:1000px] h-[290px] w-full group cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-slate-50/40 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-600 mb-6">
                      <Box className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold text-[#0A1A2F] mb-4 tracking-tight ${jakarta.className}`}>
                      Autonomous Delivery Robotics
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      We are developing next-generation autonomous delivery robots capable of navigating real-world environments with intelligence, safety, and efficiency. Designed for campuses, residential communities, hospitals, and commercial facilities.
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-[#0A1A2F] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <h4 className={`text-lg font-bold text-white mb-4 ${jakarta.className}`}>Operational Specs</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      Our delivery systems combine intelligent navigation, obstacle detection, autonomous decision-making, and connected fleet capabilities to create a seamless delivery experience while reducing operational complexity and improving efficiency.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Intelligent Mobility Platforms */}
            <div className="[perspective:1000px] h-[290px] w-full group cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-slate-50/40 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-600 mb-6">
                      <Navigation className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold text-[#0A1A2F] mb-4 tracking-tight ${jakarta.className}`}>
                      Intelligent Mobility Platforms
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      Mobility is at the core of robotics. OVIC Labs is building advanced robotic mobility platforms engineered to operate across diverse environments and terrain conditions.
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-[#0A1A2F] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <h4 className={`text-lg font-bold text-white mb-4 ${jakarta.className}`}>Operational Specs</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      By combining robust mechanical engineering with intelligent software systems, we create mobility solutions that are adaptable, scalable, and ready for future applications in logistics, transportation, and smart infrastructure.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 3: Artificial Intelligence Systems */}
            <div className="[perspective:1000px] h-[290px] w-full group cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-slate-50/40 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold text-[#0A1A2F] mb-4 tracking-tight ${jakarta.className}`}>
                      Artificial Intelligence Systems
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      Artificial intelligence powers every aspect of autonomous operation. Our AI systems are designed to enable robots to perceive surroundings, interpret data, and make safe operational decisions.
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-[#0A1A2F] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <h4 className={`text-lg font-bold text-white mb-4 ${jakarta.className}`}>Operational Specs</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      Through machine learning, computer vision, sensor fusion, and edge computing technologies, we are developing intelligent systems capable of operating in complex and changing environments with minimal human intervention.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 4: Autonomous Navigation Technologies */}
            <div className="[perspective:1000px] h-[290px] w-full group cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-slate-50/40 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-amber-600 mb-6">
                      <Map className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold text-[#0A1A2F] mb-4 tracking-tight ${jakarta.className}`}>
                      Autonomous Navigation Technologies
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      Navigation is one of the most critical challenges in robotics. OVIC Labs develops navigation systems that allow robotic platforms to identify safe pathways, avoid obstacles, and reach destinations.
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-[#0A1A2F] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <h4 className={`text-lg font-bold text-white mb-4 ${jakarta.className}`}>Operational Specs</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      By combining GPS positioning, vision-based perception, environmental sensing, and intelligent route planning, we are building navigation technologies that enable reliable autonomous mobility in real-world scenarios.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 5: Connected Robotics Ecosystems */}
            <div className="[perspective:1000px] h-[290px] w-full group cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-slate-50/40 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-600 mb-6">
                      <Wifi className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold text-[#0A1A2F] mb-4 tracking-tight ${jakarta.className}`}>
                      Connected Robotics Ecosystems
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      The future of robotics is connected. We are creating technologies that enable robotic systems to communicate with cloud platforms, fleet management systems, operators, and infrastructure in real time.
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-[#0A1A2F] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <h4 className={`text-lg font-bold text-white mb-4 ${jakarta.className}`}>Operational Specs</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      Connected robotics allows organizations to monitor operations, optimize performance, manage fleets, and gain valuable insights through intelligent data-driven systems. This creates a foundation for scalable autonomous operations.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 6: Robotics Research & Innovation */}
            <div className="[perspective:1000px] h-[290px] w-full group cursor-pointer">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-slate-50/40 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-rose-500/5 border border-rose-500/10 flex items-center justify-center text-rose-600 mb-6">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold text-[#0A1A2F] mb-4 tracking-tight ${jakarta.className}`}>
                      Robotics Research & Innovation
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      Innovation is at the heart of OVIC Labs. We continuously explore emerging technologies and future mobility solutions to push the boundaries of what autonomous systems can achieve.
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-[#0A1A2F] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] [webkit-backface-visibility:hidden]">
                  <div>
                    <h4 className={`text-lg font-bold text-white mb-4 ${jakarta.className}`}>Operational Specs</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      Our research initiatives focus on next-generation robotics, intelligent automation, advanced mobility platforms, energy-efficient systems, and future applications that have the potential to reshape industries worldwide.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Building the Future - High Impact Enterprise Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2 }}
            className="bg-[#0A1A2F] text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl"
          >
            {/* Decorative technical line art watermark inside */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
            <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
              <div className="lg:col-span-12">
                <h3 className={`text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight ${jakarta.className}`}>
                  Building the Future
                </h3>
                <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-5xl">
                  At OVIC Labs, we are not simply building robots. We are building intelligent technologies that empower people, enhance efficiency, and create new possibilities for the future of mobility and automation. Every system we develop is guided by a commitment to innovation, engineering excellence, and real-world impact—creating robotic solutions that are designed not only for today, but for the future.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY & PRODUCT SHOWCASE */}
      <section id="ovic-vision-x1" className="relative py-32 bg-slate-50 border-t border-slate-100">
        
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Product Branding & Corporate Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Professional Sans-Serif Corporate Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springAnim }}
                className={`text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#0A1A2F] mb-6 leading-[1.08] ${jakarta.className}`}
              >
                OVIC Vision X1
              </motion.h1>
              
              {/* Corporate Product Description */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springAnim, delay: 0.05 }}
                className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-normal mb-10"
              >
                The enterprise standard in autonomous last-mile logistics. Engineered specifically for high-efficiency food delivery and secure small package distribution, the OVIC Vision X1 delivers automated, reliable transport for payloads up to 15 kg. Combining precision guidance with a robust all-terrain chassis, it secures and streamlines fleet operations across corporate campuses, universities, and residential communities.
              </motion.p>

              {/* Premium CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springAnim, delay: 0.1 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
              >
                <button 
                  onClick={() => document.getElementById('technology-core')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex justify-center items-center gap-2 bg-[#0A1A2F] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#112240] hover:scale-[1.02] hover:shadow-lg transition-all shadow-xl shadow-[#0A1A2F]/10"
                >
                  Explore Technology Core <ChevronRight size={16} />
                </button>
              </motion.div>

              {/* Corporate Highlights Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full border-t border-slate-200 pt-10"
              >
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Payload Capacity</h5>
                  <p className="text-xl font-bold text-[#0A1A2F]">15 kg</p>
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Maximum Speed</h5>
                  <p className="text-xl font-bold text-[#0A1A2F]">25 km/h</p>
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Operating Speed</h5>
                  <p className="text-xl font-bold text-[#0A1A2F]">8–15 km/h</p>
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Runtime</h5>
                  <p className="text-xl font-bold text-[#0A1A2F]">2–3 Hours</p>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Clean Product Showcase Image */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[460px] aspect-square rounded-[2rem] border border-slate-200/60 shadow-2xl shadow-slate-200/50 overflow-hidden bg-slate-50 flex items-center justify-center p-2"
              >
                {/* Pure Product Image */}
                <img 
                  src="/vision_x1.jpg" 
                  alt="OVIC Vision X1 Delivery Robot" 
                  className="w-full h-full object-cover rounded-[1.8rem] shadow-inner"
                />
              </motion.div>
            </div>

          </div>
        </div>

      </section>

      {/* 3. TECHNOLOGY CORE & HIGHLIGHTS */}
      <section id="technology-core" className="relative py-32 bg-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 z-10">
          
          {/* Header Introduction */}
          <div className="mb-20 max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className={`text-4xl sm:text-5xl font-bold text-[#0A1A2F] mb-6 leading-tight ${jakarta.className}`}
            >
              Technology Core
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg md:text-xl font-normal leading-relaxed mt-6"
            >
              The technological infrastructure powering the OVIC Vision X1 represents an industry-leading standard in autonomous vehicle engineering. Deeply optimized for secure, multi-terrain logistics, the platform guarantees absolute operational integrity for food delivery services and small-package transport.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Detailed System Cards (8 Core Systems) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {techCoreSystems.map((sys, idx) => {
                const IconComponent = sys.icon;
                return (
                  <motion.div
                    key={sys.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springAnim, delay: idx * 0.05 }}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm hover:bg-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon with beautiful HSL gradient circle */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${sys.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${sys.iconColor}`} />
                      </div>
                      
                      <h3 className={`text-xl font-bold text-[#0A1A2F] mb-3 ${jakarta.className}`}>
                        {sys.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed font-light">
                        {sys.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right side: Sticky Technology Core Highlights Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8">
              
              <div className="bg-[#0A1A2F] text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative background grid watermark inside the dark panel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className={`text-2xl font-bold mb-8 relative z-10 ${jakarta.className}`}>
                  Technology Core Highlights
                </h3>

                <div className="space-y-6 relative z-10">
                  {techHighlights.map((hl, index) => (
                    <motion.div 
                      key={hl.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white text-base mb-1">
                            {hl.title}
                          </h4>
                          <p className="text-slate-400 text-xs font-light leading-relaxed">
                            {hl.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Extra Professional Callout Card */}
              <div className="border border-slate-200 rounded-3xl p-8 bg-white flex flex-col gap-4">
                <h4 className={`text-lg font-bold text-[#0A1A2F] ${jakarta.className}`}>
                  Ready for deployment?
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Get in touch with our solutions engineering team to evaluate how OVIC Vision X1 integrates into your active campus infrastructure.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline mt-2">
                  Contact Solutions Engineer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
