let count = 0;
const cartCountElement = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.btn-add');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCountElement.innerText = count;
        
        // Efecto visual al añadir
        button.innerText = "¡Añadido!";
        button.style.backgroundColor = "#fff";
        button.style.color = "#000";
        
        setTimeout(() => {
            button.innerText = "Añadir al Carrito";
            button.style.backgroundColor = "transparent";
            button.style.color = "#fff";
        }, 1500);
    });
});