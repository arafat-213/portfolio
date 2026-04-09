"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{ 
        overflow: 'hidden',
        paddingLeft: '1.5rem', 
        paddingRight: '1.5rem', 
        paddingTop: '6rem', 
        paddingBottom: '6rem'
      }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-heading leading-tight"
          variants={itemVariants}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed"
          variants={itemVariants}
          style={{ marginBottom: '2rem' }}
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed"
          variants={itemVariants}
          style={{ marginBottom: '4rem', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center"
          variants={itemVariants}
          style={{ gap: '1rem', marginBottom: '4rem' }}
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '1rem 2rem', gap: '0.75rem' }}
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '1rem 2rem', gap: '0.75rem' }}
          >
            <Mail size={20} />
            <span>Email</span>
          </motion.a>

          <motion.a
            href="/Tai%20Arfat-Fullstack-6years-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-full bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all text-white font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '1rem 2rem', gap: '0.75rem' }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-foreground/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginTop: '0.5rem' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

