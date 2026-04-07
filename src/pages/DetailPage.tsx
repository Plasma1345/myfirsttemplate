import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Plus, Share2, ThumbsUp, ArrowLeft, Clock, Calendar, Zap } from 'lucide-react';
import { allShows } from '../data/index';
import ShowCarousel from '../components/ShowCarousel';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const show = allShows.find((s) => s.id === id);
  const [isLiked, setIsLiked] = useState(false);

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Nicht gefunden</h1>
          <button
            onClick={() => navigate('/')}
            className="text-red-600 hover:text-red-500"
          >
            Zurück zur Startseite
          </button>
        </div>
      </div>
    );
  }

  const relatedShows = allShows
    .filter((s) => s.category === show.category && s.id !== show.id)
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0f1535] to-[#0a0e27]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-screen pt-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${show.heroImage}')`,
              backgroundPosition: 'center 20%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent"></div>
        </div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate(-1)}
          className="absolute top-24 left-8 z-20 p-3 bg-black/60 hover:bg-black/80 rounded-full transition-all"
        >
          <ArrowLeft size={24} />
        </motion.button>

        {/* Content */}
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm font-semibold text-red-400">
                  {show.category.toUpperCase()}
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
                {show.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 border border-gray-500 rounded text-gray-300 font-bold">
                    {show.rating}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar size={18} />
                  <span>{show.year}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock size={18} />
                  <span>{show.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Zap size={18} />
                  <span>{show.episodes} Episoden</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                {show.description}
              </p>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {show.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg shadow-red-600/50"
                >
                  <Play size={22} fill="currentColor" />
                  <span>Abspielen</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 border border-gray-600/30"
                >
                  <Plus size={22} />
                  <span>Zur Liste hinzufügen</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`px-6 py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 border ${
                    isLiked
                      ? 'bg-red-600/30 border-red-500 text-red-400'
                      : 'bg-gray-700/50 hover:bg-gray-600/50 border-gray-600/30 text-white'
                  }`}
                >
                  <ThumbsUp size={22} fill={isLiked ? 'currentColor' : 'none'} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 border border-gray-600/30"
                >
                  <Share2 size={22} />
                </motion.button>
              </div>

              {/* Cast Info */}
              <div className="pt-6 border-t border-gray-800">
                <p className="text-gray-400 text-sm">
                  <span className="text-gray-300 font-semibold">Mit: </span>
                  {show.cast.slice(0, 3).join(', ')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Über diese Serie</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {show.description}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Mit einer erstklassigen Besetzung, atemberaubenden Kulissen und
              packenden Handlungen bietet diese Serie ein unvergessliches
              Seherlebnis. Tauchen Sie ein in eine Welt voller Spannung,
              Abenteuer und emotionaler Tiefe.
            </p>
          </div>

          {/* Side Info */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-fit">
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-2">REGISSEUR</h3>
                <p className="text-white">{show.director}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-2">DREHBUCH</h3>
                <p className="text-white">{show.writer}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-2">ALTERSFREIGABE</h3>
                <p className="text-white">{show.rating}</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-2">LÄNDER</h3>
                <p className="text-white">Deutschland, Österreich, Schweiz</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Related Shows */}
      {relatedShows.length > 0 && (
        <div className="py-12">
          <ShowCarousel title="Ähnliche Inhalte" shows={relatedShows} />
        </div>
      )}
    </div>
  );
}