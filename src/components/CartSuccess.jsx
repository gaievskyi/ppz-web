import { Center, Text, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { routes } from '../common'
import { ArrowRightCircle } from 'react-bootstrap-icons'

export const CartSuccess = ({ title }) => (
  <Center gap={3}>
    <Text>{title} has been added to your cart</Text>
    <Link
      as={RouterLink}
      to={routes.cart.path}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <ArrowRightCircle />
      To cart
    </Link>
  </Center>
)
