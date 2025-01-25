import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { BusinessCardPage } from './pages/business-card.tsx'
import { Layout } from './components/layout.tsx'
import { ErrorPage } from './pages/error.tsx'
import { CurriculumPage } from './pages/curriculum.tsx'
import { ArticlesPage } from './pages/articles/articles.tsx'
import { ArticleIdPage } from './pages/articles/article-id.tsx'
import { ArticleEditorPage } from './pages/articles/article-editor.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
      <Route path='/' element={<BusinessCardPage />} />
      <Route path='curriculum' element={<CurriculumPage />} />

      <Route path='articles'>
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/articles/new/randomSecretValue' element={<ArticleEditorPage />} />
        <Route path='/articles/:id' element={<ArticleIdPage />} />
      </Route>
    </Route>
  ),
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </StrictMode>,
)
