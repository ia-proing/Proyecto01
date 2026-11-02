# Claudio Castillo Ordenes — Sitio Web Personal Oficial
### Ingeniería Eléctrica & Inteligencia Artificial Aplicada

Landing page profesional de una sola página (*single-page website*) con estética **Dark Premium** inspirada en los principios de diseño, tipografía y fluidez de Apple.

---

## 🚀 Características Principales

- **Posicionamiento Híbrido:** Equilibrio estratégico entre más de 18 años de trayectoria en ingeniería eléctrica y proyectos industriales (minería, litio, CAPEX, Licencia SEC Clase A, PMBOK) con el desarrollo activo en Inteligencia Artificial Generativa, automatización y vibe coding.
- **Identidad Visual Dark Premium:**
  - Fondo: `#0B1220`
  - Superficies: `#16243A` con efectos de cristal translúcido (*glassmorphism*)
  - Acento tecnológico: `#35C6BC`
  - Tipografías: Manrope (títulos) e Inter (textos)
- **Animaciones e Interacciones Estilo Apple:**
  - Revelación progresiva de contenidos al scroll (`IntersectionObserver`).
  - Tarjetas con microinteracciones y elevación sutil al cursor.
  - Botón flotante inteligente "Volver Arriba" con desplazamiento suave.
  - Botón flotante oficial de WhatsApp preconfigurado con mensaje directo.
  - Respeto total a la preferencia de accesibilidad `prefers-reduced-motion`.
- **Rendimiento y SEO:**
  - Código HTML5 semántico sin sobrecarga de frameworks pesados.
  - Metadatos completos y etiquetas Open Graph optimizadas para LinkedIn.
  - Carga ultra veloz (< 0.8s) y 100% adaptable a smartphones, tablets y escritorio.

---

## 📁 Estructura del Proyecto

```text
Proyecto01/
├── index.html                   # Landing page principal semántica y accesible
├── css/
│   └── styles.css               # Estilos Dark Premium, glassmorphism y animaciones
├── js/
│   └── main.js                  # Control de scroll reveal, botones flotantes y microinteracciones
├── assets/
│   └── images/
│       ├── claudio-castillo.jpg              # [Espacio para tu fotografía personal]
│       ├── claudio-castillo-placeholder.svg  # Avatar de respaldo Dark Premium
│       ├── iaproing-logo.svg                 # Isotipo y logotipo oficial de IAProing
│       ├── sec-clase-a.svg                   # Insignia oficial SEC Clase A
│       └── cchia-badge.svg                   # Insignia Cámara Chilena de IA
└── README.md                    # Documentación del proyecto y despliegue
```

---

## 📸 Cómo incorporar tu Fotografía Personal

1. Guarda tu fotografía profesional en formato JPG con el nombre `claudio-castillo.jpg`.
2. Cópiala dentro de la carpeta:
   `assets/images/claudio-castillo.jpg`
3. La página la detectará automáticamente. Si el archivo no existe aún, el sitio muestra de forma elegante el avatar Dark Premium vectorizado sin errores visuales.

---

## 🌐 Cómo Visualizar el Sitio en Local

Puedes abrir el archivo directamente en tu navegador preferido:
1. Haz doble clic en `index.html` en el explorador de archivos.
2. O bien, si cuentas con Node.js / extensiones como *Live Server* en VS Code:
   ```bash
   npx serve .
   ```
   y abre `http://localhost:3000`.

---

## ☁️ Recomendaciones de Despliegue y Hosting

Este sitio web es 100% estático, seguro y ultra liviano. Puedes publicarlo de manera gratuita o con costo mínimo en:

1. **Cloudflare Pages (Altamente recomendado):**
   - Conexión directa con tu repositorio Git.
   - SSL gratuito automático, red CDN global ultra rápida y protección contra ataques.
2. **Vercel / Netlify:**
   - Despliegue con un clic desde el repositorio.
3. **Dominio personalizado:**
   - Puedes vincular tu dominio (ej. `claudiocastillo.cl` o `claudiocastillo.com`) configurando los registros DNS correspondientes.

---

## 📞 Enlaces y Canales Oficiales Integrados

- **WhatsApp:** [+56 9 8764 2331](https://wa.me/56987642331)
- **LinkedIn:** [linkedin.com/in/claudio-castillo-pmp](https://cl.linkedin.com/in/claudio-castillo-pmp)
- **IAProing:** [iaproing.com](https://iaproing.com)
