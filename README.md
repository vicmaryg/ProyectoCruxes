# Proyecto Cruxes de Luz

## Descripción

Este proyecto es el sitio web oficial de la Fundación Cruxes de Luz. El sitio web presenta una interfaz moderna y responsiva que incluye información sobre la fundación, sus programas, novedades y una sección de contacto. El sitio cuenta con soporte multiidioma (español e inglés) y una política de cookies integrada.

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con animaciones, efectos y diseño responsivo
- **JavaScript (ES6+)** - Funcionalidades interactivas y gestión de idiomas
- **Diseño Responsivo** - Adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Optimización de Imágenes** - Formato WebP para mejor rendimiento
- **Internacionalización** - Soporte completo para español e inglés

## Configuración e Instalación

Este es un proyecto frontend que no requiere instalación de dependencias complejas. Para ejecutarlo localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Crisca-cyver/ProyectoCruxes
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd proyecto_cruxes
   ```
3. Abre el archivo `index.html` en tu navegador web preferido.

## Estructura del Proyecto

```
proyecto_cruxes/
├── index.html                    # Página principal del sitio
├── formulario.html              # Página de formulario de contacto
├── enviar_correo.php            # Script PHP para envío de correos
├── composer.json                # Configuración de dependencias PHP
├── CNAME                        # Configuración de dominio personalizado
├── styles/                      # Directorio de estilos CSS
│   ├── base.css                 # Estilos base y variables CSS
│   ├── main.css                 # Estilos principales
│   ├── header.css               # Estilos del encabezado
│   ├── footer.css               # Estilos del pie de página
│   ├── hero.css                 # Estilos de la sección hero
│   ├── programas.css            # Estilos de la sección programas
│   ├── novedades.css            # Estilos de la sección novedades
│   ├── quienes-somos.css        # Estilos de la sección equipo
│   ├── contacto.css             # Estilos de la sección contacto
│   ├── modal.css                # Estilos de modales
│   ├── cookies.css              # Estilos de política de cookies
│   ├── language.css             # Estilos del selector de idioma
│   ├── whatsapp.css             # Estilos del botón de WhatsApp y flecha flotante
│   └── responsive.css           # Media queries y diseño responsivo
├── js/                          # Directorio de scripts JavaScript
│   ├── script.js                # Funcionalidades principales
│   ├── translations.js          # Sistema de traducciones
│   └── cookie_consent.js        # Gestión de cookies
├── languages/                   # Archivos de traducción
│   ├── es.json                  # Traducciones en español
│   └── en.json                  # Traducciones en inglés
├── imagen/                      # Directorio de imágenes optimizadas
│   ├── Lanzamientos/            # Imágenes de lanzamientos
│   ├── LOGO- ALIANZAS/          # Logos de aliados
│   ├── ProyectosSolidarios/     # Imágenes de proyectos
│   └── *.webp                   # Imágenes optimizadas en formato WebP
└── README.md                    # Este archivo
```

## Características Principales

### 🌐 **Internacionalización**

- Soporte completo para español e inglés
- Cambio de idioma en tiempo real sin recargar la página
- Traducciones almacenadas en archivos JSON
- Interfaz de usuario adaptada a ambos idiomas

### 📱 **Diseño Responsivo**

- Adaptable a todos los dispositivos y tamaños de pantalla
- Breakpoints optimizados para móvil, tablet y desktop
- Navegación adaptativa según el tamaño de pantalla
- Imágenes optimizadas para diferentes resoluciones

### 🍪 **Política de Cookies**

- Modal de consentimiento de cookies
- Almacenamiento local de preferencias del usuario
- Cumplimiento con regulaciones de privacidad (GDPR)
- Interfaz intuitiva y accesible

### 🎯 **Navegación y UX**

- Scroll suave entre secciones
- Menú de navegación fijo con indicadores activos
- Botón flotante de WhatsApp para contacto directo
- **Flecha flotante para ir arriba:** flecha naranja con degradé, justo encima del WhatsApp, que permite volver al inicio de la página con scroll suave
- Animaciones y transiciones suaves

### 🖼️ **Carruseles Mejorados**

- Carruseles de novedades con transición lenta y suave (personalizable)
- Bordes naranjas y diseño destacado para cada bloque de carrusel
- Títulos de carrusel traducibles y visibles en ambos idiomas

### 📧 **Formulario de Contacto**

- Validación de campos en tiempo real
- Integración con PHP para envío de correos
- Diseño intuitivo y accesible
- Mensajes de confirmación y error
- Borde naranja para destacar el formulario

### 🎨 **Secciones del Sitio**

- **Hero Section:** Presentación principal con llamadas a la acción
- **Programas:** Información detallada sobre los programas de la fundación
- **Novedades:** Últimas noticias y actualizaciones, con carruseles visuales
- **Quiénes Somos:** Información sobre el equipo y la fundación
- **Contacto:** Formulario y datos de contacto

### 🔧 **Optimizaciones Técnicas**

- Imágenes optimizadas en formato WebP
- CSS modular y organizado
- JavaScript modular y eficiente
- Carga rápida y rendimiento optimizado

## Características de Desarrollo

### CSS Modular

El proyecto utiliza un sistema de CSS modular con archivos separados por funcionalidad:

- Variables CSS centralizadas en `variables.css`
- Estilos base en `base.css`
- Estilos específicos por sección
- Media queries organizadas en `responsive.css`

### Sistema de Traducciones

- Archivos JSON separados por idioma
- Carga dinámica de traducciones
- Cambio de idioma sin recarga de página
- Fallbacks para textos no traducidos

### Gestión de Cookies

- Consentimiento explícito del usuario
- Almacenamiento de preferencias
- Cumplimiento normativo
- Interfaz accesible

## Contribución

Para contribuir al proyecto:

1. Haz un Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

### Guías de Contribución

- Mantén el código limpio y bien documentado
- Sigue las convenciones de nomenclatura existentes
- Prueba los cambios en diferentes dispositivos
- Verifica que las traducciones estén completas

## Despliegue

El sitio está configurado para ser desplegado en servicios de hosting estático:

- GitHub Pages
- Netlify
- Vercel
- Cualquier servidor web estático

### Configuración de Dominio

El archivo `CNAME` permite configurar un dominio personalizado para el sitio.

## Contacto

Para más información sobre el proyecto o la fundación:

- Utiliza el formulario de contacto en el sitio web
- Contacta a través del botón de WhatsApp o la flecha flotante para volver arriba
- Revisa la información de contacto en la sección correspondiente

## Licencia

Este proyecto es propiedad de la Fundación Cruxes de Luz. Todos los derechos reservados.

---

*Nota: Este proyecto está en constante desarrollo. Las características y la estructura pueden cambiar en futuras actualizaciones.*
