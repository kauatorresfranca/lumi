import { Head } from 'vite-react-ssg'
import { site } from '../../data/site'

type Props = { title: string; description: string; path: string; image?: string; noindex?: boolean }

export default function Seo({ title, description, path, image = '/og/default.jpg', noindex = false }: Props) {
  const url = site.domain + path
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={site.domain + image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}