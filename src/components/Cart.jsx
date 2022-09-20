import { useCart } from 'react-use-cart'
import { motion } from 'framer-motion'
import { Grid, GridItem, Heading, Center, Container } from '@chakra-ui/react'
import { CartFooter } from './CartFooter'
import { CartHeader } from './CartHeader'
import { CartProduct } from './CartProduct'
import { Button } from './Button'
import { routes } from '../common'
import { useEffect } from 'react'

export const Cart = () => {
  const { isEmpty, items, totalUniqueItems, cartTotal, totalItems } = useCart()

  const title = `Cart (${totalUniqueItems})`

  useEffect(() => {
    document.title = title
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {isEmpty ? (
        <Center
          h="100vh"
          sx={{
            flexDirection: 'column',
            gap: '50px'
          }}
        >
          <Heading
            sx={{
              textAlign: 'center',
              fontWeight: 200
            }}
          >
            Your cart is empty.
          </Heading>
          <Button to={routes.products.path}>To store</Button>
        </Center>
      ) : (
        <Container maxW={980} p={100}>
          <Grid templateColumns="repeat(4, 1fr)" gap="50px">
            <CartHeader />
            {items.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                image={item.img_url}
              />
            ))}
            <GridItem colSpan={4}>
              <CartFooter cartTotal={cartTotal} totalItems={totalItems} />
            </GridItem>
          </Grid>
        </Container>
      )}
    </motion.div>
  )
}
