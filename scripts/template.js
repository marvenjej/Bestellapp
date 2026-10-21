function getCategoryTemplate(category) {
    let extra = category.titleExtra ? ` <span class="category-title-extra">${category.titleExtra}</span>` : "";
    let subtitle = category.subtitle ? ` <span class="category-subtitle">${category.subtitle}</span>` : "";

    return `
        <section class="category">
            <img class="category-icon" src="${category.icon}" alt="${category.title}${category.titleExtra ? " " + category.titleExtra : ""}">
            <h2 class="category-title">${category.title}${extra}${subtitle}</h2>
        </section>`;
}

function getProductListTemplate(dishes) {
    let list = "";

    for (let dish of dishes) {
        list += getProductTemplate(dish);
    }

    return `<div class="products">${list}</div>`;
}

function getProductTemplate(dish) {
    return `
        <article class="product">
            <img class="product-img" src="${dish.img}" alt="${dish.name}">
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-name">${dish.name}</h3>
                    <span class="product-price">${formatPrice(dish.price)}</span>
                </div>
                <p class="product-description">${dish.description}</p>
                <button class="product-button" type="button" onclick="addToBasket('${dish.id}')">Hinzufügen</button>
            </div>
        </article>`;
}

function getOrderDialogTemplate() {
    return `
        <dialog id="order-success" class="order-dialog">
            <button class="order-dialog-close" type="button" onclick="closeOrderDialog()">✕</button>
            <img class="order-dialog-icon" src="./assets/icons/order-success.svg" alt="">
            <h2 class="order-dialog-title">Bestellung bestätigt!</h2>
            <p class="order-dialog-text">Deine Bestellung wird nun zubereitet und geliefert.</p>
        </dialog>`;
}

function getBasketItemTemplate(id, amount) {
    let dish = getDishById(id);

    return `
        <article class="basket-item">
            <h4 class="basket-item-name">${amount} x ${dish.name}</h4>
            <div class="basket-item-controls">
                <button class="basket-item-button" type="button" onclick="removeFromBasket('${id}')">${amount > 1 ? "–" : '<img src="./assets/icons/basket-trash.svg" alt="Entfernen">'}</button>
                <span class="basket-item-amount">${amount}</span>
                <button class="basket-item-button" type="button" onclick="addToBasket('${id}')">+</button>
            </div>
            <span class="basket-item-price">${formatPrice(dish.price * amount)}</span>
        </article>`;
}

function getBasketTemplate() {
    let items = "";

    for (let id in basket) {
        items += getBasketItemTemplate(id, basket[id]);
    }

    if (!items) {
        return getEmptyBasketTemplate();
    }

    return `
        <h3>Dein Warenkorb</h3>
        <div class="basket-items">${items}</div>
        ${getBasketSummaryTemplate()}
        <button class="basket-buy-button" type="button" onclick="placeOrder()">Kaufen (${formatPrice(getSubtotal() + deliveryFee)})</button>`;
}

function getBasketSummaryTemplate() {
    let subtotal = getSubtotal();

    return `
        <div class="basket-summary">
            <div class="basket-summary-row">
                <span>Zwischensumme</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="basket-summary-row">
                <span>Lieferkosten</span>
                <span>${formatPrice(deliveryFee)}</span>
            </div>
            <hr class="basket-summary-line">
            <div class="basket-summary-row basket-summary-total">
                <span>Gesamt</span>
                <span>${formatPrice(subtotal + deliveryFee)}</span>
            </div>
        </div>`;
}

function getEmptyBasketTemplate() {
    return `
        <h3>Dein Warenkorb</h3>
        <p>Hier ist nichts zu finden.</p>
        <p>Wähle aus unseren leckeren Gerichten!</p>
        <img class="basket-icon" src="./assets/icons/shopping_cart.svg" alt="Warenkorb">`;
}
