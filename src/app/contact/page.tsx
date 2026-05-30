'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Space_Grotesk, Exo_2 } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Mail, MapPin, ArrowRight } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const exo2 = Exo_2({ subsets: ['latin'] });

const FAQS = [
  {
    question: "What types of autonomous robots does OVIC Labs develop?",
    answer: "OVIC Labs specializes in a wide range of autonomous solutions, primarily focusing on last-mile delivery robots, enterprise logistics platforms, warehouse automation systems, and advanced humanoid robotics for complex tasks."
  },
  {
    question: "How can I partner with OVIC Labs for enterprise robotic solutions?",
    answer: "We offer tailored B2B partnerships and pilot programs. Please use the contact form on this page to detail your use case, and our enterprise deployment team will reach out to schedule a consultation."
  },
  {
    question: "Are your delivery robots safe to operate in pedestrian-heavy areas?",
    answer: "Absolutely. Our robots are equipped with state-of-the-art computer vision, LiDAR, and redundant safety systems that allow them to safely navigate complex, high-traffic pedestrian environments while strictly adhering to local regulations."
  },
  {
    question: "Do you offer custom robotics engineering for specific industries?",
    answer: "Yes, our robotic platforms are highly modular. Our R&D and engineering teams frequently collaborate with industry partners to customize hardware payloads and AI software models to meet specific operational requirements."
  },
  {
    question: "What is the typical deployment timeline for a new fleet of robots?",
    answer: "Deployment timelines vary based on scale and customization. Standard fleet integrations typically take 4 to 8 weeks from initial site mapping to full operational launch, including staff onboarding and software setup."
  },
  {
    question: "How does OVIC Labs handle data privacy and AI ethics?",
    answer: "We employ strict end-to-end encryption for all telemetry and sensor data. Our AI models are trained on anonymized datasets, ensuring full compliance with global privacy standards, including GDPR and CCPA."
  },
  {
    question: "Do you provide ongoing maintenance and software updates?",
    answer: "Yes. Our Cloud Robotics platform provides seamless over-the-air (OTA) software updates, and we offer comprehensive hardware maintenance SLAs to ensure maximum uptime for your robotic fleets."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className={`min-h-screen bg-transparent relative ${spaceGrotesk.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-600">Start a conversation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-6">
            Let's build the future.
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
            Have questions about our robotics platforms, enterprise partnerships, or media inquiries? Our team is here to help you navigate the future of autonomy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Form & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-200 shadow-xl shadow-neutral-100/50 mb-10">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Send us a message</h3>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-neutral-700">First Name</label>
                    <input type="text" placeholder="John" className="px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-neutral-700">Last Name</label>
                    <input type="text" placeholder="Doe" className="px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-700">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-700">Subject</label>
                  <select className="px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all appearance-none cursor-pointer">
                    <option>Enterprise Partnership</option>
                    <option>Product Inquiry</option>
                    <option>Media & Press</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-neutral-700">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"></textarea>
                </div>
                <button type="button" className="w-full mt-2 py-4 rounded-xl bg-black text-white font-semibold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors group">
                  Submit Inquiry
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Direct Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 bg-white p-6 rounded-3xl border border-neutral-200 shadow-lg shadow-neutral-100/50 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black mb-2">
                  <Mail size={20} />
                </div>
                <h4 className="font-bold text-neutral-900">Email Us</h4>
                <p className="text-sm text-neutral-500">For general inquiries and support.</p>
                <a href="mailto:contact@oviclabs.com" className="text-sm font-semibold text-black hover:underline mt-1">contact@oviclabs.com</a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-neutral-500">Find quick answers to common questions about our robotics platforms and services.</p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-lg shadow-neutral-100/50 border-neutral-300' : 'bg-transparent hover:bg-white/50 hover:border-neutral-300'}`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-semibold text-neutral-900 pr-8">{faq.question}</span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, type: "spring", bounce: 0 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-500'}`}
                      >
                        <ChevronDown size={16} strokeWidth={2.5} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-neutral-500 leading-relaxed text-sm">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
