"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="min-h-screen py-24! px-6! flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Blob Animation */}
      <motion.div
        className="absolute top-20 right-4 md:right-20 w-96 h-96 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />

      <div className="container max-w-6xl" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          style={{ gap: '3rem' }}
        >
          {/* Text Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading" style={{ marginBottom: '2.5rem' }}>
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed" style={{ marginBottom: '2.5rem' }}>
            <span className="text-3xl font-semibold gradient-text">Hi, {' '}</span>
              {personalInfo.about}
            </p>
            <div className="text-foreground/60" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                <span className="font-semibold text-foreground">Location:</span>{" "}
                {personalInfo.location}
              </p>
              <p>
                <span className="font-semibold text-foreground">Email:</span>{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Image/Placeholder */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden glass border border-white/10">
            <Image
                src="/about-me-img.jpg"
                alt="Tai Arfat"
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-24 h-24 md:w-32 md:h-32 bg-linear-to-br from-purple-500/30 to-pink-500/30 rounded-2xl blur-xl"
              animate={{
                rotate: [0, 90, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

