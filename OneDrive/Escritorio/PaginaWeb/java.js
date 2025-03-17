document.addEventListener("DOMContentLoaded", function () {
    const animados = document.querySelectorAll(".animado, .feature-box");

    function mostrarAnimados() {
        animados.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarAnimados);
    mostrarAnimados(); // Para animar elementos ya visibles al cargar la página
});





document.addEventListener("DOMContentLoaded", function() {
    const animados = document.querySelectorAll(".animado");

    function mostrarAnimados() {
        animados.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarAnimados);
    mostrarAnimados();
});








AOS.init({
    duration: 1000,  // Duración de la animación
    easing: 'ease-in-out',
    once: true // La animación ocurre solo una vez
});



















































































