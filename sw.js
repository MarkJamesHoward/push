self.addEventListener('push', () => {
  self.registration.showNotification('Hello world!', options);
});
