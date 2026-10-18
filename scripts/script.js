function init() {
    renderCategories();
}

function renderCategories() {
    let menuRef = document.getElementById("menu");
    menuRef.innerHTML = "";

    for (let key in products) {
        menuRef.innerHTML += getCategoryTemplate(products[key]);
    }
}
