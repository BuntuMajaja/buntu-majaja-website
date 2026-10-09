// GitHub Pages serves static files only. Give every route its own index.html so
// /about, /speaker etc. load directly (HTTP 200), and copy to 404.html as a fallback
// for any unknown path. Keep this list in sync with src/content/site.js `routes`.
import { copyFileSync, mkdirSync } from 'node:fs'

const routes = ['about', 'speaker', 'masterclasses', 'explore']

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true })
  copyFileSync('dist/index.html', `dist/${route}/index.html`)
}
copyFileSync('dist/index.html', 'dist/404.html')

console.log(`postbuild: wrote ${routes.length} route pages + 404.html`)
