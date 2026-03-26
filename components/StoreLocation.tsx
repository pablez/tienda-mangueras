'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { STORE_INFO } from '@/data/constants';

export default function StoreLocation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Ubicación y Horarios
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            Visítanos en nuestra tienda o contacta por WhatsApp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDvMvp-NLuVnPq8pVF1xjxLzNLxDXjAp3s&q=place_id:ChIJ7cv00DwcxpYRfW343jAQvWA`}
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address */}
            <motion.div
              className="bg-snow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl text-electric flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Ubicación</h3>
                  <a
                    href={STORE_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel hover:text-electric transition-colors underline"
                  >
                    {STORE_INFO.address}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="bg-snow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl text-electric flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">Horarios</h3>
                  <div className="space-y-1 text-steel">
                    <p>{STORE_INFO.hours.weekday}</p>
                    <p>{STORE_INFO.hours.saturday}</p>
                    <p>{STORE_INFO.hours.closed}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="bg-snow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl text-electric flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Contacto</h3>
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="text-steel hover:text-electric transition-colors font-semibold"
                  >
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
