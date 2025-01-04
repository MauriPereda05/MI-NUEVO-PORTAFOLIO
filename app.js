// Seleccionamos el botón de hamburguesa y el contenedor de navegación
const burgerButton = document.querySelector('.navbar-burger');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Agregamos un evento al botón de hamburguesa para alternar la clase 'show'
burgerButton.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});
