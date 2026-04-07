import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { categories, allShows } from '../data/index';
import ShowCard from './ShowCard';

export default function CategoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredShows =
    selectedCategory === 'all'
      ? allShows
      : allShows.filter((show) => show.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filter */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Kategorien durchsuchen</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredShows.map((show, i) => (
            <motion.div
              key={show.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ShowCard show={show} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}