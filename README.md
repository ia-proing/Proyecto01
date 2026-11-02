# Claudio Castillo Ordenes — Sitio Web Personal (Versión 2)
### Inteligencia artificial aplicada a la ingeniería y la minería

Landing page profesional de una sola página (*single-page website*) con estética **Dark Premium** inspirada en los principios de diseño, tipografía y fluidez de Apple.

---

## 🚀 Posicionamiento y Características (v2)

- **Mensaje Central:** Claudio aplica inteligencia artificial generativa a la ingeniería y la minería, respaldado por 18 años de trayectoria continua en proyectos industriales mineros (Antofagasta, Chile).
- **Tono:** Sobrio, concreto y verificable. Sin métricas exageradas ni promesas comerciales no acreditadas.
- **Jerarquía de Secciones:**
  1. **Hero:** Línea superior, nombre H1 con tipografía fluida `clamp()`, titular sobrio, fotografía limpia con halo difuso en `#35C6BC`, párrafo descriptivo y botones de acción (WhatsApp y LinkedIn).
  2. **IA aplicada:** Sección protagónica con el webinar para la CCHIA (*lite embed* de YouTube diferido y sin cookies), capacitaciones a equipos mineros y principios de trabajo con supervisión humana.
  3. **Trayectoria en ingeniería:** 18 años en proyectos industriales, franja de hechos y línea de tiempo compacta (con vista móvil de 3 cargos y botón para desplegar la trayectoria completa).
  4. **Formación y credenciales:** Formación académica en ingeniería y gestión de proyectos, Licencia SEC Clase A y membresía como Socio de la CCHIA.
  5. **IAProing:** Sección del emprendimiento con un único logotipo oficial y enlace directo a [iaproing.com](https://iaproing.com).
  6. **Contacto:** Avatar circular con halo tenue, llamado a la acción sobrio y enlaces directos a WhatsApp y LinkedIn.
  7. **Footer:** Derechos de autor y año dinámico.

---

## 📁 Estructura del Proyecto

```text
Proyecto01/
├── index.html                   # Landing page principal semántica y accesible
├── css/
│   └── styles.css               # Estilos Dark Premium, glassmorphism, halo y responsive
├── js/
│   ├── config.js                # Configuración global (URL única de LinkedIn y base URL)
│   └── main.js                  # Menú móvil, lite-embed YouTube, scroll reveal y trayectoria
├── data/
│   └── demos.json               # Estructura preparada para demostraciones futuras (vacío)
├── assets/
│   └── images/
│       ├── claudio-castillo.jpg              # Fotografía oficial en alta resolución
│       ├── og-image.jpg                      # Imagen Open Graph 1200x630 para LinkedIn
│       ├── iaproing-full.png                 # Logotipo oficial único de IAProing
│       └── cchia-logo.jpg                    # Logotipo Cámara Chilena de IA (CCHIA)
├── robots.txt                   # Instrucciones para motores de búsqueda
├── sitemap.xml                  # Mapa del sitio para indexación
├── server.js                    # Servidor local ligero en Node.js para previsualización
└── README.md                    # Documentación del proyecto
```

---

## ⚙️ Configuración de Enlaces en un Solo Lugar

Para actualizar el enlace de LinkedIn en todo el sitio web:
1. Abre el archivo `js/config.js`.
2. Modifica la constante `linkedinUrl`:
   ```javascript
   linkedinUrl: 'https://www.linkedin.com/in/claudio-castillo-pmp'
   ```
3. El cambio se reflejará automáticamente en todos los enlaces y botones de LinkedIn del sitio.

---

## 🌐 Visualización en Local

1. Con el servidor local Node.js:
   ```bash
   node server.js
   ```
2. Abre en tu navegador:
   `http://localhost:3000`

---

## ☁️ Despliegue en Cloudflare Pages / GitHub

El repositorio está configurado y sincronizado con:
- **Repositorio:** [https://github.com/ia-proing/Proyecto01](https://github.com/ia-proing/Proyecto01)
- **URL de Producción Cloudflare:** `https://proyecto01-b4w.pages.dev/`
