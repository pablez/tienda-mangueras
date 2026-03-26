'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import testimonials from '@/data/testimonials.json';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-snow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            Miles de clientes satisfechos confían en Doña Maria
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              {/* Stars */}
              <div className="flex gap-2 mb-4 justify-center">
                {Array(testimonials[currentIndex].rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={24} />
                  ))}
              </div>

              {/* Comment */}
              <p className="text-lg text-charcoal italic mb-6 max-w-2xl">
                "{testimonials[currentIndex].comment}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-charcoal">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-steel text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="bg-electric hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-electric' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="bg-electric hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
