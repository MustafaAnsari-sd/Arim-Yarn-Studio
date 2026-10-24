/**
 * Site-wide configuration — Arim Yarn Studio
 */

const siteConfig = {
  brandName: 'Arim Yarn Studio',
  tagline: 'Handcrafted Crochet Creations',
  description:
    'Unique handmade crochet products crafted with love in India — bags, accessories, home décor and heartfelt gifts.',

  // Country code + number, no + or spaces (matches https://wa.me/917977248660)
  whatsappNumber: '917977248660',

  whatsappDisplayNumber: '+91 7977248660',

  whatsappMessages: {
    general:
      "Hi Arim Yarn Studio! I'm interested in your handmade crochet products. Could you please share more details?",
    customOrder:
      "Hi Arim Yarn Studio! I'd like to enquire about a custom crochet order. Could you share what options are available?",
  },

  instagram: {
    handle: 'arimyarnstudio',
    url: 'https://www.instagram.com/arimyarnstudio/',
  },

  deliveryAreas: [
    'Andheri',
    'Jogeshwari',
    'Malad',
    'Bandra',
    'Khar',
    'Santacruz',
    'Dharavi',
  ],

  currency: {
    code: 'INR',
    symbol: '₹',
  },
};

/**
 * Build an official WhatsApp click-to-chat URL with an optional prefilled message.
 */
export function getWhatsAppUrl(message) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export default siteConfig;
