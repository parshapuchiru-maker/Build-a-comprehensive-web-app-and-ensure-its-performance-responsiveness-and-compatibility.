// Product data

const products = [
    {
        id: 1,
        name: "Smart Watch",
        category: "electronics",
        price: 1999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        category: "electronics",
        price: 2499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Casual T-Shirt",
        category: "fashion",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Sneakers",
        category: "fashion",
        price: 1899,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Backpack",
        category: "accessories",
        price: 999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Sunglasses",
        category: "accessories",
        price: 699,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 1499,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Denim Jacket",
        category: "fashion",
        price: 1599,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
    }
];

let cart = [];


// Display products

function displayProducts(productList) {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    if (productList.length === 0) {
        container.innerHTML = "<p>No products found.</p>";
        return;
    }

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <div class="price">
                    ₹${product.price}
                </div>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;

        container.appendChild(card);
    });
}


// Add product to cart

function addToCart(id) {

    const product = products.find(item => item.id === id);

    cart.push(product);

    updateCartCount();

    alert(product.name + " added to cart!");
}


// Update cart count

function updateCartCount() {

    document.getElementById("cartCount").textContent = cart.length;
}


// Display cart

function showCart() {

    const modal = document.getElementById("cartModal");

    const cartItems = document.getElementById("cartItems");

    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        cart.forEach((product, index) => {

            total += product.price;

            cartItems.innerHTML += `
                <div class="cart-item">

                    <span>
                        ${product.name} - ₹${product.price}
                    </span>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${index})"
                    >
                        Remove
                    </button>

                </div>
            `;
        });
    }

    cartTotal.textContent = total;

    modal.style.display = "flex";
}


// Remove product

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    showCart();
}


// Close cart

function closeCart() {

    document.getElementById("cartModal").style.display = "none";
}


// Search products

function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    displayProducts(filtered);
}


// Filter products

function filterProducts() {

    const category =
        document.getElementById("categoryFilter").value;

    if (category === "all") {

        displayProducts(products);

    } else {

        const filtered = products.filter(
            product => product.category === category
        );

        displayProducts(filtered);
    }
}


// Mobile menu

function toggleMenu() {

    document
        .getElementById("navLinks")
        .classList.toggle("active");
}


// Contact form

function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").textContent =
        `Thank you, ${name}! Your message has been submitted.`;

    event.target.reset();
}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

    } else {

        alert("Order placed successfully!");

        cart = [];

        updateCartCount();

        closeCart();
    }
}


// Initial display

displayProducts(products);