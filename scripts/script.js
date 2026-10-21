function init() {
    renderMenu();
    renderBasket();
}

function renderMenu() {
    let menuRef = document.getElementById("menu");
    menuRef.innerHTML = "";

    for (let key in products) {
        let category = products[key];
        menuRef.innerHTML += getCategoryTemplate(category);
        menuRef.innerHTML += getProductListTemplate(category.dishes);
    }
}

function renderBasket() {
    document.getElementById("basket").innerHTML = getBasketTemplate();
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

function placeOrder() {
    basket = {};
    renderBasket();
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
