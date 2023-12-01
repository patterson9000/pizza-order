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

function calculatePizzaCost() {
  // Calculate pizza cost logic here
  // ...
}

const pizzaForm = document.getElementById('pizzaForm');
pizzaForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  if (validatePizzaForm()) {
    calculatePizzaCost();
  }
});
