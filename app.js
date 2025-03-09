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

function descargarCV() {
    const enlace = document.createElement('a');
    enlace.href = '/CV/Mauricio-Pereda-Ruiz-CV-actualizado.pdf'; // Ruta del archivo
    enlace.download = 'Mauricio-Pereda-Ruiz-CV-actualizado'; // Nombre con el que se descargará
    enlace.click(); // Simula un clic para iniciar la descarga
}

// Función para mostrar y ocultar secciones
function toggleSections(showSectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar la sección correspondiente
    const showSection = document.getElementById(showSectionId);
    showSection.classList.remove('hidden');
}

// Evento para el enlace Home
document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSections('home'); // Muestra la sección de Home
});

// Evento para el enlace Proyectos
document.getElementById('proyectos-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSections('proyectos'); // Muestra la sección de Proyectos
});

// Evento para el enlace Skills
document.getElementById('skills-link').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSections('skills');
})

// Evento para el enlace education

document.getElementById('education-link').addEventListener('click', function(event) { 
    event.preventDefault();
    toggleSections('education'); 
});

// Informacion de mis estudios 




document.addEventListener("DOMContentLoaded", () => {
    const learningElements = document.querySelectorAll(".learning");
    const habilidadContainer = document.querySelector(".habilidad");
    const detalleContainer = document.createElement("div");
    const tituloSkills = document.querySelector(".skillss");

    detalleContainer.classList.add("lenguaje-detalle");
    document.body.appendChild(detalleContainer);

    learningElements.forEach(element => {
        element.addEventListener("click", () => {
            // Reiniciar animaciones antes de ocultar
            habilidadContainer.classList.remove("fade-in", "fade-out");
            tituloSkills.classList.remove("fade-in", "fade-out");

            void habilidadContainer.offsetWidth; // Forzar reflow
            void tituloSkills.offsetWidth;

            habilidadContainer.classList.add("fade-out");
            tituloSkills.classList.add("fade-out");

            setTimeout(() => {
                habilidadContainer.classList.add("hidden");
                tituloSkills.classList.add("hidden");

                // Obtener el nombre del lenguaje seleccionado
                const lenguaje = element.innerText.trim();
                const infoTexto = obtenerInfoLenguaje(lenguaje);

                // Crear contenido del detalle
                    detalleContainer.innerHTML = `
                    <img src="${element.querySelector("img").src}" alt="${lenguaje}">
                    <h2>${lenguaje}</h2>
                    <p>${infoTexto}</p>
                    <div class="detalle-botones">
                        <button class="boton boton-salir">Salir</button>
                        <button class="boton boton-mas">Ver proyectos</button>
                    </div>
                    `;

                    // Evento para "ver proyectos"
                    detalleContainer.querySelector(".boton-mas").addEventListener("click", () => {
                        // Ocultar el detalle del lenguaje con animación
                        detalleContainer.classList.remove("fade-in");
                        detalleContainer.classList.add("fade-out");
                    
                        setTimeout(() => {
                            detalleContainer.style.display = "none";
                            detalleContainer.classList.remove("fade-out");
                    
                            // Ocultar los skills y el título
                            habilidadContainer.classList.add("hidden");
                            document.querySelector(".skillss").classList.add("hidden");
                    
                            // Simular clic en el enlace "Proyectos"
                            document.getElementById("proyectos-link").click();
                        }, 500);
                    });
                    
                    // Asegurar que los skills y el título reaparezcan correctamente cuando vuelves a Skills
                    document.getElementById("skills-link").addEventListener("click", () => {
                        setTimeout(() => {
                            habilidadContainer.classList.remove("hidden", "fade-out");
                            document.querySelector(".skillss").classList.remove("hidden", "fade-out");
                    
                            // Reiniciar la animación para que se vea el efecto de aparición
                            void habilidadContainer.offsetWidth; // Forzar reflow
                            void document.querySelector(".skillss").offsetWidth; // Forzar reflow en el título
                            habilidadContainer.classList.add("fade-in");
                            document.querySelector(".skillss").classList.add("fade-in");
                        }, 100);
                    });

                // Mostrar detalle con animación
                detalleContainer.style.display = "flex";
                detalleContainer.classList.remove("fade-in", "fade-out");
                void detalleContainer.offsetWidth;
                detalleContainer.classList.add("fade-in");

                // Evento para salir
                detalleContainer.querySelector(".boton-salir").addEventListener("click", () => {
                    detalleContainer.classList.remove("fade-in");
                    detalleContainer.classList.add("fade-out");

                    setTimeout(() => {
                        detalleContainer.style.display = "none";
                        detalleContainer.classList.remove("fade-out");

                        // Mostrar skills y título de nuevo
                        habilidadContainer.classList.remove("hidden", "fade-out");
                        tituloSkills.classList.remove("hidden", "fade-out");

                        void habilidadContainer.offsetWidth;
                        void tituloSkills.offsetWidth;

                        habilidadContainer.classList.add("fade-in");
                        tituloSkills.classList.add("fade-in");
                    }, 500);
                });
            }, 500);
        });
    });

    function obtenerInfoLenguaje(nombre) {
        const infoLenguajes = {
            "HTML": "HTML es el lenguaje de marcado para estructurar páginas web. Con este lenguaje desarrollo la base de mis proyectos asegurando una estructura clara y semántica que facilita la accesibilidad ¿Te gustaría ver algunos de mis proyectos donde he utilizado HTML?",
            "CSS3": "CSS3 se usa para dar estilo y diseño a los sitios web, permitiéndome crear interfaces atractivas y responsivas. Desarrollo con este lenguaje en mis proyectos para mejorar la experiencia visual y la usabilidad. ¿Te gustaría ver algunos de mis diseños?",
            "JavaScript": "JavaScript permite agregar interactividad a los sitios web, haciendo que mis proyectos sean dinámicos y funcionales. Utilizo este lenguaje para mejorar la experiencia del usuario. ¿Quieres ver algunos ejemplos?",
            "Bootstrap": "Bootstrap es un framework de CSS que utilizo para crear diseños responsivos y adaptables en mis proyectos. ¿Te gustaría ver algunos ejemplos?",
            "Nodejs": "Node.js me permite ejecutar JavaScript en el servidor para crear aplicaciones web dinámicas y escalables. ¿Quieres ver algunos de mis proyectos con Node.js?",
            "React.js": "React.js me permite desarrollar interfaces de usuario dinámicas y eficientes para mis proyectos. ¿Te gustaría ver algunos ejemplos?",
            "Git": "Git me ayuda a gestionar el control de versiones en mis proyectos, permitiéndome un desarrollo más organizado. ",
            "Github": "GitHub es una plataforma donde alojo y gestiono mis proyectos, facilitando la colaboración y el control de versiones."
        };

        return infoLenguajes[nombre] || "Información no disponible.";
    }
});

function toggleSections(showSectionId) {
    const currentSection = document.querySelector('.section:not(.hidden)'); // Sección visible
    const showSection = document.getElementById(showSectionId); // Sección a mostrar

    if (currentSection && currentSection !== showSection) {
        // Aplicar animación de salida a la sección actual
        currentSection.classList.add('section-exit');

        setTimeout(() => {
            currentSection.classList.add('hidden');
            currentSection.classList.remove('section-exit');

            // Aplicar animación de entrada a la nueva sección
            showSection.classList.remove('hidden');
            showSection.classList.add('section-enter');

            setTimeout(() => {
                showSection.classList.remove('section-enter'); // Removemos la clase después de la animación
            }, 500);
        }, 500); // Tiempo de la animación
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");
    const skillsSection = document.querySelector("#skills");

    if (footer && skillsSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.display = "none"; // Ocultar cuando Skills es visible
                } else {
                    footer.style.display = "block"; // Mostrar cuando Skills no está visible
                }
            });
        }, { threshold: 0.5 }); // Detecta cuando al menos el 50% de la sección está en pantalla

        observer.observe(skillsSection);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("active");
            if (index === currentIndex) {
                item.classList.add("active");
            }
        });
    }

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const carouselContainer = document.querySelector(".carousel-container");
    const selectedImageContainer = document.querySelector(".selected-image-container");
    const selectedImage = document.getElementById("selected-image");
    const selectedText = document.getElementById("selected-text");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const exitButton = document.getElementById("exit-button");
    
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove("active");
            if (index === currentIndex) {
                item.classList.add("active");
            }
        });
    }

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000);

    items.forEach(item => {
        item.addEventListener("click", () => {
            const imageUrl = item.getAttribute("src");
            const text = item.getAttribute("data-text");

            selectedImage.src = imageUrl;
            selectedText.textContent = text;

            carouselContainer.style.opacity = "0";
            setTimeout(() => {
                carouselContainer.classList.add("hidden");
                prevButton.classList.add("hidden");
                nextButton.classList.add("hidden");
                selectedImageContainer.classList.remove("hidden");
            }, 500);
        });
    });

    exitButton.addEventListener("click", () => {
        selectedImageContainer.classList.add("hidden");
        carouselContainer.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        nextButton.classList.remove("hidden");
        setTimeout(() => {
            carouselContainer.style.opacity = "1";
        }, 100);
    });
});