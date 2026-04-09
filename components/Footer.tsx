"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10" style={{ paddingTop: '3rem', paddingBottom: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className="container max-w-6xl" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <p className="text-foreground/60 flex items-center justify-center" style={{ gap: '0.5rem' }}>
            Crafted with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>{" "}
            by <span className="font-semibold text-foreground">{personalInfo.name}</span> 
          </p>
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

