// Массив товаров
export const products = [
    // Painting
    { id: 4, name: 'Paint Set', description: 'Professional paint set', img: "/img/products/paint-set.jpg", category: 'painting' },
    { id: 5, name: 'Canvas', description: 'High-quality canvas', img: "/img/products/Canvas.jpg", category: 'painting' },
    { id: 6, name: 'Brushes', description: 'Variety of paint brushes', img: "/img/products/Brushes.jpg", category: 'painting' },

    // Handicrafts
    { id: 7, name: 'Yarn', description: 'Soft yarn for knitting', img: "/img/products/Yarn.jpg", category: 'handicrafts' },
    { id: 8, name: 'Needles', description: 'Knitting needles set', img: "/img/products/Needles.jpg", category: 'handicrafts' },
    { id: 9, name: 'Pattern Book', description: 'Knitting patterns book', img: "/img/products/Pattern Book.jpg", category: 'handicrafts' },

    // Modeling
    { id: 10, name: 'Model Kit', description: 'Plastic model kit', img: "/img/products/Model Kit.jpg", category: 'modeling' },
    { id: 11, name: 'Glue', description: 'Modeling glue', img: "/img/products/Glue.jpg", category: 'modeling' },
    { id: 12, name: 'Paints', description: 'Acrylic paints for models', img: "/img/products/Paints.jpg", category: 'modeling' },

    // Sculpture
    { id: 13, name: 'Clay', description: 'Sculpting clay', img: "/img/products/Clay.jpg", category: 'sculpture' },
    { id: 14, name: 'Tools', description: 'Sculpting tools set', img: "/img/products/Tools.jpg", category: 'sculpture' },
    { id: 15, name: 'Stand', description: 'Sculpture stand', img: "/img/products/Stand.jpg", category: 'sculpture' },

    // Books
    { id: 16, name: 'Art Book', description: 'Art history book', img: "/img/products/Art Book.jpg", category: 'books' },
    { id: 17, name: 'Craft Book', description: 'Crafting techniques book', img: "/img/products/Craft Book.jpg", category: 'books' },
    { id: 18, name: 'Design Book', description: 'Graphic design book', img: "/img/products/Design Book.jpg", category: 'books' },

    // Stationery
    { id: 19, name: 'Notebook', description: 'Sketch notebook', img: "/img/products/Notebook.jpg", category: 'stationery' },
    { id: 20, name: 'Pens', description: 'Set of drawing pens', img: "/img/products/Pens.jpg", category: 'stationery' },
    { id: 21, name: 'Markers', description: 'Art markers set', img: "/img/products/Markers.jpg", category: 'stationery' },

    // Accessories
    { id: 22, name: 'Easel', description: 'Portable easel', img: "/img/products/Easel.jpg", category: 'accessories' },
    { id: 23, name: 'Palette', description: 'Painting palette', img: "/img/products/Palette.jpg", category: 'accessories' },
    { id: 24, name: 'Apron', description: 'Artist apron', img: "/img/products/Artist apron.jpg", category: 'accessories' },

    // Something
    { id: 25, name: 'Mystery Box', description: 'Mystery craft box', img: "/img/products/Mystery Box.jpg", category: 'something' },
    { id: 26, name: 'DIY Kit', description: 'DIY craft kit', img: "/img/products/DIY Kit.jpg", category: 'something' },
    { id: 27, name: 'Craft Supplies', description: 'Assorted craft supplies', img: "/img/products/Craft Supplies.jpg", category: 'something' },
];

//Функция для отображения товаров
function displayProducts(productsToShow) {
    const productCardsContainer = document.getElementById('productCards');
    productCardsContainer.innerHTML = ''; // Очищаем контейнер

    // Проходим по отфильтрованным товарам и отображаем их
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <img src="${product.img}" alt="error" />
            <cate
        `;
        productCardsContainer.appendChild(productCard);
    });
}

// // Функция для поиска товаров
// function searchProducts() {
//     const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

//     if (searchQuery) {
//         const filteredProducts = products.filter(product => {
//             return product.name.toLowerCase().includes(searchQuery) ||
//                    product.description.toLowerCase().includes(searchQuery);
//         });
//         displayProducts(filteredProducts);
//     } else {
//         // Если нет поискового запроса, показываем все товары
//         displayProducts(products);
//     }
// }

// // Функция для получения параметра из URL
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// Инициализация: показываем все товары при загрузке страницы или отфильтрованные товары, если есть поисковый запрос
// window.onload = () => {
//     const searchQuery = getQueryParam('search');
//     if (searchQuery) {
//         document.getElementById('searchInput').value = searchQuery;
//         searchProducts();
//     } else {
//         displayProducts(products);
//     }

//     // Добавляем обработчик события для нажатия клавиши Enter в поле поиска
//     const searchInput = document.getElementById('searchInput');
//     searchInput.addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             searchProducts(); // Вызываем функцию поиска
//         }
//     });
// };

// // Функция для отображения товаров по категории
// function displayProductsByCategory(category) {
//     let filteredProducts;
//     if (category === 'all') {
//         filteredProducts = products;
//     } else {
//         filteredProducts = products.filter(product => product.category === category);
//     }
//     displayProducts(filteredProducts);
// }

// // INITIALIZE: SHOW/FILTER PRODUCTS ==================================
// window.onload = () => {
//     const searchQuery = getQueryParam('search');
//     const category = getQueryParam('category');

//     if (searchQuery) {
//         document.getElementById('searchInput').value = searchQuery;
//         searchProducts();
//     } else if (category) {
//         displayProductsByCategory(category);
//     } else {
//         displayProducts(products);
//     }

//     // Добавляем обработчик события для нажатия клавиши Enter в поле поиска
//     const searchInput = document.getElementById('searchInput');
//     searchInput.addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             searchProducts(); // Вызываем функцию поиска
//         }
//     });
// };