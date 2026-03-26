// Información de la tienda
export const STORE_INFO = {
  name: 'Doña Maria',
  phone: '+74325440',
  whatsapp: '+74325440',
  address: 'Ubicación exacta en Google Maps',
  mapUrl: 'https://maps.app.goo.gl/iKMmdjWLDHddPqDp6',
  hours: {
    weekday: 'Lunes - Viernes: 8:00 AM - 5:00 PM',
    saturday: 'Sábado: 9:00 AM - 2:00 PM',
    closed: 'Domingo: Cerrado',
  },
};

// URL de WhatsApp
export const WHATSAPP_LINK = `https://wa.me/${STORE_INFO.whatsapp.replace(/\D/g, '')}`;

// Mensaje de WhatsApp personalizado
export const WHATSAPP_MESSAGE = 'Hola, me interesa conocer más sobre los productos de tuberías.';

// Colores de la paleta
export const COLORS = {
  electric: '#0080FF',
  steel: '#42474C',
  snow: '#F8F9FA',
  charcoal: '#1A1A1A',
};

// URLs de imágenes de demostración
export const DEMO_IMAGES = {
  hero: '/images/gallery/hero-banner.jpg',
  store: '/images/gallery/store-front.jpg',
  warehouse: '/images/gallery/warehouse.jpg',
};
