import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import DrLuizMiguel from './pages/dentists/DrluizMiguel'
import DraCamilaMatos from './pages/dentists/DraCamilaMatos'
import Treatment from './pages/Treatment'
import NotFound from './pages/NotFound'
import { treatments } from './data/treatments'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dr-luiz-miguel', element: <DrLuizMiguel /> },
      { path: 'dra-camila-matos', element: <DraCamilaMatos /> },
      ...treatments.map((t) => ({
        path: `tratamentos/${t.slug}`,
        element: <Treatment slug={t.slug} />,
      })),
      { path: '*', element: <NotFound /> },
    ],
  },
]