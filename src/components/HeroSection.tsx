import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredShows } from '../data/index';

export default function HeroSection() {
  const [featured, setFeatured] = useState(featuredShows[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredShows.length);
      setFeatured(featuredShows[(activeIndex + 1) % featuredShows.length]);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative h-screen pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${featured.heroImage}')`,
            backgroundPosition: 'center 20%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            key={featured.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-red-400">Jetzt neu verfügbar</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black tracking-tight leading-tight"
            >
              {featured.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              {featured.description}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-sm md:text-base"
            >
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 border border-gray-500 rounded text-gray-300">
                  {featured.rating}
                </span>
              </div>
              <div className="text-gray-400">{featured.year}</div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-400">{featured.duration}</div>
              <div className="text-gray-400">•</div>
              <div className="flex items-center space-x-1">
                {featured.genres.map((genre, i) => (
                  <span key={i} className="text-gray-400">
                    {genre}
                    {i < featured.genres.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Link to={`/detail/${featured.id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg shadow-red-600/50"
                >
                  <Play size={20} fill="currentColor" />
                  <span>Jetzt ansehen</span>
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold rounded-lg flex items-center justify-center space-x-3 backdrop-blur-sm transition-all duration-200 border border-gray-600/30"
              >
                <Info size={20} />
                <span>Mehr Infos</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-8 z-10 flex space-x-2"
      >
        {featuredShows.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              setFeatured(featuredShows[i]);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-red-600 w-8' : 'bg-gray-600 w-2'
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}