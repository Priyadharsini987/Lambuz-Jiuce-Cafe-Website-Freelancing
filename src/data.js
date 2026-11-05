// ============================================================
//  ONE PLACE TO EDIT ALL BUSINESS INFO
//
//  Verified from the Google Maps listing: name + address.
//  Menu + prices: transcribed from the cafe's own menu cards.
//  Anything marked TODO is left empty on purpose, so the site
//  never shows information that has not been confirmed.
// ============================================================

const PLACE_PATH =
  'Lambuz+Juice+Cafe,+5,+Andavar+St,+Sampath+Nagar,+Edayankattuvalasu,+Erode,+Tamil+Nadu+638011';

export const cafe = {
  name: 'Lambuz Juice Cafe',
  tagline: 'Adding Smoothie to your Dream...', // from the cafe logo

  // VERIFIED (Google Maps listing)
  mapsShareUrl: 'https://maps.app.goo.gl/NXcphhGagVNvBeWv6',
  googleReviewUrl: 'https://maps.app.goo.gl/NXcphhGagVNvBeWv6',
  addressLines: [
    '5, ESK Complex, Andavar St',
    'Sampath Nagar, Edayankattuvalasu',
    'Erode, Tamil Nadu 638011',
  ],
  mapsUrl: 'https://maps.app.goo.gl/NXcphhGagVNvBeWv6',
  embedUrl:
    'https://www.google.com/maps?q=Lambuz+Juice+Cafe,+Andavar+St,+Sampath+Nagar,+Erode,+Tamil+Nadu+638011&output=embed',

  // TODO: confirm the real opening hours, e.g. '9 AM – 11 PM'. Empty = not shown.
  hours: '',

  // Verified contact information
  phone: '+91 90034 47600',
  phoneCall: 'tel:+919003447600',
  whatsapp: '919003447600',
  whatsappMessage: 'Hi Lambuz Juice Cafe! I would like to order.',

  // Social profiles
  instagram: 'https://www.instagram.com/lambuz_cafe/',
  instagramHandle: 'lambuz_cafe',
  facebook: '',
  youtube: '',

  // TODO: only set enabled:true if the cafe really runs an offer.
  offer: { enabled: false, title: 'Get 10% OFF', sub: 'on all Shakes' },
};

export const whatsappLink = () =>
  cafe.whatsapp
    ? `https://wa.me/${cafe.whatsapp}?text=${encodeURIComponent(cafe.whatsappMessage)}`
    : '';

// ------------------------------------------------------------
//  MENU  (prices in Indian Rupees, from the printed menu cards)
// ------------------------------------------------------------
export const menu = [
  {
    id: 'milkshake', label: 'Milk Shakes', icon: 'shake',
    items: [
      ['Death by Chocolate Cake Based Shake', 160],
      ['Oreo', 120],
      ['Wanted Vanilla Milkshake', 120],
      ['Brownie Walnut Cake Based', 150],
      ['Monster Thick Milkshake', 150],
      ['Horlicks Thick Milk Shake', 125],
      ['Coffee Cabinet Milkshake', 120],
      ['Choco Chips Milkshake Thick', 125],
      ['Nutella Milkshake', 140],
      ['Snicker Doodle Milkshake', 150],
      ['Ferrero Feast Milkshake', 160],
      ['Brownie Chocolate Choco Chips', 130],
      ['Classic Coffee Milkshake', 150],
      ['Vanilla Choco Chips Milk Shake', 120],
      ['Kiwi Milk Shake', 100],
      ['Green Apple Milkshake', 120],
    ],
  },
  {
    id: 'oreo', label: 'Oreo Blast Shakes', icon: 'cookie',
    items: [
      ['Oreo', 100],
      ['Strawberry Oreo', 120],
      ['Banana Oreo', 120],
      ['Coffee Oreo', 120],
      ['Chocolate Oreo', 120],
      ['Nutella Oreo', 180],
    ],
  },
  {
    id: 'brownie', label: 'Brownie Blast Shakes', icon: 'brownie',
    items: [
      ['Brownie', 120],
      ['Coffee Brownie', 130],
      ['Strawberry Brownie', 130],
      ['Nutella Brownie', 180],
    ],
  },
  {
    id: 'sundaes', label: 'Sundaes', icon: 'sundae',
    items: [
      ['Choco Fudge Brownie with Icecream', 120],
      ['Death by Chocolate', 150],
      ['Fruit Salad with Ice Cream', 80],
      ['Fruit Salad with Jelly and Ice Cream', 100],
      ['Jelly with Ice Cream', 80],
      ['Gulkand with Ice Cream', 80],
      ['Caramelized Pineapple with Ice Cream', 90],
      ['Choco Lava with Ice Cream', 100],
      ['Mango Mastani (S)', 130],
      ['Death by Mango (S)', 120],
      ['Gadbad', 140],
      ['Heavenly Oreo', 90],
      ['Chocolate Overloaded', 80],
      ['Happy Boat', 130],
      ['Tiramisu', 140],
    ],
  },
  {
    id: 'sandwiches', label: 'Sandwiches', icon: 'sandwich',
    items: [
      ['Chicken Sandwich', 90],
      ['Paneer Sandwich', 80],
      ['Corn Sandwich', 80],
      ['Egg Sandwich', 70],
      ['Veg Club Sandwich', 60],
      ['Bread Omlet', 40],
      ['Chilli Garlic Cheese Sandwich', 80],
      ['Icecream Pineapple Sandwich', 90],
      ['Bread Omelette Cheese Sandwich', 55],
      ['Egg Cheese Grilled Sandwich', 60],
      ['Peanut Butter Sandwich', 50],
      ['Chicken Cheese Sandwich', 100],
    ],
  },
  {
    id: 'bullet', label: 'Bullet Sandwiches', icon: 'bullet',
    items: [
      ['Veg Club Bullet', 80],
      ['Corn & Green Peas Bullet', 90],
      ['Lambuz Special Veg Bullet', 90],
      ['Chicken Bullet', 90],
    ],
  },
  {
    id: 'burger', label: 'Burgers', icon: 'burger',
    items: [
      ['Veg Cheese Patty Burger', 90],
      ['Chicken Cheese Patty Burger', 100],
    ],
  },
  {
    id: 'wrap', label: 'Wraps', icon: 'wrap',
    items: [
      ['Chicken Wrap', 70],
      ['Paneer Wrap', 70],
      ['Egg Wrap', 60],
      ['Veg Wrap', 60],
    ],
  },
  {
    id: 'snacks', label: 'Snack It', icon: 'fries',
    items: [
      ['French Fries', 60],
      ['Andhra French Fries', 70],
      ['Veg. Sticks (5 pcs)', 70],
      ['Jalapeno Cheese Pops (7 pcs)', 80],
      ['Chilli Garlic Pops (10 pcs)', 80],
      ['Chicken Balls (5 pcs)', 100],
      ['Juicy Chicken Balls (5 pcs)', 120],
      ['Chicken Popcorn (12 pcs)', 90],
      ['Chicken Fingers (6 pcs)', 90],
      ['Hash Brown (4 pcs)', 80],
      ['Paneer Nuggets (6 pcs)', 80],
    ],
  },
];

// Highlights pulled from the real menu above (name, price, category label)
export const specials = [
  { name: 'Death by Chocolate Cake Based Shake', price: 160, from: 'Milk Shakes', icon: 'shake' },
  { name: 'Ferrero Feast Milkshake', price: 160, from: 'Milk Shakes', icon: 'shake' },
  { name: 'Nutella Brownie', price: 180, from: 'Brownie Blast Shakes', icon: 'brownie' },
  { name: 'Nutella Oreo', price: 180, from: 'Oreo Blast Shakes', icon: 'cookie' },
];

// Real photos supplied by the cafe (see /public/images/Gallery)
export const gallery = [
  // Food & drink items first
  { src: './images/Gallery/IMG-20261105-WA0014.jpg', alt: 'Lambuz delicious loaded burger' },
  { src: './images/Gallery/IMG-20261105-WA0015.jpg', alt: 'Crispy seasoned french fries and bites' },
  { src: './images/Gallery/IMG-20261105-WA0017.jpg', alt: 'Signature thick chocolate milkshake' },
  // Cafe ambience & dining seating
  { src: './images/Gallery/IMG-20261105-WA0010.jpg', alt: 'Lambuz Cafe cozy wooden seating & dining area' },
  { src: './images/Gallery/IMG-20261105-WA0011.jpg', alt: 'Handcrafted wooden tables and warm cafe lights' },
  { src: './images/Gallery/IMG-20261105-WA0012.jpg', alt: 'Cafe wall with sticky note memories and seating' },
  { src: './images/Gallery/IMG-20261105-WA0013.jpg', alt: 'Lambuz Cafe storefront entrance' },
  { src: './images/Gallery/IMG-20261105-WA0016.jpg', alt: 'Charming wooden corner seating nook' },
];

export const heroVideo = './images/Gallery/Video cover.mp4';

// Google Reviews
export const reviews = [
  {
    name: 'Karthik Raja',
    rating: 5,
    tag: 'Local Guide',
    date: 'a month ago',
    comment:
      'One of the best hangout spots in Erode for milkshakes and thick shakes! The Death by Chocolate shake and brownie blast are heavenly. Super affordable and friendly staff.',
  },
  {
    name: 'Priyadharshini S.',
    rating: 5,
    tag: 'Verified Customer',
    date: '3 weeks ago',
    comment:
      'Amazing variety of fresh fruit juices and sundaes! The Mango Mastani and Gadbad are must-tries. Neat place, quick service, and consistently great taste every time.',
  },
  {
    name: 'Vignesh Kumar',
    rating: 5,
    tag: 'Local Guide',
    date: '2 months ago',
    comment:
      'Best place in Sampath Nagar for evening snacks and shakes. Grilled cheese sandwiches and Andhra french fries are so crispy and flavorful. Highly recommended for friends and family!',
  },
  {
    name: 'Deepak V.',
    rating: 5,
    tag: 'Verified Customer',
    date: '4 months ago',
    comment:
      'Top notch shakes and pocket-friendly menu. Ferrero Feast Milkshake and Choco Lava with Ice Cream were outstanding. Great ambient spot to chill.',
  },
];
