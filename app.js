// Despliegue de nuestro menu para el menu de hamburguesa
const burgerButton = document.querySelector('.navbar-burger');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Agregamos un evento al botón de hamburguesa para alternar la clase 'show'
burgerButton.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// Seleccionamos todos los enlaces de la navbar
const navLinks = document.querySelectorAll('.nav-link');

// Añadimos un evento a cada enlace para la animacion
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Eliminamos la clase 'active' de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active'));

        // Añadimos la clase 'active' al enlace clickeado
        link.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.welcome-text');
    const container = document.querySelector('.welcome-container');
    
    // Detectar el fin de la animación
    textElement.addEventListener('animationend', () => {
      container.classList.add('written'); // Rellenar el texto con blanco después de la animación
    });
});



  

