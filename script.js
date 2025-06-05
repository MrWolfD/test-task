document.addEventListener("DOMContentLoaded", async () => {
    const tabsContainer = document.getElementById("tabs");
    const tabsContentContainer = document.getElementById("tabs-content");

    try {
        // Загружаем JSON-файлы
        const [categories, products] = await Promise.all([
            fetch("categories.json").then((res) => res.json()),
            fetch("products.json").then((res) => res.json())
        ]);

        // Группируем товары по категориям
        const groupedProducts = categories.map((category) => ({
            categoryName: category.categoryName,
            products: products.filter((product) => product.categoryId === category.categoryId)
        }));

        // Генерируем вкладки и контент
        groupedProducts.forEach((group, index) => {
            const tab = document.createElement("li");
            tab.className = "tab";
            tab.textContent = group.categoryName;
            tab.dataset.index = index;
            tabsContainer.appendChild(tab);

            const tabContent = document.createElement("div");
            tabContent.className = "tab-content";
            tabContent.dataset.index = index;

            group.products.forEach((product) => {
                const productDiv = document.createElement("div");
                productDiv.className = "product";
                productDiv.innerHTML = `
                    <img src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="${product.productName}">
                    <p>${product.productName}</p>
                `;
                tabContent.appendChild(productDiv);
            });

            tabsContentContainer.appendChild(tabContent);
        });

        // Функция активации вкладки
        function activateTab(index) {
            document.querySelectorAll(".tab").forEach((tab) => {
                tab.classList.toggle("active", tab.dataset.index == index);
            });

            document.querySelectorAll(".tab-content").forEach((content) => {
                content.classList.toggle("active", content.dataset.index == index);
            });
        }

        // Назначаем обработчики событий для вкладок
        document.querySelectorAll(".tab").forEach((tab) => {
            tab.addEventListener("click", () => activateTab(tab.dataset.index));
        });

        // Автоматически активируем первую вкладку
        setTimeout(() => activateTab(0), 100);
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
});
