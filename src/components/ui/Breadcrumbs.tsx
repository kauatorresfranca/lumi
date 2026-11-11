import { Link } from 'react-router-dom'
import JsonLd from '../seo/JsonLd'
import { site } from '../../data/site'
import styles from './Breadcrumbs.module.css'

type Crumb = { name: string; path: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Início', path: '/' }, ...items]
  return (
    <nav aria-label="Você está em" className={`container ${styles.nav}`}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.name,
            item: site.domain + c.path,
          })),
        }}
      />
      <ol>
        {all.map((c, i) => (
          <li key={c.path}>
            {i < all.length - 1 ? <Link to={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}