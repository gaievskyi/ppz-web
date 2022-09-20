import { Stack, Text } from '@chakra-ui/react'
import { Button } from './Button'

export const CartFooter = ({ cartTotal, totalItems }) => {
  return (
    <Stack
      sx={{
        p: 10,
        bg: 'white',
        borderRadius: 'md',
        boxShadow: `24px 24px 48px #d4d4d4,
              -24px -24px 48px #ffffff`
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Text fontSize="xl">Total</Text>
        <Text fontSize="lg">{totalItems} items in cart</Text>
        <Text fontSize="xl">${cartTotal}</Text>
      </Stack>
      <Button>Checkout</Button>
    </Stack>
  )
}
