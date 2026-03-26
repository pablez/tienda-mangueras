'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Tienda Doña Maria',
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Depósito de tuberías',
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Variedad de productos',
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Atención al cliente',
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Instalaciones',
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.jpg',
    alt: 'Productos premium',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(
    null
  );

  return (
    <section className="py-20 bg-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Galería de Imágenes
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            Conoce nuestra tienda y los productos disponibles
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <motion.button
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-2xl">👁️</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-3xl w-full h-full max-h-screen flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes size={32} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
