const CACHE_NAME = 'viaarto-cache-v1';
const urlsToCache = [
  '/',
  '/css/normalize.css',
  '/css/skeleton-light.css',
  '/css/skeleton-dark.css',
  '/css/brands.css',
  '/images/logo-viaarto-redondo-transparente.png',
  '/images/hero-background.webp',
  '/fonts/open-sans-v34-vietnamese_latin-ext_latin_hebrew_greek-ext_greek_cyrillic-ext_cyrillic-regular.woff2',
  '/images/icons/whatsapp.svg',
  '/images/icons/generic-homepage.svg',
  '/images/icons/generic-shopping-bag.svg',
  '/images/icons/linkedin.svg',
  '/images/icons/instagram.svg',
  '/images/icons/cal.svg',
  '/images/icons/generic-email-alt.svg',
  '/images/icons/share.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
