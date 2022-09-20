import { GridItem, Heading } from '@chakra-ui/react'

export const CartHeader = () => (
  <GridItem
    colSpan={4}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Heading
      sx={{
        fontWeight: 200
      }}
    >
      Product
    </Heading>
    <Heading
      sx={{
        fontWeight: 200
      }}
    >
      Quantity
    </Heading>
    <Heading
      sx={{
        fontWeight: 200
      }}
    >
      Actions
    </Heading>
  </GridItem>
)
