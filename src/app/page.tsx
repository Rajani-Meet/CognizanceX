"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import NeuralGlobeScene from "@/components/NeuralGlobeScene";
import RoboticArmScene from "@/components/RoboticArmScene";
import CuteRobotScene from "@/components/CuteRobotScene";

export const dynamic = 'force-dynamic';

function HomePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    try {
      const forceIntro = searchParams?.get("intro") === "1";
      const hasSeen = typeof window !== "undefined" && window.localStorage.getItem("cx_intro_seen");
      if (forceIntro || !hasSeen) {
        setShowIntro(true);
        // Clean the URL so refreshes don't retrigger
        if (forceIntro) {
          const url = new URL(window.location.href);
          url.searchParams.delete("intro");
          router.replace(url.pathname + url.search + url.hash);
        }
      }
    } catch {}
  }, [searchParams, router]);

  const completeIntro = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("cx_intro_seen", "1");
      }
    } catch {}
    setShowIntro(false);
  };

  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Countdown Timer
  useEffect(() => {
    const countdownTimer = () => {
      const eventDate = new Date("February 12, 2026 09:00:00").getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });

      if (distance < 0) {
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    const interval = setInterval(countdownTimer, 1000);
    countdownTimer(); // Initial call

    return () => clearInterval(interval);
  }, []);

  // Vehicle data for carousel
  const vehicles = [
    {
      id: 1,
      name: "Industrial Robot Arm",
      description: "Precision manufacturing",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      name: "Humanoid Robot",
      description: "Advanced AI interaction",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      name: "Surgical Robot",
      description: "Medical precision",
      image:
        "https://images.unsplash.com/photo-1581093057305-3ec4a37b2d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      name: "Autonomous Drone",
      description: "AI navigation system",
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      name: "Robotic Exoskeleton",
      description: "Human augmentation",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      name: "Self-Driving Car",
      description: "Computer vision system",
      image:
        "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 7,
      name: "Underwater ROV",
      description: "Deep sea exploration",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 8,
      name: "Swarm Robots",
      description: "Collective intelligence",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 9,
      name: "Agricultural Robot",
      description: "Smart farming",
      image:
        "https://images.unsplash.com/photo-1543092587-d8b8feaf3624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 10,
      name: "Space Rover",
      description: "Planetary exploration",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Research Lead, NeuroTech",
      bio: "Pioneer in neural network architectures and deep learning applications.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Markus Riedel",
      title: "CTO, RoboDynamics",
      bio: "Leading expert in autonomous systems and robotic process automation.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Priya Patel",
      title: "Head of AI Ethics, FutureTech",
      bio: "Specializing in ethical AI development and responsible innovation.",
      image:
        "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Dr. James Zhang",
      title: "Professor, MIT Robotics Lab",
      bio: "Researcher in human-robot interaction and swarm robotics.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ];

/*  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for registering! We will contact you soon with more details.",
    );
    const form = e.target as HTMLFormElement;
    form.reset();
  };
*/
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="hero relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* 3D Neural Globe Background */}
        

        <div
          className="absolute block z-0 pointer-events-none
                     right-3 bottom-20 w-[140px] h-[140px]
                     sm:left-6 sm:bottom-24 sm:w-[165px] sm:h-[165px]
                     md:left-auto md:bottom-auto md:right-40 md:top-[62%] md:w-[220px] md:h-[220px]
                     lg:right-48 lg:top-[60%] lg:w-[260px] lg:h-[260px]
                     xl:right-56 xl:top-[58%] xl:w-[300px] xl:h-[300px]
                     2xl:right-64 2xl:top-[56%] 2xl:w-[340px] 2xl:h-[340px]"
        >
        <CuteRobotScene />
        </div>

        <div className="hero-content max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 leading-none">
              {/* <span
                className="block gradient-text cyber-glow glitch"
                data-text="CHARUSAT-FTE"
              >
                CHARUSAT-FTE
              </span> */}
              <span
                className="block gradient-text cyber-glow glitch"
                data-text="COGNIZANCEX '26"
              >
                COGNIZANCEX '26
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-light text-star-white mb-6">
              The Future is Here
            </h2>
            <p className="text-xl text-star-white/80 max-w-2xl font-rajdhani leading-relaxed">
              Join us for COGNIZANCE 26, the premier tech event exploring the
              cutting edge of artificial intelligence and robotics technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons flex flex-wrap gap-4"
          >
            <a
              href="/events"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded font-rajdhani font-semibold text-lg tracking-wide bg-gradient-to-r from-electric-purple to-neon-blue text-void-black hover:shadow-neon-lg hover:-translate-y-1 transition-all duration-300"
            >
              Register Now 
            </a>
           
          </motion.div>

                
        </div>
        
      </section>



      {/* Event Details Section */}
      <section className="event-details py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-16 relative">
            Event Highlights
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="detail-card glass-card p-8 rounded-xl hover:border-neon-blue/40 hover:-translate-y-3 hover:scale-105 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="text-4xl text-neon-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                🤖
              </div>
              <h3 className="text-xl font-orbitron font-bold text-neon-blue mb-4">
                Robotics Showcase
              </h3>
              <p className="text-star-white/80 font-rajdhani leading-relaxed">
                Experience the latest in robotics technology with interactive
                demonstrations from leading tech companies and research
                institutions.
              </p>
            </motion.div>

            <motion.div
              className="detail-card glass-card p-8 rounded-xl hover:border-neon-blue/40 hover:-translate-y-3 hover:scale-105 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl text-electric-purple mb-6 group-hover:scale-110 transition-transform duration-300">
                🧠
              </div>
              <h3 className="text-xl font-orbitron font-bold text-electric-purple mb-4">
                AI Workshops
              </h3>
              <p className="text-star-white/80 font-rajdhani leading-relaxed">
                Hands-on workshops covering machine learning, neural networks,
                and AI applications across various industries.
              </p>
            </motion.div>

            <motion.div
              className="detail-card glass-card p-8 rounded-xl hover:border-neon-blue/40 hover:-translate-y-3 hover:scale-105 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl text-matrix-green mb-6 group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
              <h3 className="text-xl font-orbitron font-bold text-matrix-green mb-4">
                Networking
              </h3>
              <p className="text-star-white/80 font-rajdhani leading-relaxed">
                Connect with industry leaders, researchers, and fellow tech
                enthusiasts in our dedicated networking sessions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="event-details py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-16 relative">
            Event Starts In
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              className="countdown-item glass-card p-6 rounded-xl hover:-translate-y-2 hover:shadow-neon transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="countdown-number text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-2">
                {countdown.days}
              </div>
              <div className="countdown-label text-neon-blue font-rajdhani font-medium uppercase tracking-wider">
                Days
              </div>
            </motion.div>

            <motion.div
              className="countdown-item glass-card p-6 rounded-xl hover:-translate-y-2 hover:shadow-neon transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="countdown-number text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-2">
                {countdown.hours}
              </div>
              <div className="countdown-label text-neon-blue font-rajdhani font-medium uppercase tracking-wider">
                Hours
              </div>
            </motion.div>

            <motion.div
              className="countdown-item glass-card p-6 rounded-xl hover:-translate-y-2 hover:shadow-neon transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="countdown-number text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-2">
                {countdown.minutes}
              </div>
              <div className="countdown-label text-neon-blue font-rajdhani font-medium uppercase tracking-wider">
                Minutes
              </div>
            </motion.div>

            <motion.div
              className="countdown-item glass-card p-6 rounded-xl hover:-translate-y-2 hover:shadow-neon transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="countdown-number text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-2">
                {countdown.seconds}
              </div>
              <div className="countdown-label text-neon-blue font-rajdhani font-medium uppercase tracking-wider">
                Seconds
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="event-details py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-center text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6 relative">
              Robotics Showcase
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
            </h2>
          </motion.div>

          {/* Enhanced 3D Carousel Container */}
          <div className="carousel-container relative w-full max-w-6xl h-[500px] mx-auto">
            {/* Central 3D Robotic Arm */}
            
            
            {/* Orbital Rings */}
            <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] transform -translate-x-1/2 -translate-y-1/2 opacity-10">
              <div className="w-full h-full border border-neon-blue/20 rounded-full animate-spin-slow"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] transform -translate-x-1/2 -translate-y-1/2 opacity-5">
              <div className="w-full h-full border border-electric-purple/20 rounded-full animate-spin-reverse"></div>
            </div>

            {/* 3D Carousel */}
            <div
              className="carousel-3d relative w-full h-full"
              style={{ 
                perspective: "1500px",
                transformStyle: "preserve-3d"
              }}
            >
              <div
                className="carousel-inner relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  animation: "roboticsCarousel 50s linear infinite",
                }}
              >
                {vehicles.map((vehicle, index) => {
                  const angle = (index * 360) / vehicles.length;
                  return (
                    <div
                      key={vehicle.id}
                      className="carousel-item absolute top-1/2 left-1/2 group cursor-pointer"
                      style={{
                        transformOrigin: "center",
                        transformStyle: "preserve-3d",
                        transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(450px)`,
                      }}
                    >
                      {/* Holographic Frame */}
                      <div className="relative w-64 h-40 group-hover:scale-105 transition-all duration-500">
                        {/* Glowing Border */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-electric-purple to-cyber-pink rounded-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300 blur-sm"></div>
                        
                        {/* Main Card */}
                        <div className="relative bg-void-black/95 backdrop-blur-md border border-neon-blue/40 rounded-xl overflow-hidden shadow-2xl group-hover:shadow-neon-blue/30">
                          {/* Image Container */}
                          <div className="relative h-24 overflow-hidden">
                            <img
                              src={vehicle.image}
                              alt={vehicle.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-void-black/90 via-transparent to-transparent"></div>
                            {/* Scan Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-neon-blue animate-scan-line opacity-0 group-hover:opacity-100"></div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-3 relative">
                            <h3 className="font-orbitron font-bold text-xs text-star-white mb-1 group-hover:text-neon-blue transition-colors duration-300 truncate">
                              {vehicle.name}
                            </h3>
                            <p className="font-rajdhani text-xs text-star-white/70 group-hover:text-star-white/90 transition-colors duration-300 line-clamp-2">
                              {vehicle.description}
                            </p>
                            
                            {/* Status Indicator */}
                            {/* <div className="absolute top-1 right-2 flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-matrix-green rounded-full animate-pulse"></div>
                              <span className="text-matrix-green text-xs font-rajdhani">ON</span>
                            </div> */}
                          </div>
                          
                          {/* Holographic Grid Overlay */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
                               style={{
                                 backgroundImage: `linear-gradient(rgba(0,247,255,0.08) 1px, transparent 1px),
                                                 linear-gradient(90deg, rgba(0,247,255,0.08) 1px, transparent 1px)`,
                                 backgroundSize: '15px 15px'
                               }}>
                          </div>
                        </div>
                        
                        {/* Particle Effects */}
                        <div className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-neon-blue rounded-full animate-float"></div>
                          <div className="absolute top-2 right-1 w-1 h-1 bg-electric-purple rounded-full animate-float-delayed"></div>
                          <div className="absolute bottom-1 left-2 w-1 h-1 bg-cyber-pink rounded-full animate-float-slow"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Speakers Section */}
      <section className="speakers py-32 px-4 sm:px-6 lg:px-8 bg-deep-space/90 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-16 relative">
            Featured Speakers
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                className="speaker-card glass-card p-8 rounded-xl text-center hover:-translate-y-3 hover:shadow-neon transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="speaker-image w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neon-blue/50 hover:border-neon-blue transition-colors duration-300">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-matrix-green mb-2 hover:cyber-glow transition-all duration-300">
                  {speaker.name}
                </h3>
                <p className="text-neon-blue font-rajdhani font-semibold mb-4">
                  {speaker.title}
                </p>
                <p className="text-star-white/80 font-rajdhani text-sm leading-relaxed">
                  {speaker.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
        <section className="sponsors py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-deep-black/90 relative">
          <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-16 relative">
            Our Sponsors
          </h2>
          </div>
       <div className="max-w-6xl mx-auto text-center ">
     
          <div className="space-y-16">
            {/* Title Sponsors */}
            <div className="sponsor-tier">
              <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-8 relative inline-block">
                Title Sponsors
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
              </h3>
              <div className="grid md: gap-4 max-w-xl mx-auto">
                <div className="sponsor-logo glass-card p-6 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img
                    src="/sponsors/title-techgiant.svg"
                    alt="TechGiant"
                    className="max-w-full max-h-20 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Platinum Sponsors */}
            <div className="sponsor-tier">
              <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-8 relative inline-block">
                Platinum Sponsors
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="sponsor-logo glass-card p-6 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img
                    src="/sponsors/platinum-techgiant.svg"
                    alt="TechGiant"
                    className="max-w-full max-h-20 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="sponsor-logo glass-card p-6 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img
                    src="/sponsors/platinum-neuroai.svg"
                    alt="NeuroAI"
                    className="max-w-full max-h-20 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="sponsor-tier">
              <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-8 relative inline-block">
                Gold Sponsors
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="sponsor-logo glass-card p-6 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img
                    src="/sponsors/gold-quantum.svg"
                    alt="Quantum"
                    className="max-w-full max-h-16 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="sponsor-logo glass-card p-6 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img
                    src="/sponsors/gold-robocore.svg"
                    alt="RoboCore"
                    className="max-w-full max-h-16 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="sponsor-logo glass-card p-6 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img
                    src="/sponsors/gold-deepmind.svg"
                    alt="DeepMind"
                    className="max-w-full max-h-16 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="sponsor-tier">
              <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-8 relative inline-block">
                Silver Sponsors
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="sponsor-logo glass-card p-4 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img src="/sponsors/silver-ai-tech.svg" alt="AI Tech" className="max-w-full max-h-12 filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="sponsor-logo glass-card p-4 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img src="/sponsors/silver-future-robotics.svg" alt="Future Robotics" className="max-w-full max-h-12 filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="sponsor-logo glass-card p-4 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img src="/sponsors/silver-neural-net.svg" alt="Neural Net" className="max-w-full max-h-12 filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="sponsor-logo glass-card p-4 rounded-xl h-56 flex items-center justify-center hover:scale-105 hover:shadow-neon transition-all duration-300">
                  <img src="/sponsors/silver-machine-learn.svg" alt="Machine Learn" className="max-w-full max-h-12 filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section
      <section
        className="registration py-32 px-4 sm:px-6 lg:px-8 bg-deep-space/90"
        id="register"
      >
        <div className="max-w-4xl mx-auto">
          <div className="registration-container glass-card p-8 md:p-12 rounded-2xl">
            <h2 className="text-center text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-8">
              Register Now
            </h2>

            <form onSubmit={handleRegistrationSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label
                    htmlFor="first-name"
                    className="block text-neon-blue font-rajdhani font-semibold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                    className="w-full px-4 py-3 bg-void-black/50 border border-neon-blue/30 rounded text-star-white font-rajdhani focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="last-name"
                    className="block text-neon-blue font-rajdhani font-semibold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    required
                    className="w-full px-4 py-3 bg-void-black/50 border border-neon-blue/30 rounded text-star-white font-rajdhani focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block text-neon-blue font-rajdhani font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-void-black/50 border border-neon-blue/30 rounded text-star-white font-rajdhani focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="phone"
                  className="block text-neon-blue font-rajdhani font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-void-black/50 border border-neon-blue/30 rounded text-star-white font-rajdhani focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="institution"
                  className="block text-neon-blue font-rajdhani font-semibold mb-2"
                >
                  Institution/Company
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  className="w-full px-4 py-3 bg-void-black/50 border border-neon-blue/30 rounded text-star-white font-rajdhani focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="events"
                  className="block text-neon-blue font-rajdhani font-semibold mb-2"
                >
                  Events Interested In
                </label>
                <select
                  id="events"
                  name="events"
                  multiple
                  className="w-full px-4 py-3 bg-void-black/50 border border-neon-blue/30 rounded text-star-white font-rajdhani focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                >
                  <option value="robo-wars">Robo Wars</option>
                  <option value="ai-hackathon">AI Hackathon</option>
                  <option value="vr-robotics">VR Robotics</option>
                  <option value="workshops">Workshops</option>
                  <option value="all">All Events</option>
                </select>
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  className="block text-neon-blue font-rajdhani font-semibold mb-2"
                >
                  Any Special Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-void-black/50 border border-neon-blue/30 rounded text-star-white font-rajdhani focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="submit-btn w-full px-8 py-4 bg-gradient-to-r from-electric-purple to-neon-blue text-void-black rounded font-orbitron font-bold text-lg tracking-wider uppercase hover:-translate-y-1 hover:shadow-neon-lg transition-all duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
 */}

     

      {/* Footer */}

      <Footer />

      {/* <footer className="bg-gradient-to-t from-void-black to-deep-space py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            <div className="footer-col">
              <h3 className="text-xl font-orbitron font-bold text-neon-blue mb-6 relative inline-block">
                COGNIZANCE 26
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-neon-blue to-transparent"></span>
              </h3>
              <p className="text-star-white/70 font-rajdhani leading-relaxed mb-6">
                The premier tech event exploring the cutting edge of artificial
                intelligence and robotics technology.
              </p>
              <div className="social-links flex gap-4">
                <a
                  href="#"
                  className="text-star-white hover:text-neon-blue hover:-translate-y-1 hover:scale-125 transition-all duration-300"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-star-white hover:text-neon-blue hover:-translate-y-1 hover:scale-125 transition-all duration-300"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-star-white hover:text-neon-blue hover:-translate-y-1 hover:scale-125 transition-all duration-300"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-star-white hover:text-neon-blue hover:-translate-y-1 hover:scale-125 transition-all duration-300"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-star-white hover:text-neon-blue hover:-translate-y-1 hover:scale-125 transition-all duration-300"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="text-xl font-orbitron font-bold text-neon-blue mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-neon-blue to-transparent"></span>
              </h3>
              <ul className="footer-links space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-star-white/70 hover:text-neon-blue hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-star-white/70 hover:text-neon-blue hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-star-white/70 hover:text-neon-blue hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/speakers"
                    className="text-star-white/70 hover:text-neon-blue hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#register"
                    className="text-star-white/70 hover:text-neon-blue hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          
            <div className="footer-col">
              <h3 className="text-xl font-orbitron font-bold text-neon-blue mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-neon-blue to-transparent"></span>
              </h3>
              <div className="space-y-3">
                <p className="text-star-white/70 font-rajdhani flex items-center">
                  <i className="fas fa-map-marker-alt text-neon-blue mr-3"></i>
                  Tech Institute Campus, Innovation City
                </p>
                <p className="text-star-white/70 font-rajdhani flex items-center">
                  <i className="fas fa-phone text-neon-blue mr-3"></i>
                  +1 (555) 123-4567
                </p>
                <p className="text-star-white/70 font-rajdhani flex items-center">
                  <i className="fas fa-envelope text-neon-blue mr-3"></i>
x                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom text-center pt-8 border-t border-neon-blue/20">
            <p className="copyright text-star-white/50 font-rajdhani">
              © 2026 COGNIZANCE 26. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer> */}



      {/* Scroll to Top Button */}
      <button
        className="scroll-top fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-electric-purple to-neon-blue text-void-black rounded-full flex items-center justify-center opacity-0 invisible hover:opacity-100 hover:visible hover:-translate-y-1 hover:shadow-neon-lg transition-all duration-300 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </button>

      <style jsx>{`
        #particles-js {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @keyframes roboticsCarousel {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes scan-line {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(-5px) rotate(240deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(90deg);
          }
          66% {
            transform: translateY(-12px) rotate(180deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(180deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-scan-line {
          animation: scan-line 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 0.5s;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite 1s;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }

        .glitch {
          position: relative;
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

        .scroll-top.active {
          opacity: 1 !important;
          visibility: visible !important;
        }

        /* Enhanced 3D Effects */
        .carousel-container {
          filter: drop-shadow(0 0 20px rgba(0, 247, 255, 0.1));
        }

        .carousel-item:hover {
          filter: drop-shadow(0 0 30px rgba(0, 247, 255, 0.4));
        }

        /* Holographic Grid Pattern */
        .holographic-grid {
          background-image: 
            linear-gradient(rgba(0, 247, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 247, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Custom Scrollbar for Webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00f7ff, #b026ff);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #b026ff, #ff0080);
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  return <HomePageContent />;
}
