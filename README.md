# Viviana Herrera Pastelería — Landing Page

## Stack
- **Framework**: Astro 4
- **CSS**: Tailwind CSS + CSS puro en cada componente
- **Hosting**: Vercel (deploy desde GitHub)
- **Fuentes**: Playfair Display + Montserrat (Google Fonts)

## Estructura
```
src/
  layouts/
    Layout.astro         ← Meta tags SEO, Open Graph, Schema.org
  components/
    Logo.astro           ← Logo circular recreado en CSS/SVG
    Navbar.astro         ← Menú sticky con hamburger mobile
    Hero.astro           ← Sección principal con CTA WhatsApp
    About.astro          ← Sección biográfica con foto circular
    GalleryMasonry.astro ← Galería Pinterest con filtros por categoría
    OrderConfigurator.astro ← Configurador de pedidos + WhatsApp
    FAQs.astro           ← Acordeón + links a redes sociales
    Footer.astro         ← Footer completo con navegación
  pages/
    index.astro          ← Página principal que compone todo
public/
  images/                ← Poner aquí todas las imágenes .webp
  favicon.svg
```

## Imágenes requeridas en `/public/images/`
Copiá los archivos .webp con exactamente estos nombres:

| Archivo | Descripción |
|---------|-------------|
| `logo-bg.webp` | Mesa de dulces para el Hero |
| `viviana-perfil.webp` | Foto de Viviana |
| `torta-infantil-1.webp` | Torta Minecraft |
| `torta-infantil-2.webp` | Torta Spiderman |
| `tortamargarita.webp` | Torta Margaritas Blancas |
| `margaritasrosa.webp` | Torta Margaritas Rosas |
| `torta-celebracion.webp` | Torta Hello 34 |
| `cereza.webp` | Torta de cerezas |
| `lemonpie.webp` | Lemon Pie |
| `postresitos.webp` | Postresitos individuales |
| `tartasfrutales.webp` | Tartas frutales |

## Array de imágenes para la galería (JavaScript)
```js
const galleryImages = [
  { src: "/images/torta-infantil-1.webp", alt: "Torta Minecraft", title: "Torta Temática Minecraft", category: "Infantiles" },
  { src: "/images/torta-infantil-2.webp", alt: "Torta Spiderman", title: "Torta Spiderman", category: "Infantiles" },
  { src: "/images/tortamargarita.webp", alt: "Torta margaritas blancas", title: "Torta Margaritas Blancas", category: "Celebración" },
  { src: "/images/margaritasrosa.webp", alt: "Torta margaritas rosa", title: "Torta Margaritas Rosa", category: "Celebración" },
  { src: "/images/torta-celebracion.webp", alt: "Torta Hello 34", title: "Torta Hello 34", category: "Celebración" },
  { src: "/images/cereza.webp", alt: "Torta de cerezas", title: "Torta de Cerezas", category: "Clásicas" },
  { src: "/images/lemonpie.webp", alt: "Lemon pie", title: "Lemon Pie", category: "Tartas" },
  { src: "/images/postresitos.webp", alt: "Postresitos individuales", title: "Postresitos Individuales", category: "Postres" },
  { src: "/images/tartasfrutales.webp", alt: "Tartas frutales", title: "Tartas Frutales", category: "Tartas" },
];
```

## Personalización pendiente
Antes de hacer deploy, actualizá en los archivos:
1. **Número de WhatsApp**: Reemplazá `5491100000000` con el número real
2. **URL del sitio**: Actualizá en `astro.config.mjs` y `Layout.astro`
3. **Instagram/Facebook**: Actualizá las URLs en `FAQs.astro` y `Footer.astro`

## Setup local
```bash
npm install
npm run dev
# Abre http://localhost:4321
```

## Deploy en Vercel
```bash
# Desde la CLI de Vercel:
vercel --prod
# O conectar el repo de GitHub en vercel.com
```
