// Nombre de la cache
const CACHE_NAME = 'cierre-turno-v1';

// Archivos a cachear
const FILES_TO_CACHE = [
    '.',
    'index.html',
    'css/styles.css',
    'js/utils.js',
    'js/calculations.js',
    'js/pdf.js',
    'js/share.js',
    'js/main.js',
    'favicon.svg',
    'manifest.json'
];

// Instalacion del Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Archivos cacheados');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activacion y limpieza de caches viejas
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

// Estrategia: cache first, luego network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
