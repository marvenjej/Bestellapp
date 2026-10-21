let products = {
    burgers: {
        title: "Burger",
        titleExtra: "& Sandwiches",
        icon: "./assets/icons/category-burger.png",
        dishes: [
            {
                id: "burger-1",
                name: "Veggie Mushroom Black Burger",
                price: 16.9,
                description: "Gemischter grüner Salat, Tomaten, Edamame, Pilze",
                img: "./assets/img/products/veggie-mushroom-black-burger.jpg",
            },
            {
                id: "burger-2",
                name: "All Meat Burger",
                price: 15.9,
                description: "Rindfleisch, Bacon, Gewürzgurken, Räucherkäse, Ketchup, BBQ-Sauce",
                img: "./assets/img/products/all-meat-burger.jpg",
            },
            {
                id: "burger-3",
                name: "Süßmaus Burger",
                price: 14.9,
                description: "Rindfleisch, Käse, Tomaten, Kopfsalat, Zwiebel",
                img: "./assets/img/products/beef-red-burger.jpg",
            },
            {
                id: "burger-4",
                name: "Big Chicken Burger",
                price: 15.9,
                description: "Hähnchen, Käse, Tomaten, Kopfsalat, Zwiebel, Paprika",
                img: "./assets/img/products/big-chicken-burger.jpg",
            },
        ],
    },
    pizza: {
        title: "Pizza",
        subtitle: "(30cm)",
        icon: "./assets/icons/category-pizza.png",
        dishes: [
            {
                id: "pizza-1",
                name: "Pizza Margherita",
                price: 11.9,
                description: "Tomatensauce, Mozzarella",
                img: "./assets/img/products/pizza-margherita.jpg",
            },
            {
                id: "pizza-2",
                name: "Pizza Chorizo",
                price: 13.9,
                description: "Tomatenscheiben, Mozzarella, Chorizo",
                img: "./assets/img/products/pizza-chorizo.jpg",
            },
            {
                id: "pizza-3",
                name: "Pizza Funghi",
                price: 12.9,
                description: "Rote Zwiebel, Oliven, Champignons, Mozzarella",
                img: "./assets/img/products/funghi.jpg",
            },
            {
                id: "pizza-4",
                name: "Pizza Quattro Pollo",
                price: 15.9,
                description: "Hähnchen, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano",
                img: "./assets/img/products/quattro-formaggi.jpg",
            },
        ],
    },
    salad: {
        title: "Salat",
        icon: "./assets/icons/category-salad.png",
        dishes: [
            {
                id: "salad-1",
                name: "Rucola-Salat mit Rind",
                price: 16.9,
                description: "Rindfleisch, Rucola, Feldsalat, griechischer Feta, Kirschtomaten, getrocknete Tomaten, Balsamico-Dressing",
                img: "./assets/img/products/warm-beef-arugula-salad.jpg",
            },
            {
                id: "salad-2",
                name: "Kleiner grüner Salat",
                price: 7.9,
                description: "Grüner Salat, Gurke, Karotten, Petersilie, Radieschen",
                img: "./assets/img/products/mini-green-salad.jpg",
            },
            {
                id: "salad-3",
                name: "Meeresfrüchte-Salat",
                price: 16.9,
                description: "Gemischte Blattsalate, Kirschtomaten, rote Zwiebel, Muscheln, Tintenfischringe, Garnelen, Dijon-Senf-Zitronen-Dressing mit Dill",
                img: "./assets/img/products/green-salad-seafood.jpg",
            },
            {
                id: "salad-4",
                name: "Veganer Salat mit Tofu",
                price: 14.9,
                description: "Grüner Salat, Kirschtomaten, Gurke, Babyspinat, Edamame, Radieschen, Kresse, Tofu, Erdnüsse",
                img: "./assets/img/products/vegan-green-salad-tofu.jpg",
            },
        ],
    },
};

let basket = {};

const deliveryFee = 4.99;
