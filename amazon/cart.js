(() => {

    const product = document.getElementById("productTitle").textContent;

    if (product.search(/tungsten|titanium/i) && product.search(/ring/i)) {

        const panel = document.getElementById("rightCol");
        const cart = document.createElement("div");
        cart.id = "khj-cart";
        cart.className = "feature";
        panel.insertBefore(cart, panel.firstChild.nextSibling.nextSibling);

        cart.innerHTML = `
            <form class="khj-form" action="http://localhost:9080/amazon" method="get">
                <span class="a-text-bold">Engrave for $35 more!</span>
                <input id="khj-asin" type="text" name="asin">
                <input id="khj-amount" type="text" name="amount">
                <input id="khj-quantity" type="hidden" name="quantity">
                <input type="text" name="note" maxlength="32" placeholder="Message">
                <div class='a-button-stack'>
                    <span class='a-button a-spacing-small a-button-primary a-button-icon'>
                        <span class='a-button-inner'>
                            <i class='a-icon a-icon-cart'></i>
                            <input title='Engrave for $35' class='a-button-input' type='submit' value='Engrave for $35'>
                            <span class='a-button-text'>Checkout</span>
                        </span>
                    </span>
                </div>
            </form>
        `;

        const update = () => {
            document.getElementById("khj-asin").value = document.getElementById("ASIN").value;
            document.getElementById("khj-amount").value = document.getElementById("priceblock_saleprice").textContent.replace('$','');
            document.getElementById("khj-quantity").value = "1"; //TODO: later?
        }
    
        let oldLocation = location.href;
        setInterval(() => {
            if(location.href != oldLocation) {
                update();
                oldLocation = location.href;
            }
        }, 1000);

        update();

    }

})();