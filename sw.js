// sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 強制立即啟用
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});