self.addEventListener('install', event => {
    console.log('Service worker installed.');
});

self.addEventListener('fetch', event => {
    // You can add caching here for offline support if needed
});
  