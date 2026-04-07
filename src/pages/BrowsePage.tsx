import React from 'react';
import { motion } from 'framer-motion';
import CategoryGrid from '../components/CategoryGrid';

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0f1535] to-[#0a0e27] pt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <h1 className="text-5xl font-black mb-4">Durchsuchen</h1>
        <p className="text-xl text-gray-400">
          Erkunden Sie unsere umfangreiche Bibliothek an Filmen und Serien
        </p>
      </motion.div>

      <CategoryGrid />
    </div>
  );
}