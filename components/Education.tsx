"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center relative"
      style={{ 
        paddingTop: '6rem', 
        paddingBottom: '6rem', 
        paddingLeft: '1.5rem', 
        paddingRight: '1.5rem' 
      }}
    >
      <div className="container max-w-4xl" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '5rem' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading" style={{ marginBottom: '1.5rem' }}>
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl">
            My academic background
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            className="glass rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            style={{ padding: '3rem' }}
          >
            <div className="flex flex-col md:flex-row items-start" style={{ gap: '2rem' }}>
              <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20" style={{ padding: '1.25rem' }}>
                <GraduationCap size={48} className="text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold font-heading" style={{ marginBottom: '1rem' }}>
                  {education.degree}
                </h3>
                <p className="text-xl md:text-2xl text-purple-400 font-medium" style={{ marginBottom: '1.5rem' }}>
                  {education.institution}
                </p>
                <div className="flex flex-wrap text-foreground/80" style={{ gap: '1.5rem' }}>
                  <span className="flex items-center" style={{ gap: '0.5rem' }}>
                    <span className="font-semibold text-foreground">Year:</span>
                    {education.year}
                  </span>
                  <span className="flex items-center" style={{ gap: '0.5rem' }}>
                    <span className="font-semibold text-foreground">CGPA:</span>
                    {education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Underline Animation */}
            <motion.div
              className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
              style={{ marginTop: '2rem' }}
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

