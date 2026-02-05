if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Haksaz service worker ready"))
    .catch(err => console.log("SW error", err));
}
