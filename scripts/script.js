function init() {
    renderMenu();
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

function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + "€";
}

let orderDialogTimer;

function openOrderDialog() {
    let contentRef = document.getElementById("dialog-container");
    contentRef.innerHTML = getOrderDialogTemplate();
    document.getElementById("order-success").showModal();
    clearTimeout(orderDialogTimer);
    orderDialogTimer = setTimeout(closeOrderDialog, 2500);
}

function closeOrderDialog() {
    clearTimeout(orderDialogTimer);
    document.getElementById("dialog-container").innerHTML = "";
}
