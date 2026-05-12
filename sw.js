const CACHE_NAME = 'cierre-turno-v1';
const FILES_TO_CACHE = [
    '/cierre_remis/',
    '/cierre_remis/index.html',
    '/cierre_remis/css/styles.css',
    '/cierre_remis/js/utils.js',
    '/cierre_remis/js/calculations.js',
    '/cierre_remis/js/pdf.js',
    '/cierre_remis/js/share.js',
    '/cierre_remis/js/main.js',
    '/cierre_remis/manifest.json',
    '/cierre_remis/favicon.svg',
    '/cierre_remis/favicon-128x128.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Archivos cacheados');
            return cache.addAll(FILES_TO_CACHE);
        }).catch((error) => {
            console.error('Error al cachear archivos:', error);
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
