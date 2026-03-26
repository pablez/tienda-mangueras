'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const ProductGrid = dynamic(() => import('@/components/ProductGrid'), { ssr: false });
const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });
const StoreLocation = dynamic(() => import('@/components/StoreLocation'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="products">
        <ProductGrid />
      </section>
      <Gallery />
      <StoreLocation />
      <ContactSection />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
