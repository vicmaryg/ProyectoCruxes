console.log('Script.js cargado');

// Variables globales
let currentLanguage = 'es';
let scrollInterval;

// Función para cambiar el idioma
function changeLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateTexts();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Función para actualizar los textos en la página
function updateTexts() {
    console.log('Actualizando textos con idioma:', currentLanguage);
    const t = translations[currentLanguage];
    
    if (!t) {
        console.error('No hay traducciones disponibles para:', currentLanguage);
        return;
    }
    
    try {
        // Navegación
        document.querySelectorAll('.nav-link').forEach((link, index) => {
            const keys = ['inicio', 'nosotros', 'servicios', 'novedades', 'contacto'];
            if (keys[index]) {
                link.textContent = t.nav[keys[index]];
            }
        });
        
        // Botón de donación
        const donateButton = document.querySelector('.donate-button');
        if (donateButton) donateButton.textContent = t.nav.donar;
        
        // Hero
        const heroTitle = document.querySelector('.hero-title');
        const heroQuote = document.querySelector('.hero-section .quote');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        
        if (heroTitle) heroTitle.textContent = t.hero.title;
        if (heroQuote) heroQuote.textContent = t.hero.quote;
        if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
        if (heroDescription) heroDescription.textContent = t.hero.description;
        
        // Quiénes Somos
        const quienesSomosTitle = document.querySelector('#quienes-somos .section-title');
        const quienesSomosDesc = document.querySelector('#quienes-somos .section-description');
        const quienesSomosList = document.querySelector('#quienes-somos ul');
        
        if (quienesSomosTitle) quienesSomosTitle.textContent = t.quienes_somos.title;
        if (quienesSomosDesc) quienesSomosDesc.textContent = t.quienes_somos.description;
        if (quienesSomosList) {
            quienesSomosList.innerHTML = t.quienes_somos.objetivos
                .map(objetivo => `<li>${objetivo}</li>`)
                .join('');
        }
        
        // Párrafo base y botones
        const baseText = document.querySelector('#quienes-somos p:not(.section-description)');
        const cartaButton = document.querySelector('#quienes-somos .button-link:first-child');
        const codigoButton = document.querySelector('#quienes-somos .button-link:last-child');

        if (baseText) baseText.textContent = t.quienes_somos.base_text;
        if (cartaButton) cartaButton.textContent = t.quienes_somos.buttons.carta;
        if (codigoButton) codigoButton.textContent = t.quienes_somos.buttons.codigo;
        
        // Sección de ejes
        const ejesTitle = document.querySelector('.ejes-title');
        const ejesList = document.querySelector('.ejes-content ul');
        const ejesQuote = document.querySelector('.ejes-quote');

        if (ejesTitle) {
            console.log('Título de ejes encontrado:', ejesTitle);
            ejesTitle.textContent = t.quienes_somos.ejes.title;
        } else {
            console.log('No se encontró el título de ejes');
        }

        if (ejesList && t.quienes_somos.ejes && t.quienes_somos.ejes.items) {
            console.log('Lista de ejes encontrada:', ejesList);
            ejesList.innerHTML = t.quienes_somos.ejes.items
                .map(item => `<li>${item}</li>`)
                .join('');
        } else {
            console.log('No se encontró la lista de ejes o las traducciones');
        }

        if (ejesQuote) {
            console.log('Cita de ejes encontrada:', ejesQuote);
            ejesQuote.textContent = t.quienes_somos.ejes.quote;
        } else {
            console.log('No se encontró la cita de ejes');
        }
        
        // Visión, Misión y Objetivos
        const visionMisionTitle = document.querySelector('#vision-mision-objetivos .section-title');
        const visionTitle = document.querySelector('.vision-title');
        const visionContent = document.querySelector('.vision-content');
        const misionTitle = document.querySelector('.mision-title');
        const misionContent = document.querySelector('.mision-content');
        const objetivoGeneralTitle = document.querySelector('#vision-mision-objetivos .objetivo-title');
        const objetivoGeneralText = document.querySelector('#vision-mision-objetivos .objetivo-content');
        const objetivoEspecificoTitle = document.querySelector('#vision-mision-objetivos .objetivo-especifico-title');
        const objetivoEspecificoList = document.querySelector('#vision-mision-objetivos ul');
        
        if (visionMisionTitle) visionMisionTitle.textContent = t.vision_mision.title;
        if (visionTitle) visionTitle.textContent = t.vision_mision.vision.title;
        if (visionContent) visionContent.textContent = t.vision_mision.vision.content;
        if (misionTitle) misionTitle.textContent = t.vision_mision.mision.title;
        if (misionContent) misionContent.textContent = t.vision_mision.mision.content;
        if (objetivoGeneralTitle) objetivoGeneralTitle.textContent = t.vision_mision.objetivo_general.title;
        if (objetivoGeneralText) objetivoGeneralText.textContent = t.vision_mision.objetivo_general.text;
        if (objetivoEspecificoTitle) objetivoEspecificoTitle.textContent = t.vision_mision.objetivo_especifico.title;
        if (objetivoEspecificoList) {
            objetivoEspecificoList.innerHTML = t.vision_mision.objetivo_especifico.items
                .map(item => `<li>${item}</li>`)
                .join('');
        }
        
        // Nuestro Equipo
        const equipoTitle = document.querySelector('#nuestro-equipo .section-title');
        const equipoDesc = document.querySelector('#nuestro-equipo p');
        const equipoComite = document.querySelector('#nuestro-equipo p:nth-child(3)');
        const equipoQuote = document.querySelector('#nuestro-equipo .quote');
        const odsTitle = document.querySelector('#nuestro-equipo .section-title:last-child');
        
        if (equipoTitle) equipoTitle.textContent = t.equipo.title;
        if (equipoDesc) equipoDesc.textContent = t.equipo.description;
        if (equipoComite) equipoComite.textContent = t.equipo.comite;
        if (equipoQuote) equipoQuote.textContent = t.equipo.quote;
        if (odsTitle) odsTitle.textContent = t.equipo.ods_title;
        
        // Programas
        const programasTitle = document.querySelector('#programas .section-title');
        if (programasTitle) programasTitle.textContent = t.programas.title;
        
        // CRUXES RSE
        const rseTitle = document.querySelector('.cruxes-rse .programa-title');
        const rseQuote = document.querySelector('.cruxes-rse .programa-quote');
        const rseAsesoramientoTitle = document.querySelector('.cruxes-rse .programa-content h4');
        const rseAsesoramientoDesc = document.querySelector('.cruxes-rse .programa-content p');
        const rseAsesoramientoList = document.querySelector('.cruxes-rse .programa-content ul');
        
        if (rseTitle) rseTitle.textContent = t.programas.cruxes_rse.title;
        if (rseQuote) rseQuote.textContent = t.programas.cruxes_rse.quote;
        if (rseAsesoramientoTitle) rseAsesoramientoTitle.textContent = t.programas.cruxes_rse.asesoramiento.title;
        if (rseAsesoramientoDesc) rseAsesoramientoDesc.textContent = t.programas.cruxes_rse.asesoramiento.description;
        if (rseAsesoramientoList) {
            rseAsesoramientoList.innerHTML = t.programas.cruxes_rse.asesoramiento.items
                .map(item => `<li>${item}</li>`)
                .join('');
        }
        
        // CRUXES SOLIDARIAS
        const solidariasTitle = document.querySelector('.cruxes-solidarias .programa-title');
        const solidariasQuote = document.querySelector('.cruxes-solidarias .programa-quote');
        const solidariasProyectosTitle = document.querySelector('.cruxes-solidarias .programa-content h4');
        const solidariasProyectosDesc = document.querySelector('.cruxes-solidarias .programa-content p');
        const solidariasProyectosList = document.querySelector('.cruxes-solidarias .programa-content ul');
        
        if (solidariasTitle) solidariasTitle.textContent = t.programas.cruxes_solidarias.title;
        if (solidariasQuote) solidariasQuote.textContent = t.programas.cruxes_solidarias.quote;
        if (solidariasProyectosTitle) solidariasProyectosTitle.textContent = t.programas.cruxes_solidarias.proyectos.title;
        if (solidariasProyectosDesc) solidariasProyectosDesc.textContent = t.programas.cruxes_solidarias.proyectos.description;
        if (solidariasProyectosList) {
            solidariasProyectosList.innerHTML = t.programas.cruxes_solidarias.proyectos.items
                .map(item => `<li>${item}</li>`)
                .join('');
        }
        
        // CRUXES DE LUZ
        const luzTitle = document.querySelector('.cruxes-de-luz .programa-title');
        const luzQuote = document.querySelector('.cruxes-de-luz .programa-quote');
        const luzEspiritualidadTitle = document.querySelector('.cruxes-de-luz .programa-content h4');
        const luzEspiritualidadDesc = document.querySelector('.cruxes-de-luz .programa-content p');
        const luzEspiritualidadList = document.querySelector('.cruxes-de-luz .programa-content ul');
        
        if (luzTitle) luzTitle.textContent = t.programas.cruxes_luz.title;
        if (luzQuote) luzQuote.textContent = t.programas.cruxes_luz.quote;
        if (luzEspiritualidadTitle) luzEspiritualidadTitle.textContent = t.programas.cruxes_luz.espiritualidad.title;
        if (luzEspiritualidadDesc) luzEspiritualidadDesc.textContent = t.programas.cruxes_luz.espiritualidad.description;
        if (luzEspiritualidadList) {
            luzEspiritualidadList.innerHTML = t.programas.cruxes_luz.espiritualidad.items
                .map(item => `<li>${item}</li>`)
                .join('');
        }
        
        // Novedades
        const novedadesTitle = document.querySelector('#novedades .section-title');
        const verMasBtn = document.querySelector('#novedades .ver-mas-btn');
        const alianzasTitle = document.querySelector('#novedades .novedad-item:nth-child(1) .novedad-title');
        const proyectosTitle = document.querySelector('#novedades .novedad-item:nth-child(2) .novedad-title');
        const lanzamientosTitle = document.querySelector('#novedades .novedad-item:nth-child(3) .novedad-title');
        
        if (novedadesTitle) novedadesTitle.textContent = t.novedades.title;
        if (verMasBtn) verMasBtn.textContent = t.novedades.ver_mas;
        if (alianzasTitle) alianzasTitle.textContent = t.novedades.alianzas;
        if (proyectosTitle) proyectosTitle.textContent = t.novedades.proyectos_solidarios;
        if (lanzamientosTitle) lanzamientosTitle.textContent = t.novedades.lanzamientos;
        
        // Contacto
        const contactoTitle = document.querySelector('.contacto-main-title');
        const masInfoTitle = document.querySelector('#contacto h3:not(.contacto-main-title)');
        const nombreLabel = document.querySelector('label[for="nombre"]');
        const emailLabel = document.querySelector('label[for="email"]');
        const mensajeLabel = document.querySelector('label[for="mensaje"]');
        const submitButton = document.querySelector('button[type="submit"]');
        const direccionLabel = document.querySelector('.contacto-direccion');
        const telefonoLabel = document.querySelector('label[for="telefono"]');
        const horarioLabel = document.querySelector('.contacto-horario');
        const tipoContactoLabel = document.querySelector('label[for="tipo-contacto"]');
        const tipoContactoSelect = document.querySelector('#tipo-contacto');
        const privacidadLabel = document.querySelector('.checkbox-container');
        
        if (contactoTitle) contactoTitle.textContent = t.contacto.title;
        if (masInfoTitle) masInfoTitle.textContent = t.contacto.mas_info;
        if (nombreLabel) nombreLabel.textContent = t.contacto.nombre;
        if (emailLabel) emailLabel.textContent = t.contacto.email;
        if (mensajeLabel) mensajeLabel.textContent = t.contacto.mensaje;
        if (submitButton) submitButton.textContent = t.contacto.enviar;
        if (direccionLabel) direccionLabel.textContent = t.contacto.direccion;
        if (telefonoLabel) telefonoLabel.textContent = t.contacto.telefono;
        if (horarioLabel) horarioLabel.textContent = t.contacto.horario;
        if (tipoContactoLabel) tipoContactoLabel.textContent = t.contacto.tipo_contacto.label;
        if (privacidadLabel) {
            // Encontrar el último nodo de texto después del span.checkmark
            const checkmark = privacidadLabel.querySelector('.checkmark');
            if (checkmark) {
                const textNode = Array.from(privacidadLabel.childNodes)
                    .find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
                if (textNode) {
                    textNode.textContent = t.contacto.privacidad + ' *';
                }
            }
        }
        
        // Actualizar opciones del select
        if (tipoContactoSelect) {
            tipoContactoSelect.options[0].text = t.contacto.tipo_contacto.placeholder;
            tipoContactoSelect.options[1].text = t.contacto.tipo_contacto.donar;
            tipoContactoSelect.options[2].text = t.contacto.tipo_contacto.voluntario;
            tipoContactoSelect.options[3].text = t.contacto.tipo_contacto.empresa;
            tipoContactoSelect.options[4].text = t.contacto.tipo_contacto.informacion;
            tipoContactoSelect.options[5].text = t.contacto.tipo_contacto.otro;
        }
        
        // Footer
        const footerQuote = document.querySelector('.footer-center-content p');
        const footerLink = document.querySelector('.footer-link');
        const siguenosText = document.querySelector('.footer .social-icons');
        
        if (footerQuote) footerQuote.textContent = t.footer.quote;
        if (footerLink) footerLink.textContent = t.footer.cookies;
        if (siguenosText) siguenosText.textContent = t.footer.siguenos;
        
        // Objetivos de Desarrollo Sostenible
        const todosLosTitulos = document.querySelectorAll('h2.section-title');
        todosLosTitulos.forEach((titulo) => {
            if (titulo.textContent.includes('Objetivos de desarrollo sostenible') || 
                titulo.textContent.includes('Sustainable Development Goals')) {
                console.log('Encontrado título de ODS:', titulo.textContent);
                titulo.textContent = t.objetivos_desarrollo.title;
            }
        });
        
        console.log('Textos actualizados exitosamente');
    } catch (error) {
        console.error('Error al actualizar textos:', error);
    }
}

// Inicializar sistema de idiomas
function initLanguageSystem() {
    console.log('Inicializando sistema de idiomas');
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    const toggle = document.getElementById('languageToggle');
    if (toggle) {
        console.log('Toggle encontrado:', toggle);
        toggle.checked = currentLanguage === 'en';
        toggle.addEventListener('change', changeLanguage);
    }
    
    updateTexts();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');
    initLanguageSystem();
});

// Cargar el formulario
const formularioContainer = document.getElementById('formulario-container');
if (formularioContainer) {
    fetch('formulario.html')
        .then(response => response.text())
        .then(html => {
            formularioContainer.innerHTML = html;
            // Inicializar el manejo del formulario después de cargarlo
            initializeForm();
        })
        .catch(error => console.error('Error cargando el formulario:', error));
}

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
function initializeForm() {
  const contactoForm = document.getElementById('contacto-form');
  
  if (contactoForm) {
    contactoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const tipoContacto = document.getElementById('tipo-contacto').value;
      const mensaje = document.getElementById('mensaje').value.trim();
      
      if (!nombre || !email || !mensaje) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
      }
      
            // Mostrar indicador de carga
            const submitButton = contactoForm.querySelector('.btn-enviar');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Preparar los datos para enviar
            const formData = {
                nombre: nombre,
                email: email,
                telefono: telefono,
                tipoContacto: tipoContacto,
                mensaje: mensaje
            };

            // Enviar los datos al servidor
            fetch('enviar_correo.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
      alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
      contactoForm.reset();
                } else {
                    throw new Error(data.error || 'Error al enviar el mensaje');
                }
            })
            .catch(error => {
                alert('Hubo un error al enviar el mensaje. Por favor, intente nuevamente más tarde.');
                console.error('Error:', error);
            })
            .finally(() => {
                // Restaurar el botón
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
  }

  // Control del menú hamburguesa
  /*
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
  */

  // --- Funcionalidad del Carrusel de Novedades ---
  window.addEventListener('load', function() {
    const novedadItems = document.querySelectorAll('.novedad-item');

    novedadItems.forEach(item => {
      const carouselContainer = item.querySelector('.novedad-carousel-container');
      const leftArrow = item.querySelector('.left-arrow');
      const rightArrow = item.querySelector('.right-arrow');
      const carouselItems = carouselContainer ? carouselContainer.querySelectorAll('img, .carousel-image-placeholder, .carousel-content-placeholder') : [];
      
      if (carouselItems.length > 0) {
        const firstItem = carouselItems[0];
        const itemOffsetWidth = firstItem.offsetWidth;
        const itemMarginLeft = parseInt(window.getComputedStyle(firstItem).marginLeft);
        const itemMarginRight = parseInt(window.getComputedStyle(firstItem).marginRight);
        const itemTotalWidth = itemOffsetWidth + itemMarginLeft + itemMarginRight;

        // Función para avanzar automáticamente
        const autoScroll = () => {
          const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
          if (carouselContainer.scrollLeft + itemTotalWidth >= maxScrollLeft) {
            carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselContainer.scrollBy({ left: itemTotalWidth, behavior: 'smooth' });
          }
        };

            // Intervalo para el desplazamiento automático
            scrollInterval = setInterval(autoScroll, 3000);

            // Función para manejar el clic en la flecha derecha
        rightArrow.addEventListener('click', () => {
                clearInterval(scrollInterval);
                const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
                if (carouselContainer.scrollLeft + itemTotalWidth >= maxScrollLeft) {
                    carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carouselContainer.scrollBy({ left: itemTotalWidth, behavior: 'smooth' });
                }
                scrollInterval = setInterval(autoScroll, 3000);
            });

            // Función para manejar el clic en la flecha izquierda
        leftArrow.addEventListener('click', () => {
                clearInterval(scrollInterval);
          if (carouselContainer.scrollLeft === 0) {
                    carouselContainer.scrollTo({ 
                        left: carouselContainer.scrollWidth - carouselContainer.clientWidth, 
                        behavior: 'smooth' 
                    });
          } else {
            carouselContainer.scrollBy({ left: -itemTotalWidth, behavior: 'smooth' });
          }
                scrollInterval = setInterval(autoScroll, 3000);
            });

            // Pausar el desplazamiento automático cuando el mouse está sobre el carrusel
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(scrollInterval);
            });

            // Reanudar el desplazamiento automático cuando el mouse sale del carrusel
            carouselContainer.addEventListener('mouseleave', () => {
                scrollInterval = setInterval(autoScroll, 3000);
        });
      } else {
        console.log(`--- Debug Carrusel: No se encontraron items en el carrusel de ${item.querySelector('.novedad-title')?.textContent} ---`);
      }
  });
}); 