import { useCart } from 'react-use-cart'
import { GridItem, Heading, Stack, Image, Text, Center } from '@chakra-ui/react'
import { Button } from './Button'
import { CartPrice } from './CartPrice'

export const CartProduct = ({ id, title, price, quantity, image }) => {
  const { updateItemQuantity, removeItem } = useCart()

  return (
    <GridItem colSpan={4}>
      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          pr: 5,
          boxShadow: `24px 24px 48px #d4d4d4,
              -24px -24px 48px #ffffff`
        }}
      >
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <Image
            src={image}
            alt={title}
            boxSize="125px"
            objectFit="cover"
            sx={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}
          />
          <Stack sx={{ ml: 5 }}>
            <Heading fontSize="md">{title}</Heading>
            <CartPrice price={price} quantity={quantity} total={price} />
          </Stack>
        </Stack>
        <Center direction="row" sx={{}}>
          <Button
            onClick={() => updateItemQuantity(id, quantity - 1)}
            sx={{ mr: 5 }}
          >
            -
          </Button>
          <Text fontSize="md">{quantity}</Text>
          <Button
            onClick={() => updateItemQuantity(id, quantity + 1)}
            sx={{ ml: 5 }}
          >
            +
          </Button>
        </Center>
        <Button onClick={() => removeItem(id)}>Remove</Button>
      </Stack>
    </GridItem>
  )
}
