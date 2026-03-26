'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { WHATSAPP_LINK } from '@/data/constants';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.5 } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-charcoal via-steel to-charcoal text-white overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-electric rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-electric rounded-full opacity-10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-electric">Doña Maria</span>
          <br />
          Tuberías de Calidad
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-snow mb-8 max-w-2xl mx-auto leading-relaxed"
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Distribuidor confiable de tuberías PVC, galvanizadas y accesorios para tus proyectos residenciales e industriales
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-electric hover:bg-blue-600 text-charcoal font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 text-lg transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaWhatsapp size={24} />
            Contactar por WhatsApp
          </motion.a>

          <motion.button
            className="border-2 border-electric text-electric hover:bg-electric hover:text-charcoal font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 text-lg transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              document
                .getElementById('products')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Productos
            <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { number: '10+', label: 'Años de experiencia' },
            { number: '1000+', label: 'Clientes satisfechos' },
            { number: '50+', label: 'Productos disponibles' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.p className="text-3xl sm:text-4xl font-bold text-electric">
                {stat.number}
              </motion.p>
              <p className="text-snow text-sm sm:text-base mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
