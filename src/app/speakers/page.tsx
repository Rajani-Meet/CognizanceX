"use client";

import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Linkedin,
  Twitter,
  Globe,
  X as CloseX,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

type SocialIcon = "twitter" | "linkedin" | "globe";

interface SpeakerData {
  name: string;
  title: string;
  bio: string;
  image: string;
  presentation: string;
  time: string;
  social: { icon: SocialIcon; url: string }[];
  tag?: string;
}

const speakerData: Array<SpeakerData | null> = [
  null,
  {
    name: "Dr. Sarah Chen",
    title: "AI Research Lead, NeuroTech | MIT Media Lab",
    bio: "Dr. Sarah Chen is a pioneer in neural network architectures and deep learning applications. With over 15 years of experience in AI research, she has published numerous papers on artificial general intelligence and its societal implications. Her current work focuses on developing ethical frameworks for advanced AI systems.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    presentation: "The Dawn of General AI",
    time: "February 12, 2026 | 10:00 AM - 11:30 AM",
    social: [
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" },
      { icon: "globe", url: "#" },
    ],
  },
  {
    name: "Markus Riedel",
    title: "CTO, RoboDynamics | Stanford Robotics Lab",
    bio: "Markus Riedel is a leading expert in autonomous systems and robotic process automation. As CTO of RoboDynamics, he oversees the development of next-generation robotics solutions for industrial and consumer applications. His research at Stanford focuses on human-robot collaboration in dynamic environments.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    presentation: "The Future of Human-Robot Collaboration",
    time: "February 12, 2026 | 2:30 PM - 4:00 PM",
    social: [
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" },
      { icon: "globe", url: "#" },
    ],
  },
  {
    name: "Priya Patel",
    title: "Head of AI Ethics, FutureTech",
    bio: "Specializing in ethical AI development and responsible innovation. At FutureTech, she leads initiatives to ensure AI systems are developed with fairness, accountability, and transparency in mind.",
    image:
      "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    presentation: "Ethics by Design",
    time: "February 13, 2026 | 9:30 AM - 10:30 AM",
    social: [
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" },
    ],
    tag: "AI Ethics",
  },
  {
    name: "Dr. James Zhang",
    title: "Professor, MIT Robotics Lab",
    bio: "Researcher in human-robot interaction and swarm robotics.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    presentation: "Swarm Intelligence in Robotics",
    time: "February 13, 2026 | 11:00 AM - 12:30 PM",
    social: [
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" },
    ],
    tag: "Robotics",
  },
  {
    name: "Dr. Elena Rodriguez",
    title: "AI Research Scientist, DeepMind",
    bio: "Expert in reinforcement learning and neural architecture search.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    presentation: "Reinforcement Learning Beyond Games",
    time: "February 14, 2026 | 10:00 AM - 11:00 AM",
    social: [
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" },
    ],
    tag: "Neural Nets",
  },
  {
    name: "Michael Johnson",
    title: "Director of AI, VisionTech",
    bio: "Pioneering work in real-time object detection and scene understanding.",
    image:
      "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    presentation: "Seeing Through AI Eyes",
    time: "February 14, 2026 | 1:30 PM - 2:30 PM",
    social: [
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" },
    ],
    tag: "Computer Vision",
  },
  {
    name: "Dr. Aisha Khan",
    title: "Quantum AI Researcher, QTech",
    bio: "Bridging quantum computing and machine learning for next-gen AI.",
    image:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    presentation: "Quantum Machine Learning: The Next Frontier",
    time: "February 15, 2026 | 9:00 AM - 10:30 AM",
    social: [
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" },
    ],
    tag: "Quantum AI",
  },
  {
    name: "Sophia Martinez",
    title: "Robotics Engineer, Boston Dynamics",
    bio: "Specializing in locomotion and dynamic control of humanoid robots.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    presentation: "The Mechanics of Movement",
    time: "February 15, 2026 | 2:00 PM - 3:30 PM",
    social: [
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" },
    ],
    tag: "Robotics",
  },
];

const SocialLink: React.FC<{ icon: SocialIcon; url: string }> = ({
  icon,
  url,
}) => {
  const IconCmp = useMemo(() => {
    if (icon === "twitter") return Twitter;
    if (icon === "linkedin") return Linkedin;
    return Globe;
  }, [icon]);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/80 hover:text-cyan-300 transition-transform duration-300"
    >
      <IconCmp className="w-5 h-5" />
    </a>
  );
};

export default function SpeakersPage() {
  const [selectedSpeakerIndex, setSelectedSpeakerIndex] = useState<
    number | null
  >(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add("animated");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModal = (idx: number) => {
    setSelectedSpeakerIndex(idx);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedSpeakerIndex(null);
    document.body.style.overflow = "auto";
  };

  const selectedSpeaker = selectedSpeakerIndex
    ? speakerData[selectedSpeakerIndex]
    : null;

  return (
    <div>
      <ParticlesBackground />
      <Navigation />

      {/* Hero */}
      <section className="speakers-hero">
        <div className="speakers-hero-content">
          <br />
          <br />
          <br />
          <h1 className="glitch" data-text="FEATURED SPEAKERS">
            FEATURED SPEAKERS
          </h1>
          <p>
            Meet the visionaries and innovators who are shaping the future of AI
            and robotics at COGNIZANCE 26. Our lineup of world-class speakers
            brings together the brightest minds in technology.
          </p>
        </div>
      </section>

      {/* Keynote Section */}
      <section className="speakers py-32 px-4 sm:px-6 lg:px-8 bg-deep-space/90 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-16 relative">
        Keynote Speakers</h2>

          {/* Dr. Sarah Chen (index 1) */}
          <div
            className="keynote-speaker animate-on-scroll"
            onClick={() => openModal(1)}
          >
            <div className="keynote-image">
              <img src={speakerData[1]!.image} alt={speakerData[1]!.name} />
            </div>
            <div className="keynote-content">
              <span className="keynote-time">FEB 12 | 10:00 AM</span>
              <h2>{speakerData[1]!.name}</h2>
              <p className="keynote-title">{speakerData[1]!.title}</p>
              <p>{speakerData[1]!.bio}</p>
              <div className="speaker-social">
                {speakerData[1]!.social.map((s) => (
                  <SocialLink key={s.icon} icon={s.icon} url={s.url} />
                ))}
              </div>
            </div>
          </div>

          {/* Markus Riedel (index 2) */}
          <div
            className="keynote-speaker animate-on-scroll delay-1"
            onClick={() => openModal(2)}
          >
            <div className="keynote-image">
              <img src={speakerData[2]!.image} alt={speakerData[2]!.name} />
            </div>
            <div className="keynote-content">
              <span className="keynote-time">FEB 12 | 2:30 PM</span>
              <h2>{speakerData[2]!.name}</h2>
              <p className="keynote-title">{speakerData[2]!.title}</p>
              <p>{speakerData[2]!.bio}</p>
              <div className="speaker-social">
                {speakerData[2]!.social.map((s) => (
                  <SocialLink key={s.icon} icon={s.icon} url={s.url} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
<section className="speakers py-32 px-4 sm:px-6 lg:px-8 bg-deep-space/90 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-16 relative">
        Featured Speakers</h2>

          <div className="speakers-grid">
            {speakerData.slice(3).map((sp, i) => (
              <div
                key={sp!.name}
                className={`speaker-card animate-on-scroll ${i % 3 === 1 ? "delay-1" : i % 3 === 2 ? "delay-2" : ""}`}
                onClick={() => openModal(i + 3)}
              >
                {/* {sp!.tag && <span className="speaker-tag">{sp!.tag}</span>} */}
                <div className="speaker-image">
                  <img src={sp!.image} alt={sp!.name} />
                </div>
                <div className="speaker-content">
                  <h3>{sp!.name}</h3>
                  <p className="speaker-title">{sp!.title}</p>
                  <p className="speaker-bio">{sp!.bio}</p>
                  <div className="speaker-social">
                    {sp!.social.map((s) => (
                      <SocialLink key={s.icon} icon={s.icon} url={s.url} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      {/* Modal */}
      {selectedSpeaker && (
        <div
          className="speaker-modal"
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            e.target === e.currentTarget && closeModal()
          }
        >
          <div className="speaker-modal-content">
            <button
              className="close-speaker-modal"
              onClick={closeModal}
              aria-label="Close"
            >
              <CloseX className="w-6 h-6" />
            </button>
            <div className="speaker-modal-header">
              <div className="speaker-modal-image">
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} />
              </div>
              <div className="speaker-modal-info">
                <h2>{selectedSpeaker.name}</h2>
                <p className="speaker-modal-title">{selectedSpeaker.title}</p>
                <p className="speaker-modal-bio">{selectedSpeaker.bio}</p>
                <div className="speaker-modal-social">
                  {selectedSpeaker.social.map((s) => (
                    <SocialLink key={s.icon} icon={s.icon} url={s.url} />
                  ))}
                </div>
              </div>
            </div>
            <div className="speaker-modal-details">
              <h3>
                <Calendar className="w-4 h-4" /> Presentation Details
              </h3>
              <p>{selectedSpeaker.presentation}</p>
              <h3>
                <Clock className="w-4 h-4" /> Session Time
              </h3>
              <p>{selectedSpeaker.time}</p>
              <h3>
                <MapPin className="w-4 h-4" /> Location
              </h3>
              <p>Main Auditorium, CHARUSAT-FTE Campus</p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top */}
      <button
        className={`scroll-top ${showScrollTop ? "active" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Scoped styles (ported from HTML) */}
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

        .speakers-hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 5%;
          position: relative;
          overflow: hidden;
        }
        .speakers-hero::before {
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
        .speakers-hero-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .speakers-hero h1 {
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
        .speakers-hero p {
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

        .speakers-section {
          padding: 8rem 5%;
          position: relative;
          background: rgba(10, 14, 35, 0.9);
        }
        .speakers-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .speakers-grid {
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
          .speakers-grid {
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
          .speakers-hero h1 {
            font-size: 2.5rem;
          }
          .speakers-hero p {
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
