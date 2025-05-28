document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal-cookies');
  const verPoliticaBtn = document.getElementById('ver-politica');
  const aceptarBtn = document.getElementById('aceptar-cookies');
  const rechazarBtn = document.getElementById('rechazar-cookies');

  // Función para mostrar el modal
  function mostrarModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Previene el scroll del body
  }

  // Función para ocultar el modal
  function ocultarModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura el scroll del body
  }

  // Event listeners
  verPoliticaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    mostrarModal();
  });

  aceptarBtn.addEventListener('click', function() {
    // Aquí puedes agregar la lógica para guardar la preferencia del usuario
    localStorage.setItem('cookiesAceptadas', 'true');
    ocultarModal();
  });

  rechazarBtn.addEventListener('click', function() {
    // Aquí puedes agregar la lógica para guardar la preferencia del usuario
    localStorage.setItem('cookiesAceptadas', 'false');
    ocultarModal();
  });

  // Cerrar el modal al hacer clic fuera del contenido
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      ocultarModal();
    }
  });

  // Mostrar el modal automáticamente al cargar la página
  mostrarModal();

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
}); 