import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Show } from '../data/index';

interface ShowCardProps {
  show: Show;
  delay?: number;
}

export default function ShowCard({ show, delay = 0 }: ShowCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/detail/${show.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
      >
        {/* Image */}
        <motion.img
          src={show.posterImage}
          alt={show.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Hover Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 p-4 flex flex-col justify-between"
        >
          {/* Top Badge */}
          <div className="self-end">
            <span className="bg-red-600 px-3 py-1 rounded text-xs font-bold">
              {show.rating}
            </span>
          </div>

          {/* Bottom Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold line-clamp-2">{show.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-2">{show.description}</p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold flex items-center justify-center space-x-2"
              >
                <Play size={16} fill="currentColor" />
                <span>Abspielen</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-700/50 hover:bg-gray-600 rounded"
              >
                <Plus size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-700/50 hover:bg-gray-600 rounded"
              >
                <ThumbsUp size={18} />
              </motion.button>
            </div>

            {/* Meta */}
            <div className="text-xs text-gray-400 flex items-center space-x-2">
              <span>{show.year}</span>
              <span>•</span>
              <span>{show.duration}</span>
            </div>
          </div>
        </motion.div>

        {/* Play Icon Overlay (when not hovered) */}
        <motion.div
          animate={isHovered ? { opacity: 0 } : { opacity: 0.7 }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-transparent transition-colors duration-300"
        >
          <motion.div
            animate={isHovered ? { scale: 0 } : { scale: 1 }}
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"
          >
            <Play size={32} fill="white" className="text-white ml-1" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}