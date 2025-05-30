# TODO – Mejoras para BotNest

Este archivo recoge tareas pendientes y mejoras opcionales para seguir desarrollando tu sitio web BotNest con Astro.

## ✅ Ya implementado
- Despliegue en Netlify con dominio personalizado
- Logo y favicon integrados
- Tipografía moderna (Inter)
- Paleta de colores personalizada
- Página de inicio con estructura clara
- Header y footer coherentes con redes sociales reales
- Página 404 funcional
- Asistente virtual Zumbit presentada en la sección “Acerca de”
- Botones de compartir visibles al final de los posts

---

## 🧩 Pendiente

### 1. Estilo de entradas del blog
- [ ] Mejorar visualmente el listado de posts (usar tarjetas o previews con imagen y resumen)
- [ ] Añadir navegación entre entradas (post siguiente/anterior)
- [ ] Aplicar justificado automático a todo el texto de los posts
- [ ] Añadir paginación si el número de entradas crece

### 2. SEO y Open Graph
- [ ] Implementar etiquetas `og:title`, `og:description`, `og:image`, `og:url` con valores reales por post
- [ ] Añadir Twitter Card con imagen, título y autor (`@botnest_edu`)
- [ ] Añadir `meta name="keywords"` en cada entrada (opcional)
- [ ] Garantizar que `description` e `image` sean únicas por entrada
- [ ] Añadir campo visible “autor” en cada post

### 3. Botones de compartir
- [ ] Mejorar los botones actuales para que incluyan: `<TÍTULO> <URL> vía @botnest_edu`
- [ ] Convertirlos en componente Astro reutilizable (`<ShareButtons />`)
- [ ] Añadir opción “copiar enlace”
- [ ] (Opcional) Mostrar barra de compartir flotante como en Omicrono

### 4. Sistema de etiquetas o categorías
- [ ] Clasificar los posts por temas (Arduino, Scratch, IA...)
- [ ] Crear páginas por etiqueta/categoría (`/tags/educacion`, etc.)
- [ ] Mostrar etiquetas en la portada o menú lateral

### 5. Página “Acerca de” mejorada
- [ ] Añadir foto/avatar personal (opcional)
- [ ] Añadir lista de herramientas favoritas o propósito del blog
- [x] Mostrar imagen y descripción de Zumbit

### 6. Página de contacto
- [ ] Añadir un formulario básico (con Formspree, Netlify Forms o similar)
- [ ] Alternativa simple: enlazar a redes con llamada a la acción

### 7. Sitemap y RSS
- [ ] Generar `sitemap.xml` automático
- [ ] Activar feed RSS (`rss.xml`) para el blog

---

## 🧠 Extras (futuro opcional)
- [ ] Modo oscuro
- [ ] Contador de visitas por post
- [ ] Buscador interno para entradas
- [ ] Zona de descargas o recursos extra
- [ ] Página de “Recursos” o “Herramientas”
