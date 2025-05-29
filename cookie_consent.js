document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-cookies');
    const modalContent = modal.querySelector('.modal-contenido');
    const textContent = modal.querySelector('.modal-text-content');
    const btnAceptar = modal.querySelector('.btn-aceptar');
    const btnRechazar = modal.querySelector('.btn-rechazar');
    const btnManage = modal.querySelector('.btn-manage-preferences');

    // --- Funcionalidad Mostrar/Ocultar Modal ---
    const showModal = () => {
        if(modal) {
            modal.style.display = 'flex';
            // Deshabilitar scroll del body cuando el modal está visible
            document.body.style.overflow = 'hidden';
        }
    };

    const hideModal = () => {
        if(modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    // --- Funcionalidad de restricción de contenido ---
    const applyContentRestriction = (accepted) => {
        const allSections = document.querySelectorAll('.section');
        let hideStartIndex = -1;
        allSections.forEach((section, index) => {
            if (section.id === 'quienes-somos') {
                hideStartIndex = index + 1;
            }
        });
        allSections.forEach((section, index) => {
            if (hideStartIndex !== -1 && index >= hideStartIndex) {
                if (accepted) {
                    section.classList.remove('hidden-section');
                } else {
                    section.classList.add('hidden-section');
                }
            } else {
                section.classList.remove('hidden-section');
            }
        });
        if (accepted) {
            console.log("Cookies aceptadas. Acceso completo al contenido.");
        } else {
            console.log("Cookies rechazadas. Contenido restringido hasta 'Quiénes Somos'.");
        }
    };

    // --- Event Listeners para los botones del Modal ---
    if(btnAceptar) {
        btnAceptar.addEventListener('click', () => {
            localStorage.setItem('cookies_consent', 'accepted');
            applyContentRestriction(true);
            hideModal();
        });
    }
    if(btnRechazar) {
        btnRechazar.addEventListener('click', () => {
            localStorage.setItem('cookies_consent', 'rejected');
            applyContentRestriction(false);
            hideModal();
        });
    }
    if(btnManage) {
        btnManage.addEventListener('click', () => {
            console.log('Gestionar preferencias clickeado.');
        });
    }

    // Mostrar el modal siempre para pruebas
    showModal();

    /*
    const savedConsent = localStorage.getItem('cookies_consent');

    if (savedConsent === 'accepted') {
        applyContentRestriction(true); // Asegurar acceso completo inmediatamente
        hideModal(); // Asegurar que el modal esté oculto
    } else if (savedConsent === 'rejected') {
        applyContentRestriction(false); // Aplicar restricción inmediatamente
        hideModal(); // Asegurar que el modal esté oculto
    } else {
        // Si no hay consentimiento guardado, mostrar el modal
        showModal();
         // Opcional: aplicar restricción por defecto si no hay consentimiento visible
         // applyContentRestriction(false); // Esto ocultaría las secciones hasta que el usuario elija
    }
    */
}); 