import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { routes } from '../common'

export const Layout = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Navigation />
      <Outlet />
      {pathname !== routes.contact.path && <Footer />}
    </>
  )
}
