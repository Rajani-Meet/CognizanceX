'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  name: string
  href: string
  icon?: string
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-space/90 backdrop-blur-md border-b border-neon-blue/20 shadow-cyber'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center transition-all duration-300">
                <Image 
                  src="/CZ1.png" 
                  alt="Cognizance Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-rajdhani font-medium text-base md:text-lg tracking-wide transition-all duration-300 hover:text-neon-blue group ${
                  pathname === item.href
                    ? 'text-neon-blue cyber-glow'
                    : 'text-star-white'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-electric-purple transition-all duration-300 ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}

            {/* CTA Button */}
            {/* <motion.button
              className="holographic-btn px-7 py-2.5 rounded-lg font-rajdhani font-semibold text-base md:text-lg tracking-wide text-neon-blue hover:text-star-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-blue hover:text-electric-purple transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-void-black/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="absolute top-full left-0 w-full bg-deep-space/95 backdrop-blur-md border-b border-neon-blue/20 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 rounded-lg font-rajdhani font-medium text-lg tracking-wide transition-all duration-300 hover:bg-neon-blue/10 hover:text-neon-blue ${
                        pathname === item.href
                          ? 'text-neon-blue bg-neon-blue/10 cyber-glow'
                          : 'text-star-white'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-neon-blue/20"
                >
                  <button className="w-full holographic-btn py-3 rounded-lg font-rajdhani font-semibold text-lg tracking-wide text-neon-blue hover:text-star-white transition-all duration-300">
                    Register Now
                  </button>
                </motion.div> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
