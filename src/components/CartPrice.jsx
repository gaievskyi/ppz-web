import { Stack, Text } from '@chakra-ui/react'

export const CartPrice = ({ price, quantity, total }) => (
  <Stack direction="column" sx={{ justifyContent: 'space-between' }}>
    <Text fontSize="md" color="gray.500">
      ${price} x {quantity}
    </Text>
  </Stack>
)
