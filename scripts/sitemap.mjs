import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const DOMAIN = (process.env.SITE_URL || 'https://lumiodontomaceio.com.br').replace(/\/$/, '')
const DIST = 'dist'

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    return statSync(full).isDirectory() ? walk(full) : [full]
  })
}

const urls = walk(DIST)
  .filter((file) => file.endsWith('.html') && !readFileSync(file, 'utf8').includes('noindex'))
  .map((file) => relative(DIST, file).split(sep).join('/'))
  .filter((path) => path !== '404.html')
  .map((path) => {
    const route = path.replace(/(^|\/)index\.html$/, '').replace(/\.html$/, '')
    return route ? `${DOMAIN}/${route}` : `${DOMAIN}/`
  })
  .sort()

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`

writeFileSync(join(DIST, 'sitemap.xml'), xml)
console.log(`sitemap.xml gerado com ${urls.length} URLs`)