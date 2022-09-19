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
    <Heading sx={{ fontWeight: '200' }}>Discover our products</Heading>

    <Link
      as={RouterLink}
      to={routes.products.path}
      style={{ textDecoration: 'none', width: '100%', height: '100%' }}
      sx={{
        p: 10,
        pl: 5,
        transition: '0.5s ease-out all',
        color: 'white',
        background: 'black',
        position: 'relative',

        '&:before': {
          content: '""',
          position: 'absolute',
          width: '0',
          height: '0',
          top: '-5px',
          left: '-5px',
          borderTop: '0 solid black',
          borderLeft: '0 solid black',
          transition: 'all 0.3s'
        },

        '&:after': {
          content: '""',
          position: 'absolute',
          width: '0',
          height: '0',
          bottom: '-5px',
          right: '-5px',
          borderBottom: '0 solid black',
          borderRight: '0 solid black',
          transition: 'all 0.6s'
        },

        '&:hover:before, &:hover:after': {
          width: '130%',
          height: '150%',
          border: '1px solid #f0f0f0'
        },

        '&:hover': {
          color: 'black',
          background: 'white'
        }
      }}
    >
      <Stack direction="row" alignItems="center">
        <ArrowRightCircle />
        <Text>Go to products</Text>
      </Stack>
    </Link>
  </Stack>
)
