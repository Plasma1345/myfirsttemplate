import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Über uns': ['FAQ', 'Hilfecenter', 'Konto', 'Mediacenter'],
    'Schnelllinks': ['Neu & beliebt', 'Meine Liste', 'Meine Watchlist', 'Top 10 heute'],
    'Rechtliches': ['Datenschutz', 'Nutzungsbedingungen', 'Cookies', 'Beschwerden'],
    'Social': ['Facebook', 'Instagram', 'Twitter', 'YouTube'],
  };

  return (
    <footer className="bg-gradient-to-t from-black via-black/95 to-black/80 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black mb-8">
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              NETFLIX
            </span>
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-8">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ Icon, label }) => (
              <motion.button
                key={label}
                whileHover={{ scale: 1.2, color: '#dc2626' }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-gray-300 mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <p className="text-gray-500 text-sm mb-4">
            © {currentYear} Netflix Clone. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-600 text-xs">
            Dies ist eine Demonstrationswebseite für Bildungszwecke. Alle Inhalte sind fiktiv.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}