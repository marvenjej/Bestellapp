function getCategoryTemplate(category) {
    let subtitle = category.subtitle ? ` <span class="category-subtitle">${category.subtitle}</span>` : "";

    return `
        <section class="category">
            <img class="category-icon" src="${category.icon}" alt="${category.title}">
            <h2 class="category-title">${category.title}${subtitle}</h2>
        </section>`;
}
