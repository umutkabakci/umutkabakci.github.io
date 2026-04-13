import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-16 origin-center"
        />

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl mb-4 tracking-tight"
          >
            Let's Create <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let's turn your raw footage into a compelling visual story.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <a
            href="mailto:hello@umutkabakci.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-red-600/50"
          >
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10 tracking-wide">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mb-16"
        >
          <a
            href="https://www.linkedin.com/in/umut-kabakci-543ba8174/tr/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:border-red-600 hover:text-red-500 transition-all group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/umutleo/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:border-red-600 hover:text-red-500 transition-all group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.youtube.com/@synestela9278"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:border-red-600 hover:text-red-500 transition-all group"
          >
            <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
            <span>Video Editor</span>
            <span className="w-1 h-1 bg-red-600 rounded-full" />
            <span>Post-Production Specialist</span>
            <span className="w-1 h-1 bg-red-600 rounded-full" />
            <span>Digital Storyteller</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2026 Umut Kabakcı. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
