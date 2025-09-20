"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NeuralGlobeScene from "@/components/NeuralGlobeScene";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Lightbulb,
  Cpu,
  Brain,
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import DrownneSwarmScene from "@/components/DroneSwarmScene";
import AICoreScene from "@/components/AICoreScene";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  venue: string;
  category: "workshop" | "competition" | "talk" | "exhibition" | "networking";
  speaker?: string;
  image?: string;
  level: "beginner" | "intermediate" | "advanced" | "all";
  tags: string[];
  filterType: "technical" | "non-technical" | "workshop" | "combo";
  registrationUrl?: string; // Google Form per event
}

const events: Event[] = [
  // Non-Technical
  {
    id: "ce-nt-1",
    title: "Climb or Crawl",
    description: "Fun physical challenge event hosted by CSPIT-CE. Team up and race through obstacles.",
    date: "2026-03-15",
    time: "10:00",
    duration: "2 hours",
    venue: "Sports Ground",
    category: "competition",
    level: "all",
    tags: ["Non-Technical", "Team", "Fun"],
    image: "/images/events/climb-or-crawl.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "aiml-nt-1",
    title: "Mindi Cot",
    description: "Classic campus fest game with a twist. Outwit and outplay your opponents.",
    date: "2026-03-15",
    time: "13:00",
    duration: "90 min",
    venue: "Central Lawn",
    category: "competition",
    level: "all",
    tags: ["Non-Technical", "Game"],
    image: "/images/events/mindi-cot.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "cse-nt-1",
    title: "Alice in Borderland",
    description: "Mystery and puzzle hunt inspired by the series. Solve, survive, succeed.",
    date: "2026-03-15",
    time: "15:00",
    duration: "2 hours",
    venue: "CSE Block",
    category: "competition",
    level: "all",
    tags: ["Puzzle", "Hunt"],
    image: "/images/events/alice-borderland.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "it-nt-1",
    title: "Valorant: A Tactical Showdown",
    description: "Esports tournament featuring 5v5 Valorant battles.",
    date: "2026-03-15",
    time: "18:00",
    duration: "3 hours",
    venue: "Auditorium LAN Arena",
    category: "competition",
    level: "all",
    tags: ["Esports", "Valorant"],
    image: "/images/events/valorant.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "ec-nt-1",
    title: "Beam Bender",
    description: "Creative construction and design challenge with limited resources.",
    date: "2026-03-16",
    time: "11:00",
    duration: "2 hours",
    venue: "EC Lobby",
    category: "competition",
    level: "all",
    tags: ["Build", "Design"],
    image: "/images/events/beam-bender.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "cl-nt-1",
    title: "Wipeout Warriors",
    description: "Obstacle fun runs with splash zones and surprises.",
    date: "2026-03-16",
    time: "16:00",
    duration: "2 hours",
    venue: "Open Grounds",
    category: "competition",
    level: "all",
    tags: ["Obstacle", "Fun"],
    image: "/images/events/wipeout.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "me-nt-1",
    title: "Mock Parliament",
    description: "Debate and policy simulation where teams act as ministers and opposition.",
    date: "2026-03-17",
    time: "10:00",
    duration: "2 hours",
    venue: "Seminar Hall A",
    category: "competition",
    level: "all",
    tags: ["Debate", "Policy"],
    image: "/images/events/mock-parliament.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "ee-nt-1",
    title: "Wire Loop Game",
    description: "Steady hands challenge—guide the loop without touching the wire.",
    date: "2026-03-17",
    time: "13:00",
    duration: "90 min",
    venue: "EE Lab Foyer",
    category: "competition",
    level: "all",
    tags: ["Skill", "Focus"],
    image: "/images/events/wire-loop.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "ee-nt-2",
    title: "Shock and Block",
    description: "Fast-paced circuit puzzle and reaction challenge.",
    date: "2026-03-17",
    time: "15:00",
    duration: "90 min",
    venue: "EE Workshop Area",
    category: "competition",
    level: "all",
    tags: ["Circuit", "Puzzle"],
    image: "/images/events/shock-block.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },

  // Workshops
  {
    id: "aiml-ws-1",
    title: "Foundation of Agentic System: From Prompt to Production",
    description: "Build autonomous agentic AI systems from prompts to deployable workflows.",
    date: "2026-03-15",
    time: "11:00",
    duration: "3 hours",
    venue: "AI/ML Lab",
    category: "workshop",
    level: "intermediate",
    tags: ["Agentic AI", "LLMs"],
    image: "/images/events/agentic.jpg",
    filterType: "workshop",
    registrationUrl: "https://forms.gle/gRGAp7MwyFzyhU3JA",
  },
  {
    id: "it-ws-1",
    title: "Hacking & Hardening: Web Vulnerabilities and WAF",
    description: "Hands-on web security workshop covering common vulns and setting up WAF.",
    date: "2026-03-15",
    time: "14:00",
    duration: "3 hours",
    venue: "Cyber Lab",
    category: "workshop",
    level: "intermediate",
    tags: ["Security", "WAF", "OWASP"],
    image: "/images/events/web-waf.jpg",
    filterType: "workshop",
    registrationUrl: "https://forms.gle/gRGAp7MwyFzyhU3JA",
  },
  {
    id: "ec-ws-1",
    title: "Hands-on Workshop on Design of Drone and Flight Dynamics",
    description: "Design basics, flight dynamics, and controller tuning for drones.",
    date: "2026-03-16",
    time: "10:00",
    duration: "4 hours",
    venue: "Aero Workshop",
    category: "workshop",
    level: "intermediate",
    tags: ["Drones", "Flight"],
    image: "/images/events/drone-design.jpg",
    filterType: "workshop",
    registrationUrl: "https://forms.gle/gRGAp7MwyFzyhU3JA",
  },
  {
    id: "cl-ws-1",
    title: "Building Information Modeling (BIM) Technical Workshop",
    description: "BIM fundamentals and practical modeling workflow for civil projects.",
    date: "2026-03-16",
    time: "11:00",
    duration: "3 hours",
    venue: "Design Studio",
    category: "workshop",
    level: "intermediate",
    tags: ["BIM", "Civil"],
    image: "/images/events/bim.jpg",
    filterType: "workshop",
    registrationUrl: "https://forms.gle/gRGAp7MwyFzyhU3JA",
  },
  {
    id: "me-ws-1",
    title: "CAD2CREATE: The 3D Printing Journey",
    description: "From CAD modeling to slicing and printing—your first 3D-printed part.",
    date: "2026-03-17",
    time: "09:30",
    duration: "3 hours",
    venue: "Maker Lab",
    category: "workshop",
    level: "beginner",
    tags: ["CAD", "3D Printing"],
    image: "/images/events/3d-print.jpg",
    filterType: "workshop",
    registrationUrl: "https://forms.gle/gRGAp7MwyFzyhU3JA",
  },
  {
    id: "ee-ws-1",
    title: "Cable and Wire Testing as per Indian Standards",
    description: "Quality and compliance testing of cables and wires per IS standards.",
    date: "2026-03-17",
    time: "10:30",
    duration: "2 hours",
    venue: "Testing Lab",
    category: "workshop",
    level: "beginner",
    tags: ["Testing", "Standards"],
    image: "/images/events/cable-testing.jpg",
    filterType: "workshop",
    registrationUrl: "https://forms.gle/gRGAp7MwyFzyhU3JA",
  },
  {
    id: "depstar-it-ws-1",
    title: "From Pixels to Patterns: Image Analysis Using Artificial Neural Networks",
    description: "Intro to image analysis with CNNs and classical techniques.",
    date: "2026-03-18",
    time: "11:00",
    duration: "3 hours",
    venue: "DEPSTAR Lab",
    category: "workshop",
    level: "beginner",
    tags: ["CNN", "Vision"],
    image: "/images/events/pixels-patterns.jpg",
    filterType: "workshop",
    registrationUrl: "https://forms.gle/gRGAp7MwyFzyhU3JA",
  },

  // Technical events
  {
    id: "tech-1",
    title: "code pie",
    description: "Rapid coding sprints and mini challenges arranged by CSPIT-CE.",
    date: "2026-03-15",
    time: "09:30",
    duration: "3 hours",
    venue: "Lab A",
    category: "competition",
    level: "all",
    tags: ["Coding", "Sprint"],
    image: "/images/events/code-pie.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-2",
    title: "Bot Roast + AI Repair Challenge",
    description: "Debug and improve malfunctioning bots to pass tricky tests.",
    date: "2026-03-15",
    time: "12:30",
    duration: "2 hours",
    venue: "AI Lab",
    category: "competition",
    level: "intermediate",
    tags: ["AI", "Debug"],
    image: "/images/events/bot-roast.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-3",
    title: "HackQuest Arena (Capture the Flag)",
    description: "Cybersecurity CTF featuring web, crypto, and forensics challenges.",
    date: "2026-03-15",
    time: "15:30",
    duration: "4 hours",
    venue: "CTF Hall",
    category: "competition",
    level: "advanced",
    tags: ["Security", "CTF"],
    image: "/images/events/hackquest.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-4",
    title: "AldeaForge: Build the Future",
    description: "Innovation build-a-thon to create prototypes for tomorrow's cities.",
    date: "2026-03-15",
    time: "16:00",
    duration: "3 hours",
    venue: "Innovation Theater",
    category: "competition",
    level: "all",
    tags: ["Innovation", "Prototype"],
    image: "/images/events/aldeaforge.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-5",
    title: "SumoBots",
    description: "Design and battle autonomous robots in the ring.",
    date: "2026-03-16",
    time: "10:00",
    duration: "3 hours",
    venue: "Robotics Arena",
    category: "competition",
    level: "all",
    tags: ["Robotics", "Autonomous"],
    image: "/images/events/sumobots.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-6",
    title: "Torque the Tower",
    description: "Mechanical design challenge—build the tallest, strongest tower.",
    date: "2026-03-16",
    time: "14:00",
    duration: "2 hours",
    venue: "Workshop Yard",
    category: "competition",
    level: "all",
    tags: ["Mechanical", "Design"],
    image: "/images/events/torque-tower.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-7",
    title: "Robo-CAD Modeling Challenge",
    description: "CAD challenge to model a robot mechanism under time pressure.",
    date: "2026-03-16",
    time: "16:00",
    duration: "2 hours",
    venue: "CAD Lab",
    category: "competition",
    level: "intermediate",
    tags: ["CAD", "Robotics"],
    image: "/images/events/robo-cad.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-8",
    title: "ROBO Race",
    description: "Speed race for autonomous line-following robots.",
    date: "2026-03-17",
    time: "10:00",
    duration: "2 hours",
    venue: "Track Arena",
    category: "competition",
    level: "all",
    tags: ["Robotics", "Race"],
    image: "/images/events/robo-race.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-9",
    title: "Drone Race",
    description: "FPV drone time-trial race on a technical course.",
    date: "2026-03-17",
    time: "15:00",
    duration: "2 hours",
    venue: "Outdoor Arena",
    category: "competition",
    level: "advanced",
    tags: ["Drones", "FPV"],
    image: "/images/events/drone-race.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-10",
    title: "Logic Carnival",
    description: "Puzzle-packed logic games and brain teasers across stations.",
    date: "2026-03-18",
    time: "11:00",
    duration: "2 hours",
    venue: "DEPSTAR CE Block",
    category: "competition",
    level: "all",
    tags: ["Logic", "Puzzles"],
    image: "/images/events/logic-carnival.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "tech-11",
    title: "RoboSoccer League",
    description: "Autonomous or RC robots play competitive soccer matches.",
    date: "2026-03-18",
    time: "14:30",
    duration: "3 hours",
    venue: "DEPSTAR CSE Arena",
    category: "competition",
    level: "all",
    tags: ["Robotics", "Soccer"],
    image: "/images/events/robo-soccer.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "depstar-ce-nt-1",
    title: "BGMI",
    description: "Battle royale tournament for mobile gamers.",
    date: "2026-03-18",
    time: "10:00",
    duration: "3 hours",
    venue: "Gaming Zone",
    category: "competition",
    level: "all",
    tags: ["Gaming", "Mobile"],
    image: "/images/events/bgmi.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "depstar-cse-nt-1",
    title: "Squid Game India",
    description: "Adapted mini-games inspired by Squid Game. Win or be eliminated.",
    date: "2026-03-18",
    time: "14:00",
    duration: "2 hours",
    venue: "Main Lawn",
    category: "competition",
    level: "all",
    tags: ["Game", "Challenge"],
    image: "/images/events/squid-game.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "depstar-it-nt-1",
    title: "ColorChronicle: A Journey Through Hue & History",
    description: "Art and tech fusion event exploring color through time.",
    date: "2026-03-19",
    time: "11:00",
    duration: "2 hours",
    venue: "DEPSTAR Gallery",
    category: "exhibition",
    level: "all",
    tags: ["Art", "History"],
    image: "/images/events/color-chronicle.jpg",
    filterType: "combo",
    registrationUrl: "#",
  },
  {
    id: "depstar-uiux-1",
    title: "UI/UX Design Jam",
    description: "Sprint-style design challenge to prototype user experiences.",
    date: "2026-03-19",
    time: "15:00",
    duration: "3 hours",
    venue: "Design Studio",
    category: "competition",
    level: "all",
    tags: ["Design", "UI/UX"],
    image: "/images/events/uiux-jam.jpg",
    filterType: "technical",
    registrationUrl: "#",
  },
  {
    id: "central-1",
    title: "Paint Ball",
    description: "Centralised adrenaline paintball skirmish.",
    date: "2026-03-20",
    time: "10:00",
    duration: "2 hours",
    venue: "Arena Field",
    category: "competition",
    level: "all",
    tags: ["Paintball", "Team"],
    image: "/images/events/paintball.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
  {
    id: "central-2",
    title: "Wall Rappelling",
    description: "Adventure rappelling under expert supervision.",
    date: "2026-03-20",
    time: "14:00",
    duration: "2 hours",
    venue: "Adventure Wall",
    category: "competition",
    level: "all",
    tags: ["Adventure", "Outdoor"],
    image: "/images/events/wall-rappelling.jpg",
    filterType: "non-technical",
    registrationUrl: "#",
  },
];

const categories = [
  { id: "all", name: "All Events", icon: Calendar },
  { id: "talk", name: "Talks", icon: Lightbulb },
  { id: "workshop", name: "Workshops", icon: Cpu },
  { id: "competition", name: "Competitions", icon: Trophy },
  { id: "exhibition", name: "Exhibitions", icon: Brain },
  { id: "networking", name: "Networking", icon: Users },
];

export default function EventsPage() {
  const [activeType, setActiveType] = React.useState<"technical" | "non-technical" | "workshop" | "combo" | "all">("all");
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find((cat) => cat.id === category);
    return categoryData ? categoryData.icon : Calendar;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      talk: "text-neon-blue border-neon-blue/30",
      workshop: "text-electric-purple border-electric-purple/30",
      competition: "text-hot-magenta border-hot-magenta/30",
      exhibition: "text-matrix-green border-matrix-green/30",
      networking: "text-cyber-pink border-cyber-pink/30",
    };
    return (
      colors[category as keyof typeof colors] ||
      "text-star-white border-star-white/30"
    );
  };

  const getLevelColor = (level: string) => {
    const colors = {
      beginner: "bg-matrix-green/20 text-matrix-green",
      intermediate: "bg-neon-blue/20 text-neon-blue",
      advanced: "bg-hot-magenta/20 text-hot-magenta",
      all: "bg-star-white/20 text-star-white",
    };
    return (
      colors[level as keyof typeof colors] || "bg-star-white/20 text-star-white"
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };



  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      
      <Navigation />

<br />
<br />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <br />
        <br />
        
        {/* Left Neural Globe */}
        <motion.div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 hidden lg:block z-10"
          initial={{ opacity: 0, x: -100, rotateY: -180 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
        <AICoreScene />
        </motion.div>

        {/* Right Neural Globe */}
        <motion.div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 hidden lg:block z-10"
          initial={{ opacity: 0, x: 100, rotateY: 180 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <NeuralGlobeScene />
        </motion.div>
        
        <motion.div
          className="max-w-6xl mx-auto text-center relative z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron font-black uppercase ls-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-none">
            <span
              className="block gradient-text-3 cyber-glow glitch"
              data-text="OUR EVENTS"
            >
              OUR EVENTS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-star-white/80 font-rajdhani max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate tech fest with a wide range of competitions,
            workshops, and exhibitions designed to challenge your skills and
            expand your knowledge.
          </p>
            
          <div className="mt-8">
            <a href="#all-events" className="btn btn-primary inline-block">
              Explore All Events
            </a>
          </div>
          
        </motion.div>

        {/* Mobile Neural Globes - Positioned below the main content */}
        <div className="lg:hidden flex justify-center items-center mt-16 space-x-8">
          <motion.div
            className="w-40 h-40 sm:w-48 sm:h-48"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <NeuralGlobeScene />
          </motion.div>
          <motion.div
            className="w-40 h-40 sm:w-48 sm:h-48"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <NeuralGlobeScene />
          </motion.div>
        </div>
        
      </section>

      {/* Filters removed */}

      {/* Featured Events - Rotating 3D Carousel */}

      {/* Filter Chips */}
      <br />
      <br />
      
      <section id="all-events" className="px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-orbitron tracking-widest text-2xl md:text-3xl gradient-text mb-2">FILTER EVENTS</h3>
          <p className="text-star-white/70 font-rajdhani mb-6">Choose your preferred event type to customize your experience</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              {id:"all",label:"All",Icon:Calendar},
              {id:"technical",label:"Technical",Icon:Cpu},
              {id:"non-technical",label:"Non-Technical",Icon:Lightbulb},
              {id:"workshop",label:"Workshop",Icon:Brain},
              {id:"combo",label:"Combo",Icon:Trophy},
            ].map((f:any)=> (
              <button
                key={f.id}
                onClick={()=>setActiveType(f.id)}
                className={`group relative px-5 py-3 rounded-xl text-sm font-rajdhani transition-all border backdrop-blur-sm flex items-center gap-2 ${
                  activeType===f.id
                    ? 'border-neon-blue text-neon-blue shadow-[0_0_25px_rgba(0,247,255,0.25)] bg-neon-blue/10'
                    : 'border-star-white/15 text-star-white/80 hover:text-neon-blue hover:border-neon-blue/40 bg-void-black/30'
                }`}
              >
                <f.Icon className="w-4 h-4" />
                {f.label}
                {activeType===f.id && <span className="ml-2 w-1.5 h-1.5 rounded-full bg-neon-blue inline-block" />}
              </button>
            ))}
          </div>
          <div className="mt-5 text-star-white/80 font-rajdhani">
            {(() => {
              const count = events.filter(e=> activeType==='all' ? true : e.filterType===activeType).length;
              const label = activeType==='all' ? 'All' : activeType.charAt(0).toUpperCase()+activeType.slice(1);
              return (
                <span>Showing <span className="text-neon-blue font-semibold">{count}</span> events in <span className="gradient-text font-semibold">{label}</span> category</span>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section  className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence>
            <motion.div
              className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
              layout
            >
              {events.filter(e=> activeType==='all' ? true : e.filterType===activeType).map((event, index) => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    className="glass-card rounded-2xl overflow-hidden hover:border-neon-blue/40 transition-all duration-300 group h-[520px] flex flex-col"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    layout
                  >
                    {/* Event Header */}
                    <div className="p-6 border-b border-star-white/10 flex-shrink-0 h-[192px] overflow-hidden">
                      <h3 className="font-orbitron font-bold text-xl text-star-white mb-3 group-hover:cyber-glow transition-all duration-300 line-clamp-2 min-h-[56px]">
                        {event.title}
                      </h3>

                      <p className="text-star-white/70 font-rajdhani leading-relaxed text-sm mb-4 line-clamp-3 min-h-[60px]">
                        {event.description}
                      </p>

                      {event.speaker && (
                        <p className="text-neon-blue font-rajdhani font-medium text-sm mb-4 line-clamp-1 min-h-[20px]">
                          By {event.speaker}
                        </p>
                      )}
                    </div>

                    {/* Event Details */}
                    <div className="p-6 space-y-3 flex-1 flex flex-col min-h-0">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center text-star-white/80 text-sm">
                          <Calendar className="w-4 h-4 text-electric-purple mr-3 flex-shrink-0" />
                          <span className="font-rajdhani">
                            {formatDate(event.date)}
                          </span>
                        </div>

                        <div className="flex items-center text-star-white/80 text-sm">
                          <Clock className="w-4 h-4 text-neon-blue mr-3 flex-shrink-0" />
                          <span className="font-rajdhani">
                            {event.time} • {event.duration}
                          </span>
                        </div>

                        <div className="flex items-center text-star-white/80 text-sm">
                          <MapPin className="w-4 h-4 text-cyber-pink mr-3 flex-shrink-0" />
                          <span className="font-rajdhani">{event.venue}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-3">
                          {event.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-star-white/10 text-star-white/70 rounded-full text-xs font-rajdhani"
                            >
                              {tag}
                            </span>
                          ))}
                          {event.tags.length > 3 && (
                            <span className="px-2 py-1 bg-star-white/10 text-star-white/70 rounded-full text-xs font-rajdhani">
                              +{event.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4 flex-shrink-0">
                        <a
                          href={event.registrationUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center holographic-btn py-3 rounded-lg font-rajdhani font-semibold text-sm tracking-wide text-neon-blue hover:text-star-white transition-all duration-300"
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-electric-purple/10"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text mb-6">
            Don't Miss Out
          </h2>
          <p className="text-xl text-star-white/80 font-rajdhani mb-8 leading-relaxed">
            Secure your spot at COGNIZANCE 26 and be part of the AI and robotics
            revolution. Limited seats available for workshop sessions.
          </p>
          {/* <motion.button
            className="holographic-btn px-12 py-4 rounded-lg font-rajdhani font-bold text-xl tracking-wide text-neon-blue hover:text-star-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Full Access Pass
          </motion.button> */}
        </motion.div>
      </section>
      <Footer />
      <style>{`
        #particles-js {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
