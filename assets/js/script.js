if('serviceWorker' in navigator){
    console.log('Service Worker Supported.')
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('../../sw_cached_pages.js')
        .then( reg => console.log('Service Worker: REgistered'))
        .catch(err => console.log(`Service Worker could not be loaded ${err}`))


    })
}