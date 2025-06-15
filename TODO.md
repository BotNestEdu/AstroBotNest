---
type: Checklist
---

# TODO – Mejoras para BotNest

Este archivo recoge tareas pendientes y mejoras opcionales para seguir desarrollando tu sitio web BotNest con Astro.

## ✅ Despliegue
- [x] Despliegue en Netlify con dominio personalizado
- [x] Logo y favicon integrados
- [x] Tipografía moderna (Inter)
- [x] Paleta de colores personalizada
- [x] Página de inicio con estructura clara
- [x] Header y footer coherentes con redes sociales reales
- [x] Página 404 funcional
- [x] Asistente virtual Zumbit presentada en la sección “Acerca de”
- [x] Botones de compartir visibles al final de los posts

## 🧩 Pendiente

### 1. Estilo de entradas del blog
- [x] Entender la cabecera de un post, de donde sale, se puede modificar
- [x] Mejorar visualmente el listado de posts (usar tarjetas o previews con imagen y resumen)
- [ ] Añadir navegación entre entradas (post siguiente/anterior) - Relacionados
- [x] Aplicar justificado automático a todo el texto de los posts
- [ ] Añadir paginación si el número de entradas crece (complicado)
- [x] Cambiar texto Last updated on May 25, 2025
- [x] Ver si tengo la web en inglés

### 2. SEO y Open Graph
- [x] Implementar etiquetas `og:title`, `og:description`, `og:image`, `og:url` con valores reales por post
- [x] Añadir Twitter Card con imagen, título y autor (`@botnest_edu`)
- [ ] Añadir `meta name="keywords"` en cada entrada (opcional)
- [x] Garantizar que `description` e `image` sean únicas por entrada
- [x] Añadir campo visible “autor” en cada post
- [x] Añadir imagen por defecto apra las og cards
- [x] Revisar que se usa la imagen por defecto cuando no hay imagen
- [x] Ser Google Friendly
- [x] Estaba editando las SEO Cards en el fichero equivocado, ya está todo en el Head.astro
- [ ] Por alguna extraña razón no me detecta el autor en el Search Google, lo he añadido por defecto

### 3. Botones de compartir
- [x] Mejorar los botones actuales para que incluyan: `<TÍTULO> <URL> vía @botnest_edu`
- [x] Convertir los botones de compartir en componente Astro reutilizable (`<ShareButtons />`)
- [x] Convertir los botones sociales en componente Astro reutilizable (`<SocialButtons />`)
- [x] Añadir opción “copiar enlace”
- [x] Añadir botón Telegram
- [x] (Opcional) Mostrar barra de compartir flotante como en Omicrono

### 4. Sistema de etiquetas o categorías
- [x] Clasificar los posts por temas (Arduino, Scratch, IA...)
- [x] Crear páginas por etiqueta/categoría (`/tags/educacion`, etc.)
- [ ] Mostrar etiquetas en la portada o menú lateral

### 5. Página “Acerca de” mejorada
- [x] Añadir foto/avatar personal (opcional)
- [x] Añadir lista de herramientas favoritas o propósito del blog
- [x] Mostrar imagen y descripción de Zumbit

### 6. Página de contacto
- [ ] Añadir un formulario básico (con Formspree, Netlify Forms o similar)
- [ ] Alternativa simple: enlazar a redes con llamada a la acción

### 7. Sitemap y RSS
- [x] Generar `sitemap.xml` automático
- [x] Activar feed RSS (`rss.xml`) para el blog
- [x] Google Search
- [x] Analíticas - Cloudflare Web Analytics

## 🧠 Extras (futuro opcional)
- [ ] Modo oscuro
- [ ] Contador de visitas por post
- [ ] Buscador interno para entradas
- [ ] Zona de descargas o recursos extra
- [ ] Página de “Recursos” o “Herramientas”
- [ ] netlify plugin?


---

---

## 🏠 Mejora de la portada principal (`index.astro`)

### Elementos principales a implementar
- [x] Añadir slider automático con los 2–3 últimos artículos del blog
- [x] Listado de post
- [ ] Incluir sección “¿Qué puedes hacer aquí?” con 3 o 4 columnas informativas

### Ideas previstas para más adelante
- [ ] Añadir módulo “Recomendado por Zumbit” con post destacado manualmente
- [ ] Incluir sección “Explora el mundo de Zumbit” cuando la página de la mascota esté más desarrollada

---

## 🏷️ Mejora del sistema de etiquetas (tags)

### Visualización de tags
- [x] Mostrar los tags en cada artículo como enlaces (chips clicables)
- [x] Diseñar los chips de tags con estilo visual claro (bordes, colores suaves, hover)

### Navegación por tags
- [x] Crear página dinámica `/tags/[tag].astro` que muestre todos los posts con esa etiqueta
- [x] Enlazar cada tag a su página correspondiente desde cada post
- [x] (Opcional) Añadir título descriptivo en la cabecera de la página de tag: “Artículos etiquetados con ‘IA’”

### SEO y estructura
- [x] Asegurar que cada página de tag tenga metadatos mínimos (`title`, `description` basados en el tag)
- [x] Validar que los tags se mantengan en formato URL friendly (sin espacios, minúsculas)

---

## 🎨 Mejora visual y compatibilidad

### Favicon
- [x] Añadir favicon en formato `.ico` para compatibilidad total con navegadores antiguos

---

## 🔎 Indexación y posicionamiento

### Sitemap
- [x] Revisar que todas las entradas del blog estén correctamente listadas en `sitemap.xml`
- [x] Generar el archivo robots.txt
- [x] Agregar botnest.es a Bing

---

## 🛡️ Protección y atribución de contenido

### Copiar contenido
- [x] Capturar el evento de copiar texto y añadir automáticamente el texto: “(vía BotNest – https://botnest.es)”

### Imágenes del blog
- [ ] Añadir capa transparente sobre imágenes para evitar arrastre directo
- [ ] Incluir marca de agua discreta (texto o logo) en la esquina inferior derecha de cada imagen del post




---

## 🔄 MEJORAS FUNCIONALES Y DE USABILIDAD

### Navegación y experiencia
- [ ] Añadir buscador interno (Lunr.js o Algolia para sitios estáticos)
- [ ] Implementar breadcrumbs para mejorar navegación entre secciones
- [ ] Añadir tabla de contenidos flotante (TOC) en posts largos
- [ ] Botón “Volver arriba” fijo en móvil/escritorio
- [ ] Mejorar el scroll en dispositivos móviles (enfoque accesibilidad)

---

## 🎨 ESTÉTICA Y EXPERIENCIA VISUAL

### Diseño y presentación
- [ ] Añadir animaciones suaves (ej. con framer-motion)
- [ ] Diseñar portadas visuales para las páginas de tags o categorías
- [ ] Sistema de badges coloridos para etiquetas (`#Scratch`, `#IA`, etc.)
- [ ] Permitir alternar vista en forma de tarjetas o lista de posts

---

## 🧠 CONTENIDO Y ESTRUCTURA

### Blog y secciones informativas
- [ ] Crear sección “Proyectos destacados” (BotNest Tools, Educa, Blog…)
- [ ] Añadir “Lecturas recomendadas” al final de cada post
- [ ] Incluir una sección “Comienza aquí” para orientar a nuevos visitantes
- [ ] Crear un timeline con los hitos y publicaciones clave del proyecto

---

## 🌐 DIFUSIÓN Y COMUNIDAD

### Promoción y canales externos
- [ ] Añadir botón para suscripción RSS o newsletter (ej. ConvertKit o TinyLetter)

### Comunidad y feedback
- [ ] Sistema de comentarios con Giscus o Commento
- [ ] Formulario de contacto para sugerencias de contenido
- [ ] Crear sección “BotNest para docentes” con kits imprimibles y guías

---

## 🧰 MANTENIMIENTO Y ESCALABILIDAD

### Código y desarrollo
- [ ] Añadir `CONTRIBUTING.md` para futuras contribuciones
- [ ] Separar datos de los posts en `.json` o `.mdx` para escalar más fácilmente
- [ ] Crear componente de error o fallback para rutas no encontradas

### Control de calidad
- [ ] Validar automáticamente que cada entrada tenga `title`, `image`, `description`, `author`
- [ ] Comprobador de enlaces rotos (script manual o GitHub Actions)
- [ ] Crear entorno de staging para previsualizar contenido antes de publicarlo

---

## 🛠️ IDEAS ADICIONALES PARA EL PROYECTO

### Recursos educativos y minijuegos
- [ ] Página con recursos descargables (PDF, fichas, plantillas)
- [ ] Módulo sobre IA educativa: herramientas y guías
- [ ] Crear zona con minijuegos o quizzes interactivos

### Zumbit, la abeja mascota
- [ ] Página dedicada a Zumbit con expresiones, historia y recursos imprimibles
- [ ] Sección “Zumbit recomienda” con enlaces destacados del blog
- [ ] Usar a Zumbit como narradora visual (viñetas tipo cómic o texto destacado)
