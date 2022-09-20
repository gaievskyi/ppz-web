import { Link as RouterLink, useLocation } from 'react-router-dom'
import { routes } from '../common'
import { Link, Stack } from '@chakra-ui/react'

export const Burger = () => {
  const { pathname } = useLocation()

  return (
    <Stack direction="row" gap="50px">
      <Link
        as={RouterLink}
        to="/"
        sx={pathname === routes.home.path && { color: 'red.300' }}
      >
        Home
      </Link>
      <Link
        as={RouterLink}
        to="/products"
        sx={pathname === routes.products.path && { color: 'red.300' }}
      >
        Products
      </Link>
      <Link
        as={RouterLink}
        to="/contact"
        sx={pathname === routes.contact.path && { color: 'red.300' }}
      >
        Contact
      </Link>
    </Stack>
  )
}
