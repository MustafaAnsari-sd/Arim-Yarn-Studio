/**
 * Product Data — Loop & Bloom
 *
 * This is the centralized data source for all products.
 * Replace sample entries with real product information.
 *
 * Each product has:
 *  - id          : unique string identifier
 *  - name        : product display name
 *  - price       : price in INR (number)
 *  - category    : one of the defined CATEGORIES
 *  - description : short product description
 *  - image       : path relative to public/ (e.g. "/images/products/my-bag.jpg")
 *  - badge       : optional label like "New", "Bestseller" etc.
 */

export const CATEGORIES = [
  'All',
  'Bags & Purses',
  'Home Décor',
  'Accessories',
  'Gifts',
  'Baby & Kids',
];

const products = [
  {
    id: 'prod-001',
    name: 'Sample Crochet Tote Bag',
    price: 1299,
    category: 'Bags & Purses',
    description:
      'A beautifully handcrafted crochet tote bag, perfect for everyday use. Made with premium cotton yarn.',
    image: '/images/products/sample-tote-bag.jpg',
    badge: 'Sample',
  },
  {
    id: 'prod-002',
    name: 'Sample Granny Square Cushion Cover',
    price: 899,
    category: 'Home Décor',
    description:
      'Classic granny-square cushion cover in warm, earthy tones. Adds a handmade touch to any room.',
    image: '/images/products/sample-cushion-cover.jpg',
    badge: 'Sample',
  },
  {
    id: 'prod-003',
    name: 'Sample Crochet Scrunchie Set',
    price: 349,
    category: 'Accessories',
    description:
      'Set of three hand-crocheted scrunchies in pastel colours. Gentle on hair, gorgeous to wear.',
    image: '/images/products/sample-scrunchie-set.jpg',
    badge: 'Sample',
  },
  {
    id: 'prod-004',
    name: 'Sample Amigurumi Bunny',
    price: 749,
    category: 'Gifts',
    description:
      'An adorable hand-crocheted amigurumi bunny. A thoughtful, one-of-a-kind gift for any occasion.',
    image: '/images/products/sample-amigurumi-bunny.jpg',
    badge: 'Sample',
  },
  {
    id: 'prod-005',
    name: 'Sample Baby Booties',
    price: 499,
    category: 'Baby & Kids',
    description:
      'Soft crochet baby booties in gentle pastels. Handmade with baby-safe yarn for delicate little feet.',
    image: '/images/products/sample-baby-booties.jpg',
    badge: 'Sample',
  },
  {
    id: 'prod-006',
    name: 'Sample Macramé Wall Hanging',
    price: 1599,
    category: 'Home Décor',
    description:
      'An elegant macramé-style wall hanging with crochet detailing. A statement piece for your wall.',
    image: '/images/products/sample-wall-hanging.jpg',
    badge: 'Sample',
  },
  {
    id: 'prod-007',
    name: 'Sample Crochet Crossbody Bag',
    price: 1099,
    category: 'Bags & Purses',
    description:
      'A chic crossbody bag with adjustable strap and button closure. Handmade with durable cotton yarn.',
    image: '/images/products/sample-crossbody-bag.jpg',
    badge: 'Sample',
  },
  {
    id: 'prod-008',
    name: 'Sample Crochet Coaster Set',
    price: 399,
    category: 'Home Décor',
    description:
      'Set of four hand-crocheted coasters in complementary colours. A charming addition to any table.',
    image: '/images/products/sample-coaster-set.jpg',
    badge: 'Sample',
  },
];

export default products;
