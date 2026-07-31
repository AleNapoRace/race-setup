const CACHE_NAME='race-setup-v1.14';
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 if(e.request.mode==='navigate'){
  e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{let x=r.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html',x));return r}).catch(()=>caches.match('./index.html')));
  return;
 }
 e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){let x=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,x))}return r}).catch(()=>caches.match(e.request)));
});
