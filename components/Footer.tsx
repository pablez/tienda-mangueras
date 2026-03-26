'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { STORE_INFO, WHATSAPP_LINK } from '@/data/constants';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-electric mb-4">Doña Maria</h3>
            <p className="text-snow text-sm leading-relaxed">
              Tu distribuidor confiable de tuberías PVC, galvanizadas y accesorios de calidad premium para todos tus proyectos.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-electric transition-colors"
              >
                <FaPhone size={16} />
                {STORE_INFO.phone}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </a>
              <a
                href={STORE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-electric transition-colors"
              >
                <FaMapMarkerAlt size={16} />
                Ver en Google Maps
              </a>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex gap-6">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-electric transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaWhatsapp size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-steel pt-8 text-center text-snow text-sm"
        >
          <p>© 2024 Doña Maria. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado con ❤️ para tu negocio</p>
        </motion.div>
      </div>
    </footer>
  );
}
