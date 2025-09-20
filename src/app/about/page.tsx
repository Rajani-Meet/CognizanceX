"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

import Footer from "@/components/Footer";
import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Award,
  Lightbulb,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };



  // Stats counters and observer (unchanged)
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll(".stat-number");
      const speed = 200;

      counters.forEach((counter) => {
        const target = counter.getAttribute("data-target");
        if (!target) return;

        const updateCount = () => {
          const count = parseInt(counter.textContent || "0");
          const inc = parseInt(target) / speed;

          if (count < parseInt(target)) {
            counter.textContent = Math.ceil(count + inc).toString();
            setTimeout(updateCount, 1);
          } else {
            counter.textContent = target;
          }
        };

        updateCount();
      });
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const statsElements = {
            "participants-count": "10000",
            "events-count": "50",
            "speakers-count": "35",
            "countries-count": "15",
          } as const;

          Object.entries(statsElements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
              element.setAttribute("data-target", value);
              element.textContent = "0";
            }
          });

          animateCounters();
          statsObserver.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 },
    );

    const statsSection = document.querySelector(".stats");
    if (statsSection) statsObserver.observe(statsSection);

    return () => {
      if (statsSection) statsObserver.unobserve(statsSection);
    };
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing the boundaries of AI and robotics to create groundbreaking solutions for tomorrow.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Bringing together brilliant minds from academia, industry, and research institutions.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Creating technologies that positively impact communities worldwide.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards in research, development, and technological advancement.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "COGNIZANCE was established with a vision to bridge the gap between AI research and practical applications.",
    },
    {
      year: "2021",
      title: "First Event",
      description:
        "Launched our inaugural event with 500+ participants and 15 groundbreaking presentations.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "Extended our reach internationally, attracting speakers and participants from 25+ countries.",
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description:
        "Established permanent research partnerships with leading tech companies and universities.",
    },
    {
      year: "2024",
      title: "AI Breakthrough",
      description:
        "Showcased revolutionary AI developments that shaped industry standards.",
    },
    {
      year: "2025",
      title: "Record Growth",
      description:
        "Achieved unprecedented participation with 2000+ attendees and 50+ industry partners.",
    },
  ];

  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <div className="cyber-grid fixed inset-0 z-0 opacity-30 pointer-events-none"></div>
    
      <Navigation />

      {/* Hero Section */}
      <section className="about-hero min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
                  className="max-w-6xl mx-auto text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="font-orbitron font-black uppercase ls-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-none">
                    <span className="block gradient-text-3 cyber-glow glitch" data-text="ABOUT COGNIZANCEX">ABOUT COGNIZANCEX</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-star-white/80 font-rajdhani max-w-4xl mx-auto leading-relaxed">
                     From humble beginnings to global recognition, explore the
                      milestones that have shaped COGNIZANCE into a premier AI and3
                      robotics platform.
                  </p>
                </motion.div>
           
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              className="glass-card p-8 md:p-12 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-8">
                <Target className="w-12 h-12 text-neon-blue mr-4" />
                <h2 className="font-orbitron font-bold text-3xl md:text-4xl gradient-text">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-star-white/80 font-rajdhani leading-relaxed mb-6">
                To accelerate the advancement of artificial intelligence and
                robotics by creating a dynamic platform where innovators,
                researchers, and industry leaders converge to share knowledge,
                showcase breakthroughs, and collaborate on solutions that will
                shape the future of technology.
              </p>
              <p className="text-lg text-star-white/80 font-rajdhani leading-relaxed">
                We believe in democratizing access to cutting-edge AI and
                robotics knowledge, fostering an inclusive environment where
                ideas flourish and innovation thrives.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="glass-card p-8 md:p-12 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-8">
                <Eye className="w-12 h-12 text-electric-purple mr-4" />
                <h2 className="font-orbitron font-bold text-3xl md:text-4xl gradient-text">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-star-white/80 font-rajdhani leading-relaxed mb-6">
                To become the world's premier catalyst for AI and robotics
                innovation, inspiring a global community of creators who harness
                the power of intelligent machines to solve humanity's greatest
                challenges and unlock unprecedented possibilities for the
                future.
              </p>
              <p className="text-lg text-star-white/80 font-rajdhani leading-relaxed">
                We envision a world where AI and robotics seamlessly integrate
                with human potential, creating a harmonious ecosystem of
                technological advancement and human prosperity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/5 to-neon-blue/5"></div>
        <motion.div
          className="relative z-10 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-star-white/80 font-rajdhani max-w-3xl mx-auto">
              The principles that guide our mission and shape our impact on the
              world of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card p-8 rounded-xl text-center hover:border-neon-blue/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <value.icon className="w-16 h-16 text-neon-blue mx-auto mb-6 group-hover:scale-110 group-hover:text-electric-purple transition-all duration-300" />
                <h3 className="font-orbitron font-bold text-xl text-star-white mb-4 group-hover:cyber-glow transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-star-white/70 font-rajdhani leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text mb-6">
              Our Journey
            </h2>
            
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-blue to-electric-purple rounded-full hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative mb-12 md:mb-20 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
                >
                  <div className="glass-card p-6 md:p-8 rounded-xl hover:border-neon-blue/40 transition-all duration-300">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className="bg-gradient-to-r from-neon-blue to-electric-purple text-void-black px-4 py-2 rounded-full font-orbitron font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="font-orbitron font-bold text-xl text-star-white mb-4 cyber-glow">
                      {milestone.title}
                    </h3>
                    <p className="text-star-white/80 font-rajdhani leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 bg-neon-blue rounded-full border-4 border-deep-space shadow-neon-lg hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/10 to-matrix-green/10"></div>
        <motion.div
          className="relative z-10 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title font-orbitron font-bold text-4xl md:text-5xl gradient-text mb-16 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "participants-count",
                label: "Participants",
                value: "10000",
              },
              { id: "events-count", label: "Events", value: "50" },
              { id: "speakers-count", label: "Speakers", value: "35" },
              { id: "countries-count", label: "Countries", value: "15" },
            ].map((stat, index) => (
              <motion.div
                key={stat.id}
                className="stat-item glass-card p-8 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  id={stat.id}
                  className="stat-number text-4xl lg:text-5xl font-orbitron gradient-text mb-2"
                >
                  0
                </div>
                <div className="stat-label text-neon-blue text-lg uppercase tracking-wider font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="team py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="section-title font-orbitron font-bold text-4xl md:text-5xl gradient-text mb-16 text-center">
          Meet The Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Dr. Priya Patel",
              role: "Festival Director",
              bio: "Computer Science professor with 15 years of experience in AI research and event organization.",
              image: "https://randomuser.me/api/portraits/women/43.jpg",
            },
            {
              name: "Rahul Sharma",
              role: "Technical Head",
              bio: "Robotics engineer leading our technical team and competition design.",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Ananya Gupta",
              role: "Marketing Head",
              bio: "Digital marketing expert managing our outreach and sponsor relations.",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Vikram Joshi",
              role: "Logistics Head",
              bio: "Operations specialist ensuring seamless execution of all events.",
              image: "https://randomuser.me/api/portraits/men/75.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              className="team-member glass-card p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="member-image w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-neon-blue">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-matrix-green text-xl font-orbitron font-bold mb-2">
                {member.name}
              </h3>
              <p className="text-neon-blue font-bold mb-4">{member.role}</p>
              <p className="text-star-white/70 text-sm mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-star-white hover:text-neon-blue transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-star-white hover:text-neon-blue transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-star-white hover:text-neon-blue transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <style jsx global>{`
        :root {
          --deep-space: #0a0e23;
          --neon-blue: #00f7ff;
          --electric-purple: #b300ff;
          --hot-magenta: #ff00f7;
          --cyber-pink: #ff00aa;
          --matrix-green: #00ff9d;
          --void-black: #000011;
          --star-white: #e0e0ff;
          --glow: 0 0 10px;
        }
        body {
          background-color: var(--deep-space);
          color: var(--star-white);
          font-family: "Rajdhani", sans-serif;
          font-weight: 500;
          line-height: 1.7;
          overflow-x: hidden;
          background-image:
            radial-gradient(
              circle at 20% 30%,
              rgba(179, 0, 255, 0.15) 0%,
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(0, 247, 255, 0.15) 0%,
              transparent 30%
            ),
            linear-gradient(to bottom, var(--void-black), var(--deep-space));
        }
        #particles-js {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }

        .about-hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 5%;
          position: relative;
          overflow: hidden;
        }
        .about-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 20% 30%,
              rgba(0, 247, 255, 0.1) 0%,
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(179, 0, 255, 0.1) 0%,
              transparent 30%
            );
          z-index: -1;
        }
        .about-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .about-hero h1 {
          font-family: "Orbitron", sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: clamp(3rem, 8vw, 6rem);
          margin-bottom: 1.5rem;
          background: linear-gradient(
            45deg,
            var(--neon-blue),
            var(--electric-purple),
            var(--cyber-pink)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.1;
          animation: textGlow 3s infinite alternate;
        }
        .about-hero p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 2.5rem;
          color: rgba(224, 224, 255, 0.8);
        }

        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          font-size: 2.5rem;
          background: linear-gradient(
            45deg,
            var(--neon-blue),
            var(--matrix-green)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }
        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--neon-blue),
            transparent
          );
        }

        .keynote-section {
          padding: 6rem 5%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 17, 0.8),
            rgba(10, 14, 35, 0.9)
          );
          position: relative;
        }
        .keynote-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .keynote-speaker {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
          background: rgba(10, 14, 35, 0.7);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 247, 255, 0.2);
          transition: all 0.5s ease;
          cursor: pointer;
        }
        .keynote-speaker:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 247, 255, 0.2);
        }
        .keynote-image {
          flex: 1;
          min-width: 300px;
          height: 400px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 30px rgba(0, 247, 255, 0.2);
          transition: all 0.5s ease;
        }
        .keynote-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .keynote-speaker:hover .keynote-image img {
          transform: scale(1.05);
        }
        .keynote-content {
          flex: 2;
          min-width: 300px;
        }
        .keynote-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--neon-blue);
          font-family: "Orbitron", sans-serif;
        }
        .keynote-content .keynote-title {
          font-size: 1.3rem;
          color: var(--matrix-green);
          margin-bottom: 1.5rem;
        }
        .keynote-content p {
          color: rgba(224, 224, 255, 0.8);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .keynote-time {
          display: inline-block;
          background: rgba(0, 247, 255, 0.2);
          color: var(--neon-blue);
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          font-family: "Orbitron", sans-serif;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .about-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 20% 30%,
              rgba(0, 247, 255, 0.1) 0%,
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(179, 0, 255, 0.1) 0%,
              transparent 30%
            );
          z-index: -1;
        }
        .about-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .about-hero h1 {
          font-family: "Orbitron", sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: clamp(3rem, 8vw, 6rem);
          margin-bottom: 1.5rem;
          background: linear-gradient(
            45deg,
            var(--neon-blue),
            var(--electric-purple),
            var(--cyber-pink)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.1;
          animation: textGlow 3s infinite alternate;
        }
        .about-hero p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 2.5rem;
          color: rgba(224, 224, 255, 0.8);
        }

        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          font-size: 2.5rem;
          background: linear-gradient(
            45deg,
            var(--neon-blue),
            var(--matrix-green)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }
        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--neon-blue),
            transparent
          );
        }

        .keynote-section {
          padding: 6rem 5%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 17, 0.8),
            rgba(10, 14, 35, 0.9)
          );
          position: relative;
        }
        .keynote-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .keynote-speaker {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
          background: rgba(10, 14, 35, 0.7);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 247, 255, 0.2);
          transition: all 0.5s ease;
          cursor: pointer;
        }
        .keynote-speaker:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 247, 255, 0.2);
        }
        .keynote-image {
          flex: 1;
          min-width: 300px;
          height: 400px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 30px rgba(0, 247, 255, 0.2);
        }
        .keynote-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .keynote-speaker:hover .keynote-image img {
          transform: scale(1.05);
        }
        .keynote-content {
          flex: 2;
          min-width: 300px;
        }
        .keynote-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--neon-blue);
          font-family: "Orbitron", sans-serif;
        }
        .keynote-content .keynote-title {
          font-size: 1.3rem;
          color: var(--matrix-green);
          margin-bottom: 1.5rem;
        }
        .keynote-content p {
          color: rgba(224, 224, 255, 0.8);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .keynote-time {
          display: inline-block;
          background: rgba(0, 247, 255, 0.2);
          color: var(--neon-blue);
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          font-family: "Orbitron", sans-serif;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .about-section {
          padding: 8rem 5%;
          position: relative;
          background: rgba(10, 14, 35, 0.9);
        }
        .about-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }
        .speaker-card {
          background: rgba(10, 14, 35, 0.7);
          border-radius: 12px;
          padding: 2.5rem;
          border: 1px solid rgba(0, 247, 255, 0.2);
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          cursor: pointer;
        }
        .speaker-card::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          background: linear-gradient(
            45deg,
            var(--electric-purple),
            var(--neon-blue),
            var(--matrix-green)
          );
          background-size: 200% 200%;
          border-radius: 14px;
          opacity: 0;
          transition: 0.5s;
          animation: gradientBorder 3s linear infinite;
        }
        .speaker-card:hover::before {
          opacity: 0.7;
        }
        .speaker-card:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
          box-shadow: 0 20px 40px rgba(0, 247, 255, 0.3);
        }
        .speaker-image {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          margin: 0 auto 2rem;
          overflow: hidden;
          border: 3px solid var(--neon-blue);
          position: relative;
          box-shadow: 0 0 20px rgba(0, 247, 255, 0.3);
          transition: all 0.5s ease;
        }
        .speaker-card:hover .speaker-image {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(0, 247, 255, 0.6);
        }
        .speaker-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .speaker-card:hover .speaker-image img {
          transform: scale(1.1);
        }
        .speaker-content {
          text-align: center;
        }
        .speaker-content h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--matrix-green);
          transition: all 0.3s ease;
          font-family: "Orbitron", sans-serif;
        }
        .speaker-card:hover .speaker-content h3 {
          color: var(--neon-blue);
          text-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
        }
        .speaker-title {
          color: var(--neon-blue);
          font-weight: 600;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .speaker-bio {
          color: rgba(224, 224, 255, 0.8);
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        .speaker-social {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .speaker-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 247, 255, 0.2);
          color: var(--neon-blue);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .speaker-modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.9);
        }
        .speaker-modal-content {
          background-color: var(--deep-space);
          margin: 5% auto;
          padding: 3rem;
          border: 1px solid var(--neon-blue);
          width: 90%;
          max-width: 1000px;
          border-radius: 12px;
          position: relative;
          box-shadow: 0 0 40px rgba(0, 247, 255, 0.3);
        }
        .close-speaker-modal {
          position: absolute;
          top: 1.5rem;
          right: 2rem;
          color: white;
          cursor: pointer;
          background: transparent;
          border: none;
        }
        .speaker-modal-header {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        .speaker-modal-image {
          flex: 1;
          min-width: 300px;
        }
        .speaker-modal-image img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(0, 247, 255, 0.3);
        }
        .speaker-modal-info {
          flex: 2;
          min-width: 300px;
        }
        .speaker-modal-info h2 {
          font-size: 2.5rem;
          color: var(--neon-blue);
          margin-bottom: 1rem;
          font-family: "Orbitron", sans-serif;
        }
        .speaker-modal-title {
          font-size: 1.3rem;
          color: var(--matrix-green);
          margin-bottom: 1.5rem;
        }
        .speaker-modal-bio {
          color: rgba(224, 224, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .speaker-modal-social {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .speaker-modal-details {
          margin-top: 2rem;
        }
        .speaker-modal-details h3 {
          color: var(--neon-blue);
          margin-bottom: 1rem;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "Orbitron", sans-serif;
        }
        .speaker-modal-details p {
          color: rgba(224, 224, 255, 0.8);
          margin-bottom: 1.5rem;
        }

        .scroll-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(
            45deg,
            var(--electric-purple),
            var(--neon-blue)
          );
          color: var(--void-black);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(0, 247, 255, 0.3);
          z-index: 999;
          border: none;
        }
        .scroll-top.active {
          opacity: 1;
          visibility: visible;
        }
        .scroll-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 30px rgba(0, 247, 255, 0.5);
        }

        @keyframes textGlow {
          0% {
            text-shadow: 0 0 10px rgba(0, 247, 255, 0.5);
          }
          100% {
            text-shadow:
              0 0 20px rgba(179, 0, 255, 0.7),
              0 0 30px rgba(0, 247, 255, 0.5);
          }
        }
        @keyframes gradientBorder {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 {
          transition-delay: 0.2s;
        }
        .delay-2 {
          transition-delay: 0.4s;
        }
        .delay-3 {
          transition-delay: 0.6s;
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

        @media (max-width: 1024px) {
          .keynote-speaker {
            flex-direction: column;
          }
          .keynote-image {
            width: 100%;
            height: 300px;
          }
          .speaker-modal-header {
            flex-direction: column;
          }
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .speaker-card {
            padding: 2rem;
          }
          .speaker-image {
            width: 150px;
            height: 150px;
          }
          .speaker-modal-content {
            padding: 2rem;
          }
        }
        @media (max-width: 480px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }
          .about-hero p {
            font-size: 1rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .keynote-speaker {
            padding: 2rem 1.5rem;
          }
          .keynote-content h2 {
            font-size: 2rem;
          }
          .speaker-modal-content {
            padding: 1.5rem;
          }
          .speaker-modal-info h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
