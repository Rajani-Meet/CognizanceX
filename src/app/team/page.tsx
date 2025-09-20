"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Mail,
  Users,
  Award,
  Heart,
  Star,
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Arjun Sharma",
    role: "Event Director",
    department: "Computer Science",
    image: "/team/arjun-sharma.jpg",
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Technical Lead",
    department: "Robotics Engineering",
    image: "/team/priya-patel.jpg",
  },
  {
    id: "3",
    name: "Rahul Gupta",
    role: "Marketing Head",
    department: "Digital Marketing",
    image: "/team/rahul-gupta.jpg",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    role: "Design Director",
    department: "Visual Design",
    image: "/team/sneha-reddy.jpg",
  },
  {
    id: "5",
    name: "Vikram Singh",
    role: "Logistics Coordinator",
    department: "Operations Management",
    image: "/team/vikram-singh.jpg",
  },
  {
    id: "6",
    name: "Ananya Krishnan",
    role: "Sponsorship Lead",
    department: "Business Development",
    image: "/team/ananya-krishnan.jpg",
  },
  {
    id: "7",
    name: "Dev Mehta",
    role: "Web Development Lead",
    department: "Software Engineering",
    image: "/team/dev-mehta.jpg",
  },
  {
    id: "8",
    name: "Kavya Nair",
    role: "Content Strategy Lead",
    department: "Communications",
    image: "/team/kavya-nair.jpg",
  },
];



export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");



  // Filter team members by selected category; defaults to showing all
  const filteredMembers = teamMembers.filter(
    (member: any) =>
      selectedCategory === "all" || member.category === selectedCategory,
  );

  return (
    <div className="min-h-screen">
      <ParticlesBackground />

      <Navigation />
<br />
<br />
<br />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="font-orbitron font-black uppercase ls-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-none">
            <span className="block gradient-text-3 cyber-glow glitch" data-text="MEET OUR TEAM">MEET OUR TEAM</span>
          </h1>
          <p className="text-xl md:text-2xl text-star-white/80 font-rajdhani max-w-4xl mx-auto leading-relaxed">
            The passionate individuals behind COGNIZANCE who work tirelessly to
            bring you the ultimate AI and robotics experience.
          </p>
        </motion.div>
      
        <div className="py-16 px-4 sm:px-6 lg:px-8 border-b border-neon-blue/20 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                50+
              </div>
              <div className="text-star-white/70 font-rajdhani">
                Team Members
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                8
              </div>
              <div className="text-star-white/70 font-rajdhani">
                Departments
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                2000+
              </div>
              <div className="text-star-white/70 font-rajdhani">
                Hours Invested
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                3
              </div>
              <div className="text-star-white/70 font-rajdhani">
                Years Running
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <br />
      <br />
      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              layout
            >
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="glass-card rounded-2xl overflow-hidden hover:border-neon-blue/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="font-orbitron font-bold text-xl text-star-white mb-2 group-hover:cyber-glow transition-all duration-300">
                      {member.name}
                    </h3>

                    <div className="text-neon-blue font-rajdhani font-bold text-sm mb-1">
                      {member.role}
                    </div>

                    <p className="text-electric-purple font-rajdhani text-sm mb-4">
                      {member.department}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Join Team CTA
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/10 to-matrix-green/10"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-16 h-16 text-cyber-pink mx-auto mb-8" />
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text mb-8">
            Join Our Mission
          </h2>
          <p className="text-xl text-star-white/80 font-rajdhani leading-relaxed mb-8">
            Are you passionate about AI and robotics? Do you want to be part of
            something bigger? We're always looking for talented individuals to
            join our team and help us create unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="holographic-btn px-8 py-4 rounded-lg font-rajdhani font-bold text-lg tracking-wide text-neon-blue hover:text-star-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply to Join Team
            </motion.button>
            <motion.button
              className="border-2 border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-void-black px-8 py-4 rounded-lg font-rajdhani font-bold text-lg tracking-wide transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer Opportunities
            </motion.button>
          </div>
        </motion.div>
      </section> */}
      <Footer />
      <style jsx global>{`
        #particles-js {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }

        .glitch {
          position: relative;
          font-family: "Orbitron", sans-serif;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        .glitch::before {
          color: var(--cyber-pink);
          animation: glitch-effect 3s infinite;
          z-index: -1;
        }
        .glitch::after {
          color: var(--matrix-green);
          animation: glitch-effect 2s infinite reverse;
          z-index: -2;
        }
        @keyframes glitch-effect {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
}
