import { Bag } from 'react-bootstrap-icons'
import { Container, Stack, Button } from '@chakra-ui/react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { routes } from '../common'
import { Burger } from './Burger'

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
        <Button variant="unstyled" as={RouterLink} to={routes.cart.path}>
          <Bag />
        </Button>
      </Stack>
      <Burger />
    </Container>
  )
}
