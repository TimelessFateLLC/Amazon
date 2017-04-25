document.getElementById("checkout").addEventListener('click', () => {
  chrome.tabs.create({'url':"../checkout/checkout.html"});
}, false);
