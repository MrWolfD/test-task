document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.getElementById('tabs');
    const tabsContentContainer = document.getElementById('tabs-content');

    const products = [
        {productId:1, productName: 'Товар 1', categoryId:1},
        {productId:2, productName: 'Товар 2', categoryId:2},
        {productId:3, productName: 'Товар 3', categoryId:3},
        {productId:4, productName: 'Товар 4', categoryId:4},
        {productId:5, productName: 'Товар 5', categoryId:5},
        {productId:6, productName: 'Товар 6', categoryId:1},
        {productId:7, productName: 'Товар 7', categoryId:2},
        {productId:8, productName: 'Товар 8', categoryId:3},
        {productId:9, productName: 'Товар 9', categoryId:4},
        {productId:10, productName: 'Товар 10', categoryId:5},
        {productId:11, productName: 'Товар 11', categoryId:1},
        {productId:12, productName: 'Товар 12', categoryId:2},
        {productId:13, productName: 'Товар 13', categoryId:3},
        {productId:14, productName: 'Товар 14', categoryId:4},
        {productId:15, productName: 'Товар 15', categoryId:5},
        {productId:16, productName: 'Товар 16', categoryId:1},
        {productId:17, productName: 'Товар 17', categoryId:2},
        {productId:18, productName: 'Товар 18', categoryId:3},
        {productId:19, productName: 'Товар 19', categoryId:4},
        {productId:20, productName: 'Товар 20', categoryId:5},
        {productId:21, productName: 'Товар 21', categoryId:1},
        {productId:22, productName: 'Товар 22', categoryId:2},
        {productId:23, productName: 'Товар 23', categoryId:3},
        {productId:24, productName: 'Товар 24', categoryId:4},
        {productId:25, productName: 'Товар 25', categoryId:5}

    ];

    const categories = [
        { categoryId: 1, categoryName: 'Футболки' },
        { categoryId: 2, categoryName: 'Майки' },
        { categoryId: 3, categoryName: 'Носки' },
        { categoryId: 4, categoryName: 'Джинсы' },
        { categoryId: 5, categoryName: 'Брюки' }
    ];

    const groupedProducts = categories.map((category) => ({
        categoryName: category.categoryName,
        products: products.filter((product) => product.categoryId === category.categoryId),
    }));

    groupedProducts.forEach((group, index) => {
        const tab = document.createElement('li');
        tab.className = 'tab';
        tab.textContent = group.categoryName;
        tab.dataset.index = index;
        tabsContainer.appendChild(tab);

        const tabContent = document.createElement('div');
        tabContent.className = 'tab-content';
        tabContent.dataset.index = index;

        group.products.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="${product.productName}">
                <p>${product.productName}</p>
            `;
            tabContent.appendChild(productDiv);
        });

        tabsContentContainer.appendChild(tabContent);
    });

    function activateTab(index) {
        document.querySelectorAll('.tab').forEach((tab) => {
            tab.classList.toggle('active', tab.dataset.index == index);
        });

        document.querySelectorAll('.tab-content').forEach((content) => {
            content.classList.toggle('active', content.dataset.index == index);
        });
    }

    document.querySelectorAll('.tab').forEach((tab) => {
        tab.addEventListener('click', () => activateTab(tab.dataset.index));
    });

    setTimeout(() => activateTab(0), 100);
});
