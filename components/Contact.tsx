"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const message = `Hello Tai Arfat,

I'm reaching out from your portfolio website.

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}

Looking forward to hearing from you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `${personalInfo.whatsapp}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form and loading state
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl">
            Let&apos;s collaborate and build something amazing together
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2" style={{ gap: '3rem' }}>
          {/* Contact Info */}
          <motion.div
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
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold font-heading" style={{ marginBottom: '1.5rem' }}>
                  Let&apos;s Connect
                </h3>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed" style={{ marginBottom: '2rem' }}>
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center glass rounded-xl border border-white/10 hover:border-white/20 transition-all group min-h-[80px] md:min-h-[100px]"
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{ padding: '1.25rem 1.5rem', gap: '1.25rem' }}
                >
                  <div className="rounded-lg bg-linear-to-br from-purple-500/20 to-pink-500/20" style={{ padding: '1rem' }}>
                    <Mail size={24} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-foreground/60" style={{ marginBottom: '0.5rem' }}>Email</p>
                    <p className="font-medium text-base md:text-lg leading-relaxed">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center glass rounded-xl border border-white/10 hover:border-white/20 transition-all group min-h-[80px] md:min-h-[100px]"
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{ padding: '1.25rem 1.5rem', gap: '1.25rem' }}
                >
                  <div className="rounded-lg bg-linear-to-br from-blue-500/20 to-cyan-500/20" style={{ padding: '1rem' }}>
                    <Linkedin size={24} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-foreground/60" style={{ marginBottom: '0.5rem' }}>LinkedIn</p>
                    <p className="font-medium text-base md:text-lg leading-relaxed">Connect with me</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium text-foreground/80"
                  style={{ marginBottom: '0.75rem' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full !px-5 md:!px-6 !py-4 md:!py-5 rounded-xl glass border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all bg-background/50 text-foreground text-base min-h-[56px] md:min-h-[64px]"
                  placeholder="Your name"
                  style={{ padding: '1rem 1.25rem' }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-foreground/80"
                  style={{ marginBottom: '0.75rem' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full !px-5 md:!px-6 !py-4 md:!py-5 rounded-xl glass border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all bg-background/50 text-foreground text-base min-h-[56px] md:min-h-[64px]"
                  placeholder="your.email@example.com"
                  style={{ padding: '1rem 1.25rem' }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-foreground/80"
                  style={{ marginBottom: '0.75rem' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full !px-5 md:!px-6 !py-4 md:!py-5 rounded-xl glass border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all bg-background/50 text-foreground resize-none text-base"
                  placeholder="Your message..."
                  style={{ padding: '1rem 1.25rem' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center rounded-xl bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all text-white font-medium text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px] md:min-h-[64px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ padding: '1rem 2rem', gap: '0.75rem' }}
              >
                <Send size={20} />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

