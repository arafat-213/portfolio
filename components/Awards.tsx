"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { awards } from "@/lib/data";
import { Trophy, Star, Zap } from "lucide-react";
import { IconBaseProps } from "react-icons";

const iconMap: { [key: string]: React.ComponentType<IconBaseProps> } = {
  trophy: Trophy,
  star: Star,
  zap: Zap,
};

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="awards"
      className="min-h-screen flex items-center justify-center relative"
      style={{ 
        overflow: 'hidden',
        paddingTop: '6rem', 
        paddingBottom: '6rem', 
        paddingLeft: '1.5rem', 
        paddingRight: '1.5rem' 
      }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-yellow-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />

      <div className="container max-w-6xl relative z-10" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '5rem' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading" style={{ marginBottom: '1.5rem' }}>
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl">
            Achievements and accolades throughout my career
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-3"
          style={{ gap: '2rem' }}
        >
          {awards.map((award, index) => {
            const IconComponent = iconMap[award.icon] || Trophy;
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.6,
                    },
                  },
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative"
              >
                <motion.div
                  className="glass rounded-2xl border border-white/10 hover:border-white/20 transition-all text-center relative overflow-hidden"
                  animate={isInView ? {
                    y: [0, -10, 0],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                  style={{ padding: '2.5rem' }}
                >
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"
                    whileHover={{ opacity: 1 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="inline-flex rounded-full bg-linear-to-br from-yellow-500/20 to-orange-500/20"
                      style={{ padding: '1.25rem', marginBottom: '1.5rem' }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent
                        size={48}
                        className="text-yellow-400"
                      />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-semibold font-heading" style={{ marginBottom: '1rem' }}>
                      {award.title}
                    </h3>
                    <p className="text-base md:text-lg text-foreground/60">{award.year}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

