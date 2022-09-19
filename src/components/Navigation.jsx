import { Search, Person, Bag, Translate } from 'react-bootstrap-icons'
import {
  Container,
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { ReactCountryFlag } from 'react-country-flag'
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
        <Button variant="outline">
          <Search />
        </Button>
        <Button variant="outline">
          <Person />
        </Button>
        <Button variant="outline">
          <Bag />
        </Button>
      </Stack>
      <Stack direction="row" gap="50px">
        <Link
          as={RouterLink}
          to="/"
          sx={pathname === routes.home.path ? { color: 'red' } : {}}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/products"
          sx={pathname === routes.products.path ? { color: 'red' } : {}}
        >
          Products
        </Link>
        <Link
          as={RouterLink}
          to="/contact"
          sx={pathname === routes.contact.path ? { color: 'red' } : {}}
        >
          Contact
        </Link>
      </Stack>
      <Menu sx>
        <MenuButton as={Button} rightIcon={<Translate />}>
          EN
        </MenuButton>
        <MenuList>
          <MenuItem>
            <ReactCountryFlag countryCode="US" />
          </MenuItem>
          <MenuItem>
            <ReactCountryFlag countryCode="PL" />
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  )
}
