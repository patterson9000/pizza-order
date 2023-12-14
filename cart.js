// cart.js

const cartItemsElement = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');

let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    // Clear existing items
    cartItemsElement.innerHTML = '';

    // Calculate total
    let total = 0;

    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);

        total += item.price;
    });

    
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
   
    alert('Checkout functionality to be implemented.');
}


const pizzaButtons = document.querySelectorAll('.pizza-item button');
pizzaButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const pizzaName = getPizzaName(index); 
        const pizzaPrice = getPizzaPrice(index); 
        addToCart({ name: pizzaName, price: pizzaPrice });
    });
});


function getPizzaName(index) {
   
    const pizzaNames = ['Margherita Pizza', 'Pepperoni Pizza', 'Veggie Supreme Pizza'];
    return pizzaNames[index] || 'Unknown Pizza';
}

function getPizzaPrice(index) {
   
    const pizzaPrices = [10.99, 12.99, 14.99];
    return pizzaPrices[index] || 0.00;
}
