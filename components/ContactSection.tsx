'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK } from '@/data/constants';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-electric to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          ¿Listo para tus proyectos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Contacta con nosotros ahora por WhatsApp para cotizaciones, consultas y más información sobre nuestros productos
        </motion.p>

        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp size={28} />
          Enviar mensaje por WhatsApp
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
        >
          <p className="text-sm md:text-base">
            📱 Respuesta rápida | ✅ Presupuestos sin compromiso | 🚚 Entrega disponible
          </p>
        </motion.div>
      </div>
    </section>
  );
}
