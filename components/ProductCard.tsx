'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK } from '@/data/constants';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

export default function ProductCard({
  name,
  description,
  category,
  image,
}: ProductCardProps) {
  return (
    <motion.div
      className="bg-snow rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      whileHover={{ translateY: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-electric text-white px-3 py-1 rounded-full text-sm font-semibold">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-charcoal mb-2">{name}</h3>
        <p className="text-steel text-sm mb-4 line-clamp-2">{description}</p>
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-electric hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp size={20} />
        </motion.a>
      </div>
    </motion.div>
  );
}
