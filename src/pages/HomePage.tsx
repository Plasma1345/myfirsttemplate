import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ShowCarousel from '../components/ShowCarousel';
import { trendingShows, actionShows, dramaShows, comedyShows } from '../data/index';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0f1535] to-[#0a0e27]">
      <HeroSection />

      <div className="space-y-12 py-12">
        <ShowCarousel title="🔥 Jetzt im Trend" shows={trendingShows} />
        <ShowCarousel title="⚡ Action & Abenteuer" shows={actionShows} />
        <ShowCarousel title="🎭 Drama & Spannung" shows={dramaShows} />
        <ShowCarousel title="😂 Komödie" shows={comedyShows} />
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Unbegrenzte Filme, Serien und mehr
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schauen Sie überall an. Beenden Sie die Serie, wo Sie sie begonnen haben.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg shadow-lg shadow-red-600/50 transition-all duration-200"
          >
            Kostenlos starten
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}