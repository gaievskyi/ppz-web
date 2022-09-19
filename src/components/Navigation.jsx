import { Search, Person, Bag } from 'react-bootstrap-icons'
import { Container, Stack, Button, Link } from '@chakra-ui/react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { routes } from '../common'

export const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <Container
      maxW={1280}
      as={Stack}
      direction="row"
      sx={{
        padding: 10,
        gap: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Stack direction="row">
        <Button variant="unstyled">
          <Search />
        </Button>
        <Button variant="unstyled">
          <Person />
        </Button>
        <Button variant="unstyled">
          <Bag />
        </Button>
      </Stack>
      <Stack direction="row" gap="50px">
        <Link
          as={RouterLink}
          to="/"
          sx={pathname === routes.home.path ? { color: 'red.300' } : {}}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/products"
          sx={pathname === routes.products.path ? { color: 'red.300' } : {}}
        >
          Products
        </Link>
        <Link
          as={RouterLink}
          to="/contact"
          sx={pathname === routes.contact.path ? { color: 'red.300' } : {}}
        >
          Contact
        </Link>
      </Stack>
    </Container>
  )
}
