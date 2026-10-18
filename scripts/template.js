function getCategoryTemplate(category) {
    let subtitle = category.subtitle ? ` <span class="category-subtitle">${category.subtitle}</span>` : "";

    return `
        <section class="category">
            <img class="category-icon" src="${category.icon}" alt="${category.title}">
            <h2 class="category-title">${category.title}${subtitle}</h2>
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
                <button class="product-button" type="button">Hinzufügen</button>
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
