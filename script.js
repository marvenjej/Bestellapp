function init() {
    renderMenu();
    renderBasket();
}

function renderMenu() {
    let menuRef = document.getElementById("menu");
    menuRef.innerHTML = "";

    for (let key in products) {
        let category = products[key];
        let extra = category.titleExtra ? getCategoryExtraTemplate(category.titleExtra) : "";
        let subtitle = category.subtitle ? getCategorySubtitleTemplate(category.subtitle) : "";
        let alt = category.titleExtra ? category.title + " " + category.titleExtra : category.title;
        menuRef.innerHTML += getCategoryTemplate(category, extra, subtitle, alt);
        menuRef.innerHTML += getProductListTemplate(getProductsHtml(category.dishes));
    }
}

function getProductsHtml(dishes) {
    let list = "";

    for (let dish of dishes) {
        list += getProductTemplate(dish, formatPrice(dish.price));
    }

    return list;
}

function renderBasket() {
    let itemsRef = document.querySelector(".basket-items");
    let scrollPosition = itemsRef ? itemsRef.scrollTop : 0;

    document.getElementById("basket").innerHTML = getBasketTemplate();

    itemsRef = document.querySelector(".basket-items");
    if (itemsRef) {
        itemsRef.scrollTop = scrollPosition;
    }

    updateProductButtons();
    updateBasketBadge();
}

function updateBasketBadge() {
    let badgeRef = document.getElementById("mobile-nav-badge");
    let count = getItemCount();

    badgeRef.innerHTML = count;
    badgeRef.classList.toggle("mobile-nav-badge-hidden", !count);
    document.getElementById("mobile-nav-basket").classList.toggle("mobile-nav-basket-filled", count > 0);
}

function getItemCount() {
    let count = 0;

    for (let id in basket) {
        count += basket[id];
    }

    return count;
}

function updateProductButtons() {
    for (let key in products) {
        for (let dish of products[key].dishes) {
            let buttonRef = document.getElementById("product-button-" + dish.id);
            let amount = basket[dish.id];

            buttonRef.innerHTML = amount ? "Hinzugefügt " + amount : "Hinzufügen";
            buttonRef.classList.toggle("product-button-added", !!amount);
        }
    }
}

function addToBasket(id) {
    basket[id] = (basket[id] || 0) + 1;
    renderBasket();
}

function removeFromBasket(id) {
    basket[id]--;

    if (basket[id] <= 0) {
        delete basket[id];
    }

    renderBasket();
}

function deleteFromBasket(id) {
    delete basket[id];
    renderBasket();
}

function toggleMobileBasket() {
    let isOpen = document.getElementById("basket-wrapper").classList.toggle("basket-open");
    document.body.classList.toggle("no-scroll", isOpen);
}

function placeOrder() {
    basket = {};
    renderBasket();
    document.getElementById("basket-wrapper").classList.remove("basket-open");
    document.body.classList.remove("no-scroll");
    openOrderDialog();
}

function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + "€";
}

let orderDialogTimer;

function openOrderDialog() {
    let contentRef = document.getElementById("dialog-container");
    contentRef.innerHTML = getOrderDialogTemplate();
    document.getElementById("order-success").showModal();
    clearTimeout(orderDialogTimer);
    orderDialogTimer = setTimeout(closeOrderDialog, 15000);
}

function closeOrderDialog() {
    clearTimeout(orderDialogTimer);
    document.getElementById("dialog-container").innerHTML = "";
}

function getSubtotal() {
    let sum = 0;

    for (let id in basket) {
        sum += getDishById(id).price * basket[id];
    }

    return sum;
}

function getDishById(id) {
    for (let key in products) {
        for (let dish of products[key].dishes) {
            if (dish.id === id) {
                return dish;
            }
        }
    }
}
