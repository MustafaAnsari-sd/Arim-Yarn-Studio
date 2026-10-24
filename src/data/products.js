/**
 * Product Data — Arim Yarn Studio
 * All prices: ₹79
 */

export const CATEGORIES = [
  'All',
  'Keychains',
  'Hair Accessories',
  'Bookmarks',
  'Home Décor',
  'Charms & Clips',
];

const products = [
  // ── Keychains ──────────────────────────────────────────────
  {
    id: 'prod-001',
    name: 'Crochet Bow Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Vibrant handcrafted crochet bow keychains in bold, cheerful colours. A perfect gift or a fun pop of colour for your everyday carry.',
    image: '/images/products/bow-keychain.jpg',
    badge: 'Popular',
    colors: ['Red', 'Navy Blue', 'Yellow', 'Sky Blue', 'Pink'],
  },
  {
    id: 'prod-002',
    name: 'Macaron Crochet Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Sweet handmade macaron keychains crocheted in soft pastel shades. A charming bag accessory that looks good enough to eat!',
    image: '/images/products/macaron-keychain.jpg',
    badge: 'New',
    colors: ['Peach', 'Cream', 'Pink', 'Black & White'],
  },
  {
    id: 'prod-003',
    name: 'Triple Heart Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Three stacked crochet hearts dangling from a single keyring — a sweet, romantic accessory for your keys or bag.',
    image: '/images/products/prod_4.jpg',
    badge: 'Gift Idea',
    colors: ['White + Teal + Blue', 'Custom colours available'],
  },
  {
    id: 'prod-004',
    name: 'Crochet Flower Keychain Set',
    price: 79,
    category: 'Keychains',
    description:
      'Plush puffy flower keychains in a rainbow of colours — purple, pink, yellow, black, blue, green, white & more. Pick your favourite!',
    image: '/images/products/prod_10.jpg',
    badge: 'Bestseller',
    colors: ['Purple', 'Pink', 'Yellow', 'Black', 'Blue', 'Green', 'White', 'Lavender'],
  },
  {
    id: 'prod-005',
    name: 'Cherry Keychain - Dark Red',
    price: 79,
    category: 'Keychains',
    description:
      'Adorable crochet cherry keychain with green leaves and looped stem. A classic fruity charm full of handmade character.',
    image: '/images/products/prod_11.jpg',
    badge: null,
    colors: ['Deep Red', 'Pink'],
  },
  {
    id: 'prod-006',
    name: 'Pink Cherry Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Sweet pink crochet cherry keychain with delicate green leaves. Looks stunning clipped to your bag or backpack.',
    image: '/images/products/prod_12.jpg',
    badge: 'Cute Pick',
    colors: ['Pink', 'Red'],
  },
  {
    id: 'prod-015',
    name: 'Star Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Adorable crochet star keychains with keyring and chain. Available in cream and black — perfect for adding a celestial touch to your keys.',
    image: '/images/products/1.png.jpeg',
    badge: null,
    colors: ['Cream', 'Black', 'Custom colours'],
  },
  {
    id: 'prod-016',
    name: 'Heart Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Single crochet heart keychains with keyring and chain. Sweet and simple in pink and red — a perfect little gift.',
    image: '/images/products/2.png.jpeg',
    badge: null,
    colors: ['Light Pink', 'Red'],
  },
  {
    id: 'prod-017',
    name: 'Cat Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Cute crochet cat keychains in white and black with tiny ears and tail. An adorable companion for your bag or keys!',
    image: '/images/products/3.png.jpeg',
    badge: 'Cute Pick',
    colors: ['White', 'Black'],
  },
  {
    id: 'prod-018',
    name: 'Spiral Flower Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Beautiful white and pink spiral flower keychains with delicate swirl design. Unique and eye-catching!',
    image: '/images/products/4.png.jpeg',
    badge: null,
    colors: ['White & Pink'],
  },
  {
    id: 'prod-019',
    name: 'Sakura Flower Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Cherry blossom inspired crochet keychains in white with soft pink centers. Bring a touch of Japanese elegance to your everyday carry.',
    image: '/images/products/5.png.jpeg',
    badge: null,
    colors: ['White & Pink'],
  },
  {
    id: 'prod-020',
    name: 'Spider-Man Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Fun Spider-Man inspired keychain with iconic mask design. Perfect for superhero fans!',
    image: '/images/products/7.png.jpeg',
    badge: 'Fan Fave',
    colors: ['Red & Black'],
  },
  {
    id: 'prod-021',
    name: 'Batman Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Cool Batman bat symbol keychain in black with yellow outline. A must-have for DC fans!',
    image: '/images/products/10.png.jpeg',
    badge: null,
    colors: ['Black & Yellow'],
  },
  {
    id: 'prod-022',
    name: 'Lollipop Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Sweet spiral lollipop keychains in pink/red and white. Whimsical and fun — looks good enough to eat!',
    image: '/images/products/11.png.jpeg',
    badge: null,
    colors: ['Pink & White', 'Red & White'],
  },
  {
    id: 'prod-023',
    name: 'Red Rose Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Elegant red rose keychain with green leaf detail. A timeless and romantic accessory.',
    image: '/images/products/12.png.jpeg',
    badge: null,
    colors: ['Red', 'Pink'],
  },
  {
    id: 'prod-024',
    name: 'Four-Leaf Clover Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Lucky green shamrock keychain — carry a bit of Irish luck with you everywhere!',
    image: '/images/products/13.png.jpeg',
    badge: 'Lucky Charm',
    colors: ['Green'],
  },
  {
    id: 'prod-025',
    name: 'Movie Clapboard Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Director clapboard keychain in black and white. Perfect gift for film lovers and aspiring directors!',
    image: '/images/products/24.png.jpeg',
    badge: null,
    colors: ['Black & White'],
  },
  {
    id: 'prod-026',
    name: 'Letter Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Personalized round initial keychains with embroidered letters. Choose your letter in beige, white, or black — makes a thoughtful monogrammed gift!',
    image: '/images/products/33.png.jpeg',
    badge: 'Personalized',
    colors: ['Beige', 'White', 'Black'],
  },
  {
    id: 'prod-027',
    name: 'Spider Hero Keychain Set',
    price: 79,
    category: 'Keychains',
    description:
      'Spider-Man inspired keychains in pink/white and classic red with web design. Fun superhero accessories!',
    image: '/images/products/34.png.jpeg',
    badge: null,
    colors: ['Pink & White', 'Red & Black'],
  },
  {
    id: 'prod-028',
    name: 'Lily Pad Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Green lily pad keychain with pink flower detail. Bring a touch of nature to your keys!',
    image: '/images/products/35.png.jpeg',
    badge: null,
    colors: ['Green & Pink'],
  },
  {
    id: 'prod-029',
    name: 'Sunflower & Daisy Keychain',
    price: 79,
    category: 'Keychains',
    description:
      'Beautiful sunflower (yellow with brown center) and daisy (white with yellow center) keychains. Cheerful and bright!',
    image: '/images/products/36.png.jpeg',
    badge: null,
    colors: ['Yellow & Brown', 'White & Yellow'],
  },

  // ── Hair Accessories ───────────────────────────────────────
  {
    id: 'prod-007',
    name: 'Crochet Bow Hair Clips',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Adorable handcrafted crochet bow hair clips — lightweight, colourful and perfect for everyday wear. Available in a full rainbow of shades.',
    image: '/images/products/bow-hair-clips.jpg',
    badge: 'Bestseller',
    colors: ['Pink', 'Purple', 'Yellow', 'Green', 'Blue'],
  },
  {
    id: 'prod-008',
    name: 'Daisy Hair Clips',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Pretty white daisy crochet hair clips with a soft yellow centre. Comes as a pair — delicate, feminine and effortlessly stylish.',
    image: '/images/products/prod_1.jpg',
    badge: 'New',
    colors: ['White & Yellow'],
  },
  {
    id: 'prod-030',
    name: 'Triple Flower Hair Clip',
    price: 79,
    category: 'Hair Accessories',
    description:
      'White crochet triple flower hair clip with yellow centers. Elegant and feminine — perfect for special occasions!',
    image: '/images/products/14.png.jpeg',
    badge: null,
    colors: ['White & Yellow'],
  },
  {
    id: 'prod-031',
    name: 'Flower Hair Ties',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Crochet flower hair ties on black elastic bands in pink and purple. Comfortable and pretty!',
    image: '/images/products/15.png.jpeg',
    badge: null,
    colors: ['Pink', 'Purple'],
  },
  {
    id: 'prod-032',
    name: 'Single Daisy Snap Clips',
    price: 79,
    category: 'Hair Accessories',
    description:
      'White daisy snap hair clips with golden yellow centers. Simple, sweet, and easy to wear!',
    image: '/images/products/16.png.jpeg',
    badge: null,
    colors: ['White & Yellow'],
  },
  {
    id: 'prod-033',
    name: 'Purple Flower Bobby Pins',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Delicate purple flower bobby pins — perfect for adding a subtle floral touch to your hairstyle.',
    image: '/images/products/17.png.jpeg',
    badge: null,
    colors: ['Purple'],
  },
  {
    id: 'prod-034',
    name: 'Flower Hair Ties - Elastic',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Crochet flower hair ties on white elastic bands in soft pink and mauve shades. Gentle on hair and adorable!',
    image: '/images/products/18.png.jpeg',
    badge: null,
    colors: ['White & Pink', 'Mauve'],
  },
  {
    id: 'prod-035',
    name: 'Rose Hair Ties',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Beautiful red rose hair ties on black elastic bands. Elegant and romantic!',
    image: '/images/products/19.png.jpeg',
    badge: null,
    colors: ['Red'],
  },
  {
    id: 'prod-036',
    name: 'Bow Hair Ties - Burgundy',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Maroon/burgundy crochet bow hair ties. Rich, warm colour perfect for autumn and winter!',
    image: '/images/products/20.png.jpeg',
    badge: null,
    colors: ['Maroon', 'Burgundy'],
  },
  {
    id: 'prod-037',
    name: 'Heart Snap Clips',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Adorable heart-shaped snap clips in blue and pink. Sweet and playful!',
    image: '/images/products/21.png.jpeg',
    badge: null,
    colors: ['Blue', 'Pink'],
  },
  {
    id: 'prod-038',
    name: 'Bunny Ear Bow Hair Ties',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Cute bunny ear bow hair ties in multiple colours including purple, pink, green, yellow, and blue. Fun and whimsical!',
    image: '/images/products/22.png.jpeg',
    badge: 'Cute Pick',
    colors: ['Purple', 'Pink', 'Green', 'Yellow', 'Blue', 'Beige'],
  },
  {
    id: 'prod-039',
    name: 'Pink Flower Snap Clips',
    price: 79,
    category: 'Hair Accessories',
    description:
      'Pink crochet flower snap clips with pearl centers. Comes as a pair — soft, feminine, and lovely!',
    image: '/images/products/23.png.jpeg',
    badge: null,
    colors: ['Pink'],
  },

  // ── Bookmarks ──────────────────────────────────────────────
  {
    id: 'prod-009',
    name: 'Pink Flower Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'A beautiful crochet flower bookmark with a long stem and a tiny leaf at the bottom. The prettiest way to keep your place in a book.',
    image: '/images/products/prod_9.jpeg',
    badge: 'Book Lover',
    colors: ['Pink', 'Yellow', 'Blue', 'Red', 'Purple'],
  },
  {
    id: 'prod-010',
    name: 'Flower Bookmark with Leaf',
    price: 79,
    category: 'Bookmarks',
    description:
      'Elegant crochet flower bookmark with a graceful curling stem and leaf detail. Soft, beautiful and made with attention to every detail.',
    image: '/images/products/prod_2.jpg',
    badge: null,
    colors: ['Pink', 'White', 'Yellow', 'Custom'],
  },
  {
    id: 'prod-011',
    name: 'Flower Bookmark Set',
    price: 79,
    category: 'Bookmarks',
    description:
      'Set of colorful crochet flower bookmarks — each with a long stem perfect for marking pages. Makes a thoughtful gift for book lovers!',
    image: '/images/products/prod_3.jpg',
    badge: 'Gift Set',
    colors: ['Lavender', 'Yellow', 'Pink', 'Red', 'Blue'],
  },
  {
    id: 'prod-012',
    name: 'Woven Flower Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Handcrafted crochet flower bookmarks with beautifully woven straps and hanging loops. Available in yellow and white daisy designs.',
    image: '/images/products/prod_6.jpg',
    badge: 'Book Fave',
    colors: ['Yellow & Beige', 'White & Beige'],
  },
  {
    id: 'prod-040',
    name: 'Rose Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Elegant rose bookmark with green stem and leaves. A romantic way to mark your page!',
    image: '/images/products/8.png.jpeg',
    badge: null,
    colors: ['Pink', 'Red', 'White'],
  },
  {
    id: 'prod-041',
    name: 'Spider-Man Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Fun Spider-Man bookmark with heart charm detail. Perfect for superhero fans who love to read!',
    image: '/images/products/9.png.jpeg',
    badge: 'Fan Fave',
    colors: ['Red & Black'],
  },
  {
    id: 'prod-042',
    name: 'Heart Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Sweet heart bookmark with braided stem in mauve/purple pink. Perfect for romance novels!',
    image: '/images/products/26.png.jpeg',
    badge: null,
    colors: ['Mauve Pink', 'Purple'],
  },
  {
    id: 'prod-043',
    name: 'Cat Bookmark Set',
    price: 79,
    category: 'Bookmarks',
    description:
      'Adorable cat bookmarks with tails in multiple colours: teal, orange, pink, purple, and yellow. Cat lovers will adore these!',
    image: '/images/products/27.png.jpeg',
    badge: 'Cute Pick',
    colors: ['Teal', 'Orange', 'Pink', 'Purple', 'Yellow'],
  },
  {
    id: 'prod-044',
    name: 'Blue Bow Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Lovely blue bow bookmark with braided stem. Elegant and refined!',
    image: '/images/products/28.png.jpeg',
    badge: null,
    colors: ['Light Blue', 'Sky Blue'],
  },
  {
    id: 'prod-045',
    name: 'Duck Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Cheerful yellow duck/chick bookmark — adorable and playful!',
    image: '/images/products/29.png.jpeg',
    badge: null,
    colors: ['Yellow & White'],
  },
  {
    id: 'prod-046',
    name: 'Snake Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Cute snake/worm bookmarks with eyes in yellow and green. Fun and unique!',
    image: '/images/products/30.png.jpeg',
    badge: null,
    colors: ['Yellow', 'Green'],
  },
  {
    id: 'prod-047',
    name: 'Clover Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Green four-leaf clover bookmark with stem. Bring good luck to your reading!',
    image: '/images/products/31.png.jpeg',
    badge: 'Lucky Charm',
    colors: ['Green'],
  },
  {
    id: 'prod-048',
    name: 'Pink Bow Bookmark',
    price: 79,
    category: 'Bookmarks',
    description:
      'Sweet pink bow bookmark with braided stem. Feminine and charming!',
    image: '/images/products/32.png.jpeg',
    badge: null,
    colors: ['Pink', 'Mauve'],
  },

  // ── Charms & Clips ─────────────────────────────────────────
  {
    id: 'prod-013',
    name: 'Heart Phone Charm',
    price: 79,
    category: 'Charms & Clips',
    description:
      'A sweet crochet heart charm with a phone strap loop — attach it to your phone, bag zip or keys. Deep red with a crisp white border.',
    image: '/images/products/prod_8.jpg',
    badge: 'New',
    colors: ['Red & White', 'Custom colours available'],
  },
  {
    id: 'prod-049',
    name: 'Smiley Daisy Bag Charm',
    price: 79,
    category: 'Charms & Clips',
    description:
      'Adorable smiley face daisy charms perfect for attaching to bag straps. Spread happiness wherever you go!',
    image: '/images/products/6.png.jpeg',
    badge: null,
    colors: ['White & Yellow'],
  },
  {
    id: 'prod-050',
    name: 'Frog Patch',
    price: 79,
    category: 'Charms & Clips',
    description:
      'Cute green frog appliques/patches with pink cheeks. Can be sewn or clipped onto bags, clothes, or accessories!',
    image: '/images/products/25.png.jpeg',
    badge: 'Cute Pick',
    colors: ['Green & Pink'],
  },

  // ── Home Décor ─────────────────────────────────────────────
  {
    id: 'prod-014',
    name: 'Lily Pad Coasters',
    price: 79,
    category: 'Home Décor',
    description:
      'Charming crochet lily pad coasters in soft sage green with a tiny flower embellishment. A beautiful handmade touch for your tea table.',
    image: '/images/products/prod_7.jpg',
    badge: 'Home Fave',
    colors: ['Sage Green'],
  },
];

export default products;
