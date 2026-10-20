/**
 * Site-wide configuration — Loop & Bloom
 */

const siteConfig = {
  brandName: 'Loop & Bloom',
  tagline: 'Handmade Crochet Creations',
  description:
    'Unique handmade crochet products crafted with love in India — bags, accessories, home décor and heartfelt gifts.',

  // Country code + number, no + or spaces (matches https://wa.me/917977248660)
  whatsappNumber: '917977248660',

  whatsappDisplayNumber: '+91 7977248660',

  whatsappMessages: {
    general:
      "Hi Loop & Bloom! I'm interested in your handmade crochet products. Could you please share more details?",
    customOrder:
      "Hi Loop & Bloom! I'd like to enquire about a custom crochet order. Could you share what options are available?",
  },

  deliveryAreas: ['Andheri', 'Malad', 'Jogeshwari, Mumbai'],

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
