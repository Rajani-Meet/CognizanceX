'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'

import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building, Calendar, CheckCircle, AlertCircle } from 'lucide-react'
import ParticlesBackground from '@/components/ParticlesBackground'
import RobotScene from '@/components/RobotScene'

interface FormData {
  name: string
  email: string
  phone: string
  organization: string
  subject: string
  message: string
  inquiryType: string
}

interface ContactInfo {
  icon: React.ComponentType<any>
  title: string
  details: string[]
  color: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: 'LOCATION',
    details: ['Faculty of Technology & Engineering', 'CHARUSAT Campus', 'Changa, Anand, Gujarat 388421'],
    color: 'text-cyber-pink'
  },
  {
    icon: Phone,
    title: 'PHONE',
    details: ['+91 9289 247901', '+91 99213 24857'],
    color: 'text-electric-purple'
  },
  {
    icon: Mail,
    title: 'EMAIL',
    details: ['cognizance@charusat.edu.in', 'info@cognizance26.com'],
    color: 'text-neon-blue'
  }
]

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'registration', label: 'Registration Support' },
  { value: 'sponsorship', label: 'Sponsorship Opportunities' },
  { value: 'speaker', label: 'Speaker Applications' },
  { value: 'media', label: 'Media & Press' },
  { value: 'partnership', label: 'Partnership Proposals' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'other', label: 'Other' }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <div className="min-h-screen">
        {/* Particle Background */}
        <ParticlesBackground />
      <div className="cyber-grid fixed inset-0 z-0 opacity-30 pointer-events-none"></div>
     

      <Navigation />
<br />
<br />
<br />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-tight">
              <span
                className="block gradient-text cyber-glow glitch"
                data-text="CONTACT US"
              >
                CONTACT US
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-star-white/80 max-w-2xl font-rajdhani leading-relaxed mx-auto">
                Have questions about COGNIZANCEX 26? We're here to help. Reach out to us for any inquiries, support, or collaboration opportunities.
              </p>
            </motion.div>
          </div>

          {/* Futuristic 3D Robot */}
          <div className="relative w-full max-w-3xl h-[200px] sm:h-[240px] md:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden mt-8 pointer-events-none md:pointer-events-auto mx-auto">
            <RobotScene />
          </div>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 mx-auto max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px" }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl text-center hover:border-neon-blue/40 transition-all duration-300 group"
              >
                <info.icon className={`w-12 h-12 ${info.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
/>
                <h3 className="font-orbitron font-bold text-lg text-star-white mb-4 group-hover:cyber-glow transition-all duration-300">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-star-white/70 font-rajdhani text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Find Us Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="relative z-10 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text mb-12 text-center">
            FIND US
          </h2>
          <motion.div 
            className="glass-card p-2 rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0285462852654!2d72.81814867598591!3d22.59944897951403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c30bd44029%3A0xcb37ad88a5e4a11e!2sCHARUSAT!5e0!3m2!1sen!2sin!4v1687697929242!5m2!1sen!2sin" 
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-void-black/80 text-neon-blue border border-neon-blue/30 px-4 py-2 rounded-lg text-sm font-rajdhani hover:bg-neon-blue/20 transition-all duration-300">
                View larger map
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Contact Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl gradient-text mb-12 text-center">
            CONTACT OUR TEAM
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="glass-card p-8 rounded-xl text-center"
              whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(66, 220, 219, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-neon-blue">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-neon-blue/20 to-electric-purple/20 flex items-center justify-center">
                  <span className="text-neon-blue font-orbitron text-xs">Event Coordinator</span>
                </div>
              </div>
              <h3 className="font-orbitron text-2xl text-matrix-green mb-1">DR. RAKESH PATEL</h3>
              <p className="text-star-white/70 font-rajdhani text-sm mb-4">Faculty Coordinator</p>
              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 rounded-full bg-void-black/50 border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:bg-neon-blue/20 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-void-black/50 border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:bg-neon-blue/20 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              className="glass-card p-8 rounded-xl text-center"
              whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(66, 220, 219, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-neon-blue">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-neon-blue/20 to-electric-purple/20 flex items-center justify-center">
                  <span className="text-neon-blue font-orbitron text-xs">Technical Head</span>
                </div>
              </div>
              <h3 className="font-orbitron text-2xl text-matrix-green mb-1">PRIYA SHARMA</h3>
              <p className="text-star-white/70 font-rajdhani text-sm mb-4">Technical Head</p>
              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 rounded-full bg-void-black/50 border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:bg-neon-blue/20 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-void-black/50 border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:bg-neon-blue/20 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div 
              className="glass-card p-8 rounded-xl text-center"
              whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(66, 220, 219, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-neon-blue">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-neon-blue/20 to-electric-purple/20 flex items-center justify-center">
                  <span className="text-neon-blue font-orbitron text-xs">PR Head</span>
                </div>
              </div>
              <h3 className="font-orbitron text-2xl text-matrix-green mb-1">RAHUL MEHTA</h3>
              <p className="text-star-white/70 font-rajdhani text-sm mb-4">PR & Marketing Head</p>
              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 rounded-full bg-void-black/50 border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:bg-neon-blue/20 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-void-black/50 border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:bg-neon-blue/20 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />

      <style jsx global>{`
       #particles-js { position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 0; pointer-events: none; }

      `}</style>

    </div>
  )
}