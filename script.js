// Get the elements
const noteMinus = document.getElementById('note-minus');
const notePlus = document.getElementById('note-plus');
const noteNumber = document.getElementById('note-number');
const noteTotal = document.getElementById('note-total');
const ramadanMinus = document.getElementById('ramadan-minus');
const ramadanPlus = document.getElementById('ramadan-plus');
const ramadanNumber = document.getElementById('ramadan-number');
const ramadanTotal = document.getElementById('ramadan-total');
const pensMinus = document.getElementById('pens-minus');
const pensPlus = document.getElementById('pens-plus');
const pensNumber = document.getElementById('pens-number');
const pensTotal = document.getElementById('pens-total');
const estimatedTotal = document.getElementById('estimated-total');

// Update the quantity and total price of the notebook
noteMinus.addEventListener('click', () => {
  if (noteNumber.value > 0) {
    noteNumber.value--;
    noteTotal.textContent = '$' + (100 * noteNumber.value).toFixed(2);
    calculateTotal();
  }
});

notePlus.addEventListener('click', () => {
  noteNumber.value++;
  noteTotal.textContent = '$' + (100 * noteNumber.value).toFixed(2);
  calculateTotal();
});

// Update the quantity and total price of the ramadan planner
ramadanMinus.addEventListener('click', () => {
  if (ramadanNumber.value > 0) {
    ramadanNumber.value--;
    ramadanTotal.textContent = '$' + (25 * ramadanNumber.value).toFixed(2);
    calculateTotal();
  }
});

ramadanPlus.addEventListener('click', () => {
  ramadanNumber.value++;
  ramadanTotal.textContent = '$' + (25 * ramadanNumber.value).toFixed(2);
  calculateTotal();
});

// Update the quantity and total price of the pens series
pensMinus.addEventListener('click', () => {
  if (pensNumber.value > 0) {
    pensNumber.value--;
    pensTotal.textContent = '$' + (95 * pensNumber.value).toFixed(2);
    calculateTotal();
  }
});

pensPlus.addEventListener('click', () => {
  pensNumber.value++;
  pensTotal.textContent = '$' + (95 * pensNumber.value).toFixed(2);
  calculateTotal();
});

// Remove an item from the cart
function removeProduct(event, product) {
  const cartItem = event.target.parentElement.parentElement;
  const productTotal = parseFloat(cartItem.querySelector('.cart-info small').textContent.replace('Price: $', ''));
  const productQuantity = parseInt(cartItem.querySelector('input[type="number"]').value);
  
  cartItem.remove();
  
  // Soustraire le montant du produit supprimé du total estimé
  const estimatedTotalAmount = parseFloat(estimatedTotal.textContent.replace('$', ''));
  const newEstimatedTotal = estimatedTotalAmount - (productTotal * productQuantity);
  estimatedTotal.textContent = '$' + newEstimatedTotal.toFixed(2);
}

document.getElementById('note-remove').addEventListener('click', (event) => {
  event.preventDefault();
  removeProduct(event, 'note');
});

document.getElementById('ramadan-remove').addEventListener('click', (event) => {
  event.preventDefault();
  removeProduct(event, 'ramadan');
});

document.getElementById('pens-remove').addEventListener('click', (event) => {
  event.preventDefault();
  removeProduct(event, 'pens');
});

// Calculate the estimated total price
function calculateTotal() {
  const notePrice = 100 * noteNumber.value;
  const ramadanPrice = 25 * ramadanNumber.value;
  const pensPrice = 95 * pensNumber.value;
  const totalPrice = notePrice + ramadanPrice + pensPrice;
  estimatedTotal.textContent = '$' + totalPrice.toFixed(2);
}

// Initialize the estimated total price
calculateTotal();
const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});




