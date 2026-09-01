const CACHE_NAME = 'sinehub-v1';

// I-install ang Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// I-activate ang Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Network request handler
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});