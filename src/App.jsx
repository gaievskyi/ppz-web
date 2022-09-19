import { routes } from './common'
import {
  Home,
  Products,
  Contact,
  NotFound,
  Layout,
  Redirect
} from './components'
import { Routes, Route } from 'react-router-dom'

export const App = () => (
  <Routes>
    <Route path={routes.home.path} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={routes.products.path} element={<Products />} />
      <Route path={routes.contact.path} element={<Contact />} />
      <Route path={routes.notFound.path} element={<NotFound />} />
    </Route>
    <Route path="/redirect-to-author" element={<Redirect />} />
  </Routes>
)
