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
- [ ] Mejorar visualmente el listado de posts (usar tarjetas o previews con imagen y resumen)
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
- [ ] Revisar que se usa la imagen por defecto cuando no hay imagen
- [x] Ser Google Friendly
- [ ] Sospecho que el SEO y las cards las voy a tener que poner también en el resto de páginas de la web.
- [ ] Por alguna extraña razón no me detecta el autor en el Search Google, lo he añadido por defecto

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
- [x] Añadir foto/avatar personal (opcional)
- [ ] Añadir lista de herramientas favoritas o propósito del blog
- [x] Mostrar imagen y descripción de Zumbit

### 6. Página de contacto
- [ ] Añadir un formulario básico (con Formspree, Netlify Forms o similar)
- [ ] Alternativa simple: enlazar a redes con llamada a la acción

### 7. Sitemap y RSS
- [ ] Generar `sitemap.xml` automático
- [ ] Activar feed RSS (`rss.xml`) para el blog
- [ ] Google Search
- [ ] Analíticas - Cloudflare Web Analytics

## 🧠 Extras (futuro opcional)
- [ ] Modo oscuro
- [ ] Contador de visitas por post
- [ ] Buscador interno para entradas
- [ ] Zona de descargas o recursos extra
- [ ] Página de “Recursos” o “Herramientas”
- [ ] netlify plugin?