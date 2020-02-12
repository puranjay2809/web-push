//This lives at the root folder of the client side
self.addEventListener('push', function(e) {
    var optoins ={
        body: 'This notification welcomes to new world!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions:[
            {
                action: 'explore',
                title: 'Explore this new world!',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    };
    e.waitUntil(self.registration.sendNotification('Hello World!', options));
})