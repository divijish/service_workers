//console.log("Hello world")
const cacheAssets = [
    "index.html",
    "about.html",
    "assets/css/style.css",
    "assets/js/script.js"
]

const cacheName = "v2";

//Call Install Event
self.addEventListener('install', e => {
    console.log('Service Worker : Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache =>{
                console.log("Service Worker: Caching Files");
                cache.addAll(cacheAssets);
            })
            .then(()=> {
                console.log("Skipping Waiting");
                self.skipWaiting();
            })
    );
})

//Call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker : Activated');
    //Remove unwanted cache

    e.waitUntil(
       
            
            caches.keys().then(cacheNames =>{
                console.log("Clearing Old cache!")

                return Promise.all(
                
                cacheNames.map(cache => {
                    console.log("cachenames",cache);
                    if(cache !==cacheName){
                        console.log("Deleting cache : ",this.cache);
                        return caches.delete(cache);
                    }

                })
               
               
    );})
        
    );
})

self.addEventListener('fetch',e =>{
    console.log("Service Worker: Fetching");
    e.respondWith(
        fetch(e.request)
        .catch(()=> caches.match(e.request))
    );
 
})