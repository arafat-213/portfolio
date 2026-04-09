"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiTwilio,
  SiGithub,
  SiSanity,
} from "react-icons/si";
import { FaCode, FaCloud, FaSitemap } from "react-icons/fa";

interface IconProps {
  size?: number;
  className?: string;
}

const iconMap: { [key: string]: React.ComponentType<IconProps> } = {
  react: SiReact,
  nextjs: SiNextdotjs,
  vue: SiVuedotjs,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  jest: SiJest,
  nodejs: SiNodedotjs,
  express: SiExpress,
  dotnet: SiDotnet,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  azure: FaCloud,
  gcp: SiGooglecloud,
  twilio: SiTwilio,
  github: SiGithub,
  sanity: SiSanity,
  cursor: FaCode,
  microservices: FaSitemap,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { title: "Frontend", skills: skills.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", skills: skills.backend, color: "from-green-500 to-emerald-500" },
    { title: "Tools", skills: skills.tools, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center relative"
      style={{ 
        paddingTop: '6rem', 
        paddingBottom: '6rem', 
        paddingLeft: '1.5rem', 
        paddingRight: '1.5rem' 
      }}
    >
      <div className="container max-w-6xl" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '2rem' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading" style={{ marginBottom: '1rem' }}>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl">
            Technologies I work with to build amazing products
          </p>
        </motion.div>

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {skillCategories.map((category, categoryIndex) => {
            // Calculate the starting index for skills in this category
            const skillsBeforeThisCategory = skillCategories
              .slice(0, categoryIndex)
              .reduce((sum, cat) => sum + cat.skills.length, 0);
            
            return (
              <motion.div
                key={category.title}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: categoryIndex * 0.2,
                    },
                  },
                }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold font-heading text-center" style={{ marginBottom: '1rem' }}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: '1.5rem' }}>
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent =
                      iconMap[skill.icon.toLowerCase()] || FaCode;
                    // Calculate global skill index for staggered animation delay
                    const globalSkillIndex = skillsBeforeThisCategory + skillIndex;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8, y: 20 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            transition: {
                              duration: 0.4,
                              ease: "easeOut",
                            },
                          },
                        }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="group"
                      >
                        <motion.div
                          className="glass rounded-xl border border-white/10 hover:border-white/20 transition-all cursor-pointer flex flex-col items-center"
                          style={{ padding: '1.5rem', gap: '1rem' }}
                          animate={isInView ? {
                            y: [0, -10, 0],
                          } : {}}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: globalSkillIndex * 0.1,
                            ease: "easeInOut",
                          }}
                        >
                          <div
                            className={`rounded-lg bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                            style={{ padding: '1.25rem' }}
                          >
                            <IconComponent size={32} className="text-white" />
                          </div>
                          <span className="text-sm md:text-base font-medium text-center text-foreground/80 group-hover:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

