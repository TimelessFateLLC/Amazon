(() => {

    const product = document.getElementById("productTitle").textContent;

    if (product.search(/tungsten|titanium/i) && product.search(/ring/i)) {

        const panel = document.getElementById("rightCol");
        const cart = document.createElement("div");
        cart.id = "khj-cart";
        cart.className = "a-box";
        panel.insertBefore(cart, panel.firstChild.nextSibling.nextSibling);
        cart.innerHTML = "Engrave for $35";

    }

})();