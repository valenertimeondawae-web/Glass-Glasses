
const selectors = document.querySelectorAll('.quantity-selector');


selectors.forEach(selector => {
 
  const decrementBtn = selector.querySelector('.decrement-btn');
  const incrementBtn = selector.querySelector('.increment-btn');
  const quantityDisplay = selector.querySelector('.quantity-display');

  
  let currentQuantity = parseInt(quantityDisplay.textContent); 
 
  function updateDisplay() {
    quantityDisplay.textContent = currentQuantity;

    
    decrementBtn.disabled = currentQuantity === 1;
  }
  
  
  incrementBtn.addEventListener('click', () => {
    currentQuantity++;
    updateDisplay();
  });

 
  decrementBtn.addEventListener('click', () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      updateDisplay();
    }
  });

  
  updateDisplay(); 
});