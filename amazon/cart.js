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
                <input id="khj-size" type="text" name="size">
                <input id="khj-price" type="text" name="price">
                <input id="khj-quantity" type="number" name="quantity">
                <input type="text" name="message" maxlength="32" placeholder="Message">
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

        const asin = document.getElementById("khj-asin");
        const size = document.getElementById("khj-size");
        const price = document.getElementById("khj-price");
        const quantity = document.getElementById("khj-quantity");

        const update = () => {

            const Asin = document.getElementById("ASIN");
            const Size = document.getElementById("native_dropdown_selected_ring_size");
            const Price = document.getElementById("priceblock_saleprice");
            const Quantity = document.getElementById("quantity");

            asin.value = Asin.value;
            size.value = Size.options[Size.selectedIndex].text;
            price.value = Price.textContent.replace('$','');
            quantity.value = Quantity.options[Quantity.selectedIndex].text;

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