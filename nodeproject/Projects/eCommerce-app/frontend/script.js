async function fetchProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    displayProducts(products);
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

fetchProducts();
