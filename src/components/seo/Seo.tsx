import { Head } from 'vite-react-ssg'

type Props = { title: string; description: string; path: string; image?: string }
const BASE_URL = 'https://SEU-DOMINIO.com.br'

export default function Seo({ title, description, path, image = '/og/default.jpg' }: Props) {
  const url = BASE_URL + path
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={BASE_URL + image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}