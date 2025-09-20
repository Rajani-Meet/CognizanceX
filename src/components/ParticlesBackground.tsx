"use client";

import React, { useEffect } from "react";
import Script from "next/script";

// Lightweight type for particles.js options
export type ParticlesOptions = any; // Use `any` to pass raw particles.js config

interface ParticlesBackgroundProps {
  id?: string; // Unique container id (default: "particles-js")
  className?: string;
  style?: React.CSSProperties;
  options?: ParticlesOptions; // Custom config; falls back to a sensible default
  src?: string; // Script CDN source
  retryCount?: number; // Number of init retries
  retryIntervalMs?: number; // Delay between retries in ms
  fullScreen?: boolean; // Whether to cover the entire viewport
  zIndex?: number; // z-index for the container
}

const DEFAULT_SRC = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";

const DEFAULT_OPTIONS: ParticlesOptions = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00f7ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f7ff",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
  },
};

export default function ParticlesBackground({
  id = "particles-js",
  className,
  style,
  options,
  src = DEFAULT_SRC,
  retryCount = 15,
  retryIntervalMs = 100,
  fullScreen = true,
  zIndex = 0,
}: ParticlesBackgroundProps) {
  useEffect(() => {
    let cancelled = false;

    const initParticles = () => {
      try {
        const w = window as unknown as { particlesJS?: any };
        const container = document.getElementById(id);
        if (!w?.particlesJS || !container) return false;

        w.particlesJS(id, options || DEFAULT_OPTIONS);
        return true;
      } catch {
        return false;
      }
    };

    let tries = 0;
    const timer = setInterval(() => {
      if (cancelled) return;
      if (initParticles() || ++tries >= retryCount) {
        clearInterval(timer);
      }
    }, retryIntervalMs);

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [id, options, retryCount, retryIntervalMs]);

  const containerStyle: React.CSSProperties = fullScreen
    ? {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex,
        pointerEvents: "none",
        ...style,
      }
    : { position: "absolute", inset: 0, zIndex, pointerEvents: "none", ...style };

  return (
    <>
      <div id={id} className={className} style={containerStyle} />
      {/* Load particles.js after hydration; safe if included on multiple pages */}
      <Script src={src} strategy="afterInteractive" />
    </>
  );
}