const CACHE_NAME = 'cierre-turno-v1';
const FILES_TO_CACHE = [
    'index.html',
    'css/styles.css',
    'js/utils.js',
    'js/calculations.js',
    'js/pdf.js',
    'js/share.js',
    'js/main.js',
    'manifest.json',
    'favicon.svg',
    'favicon-128x128.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Archivos cacheados');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('Cache vieja eliminada:', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
