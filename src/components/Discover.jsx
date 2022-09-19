import { Heading, Stack, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { routes } from '../common'
import { ArrowRightCircle } from 'react-bootstrap-icons'

export const Discover = () => (
  <Stack
    sx={{
      p: '100px'
    }}
  >
    <Heading>Discover our products</Heading>
    <Stack
      sx={{
        p: 10,
        pl: 5,
        transition: '0.5s ease-out all',

        '&:hover': {
          color: 'white',
          background: 'black',
          boxShadow: `-2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);`
        }
      }}
    >
      <Link
        as={RouterLink}
        to={routes.products.path}
        style={{ textDecoration: 'none', width: '100%', height: '100%' }}
      >
        <Stack direction="row" alignItems="center">
          <ArrowRightCircle />
          <Text>Go to products</Text>
        </Stack>
      </Link>
    </Stack>
  </Stack>
)
