import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BusinessCardPage } from './pages/business-card.tsx'
import { Layout } from './components/layout.tsx'
import { ErrorPage } from './pages/error.tsx'
import { CurriculumPage } from './pages/curriculum.tsx'
import { ArticlesPage } from './pages/articles/articles.tsx'
import { ArticleIdPage } from './pages/articles/article-id.tsx'
import { ArticleEditorPage } from './pages/articles/article-editor.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BusinessCardPage />,
      },
      {
        path: 'curriculum',
        element: <CurriculumPage />,
      },
      {
        path: 'articles',
        children: [
          {
            index: true,
            element: <ArticlesPage />
          },
          {
            path: ':id',
            element: <ArticleIdPage />,
          },
          {
            path: `editor/${encodeURI(import.meta.env.VITE_SECRET_ARTICLE_EDITOR)}`,
            element: <ArticleEditorPage />,
          },
        ]
      },
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
})


createRoot(document.getElementById('root')!).render(
  <RouterProvider
    future={{
      v7_startTransition: true,
    }}
    router={router}
  />
)
