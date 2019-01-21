navigator.serviceWorker.register('/sw.js').then(reg => {
	console.log('Service worker registered');
}).catch(err => {
	console.log('Problem registering service worker');
});