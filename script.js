document.addEventListener('DOMContentLoaded', function() {

  // Navegación suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Resaltar sección activa en el nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavLink() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink);
  highlightNavLink();

  // Manejo del formulario de contacto
  const contactoForm = document.getElementById('contacto-form');
  
  if (contactoForm) {
    contactoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      
      if (!nombre || !email || !mensaje) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
      }
      
      alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
      contactoForm.reset();
    });
  }

  // Control del menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  // Función para alternar el menú
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  }

  // Event listener para el botón del menú
  menuToggle.addEventListener('click', toggleMenu);

  // Cerrar el menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Cerrar el menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      toggleMenu();
    }
  });
}); 