function validatePizzaForm() {
  const size = document.getElementById('size').value;
  const toppings = document.querySelectorAll('input[name="toppings"]:checked');
  const quantity = parseInt(document.getElementById('quantity').value);

  // Add your validation logic here
  if (size === '') {
    alert('Please select a size.');
    return false;
  }

  if (toppings.length === 0) {
    alert('Please select at least one topping.');
    return false;
  }

  if (quantity <= 0) {
    alert('Please enter a valid quantity.');
    return false;
  }

  return true;
}

function displayResult(cost) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Total Cost: $${cost.toFixed(2)}`;
}

function calculatePizzaCost(size, toppings, quantity) {
  // Add your logic to calculate the cost based on size, toppings, and quantity
  // ...

  // For demonstration purposes, let's assume a simple calculation
  const baseCost = 10; // Replace with your actual base cost
  const toppingsCost = toppings.length * 1.5; // Replace with your actual topping cost
  const totalCost = (baseCost + toppingsCost) * quantity;

  return totalCost;
}

const pizzaForm = document.getElementById('pizzaForm');
pizzaForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  if (validatePizzaForm()) {
    const size = document.getElementById('size').value;
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');
    const quantity = parseInt(document.getElementById('quantity').value);

    const totalCost = calculatePizzaCost(size, toppings, quantity);
    displayResult(totalCost);
  }
});
