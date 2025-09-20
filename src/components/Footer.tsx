'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Calendar, Users, Award } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-void-black border-t border-neon-blue/20 py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/90 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* COGNIZANCE 26 Section */}
          <div className="md:col-span-2">
            
            <div className="block">
                          <Image
                            src="/navbarcz.png"
                            alt="Cognizance X 26"
                            width={880}
                            height={160}
                            className="h-10 md:h-12 lg:h-14 w-auto group-hover:cyber-glow transition-all duration-300"
                            priority
                          />
              </div>
                        
            <p className="text-star-white/70 font-rajdhani mb-6 leading-relaxed">
              The premier AI & Robotics event at CHARUSAT University, bringing together innovators,
              researchers, and industry leaders to shape the future of technology.
            </p>
            <div className="flex space-x-4 mb-6">
              <Link
                href="#"
                className="text-star-white/70 hover:text-neon-blue transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-star-white/70 hover:text-neon-blue transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-star-white/70 hover:text-neon-blue transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C23.975 5.367 18.637.029 12.017.029zM15.159 18.691c-1.442.023-1.883-.61-1.883-1.378V12.86h3.855c-.07.947-.276 4.158-1.972 5.831zm-3.142 0h-3.85c-1.292 0-2.332-1.04-2.332-2.332v-3.85h3.85c1.292 0 2.332 1.04 2.332 2.332v3.85zm6.174-11.548l-1.972-.657V5.314c0-1.292-1.04-2.332-2.332-2.332h-3.85c-1.292 0-2.332 1.04-2.332 2.332v1.172l-1.972.657c-.63.21-1.062.792-1.062 1.465 0 .673.432 1.255 1.062 1.465l1.972.657v1.17c0 1.293 1.04 2.333 2.332 2.333h3.85c1.292 0 2.332-1.04 2.332-2.332V10.73l1.972-.657c.63-.21 1.062-.792 1.062-1.465s-.432-1.255-1.062-1.465z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-star-white/70 hover:text-neon-blue transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-star-white/70 hover:text-neon-blue transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>

            {/* Event Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-star-white/60">
                <Calendar className="w-4 h-4 text-electric-purple" />
                <span className="font-rajdhani text-sm">February 12-13, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-star-white/60">
                <Users className="w-4 h-4 text-matrix-green" />
                <span className="font-rajdhani text-sm">10,000+ Expected</span>
              </div>
              <div className="flex items-center gap-2 text-star-white/60">
                <Award className="w-4 h-4 text-cyber-pink" />
                <span className="font-rajdhani text-sm">50+ Events</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-star-white text-lg mb-4 cyber-glow">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-star-white/70 hover:text-neon-blue font-rajdhani transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-star-white/70 hover:text-neon-blue font-rajdhani transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-star-white/70 hover:text-neon-blue font-rajdhani transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/speakers"
                  className="text-star-white/70 hover:text-neon-blue font-rajdhani transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-star-white/70 hover:text-neon-blue font-rajdhani transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-star-white/70 hover:text-neon-blue font-rajdhani transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron text-star-white text-lg mb-4 cyber-glow">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-star-white/70 font-rajdhani text-sm">
                    CHARUSAT University<br />
                    Changa, Anand, Gujarat<br />
                    India - 388421
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-electric-purple flex-shrink-0" />
                <Link
                  href="mailto:info@cognizance.charusat.edu.in"
                  className="text-star-white/70 hover:text-electric-purple font-rajdhani text-sm transition-colors duration-300"
                >
                  cognizancex.fte@charusat.ac.in
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-matrix-green flex-shrink-0" />
                <Link
                  href="tel:+919876543210"
                  className="text-star-white/70 hover:text-matrix-green font-rajdhani text-sm transition-colors duration-300"
                >
                  +91 98765 43210
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-star-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-star-white/60 font-rajdhani text-sm text-center md:text-left">
              <p>© 2026 COGNIZANCE. All rights reserved.</p>
              <p className="mt-1">
                Organized by{' '}
                <Link
                  href="https://charusat.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-blue hover:cyber-glow transition-all duration-300"
                >
                  CHARUSAT University
                </Link>
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-star-white/60 font-rajdhani text-sm">
              <Link
                href="/privacy"
                className="hover:text-neon-blue transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-neon-blue transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-neon-blue transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 border border-neon-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 border border-electric-purple/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-matrix-green/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-cyber-pink/40 rounded-full animate-ping delay-700"></div>
      </div>
    </footer>
  )
}

export default Footer
