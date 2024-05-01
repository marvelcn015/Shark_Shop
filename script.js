// 顯示購物車
const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.querySelector('.cart-modal');
const closeBtn = document.querySelector('.close-btn');

cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// 結帳按鈕
const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', () => {
    const items = cartItems.map(item => ({
        name: item.name,
        price: item.price
    }));

    if (cartItems.length === 0) {
        alert('下空的訂單是想增加鯊魚的工作量嗎 (#`Д´)ﾉ');
    } else {
        const total = parseFloat(cartTotal.textContent.split('$')[1]);

        alert('泥的訂單鯊魚收到啦! 但會不會寄出還是要看他的心情醬(ゝ∀･)');
        cartItems.length = 0;
        updateCart();
        saveCartToLocalStorage();
    }
});

// 動態渲染產品列表(fetchAPI)
const productList = document.querySelector('.product-list');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <h4>${product.description}</h4>
        <p>$${product.price}</p>
        <button class="add-to-cart custom-button">加入購物車</button>
      `;
            productList.appendChild(productItem);

            // 添加到購物車按鈕
            const addToCartButton = productItem.querySelector('.add-to-cart');
            addToCartButton.addEventListener('click', () => {
                const name = product.name;
                const price = product.price;
                const existingItem = cartItems.find(item => item.name === name);
                if (!existingItem) {
                    cartItems.push({ name, price });
                    alert('產品成功添加至購物車');
                    updateCart();
                    saveCartToLocalStorage();
                } else {
                    alert('鯊魚已經在購物車裡面了唷');
                }
            });
        });
    })
    .catch(error => console.error(error));

// 購物車陣列
const cartItems = [];
const cartList = document.querySelector('.cart-list');
const cartTotal = document.querySelector('.cart-total');

// 更新購物車
function updateCart() {
    cartList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price}`;

        // 刪除按鈕
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '刪除';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            const index = cartItems.indexOf(item);
            if (index > -1) {
                cartItems.splice(index, 1);
                updateCart();
                saveCartToLocalStorage();
            }
        });

        cartItem.appendChild(deleteButton);
        cartList.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// localStorage API
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        cartItems.push(...JSON.parse(storedCartItems));
        updateCart();
    }
}

window.addEventListener('load', () => {
    loadCartFromLocalStorage();
});