self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open('safeher-v1').then(cache =>
      cache.match(e.request).then(res => res || fetch(e.request))
    )
  );
});
