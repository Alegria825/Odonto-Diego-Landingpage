import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cuando Diego tenga su dominio, escríbelo aquí (ej. 'https://www.midominio.mx').
// Con dominio propio NO se usa "base".
const DOMINIO = '';

// En GitHub Actions, GITHUB_REPOSITORY = "usuario/repositorio": de ahí salen site y base solos.
const [usuario = '', repo = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const enGitHubPages = !DOMINIO && process.env.GITHUB_ACTIONS === 'true' && usuario && repo;
const esSitioDeUsuario = repo.toLowerCase() === `${usuario}.github.io`.toLowerCase();

export default defineConfig({
  site: DOMINIO || (enGitHubPages ? `https://${usuario.toLowerCase()}.github.io` : 'https://www.tudominio.com'),
  base: enGitHubPages && !esSitioDeUsuario ? `/${repo}` : '/',
  integrations: [sitemap()],
});
