# Diego Alejandro · Odontología — Landing page

Sitio estático hecho con **Astro**. Dos temas de color intercambiables:
**Marino y champán** (`marino-champan`) y **Cielo y menta** (`cielo-menta`).

## Cómo empezar

Requisitos: [Node.js LTS](https://nodejs.org), [pnpm](https://pnpm.io) y VS Code (se recomienda instalar la extensión *Astro*).

```bash
pnpm install       # solo la primera vez (genera pnpm-lock.yaml)
pnpm dev           # abre http://localhost:4321 con recarga automática
```

Otros comandos: `pnpm build` (genera la carpeta `dist/`) y `pnpm preview` (prueba el build).

> **pnpm 10.26+ / 11:** por seguridad bloquea los scripts de instalación de las dependencias
> y falla con `ERR_PNPM_IGNORED_BUILDS`. Este proyecto ya incluye `pnpm-workspace.yaml` con
> `allowBuilds` para `esbuild` y `sharp` (la optimización de imágenes). Si el error persiste,
> ejecuta `pnpm approve-builds` y acepta ambos.

## Cambiar entre las dos paletas

- **Probar al instante:** agrega `?theme=cielo-menta` o `?theme=marino-champan` al link
  (ej. `http://localhost:4321/?theme=cielo-menta`). Sirve para mostrarle ambas opciones al cliente.
- **Dejar uno por defecto:** en `src/data/site.ts` cambia `THEME`.

## Paletas y variantes

- **Botón "Paleta"** (flotante, abajo): alterna entre *Marino y champán* y *Cielo y menta* y recuerda la
  elección de quien lo usa. Es solo para revisión: en la versión final pon `SELECTOR_PALETAS = false` en `src/data/site.ts`.
- **Variante de color** (`MODE` en `site.ts`): `'azul'` (azul profundo, el diseño principal, por defecto),
  `'claro'` (marfil / cielo) o `'auto'` (azul solo si el dispositivo está en modo oscuro).
  También por link: `?mode=azul` o `?mode=claro`.

## Dónde editar cada cosa

| Quiero cambiar…                          | Archivo                                    |
|------------------------------------------|--------------------------------------------|
| Textos, tratamientos, FAQ, número de WhatsApp | `src/data/site.ts`                    |
| Colores, tipografías, formas de un tema  | `src/styles/themes/<tema>.css`             |
| Estructura y espaciados compartidos      | `src/styles/base.css`                      |
| Fotos de tratamientos                    | `src/assets/images/tratamientos/<id>.jpg`  |
| Foto de Diego                            | `src/assets/images/hero.jpg`               |
| Una sección completa                     | `src/components/<Seccion>.astro`           |
| SEO, fuentes, datos estructurados        | `src/layouts/Base.astro`                   |

Para **crear un tercer tema**: copia un archivo de `src/styles/themes/`, cambia el nombre en
`[data-theme='...']` y los valores, impórtalo en `Base.astro` y agrega el nombre al tipo `ThemeId`.

## Estructura

```
src/
├─ assets/images/        fotos (Astro las optimiza a WebP)
├─ components/           una pieza por sección + BotonWhatsApp (todos los CTA)
├─ data/site.ts          contenido editable
├─ layouts/Base.astro    <head>, SEO, fuentes, tema
├─ pages/index.astro     ensambla las secciones
├─ scripts/              acordeón, aparición, medición de clics
└─ styles/               tokens.css, base.css, themes/
```

## Pendientes antes de publicar

- [ ] Número real de WhatsApp (`whatsapp` en `site.ts`).
- [ ] Dominio real: `site` en `astro.config.mjs` y la línea `Sitemap` de `public/robots.txt`.
- [ ] Reemplazar las fotos temporales por fotos propias o casos reales con consentimiento firmado.
      (Las actuales incluyen marcas de terceros: Hero, Diagnóstico y Resinas.)
- [ ] Completar los textos entre `[corchetes]` (se ven en cursiva en la página).
- [ ] Definir cómo se presenta su estatus (estudiante / titulado) en "Confianza" y FAQ.
- [ ] Confirmar ciudad de atención y revisar datos estructurados en `Base.astro`.
- [ ] Agregar imagen para compartir (`og:image`) y, si se usan analíticas, un aviso de privacidad.

## Compartir el prototipo con un link (GitHub Pages)

Basado en la guía oficial: https://docs.astro.build/en/guides/deploy/github/

1. Crea un repositorio en GitHub (con cuenta gratuita, GitHub Pages requiere que sea **público**).
2. Sube el proyecto (incluye `pnpm-lock.yaml`; `node_modules` ya está ignorado):
   ```bash
   git init
   git add .
   git commit -m "Primer prototipo"
   git branch -M main
   git remote add origin https://github.com/USUARIO/REPOSITORIO.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source: GitHub Actions**.
4. En la pestaña **Actions** se ejecuta *Deploy to GitHub Pages* (el archivo `.github/workflows/deploy.yml` ya viene incluido).
5. Al terminar, el link es `https://USUARIO.github.io/REPOSITORIO/`. Ese es el que le pasas al cliente.

Cada `git push` a `main` actualiza el link automáticamente (1 a 2 minutos).
`astro.config.mjs` calcula solo `site` y `base` desde GitHub, y mientras viva en github.io la página
lleva `noindex` para que Google no la indexe.

## Dominio propio (más adelante)

Escribe el dominio en `DOMINIO` dentro de `astro.config.mjs`, agrega un archivo `public/CNAME` con ese dominio,
configura el DNS y el dominio en **Settings → Pages** (ver la sección "Change GitHub URL to a custom domain"
de la guía de Astro). Quita el `noindex` borrando la línea `esPrototipo` en `src/layouts/Base.astro`.
