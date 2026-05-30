'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Shield, Lock, Database, Globe, Server, UserCheck, FileText, Eye, Truck, Radio, Activity, Cpu } from 'lucide-react';
import { Space_Grotesk, Exo_2 } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const exo2 = Exo_2({ subsets: ['latin'] });

const SECTIONS = [
  {
    id: 'scope',
    title: 'Scope and Application',
    icon: Globe,
    description: 'This Privacy Policy applies to all information processed by OVIC Labs across our entire ecosystem. This includes our corporate web infrastructure, software applications, AI models, physical robotics platforms (including autonomous delivery units and bipedal humanoids), and related enterprise integration services. By interacting with our hardware in public spaces or utilizing our enterprise services, you acknowledge the data practices detailed below.',
    bullets: []
  },
  {
    id: 'humanoid',
    title: 'Humanoid Robotics & Biometric Processing',
    icon: Eye,
    description: 'Our advanced bipedal humanoid robots operate in complex, human-centric environments. To ensure safe and natural interaction, these units collect specific environmental and interaction data. We emphasize on-device processing to minimize cloud data transmission.',
    bullets: [
      <><strong>Visual Spatial Mapping:</strong> High-resolution depth cameras and LiDAR scanners create temporary 3D point clouds of the immediate environment to prevent collisions. This data is highly volatile and purged periodically.</>,
      <><strong>Facial Detection (Non-Identifying):</strong> Our vision systems use localized facial detection algorithms to establish eye contact and direct attention. We do not use facial recognition to identify individuals in public or unconsented environments.</>,
      <><strong>Acoustic Processing:</strong> Directional microphone arrays capture ambient sound and voice commands. Audio is processed on-edge using localized natural language processing (NLP) models. Raw audio is not stored permanently unless explicitly authorized for diagnostic review.</>
    ]
  },
  {
    id: 'delivery',
    title: 'Autonomous Delivery Fleet Data',
    icon: Truck,
    description: 'OVIC Labs operates fleets of autonomous delivery robots navigating public sidewalks and roads. These systems must collect real-time data to navigate safely alongside pedestrians, pets, and vehicles.',
    bullets: [
      <><strong>Dynamic Obstacle Avoidance:</strong> Delivery units continuously record kinematics, pedestrian proximity alerts, and object classification data (e.g., distinguishing a person from a traffic cone) to optimize routing and safety algorithms.</>,
      <><strong>Public Anonymization Pipelines:</strong> Video feeds used for remote monitoring or machine learning training are subjected to automated, edge-based blurring algorithms that obscure faces, license plates, and other personally identifiable information (PII) before entering our permanent cloud datasets.</>,
      <><strong>Geospatial Tracking:</strong> Continuous GPS and RTK (Real-Time Kinematic) positioning data is logged to track delivery status, measure fleet efficiency, and recover units in case of hardware failure or tampering.</>
    ]
  },
  {
    id: 'teleoperation',
    title: 'Teleoperation and Human-in-the-Loop',
    icon: Radio,
    description: 'To maintain the highest safety standards, our autonomous systems occasionally require human intervention. During these edge-case scenarios, data collection paradigms temporarily shift.',
    bullets: [
      <><strong>Remote Operator Access:</strong> Authorized teleoperators can access live, encrypted video and audio feeds when a robot encounters an unresolvable navigation state. This access is cryptographically logged and heavily audited.</>,
      <><strong>Diagnostic Logging:</strong> During active teleoperation, all operator inputs, robot responses, and network latency metrics are recorded strictly for safety compliance and to train future autonomous recovery models.</>
    ]
  },
  {
    id: 'collection',
    title: 'Enterprise Data Collection',
    icon: Database,
    description: 'Beyond our physical hardware, we collect traditional digital data to facilitate B2B relationships, software access, and fleet management integration.',
    bullets: [
      <><strong>Account Information:</strong> Corporate contact details, API keys, billing infrastructure, and SLA agreements required for enterprise platform integration and deployment scaling.</>,
      <><strong>Infrastructure Analytics:</strong> IP addresses, device identifiers, and endpoint interaction metrics collected via our fleet management software to optimize dashboard performance and ensure uptime.</>
    ]
  },
  {
    id: 'purpose',
    title: 'Lawful Basis and Core Purposes',
    icon: Activity,
    description: 'We process data exclusively under recognized legal frameworks, ensuring that our AI advancement does not compromise individual privacy rights.',
    bullets: [
      <><strong>Safety First:</strong> The primary purpose of environmental data collection is the physical safety of humans interacting with our heavy robotic machinery in unstructured environments.</>,
      <><strong>Algorithmic Training:</strong> Anonymized, aggregated telemetry and heavily sanitized vision data are used to train the next generation of foundational robotics models.</>,
      <><strong>Contractual Fulfillment:</strong> Processing enterprise data is legally necessary to fulfill commercial delivery contracts, SLA guarantees, and hardware maintenance schedules.</>
    ]
  },
  {
    id: 'sharing',
    title: 'Data Sharing and Disclosure',
    icon: Server,
    description: 'OVIC Labs maintains a strict prohibition against the monetization or sale of personal or environmental data. Disclosures are strictly limited to necessary operational functions.',
    bullets: [
      <><strong>Cloud Infrastructure Providers:</strong> Encrypted data is stored with ISO 27001 certified cloud providers operating under strict Data Processing Agreements (DPAs).</>,
      <><strong>Regulatory Bodies:</strong> We may share anonymized safety metrics or incident reports with local transportation and robotics regulatory authorities to maintain operating permits and foster public trust.</>,
      <><strong>Law Enforcement:</strong> We require valid, legally binding subpoenas or court orders before disclosing any hardware logs or video footage to law enforcement agencies, challenging overly broad requests when appropriate.</>
    ]
  },
  {
    id: 'security',
    title: 'Hardware & Cloud Security',
    icon: Lock,
    description: 'Our security posture spans both our centralized cloud infrastructure and the physical robots operating autonomously in the field.',
    bullets: [
      <><strong>Hardware-Backed Edge Encryption:</strong> Data stored locally on robotic hardware is encrypted using secure enclaves (TPMs), rendering it entirely inaccessible if a unit is physically tampered with, dismantled, or stolen.</>,
      <><strong>In-Transit Security Protocols:</strong> All telemetry transmitted between robots, edge nodes, and central servers utilizes mutual TLS (mTLS) authentication and AES-256 encryption to prevent interception or spoofing.</>
    ]
  },
  {
    id: 'rights',
    title: 'Your Privacy Rights',
    icon: UserCheck,
    description: 'OVIC Labs respects global privacy regulations, including GDPR and CCPA, extending these rights to individuals interacting with both our digital properties and physical hardware.',
    bullets: [
      <><strong>Right to Access & Deletion:</strong> If you believe your unblurred image or identifiable data was inadvertently captured and retained by our robotic fleet, you may request access to or deletion of that specific data record.</>,
      <><strong>Opt-Out of Profiling:</strong> While we do not construct personal profiles from public robotic interactions, enterprise users may opt out of non-essential analytics tracking in our fleet management dashboard.</>
    ]
  }
];

function PolicyCard({ title, description, bullets, icon: Icon, id, index }: any) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative w-full mb-12"
    >
      <div className="bg-white border border-neutral-200 p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-800">
            <Icon size={20} className="md:w-[22px] md:h-[22px]" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">{title}</h3>
            <p className="text-neutral-600 leading-relaxed text-sm md:text-[15px] mb-4">
              {description}
            </p>
            {bullets && bullets.length > 0 && (
              <div className="space-y-4 mt-6">
                {bullets.map((bullet: any, i: number) => (
                  <div key={i} className="flex items-start group/bullet">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 mr-4 border border-blue-100 transition-colors group-hover/bullet:bg-blue-100 group-hover/bullet:border-blue-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </div>
                    <div className="text-neutral-600 text-sm md:text-[15px] leading-relaxed">
                      {bullet}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {id === 'rights' && (
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <p className="text-neutral-600 leading-relaxed text-sm md:text-[15px]">
                  To exercise these rights regarding either enterprise data or robotic interactions, please submit a formal request to our Data Protection Officer (DPO) via the contact information provided below. We commit to responding within the statutory timeframes required by applicable law.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PrivacyPolicy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className={`min-h-screen bg-transparent relative ${spaceGrotesk.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10">
        {/* Hero Section */}
        <motion.div 
          style={{ y: y1 }}
          className="mb-12 md:mb-20 max-w-3xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-4 md:mb-6 ${exo2.className}`}
          >
            Privacy Policy
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-xs sm:text-sm text-neutral-500 font-medium mt-2"
          >
            <p>Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <span className="hidden sm:inline">•</span>
            <p>Version: 2.1.0</p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* Sticky Sidebar */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm"
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 px-4">Contents</h4>
                <nav className="flex flex-col gap-1">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors text-left text-sm font-medium ${
                        activeSection === section.id 
                          ? 'bg-neutral-100 text-neutral-900' 
                          : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
                      }`}
                    >
                      <span className="truncate pr-4">{section.title}</span>
                      {activeSection === section.id && (
                        <motion.div layoutId="activeMarker" className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      )}
                    </button>
                  ))}
                </nav>
              </motion.div>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="flex-1 max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed text-neutral-700 mb-10 md:mb-12 border-l-[3px] md:border-l-4 border-neutral-300 pl-4 md:pl-6"
            >
              At <strong>OVIC Labs</strong> ("we," "us," or "our"), we recognize the critical importance of data privacy in the era of advanced robotics and artificial intelligence. This Privacy Policy outlines our corporate practices regarding the collection, processing, and safeguarding of personal and operational data across our platforms, services, and physical robotic deployments.
            </motion.p>

            <div className="space-y-4">
              {SECTIONS.map((section, index) => (
                <PolicyCard 
                  key={section.id} 
                  id={section.id}
                  title={section.title} 
                  description={section.description}
                  bullets={section.bullets}
                  icon={section.icon} 
                  index={index}
                />
              ))}
            </div>

            {/* Corporate Contact Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 md:mt-16 bg-neutral-900 text-white p-6 sm:p-8 md:p-10 rounded-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Corporate Contact Information</h3>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base mb-6 md:mb-8">
                For inquiries regarding this Privacy Policy, our data architecture, or to exercise your privacy rights, please direct your correspondence to our compliance team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Team</p>
                  <p className="font-medium">Legal & Compliance (DPO)</p>
                  <a href="mailto:privacy@oviclabs.com" className="text-neutral-300 hover:text-white transition-colors">privacy@oviclabs.com</a>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
