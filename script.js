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
  const sections = document.querySelectorAll('section[id]'); // Seleccionar solo secciones con ID
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavLink() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Ajusta este valor si es necesario
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
  highlightNavLink(); // Llamar una vez al cargar la página

  // Manejo del formulario de contacto
  const contactoForm = document.getElementById('contacto-form');
  
  if (contactoForm) {
    contactoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validación básica
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      
      if (!nombre || !email || !mensaje) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
      }
      
      // Aquí iría el código para enviar el formulario a un servidor
      // Por ahora solo mostraremos un mensaje de éxito
      alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
      contactoForm.reset();
    });
  }

  // --- Lógica al cargar la página --- // Eliminado
  // const savedConsent = localStorage.getItem('cookies_consent'); // Eliminado

  // if (savedConsent === 'accepted') { // Eliminado
  //     applyContentRestriction(true); // Asegurar acceso completo inmediatamente // Eliminado
  //     hideModal(); // Asegurar que el modal esté oculto // Eliminado
  // } else if (savedConsent === 'rejected') { // Eliminado
  //     applyContentRestriction(false); // Aplicar restricción inmediatamente // Eliminado
  //     hideModal(); // Asegurar que el modal esté oculto // Eliminado
  // } else { // Eliminado
  //     // Si no hay consentimiento guardado, mostrar el modal // Eliminado
  // showModal(); // Mostrar el modal siempre para propósitos de prueba // Eliminado
  //      // Opcional: aplicar restricción por defecto si no hay consentimiento visible // Eliminado
  //      // applyContentRestriction(false); // Esto ocultaría las secciones hasta que el usuario elija // Eliminado
  // } // Eliminado
}); 