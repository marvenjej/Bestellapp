function getCategoryTemplate(category, extra, subtitle, alt) {
    return `
        <section class="category">
            <div class="content category-content">
                <img class="category-icon" src="${category.icon}" alt="${alt}">
                <h2 class="category-title">${category.title}${extra}${subtitle}</h2>
            </div>
        </section>`;
}

function getCategoryExtraTemplate(text) {
    return ` <span class="category-title-extra">${text}</span>`;
}

function getCategorySubtitleTemplate(text) {
    return ` <span class="category-subtitle">${text}</span>`;
}

function getProductListTemplate(list) {
    return `<div class="content"><div class="products">${list}</div></div>`;
}

function getProductTemplate(dish, price) {
    return `
        <article class="product">
            <img class="product-img" src="${dish.img}" alt="${dish.name}">
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-name">${dish.name}</h3>
                    <span class="product-price">${price}</span>
                </div>
                <p class="product-description">${dish.description}</p>
                <button id="product-button-${dish.id}" class="product-button" type="button" onclick="addToBasket('${dish.id}')">Hinzufügen</button>
            </div>
        </article>`;
}

function getOrderDialogTemplate() {
    return `
        <dialog id="order-success" class="order-dialog">
            <button class="order-dialog-close" type="button" onclick="closeOrderDialog()">✕</button>
            <img class="order-dialog-icon" src="./assets/icons/order-success.svg" alt="">
            <h2 class="order-dialog-title">Testbestellung bestätigt!</h2>
            <p class="order-dialog-text">Deine Bestellung wird nun zubereitet und geliefert.</p>
        </dialog>`;
}

function getTrashIcon() {
    return `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Entfernen"><path d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3C0.716667 3 0.479167 2.90417 0.2875 2.7125C0.0958333 2.52083 0 2.28333 0 2C0 1.71667 0.0958333 1.47917 0.2875 1.2875C0.479167 1.09583 0.716667 1 1 1H5C5 0.716667 5.09583 0.479167 5.2875 0.2875C5.47917 0.0958333 5.71667 0 6 0H10C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1H15C15.2833 1 15.5208 1.09583 15.7125 1.2875C15.9042 1.47917 16 1.71667 16 2C16 2.28333 15.9042 2.52083 15.7125 2.7125C15.5208 2.90417 15.2833 3 15 3V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM6 14C6.28333 14 6.52083 13.9042 6.7125 13.7125C6.90417 13.5208 7 13.2833 7 13V6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6V13C5 13.2833 5.09583 13.5208 5.2875 13.7125C5.47917 13.9042 5.71667 14 6 14ZM10 14C10.2833 14 10.5208 13.9042 10.7125 13.7125C10.9042 13.5208 11 13.2833 11 13V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V13C9 13.2833 9.09583 13.5208 9.2875 13.7125C9.47917 13.9042 9.71667 14 10 14Z" fill="currentColor"/></svg>`;
}

function getBasketItemTemplate(id, amount) {
    let dish = getDishById(id);

    return `
        <article class="basket-item">
            ${amount > 1 ? `<button class="basket-item-button basket-trash-button basket-item-delete" type="button" onclick="deleteFromBasket('${id}')">${getTrashIcon()}</button>` : ""}
            <h4 class="basket-item-name">${amount} x ${dish.name}</h4>
            <div class="basket-item-controls">
                <button class="basket-item-button${amount > 1 ? "" : " basket-trash-button"}" type="button" onclick="removeFromBasket('${id}')">${amount > 1 ? "–" : getTrashIcon()}</button>
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
