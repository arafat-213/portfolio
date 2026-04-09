"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl">
            My professional journey and achievements
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 transform md:-translate-x-1/2" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.6,
                    },
                  },
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-background transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className="flex-1"
                  style={{ 
                    marginLeft: '3rem',
                    maxWidth: 'calc(100% - 3rem)',
                    paddingRight: '0',
                    paddingLeft: '0'
                  }}
                >
                  <motion.div
                    className="glass rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ padding: '2rem' }}
                  >
                    <div className="flex items-start" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div className="rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20" style={{ padding: '1rem' }}>
                        <Briefcase size={24} className="text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold font-heading" style={{ marginBottom: '0.75rem' }}>
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-medium" style={{ marginBottom: '0.75rem' }}>
                          {exp.company}
                        </p>
                        <p className="text-sm md:text-base text-foreground/60">{exp.duration}</p>
                      </div>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-foreground/80 flex items-start"
                          style={{ gap: '0.5rem' }}
                        >
                          <span className="text-purple-400" style={{ marginTop: '0.375rem' }}>•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

