# RIGGA Consultores 360° — Sitio Web

## Qué es

Sitio web corporativo/comercial de **RIGGA Consultores 360°**, consultora de Fred Geovanny Ramos Quiroz (Ing. Mecánico, CIP 78325) con más de 20 años de experiencia en Seguridad y Salud Ocupacional (SSOMA) en minería, construcción y energía en Perú.

Es un sitio **estático** (HTML + CSS + JS puro, sin framework ni build tool): no hay `package.json`, no hay proceso de compilación, y **no es un repositorio git** todavía.

- **Archivos reales del sitio**: dentro de la subcarpeta [`Creacion de web _06/`](Creacion%20de%20web%20_06/) (no en la raíz del proyecto). Esa carpeta es la que habría que publicar/desplegar.

## Objetivo

- Presentar a RIGGA Consultores 360° y captar clientes ("Solicitar diagnóstico") para sus 4 líneas de servicio:
  1. **Seguridad y Salud (SSOMA)** — PETS, IPERC, izaje, riesgo eléctrico, supervisión de campo, auditoría documentaria.
  2. **Desarrollo Web** — sitios y plataformas a medida.
  3. **Power BI** — dashboards e informes.
  4. **Automatización con IA** — reportes, flujos documentarios, atención al cliente.
- Promocionar **RIGGA Tech 360°**, la línea de productos propios de software, cuyo primer producto es **SafeInspect360°** (plataforma de inspecciones SSOMA; ver proyecto hermano `SafeInspect360`).
- Servir como blog/contenido de valor (IPERC, indicadores, automatización, sitio web) para SEO y posicionamiento.

## Estructura (`Creacion de web _06/`)

- `index.html` — página de inicio (hero, las 4 líneas de servicio, CTA de contacto).
- `nosotros.html`, `contacto.html`, `portafolio.html` — páginas institucionales.
- `servicios.html` + `servicios-seguridad-salud.html`, `servicios-desarrollo-web.html`, `servicios-power-bi.html`, `servicios-automatizacion-ia.html` — detalle por línea de servicio.
- `safeinspect360.html`, `rigga-tech-360.html`, `inspecciones-digitales.html` — páginas de producto (RIGGA Tech 360° / SafeInspect360°).
- `blog.html` + `blog-iperc.html`, `blog-indicadores.html`, `blog-automatizacion.html`, `blog-sitio-web.html` — artículos de blog.
- `assets/styles.css` — estilos (tipografías Big Shoulders Display, Public Sans, IBM Plex Mono vía Google Fonts).
- `assets/nav.js` — menú de navegación (dropdowns, toggle móvil).
- `assets/gate.js` — "candado" de artículos: el contenido real del artículo va codificado en base64 dentro de un `<script type="text/plain">` y solo se revela si el SHA-256 de la clave ingresada coincide con un hash guardado en el propio JS (acceso tipo contenido premium/protegido por clave, sin backend).
- `WEB DE CONSULTOR RIGGA 360.docx` — documento de trabajo con notas/brief del sitio (no es parte del código).

## Estado actual

- **Sin control de versiones**: la carpeta del proyecto no es un repo git (a diferencia de `SafeInspect360`, que sí lo es).
- **Las 17 páginas HTML están completas** (cierran con `</body></html>`). Se corrigieron 9 archivos que estaban truncados a mitad del `<header>`/nav o a mitad del contenido — un verificación por tamaño de bytes había clasificado mal 4 de ellos como "completos" cuando en realidad cortaban de golpe; la verificación real fue con `tail` sobre cada archivo, no por tamaño:
  - Solo nav incompleto: `blog.html`, `contacto.html`, `servicios.html`, `servicios-seguridad-salud.html`, `servicios-power-bi.html`, `servicios-automatizacion-ia.html`, `blog-iperc.html`.
  - Contenido a medias: `portafolio.html` (le faltaban los casos de portafolio), `servicios-desarrollo-web.html` (cortaba a mitad de un `cred`).
  - El copy añadido (textos de servicio, casos de portafolio, artículo de blog IPERC, formulario de contacto) es un **borrador razonable siguiendo el tono y estructura ya usados en el sitio** — conviene que el dueño del sitio lo revise antes de publicar, especialmente:
    - `contacto.html`: el formulario usa **Netlify Forms** (`data-netlify="true"`), asumiendo que el hosting será Netlify (igual que SafeInspect360). Datos de contacto visibles ya confirmados: WhatsApp `+51 947 850 896` y correo `fredramosquiroz@gmail.com` (ambos en `contact-links`, junto al formulario). Queda un comentario `TODO` en el HTML solo para LinkedIn, aún no confirmado.
    - `blog-iperc.html`: usa el mismo candado (`gate.js`) que los otros 3 artículos, con contenido nuevo sobre errores comunes en matrices IPERC.
- **Pendiente de configuración (no es código, es panel de Netlify)**: activar la notificación por email de Netlify Forms — *Site configuration → Forms → Form notifications* — para que las solicitudes del formulario de `contacto.html` lleguen automáticamente a `fredramosquiroz@gmail.com`. Sin esto, los envíos quedan solo guardados en el panel de Netlify y nadie se entera en el momento.
- **Pendiente futuro**: notificación automática de nuevas solicitudes del formulario a WhatsApp — probablemente vía la infraestructura n8n que se está armando en Oracle Cloud para `SafeInspect360` (ver ese proyecto). No implementado todavía, sin fecha definida.
- No hay indicios de dominio/hosting conectado todavía (a diferencia de `safeinspect360.com`, que ya está en producción vía Netlify).

## Notas

- Proyecto hermano: [`SafeInspect360`](../../BOOTCAMP/SafeInspect360) — el producto de software que este sitio promociona.
- Al no tener build tool, para previsualizar basta con abrir los `.html` de `Creacion de web _06/` directamente en el navegador o servirlos con cualquier servidor estático simple.
