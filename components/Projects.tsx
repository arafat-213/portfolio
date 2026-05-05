"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback } from "react";
import { projects } from "@/lib/data";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

// Tech badge color map — each tech gets a distinct accent
const techColors: Record<string, string> = {
  "Next.js": "rgba(130,180,255,0.85)",
  Tailwind: "rgba(56,189,248,0.85)",
  Redux: "rgba(168,132,245,0.85)",
  "Node.js": "rgba(104,211,145,0.85)",
  Express: "rgba(248,200,80,0.85)",
  Redis: "rgba(248,113,113,0.85)",
  React: "rgba(97,218,251,0.85)",
  "Sanity.io": "rgba(245,128,96,0.85)",
  Stripe: "rgba(148,130,255,0.85)",
  "Vue.js": "rgba(65,184,131,0.85)",
  "Socket.io": "rgba(1, 255, 13, 0.85)",
  MongoDB: "rgba(77,175,80,0.85)",
  ".NET Core": "rgba(130,100,245,0.85)",
  PostgreSQL: "rgba(100,160,240,0.85)",
};

function getTechColor(tech: string) {
  return techColors[tech] || "rgba(160,160,160,0.85)";
}

function getTechBg(tech: string) {
  const color = techColors[tech] || "rgba(160,160,160,0.15)";
  return color.replace(/[\d.]+\)$/, "0.12)");
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: "rgba(20, 20, 24, 0.8)",
        borderRadius: "1rem",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition:
          "border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="project-card-image"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "0.75rem",
        }}
      >
        <h3
          className="project-card-title"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--foreground)",
            fontFamily: "var(--font-family-heading)",
            transition: "color 0.3s ease",
          }}
        >
          {project.title}
        </h3>

        <p
          className="line-clamp-3"
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.55)",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "0.25rem",
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                padding: "0.25rem 0.65rem",
                borderRadius: "6px",
                color: getTechColor(tech),
                background: getTechBg(tech),
                border: `1px solid ${getTechColor(tech).replace(
                  /[\d.]+\)$/,
                  "0.2)"
                )}`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.25rem",
            marginTop: "auto",
            paddingTop: "0.5rem",
          }}
        >
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#8b7cf7",
                textDecoration: "none",
                transition: "color 0.3s ease, gap 0.3s ease",
              }}
            >
              Live Demo
              <ExternalLink
                size={14}
                className="project-card-arrow"
                style={{ transition: "transform 0.3s ease" }}
              />
            </a>
          )}

          {project.sourceUrl && (
            <motion.a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-source"
              whileHover={{ color: "#8b7cf7" }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              <SiGithub size={14} />
              View Source
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blob */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />

      <div
        style={{ maxWidth: "75rem", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Some of my recent work
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {projects.map((project, index) => (
                <div key={project.title} className="embla__slide">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
          >
            {/* Prev button */}
            <motion.button
              onClick={scrollPrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: canScrollPrev
                  ? "var(--foreground)"
                  : "rgba(255,255,255,0.25)",
                cursor: "pointer",
                transition: "background 0.3s, border-color 0.3s",
              }}
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: selectedIndex === idx ? "1.75rem" : "0.5rem",
                    height: "0.5rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    background:
                      selectedIndex === idx
                        ? "linear-gradient(135deg, #667eea, #764ba2)"
                        : "rgba(255,255,255,0.15)",
                    transition: "all 0.35s ease",
                  }}
                />
              ))}
            </div>

            {/* Next button */}
            <motion.button
              onClick={scrollNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: canScrollNext
                  ? "var(--foreground)"
                  : "rgba(255,255,255,0.25)",
                cursor: "pointer",
                transition: "background 0.3s, border-color 0.3s",
              }}
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
