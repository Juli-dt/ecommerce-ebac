document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del menú
    var menuButton = document.getElementById('menu-button');
    var closeButton = document.getElementById('close-menu');
    var menu = document.getElementById('menu');
  
    // Abrir el menú al hacer clic en el botón del menú
    if (menuButton) {
      menuButton.addEventListener('click', function() {
        menu.style.display = 'block';
      });
    }
  
    // Cerrar el menú al hacer clic en el botón de cerrar (X)
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        menu.style.display = 'none';
      });
    }
  
    // Seleccionar elementos del carrito
    var addToCartButtons = document.querySelectorAll('.product__add-to-cart');
    var cart = document.querySelector('.cart');
    var cartCount = document.getElementById('cart-count');
    var productCount = 0; // Contador de productos en el carrito
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var productName = this.getAttribute('data-name');
        var productPrice = this.getAttribute('data-price');
        var productImage = this.closest('.product').querySelector('.product__image').src; // Obtener la imagen del producto
  
        // Crear el elemento para el producto en el carrito
        var cartItem = document.createElement('div');
        cartItem.classList.add('cart__item');
  
        cartItem.innerHTML = `
          <img src="${productImage}" alt="${productName}" class="cart__image" width="300">
          <p class="cart__description">${productName}</p>
          <p class="cart__price">$${productPrice}</p>
          <i class="cart__delete"><img src="img/close.png" alt="Icono Quitar" class="cart__delete-icon"></i>
        `;
  
        // Agregar el nuevo producto al carrito
        cart.appendChild(cartItem);
  
        // Incrementar el contador de productos
        productCount++;
        cartCount.textContent = productCount;
  
        // Funcionalidad para borrar el producto
        var deleteButton = cartItem.querySelector('.cart__delete-icon');
        deleteButton.addEventListener('click', function() {
          cartItem.remove();
          productCount--; // Decrementar el contador de productos
          cartCount.textContent = productCount;
        });
      });
    });
  });
  