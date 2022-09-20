import { httpClient, mock } from '../common'
import {
  Center,
  Heading,
  List,
  ListItem,
  Spinner,
  Container,
  Text,
  useToast
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useCart } from 'react-use-cart'
import { Product } from './Product'
import { useEffect } from 'react'
import { CartSuccess } from './CartSuccess'

export const Products = () => {
  const toast = useToast()
  const { addItem } = useCart()

  const { data, isLoading, isError } = useQuery(
    ['Get all products'],
    async () => {
      const data = await httpClient
        .get('store/products')
        .then((response) => response.data)
        .catch((error) => {
          console.error(error)
        })
      return data
    }
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleAddToCart = (item) => {
    try {
      addItem(item)
      toast({
        description: <CartSuccess title={item.title} />,
        duration: 2000,
        status: 'success',
        position: 'bottom-left'
      })
    } catch {
      toast({
        title: 'Item could not be added to cart',
        status: 'error',
        position: 'bottom-left'
      })
    }
  }

  return (
    <Container maxW={1280}>
      <Heading sx={{ paddingBottom: '50px' }}>Car gallery</Heading>
      <List
        as={Center}
        gap={5}
        sx={{
          flexWrap: 'wrap'
        }}
      >
        {mock.map((mockProduct) => (
          <ListItem key={mockProduct.id}>
            <Product
              onClick={() => handleAddToCart(mockProduct)}
              {...mockProduct}
            />
          </ListItem>
        ))}
        {isLoading ? (
          <Center gap={5}>
            <Spinner />
          </Center>
        ) : isError ? (
          <Center gap={5}>
            <Spinner />
            <Text>Can not load data</Text>
          </Center>
        ) : (
          data?.map((product) => (
            <ListItem
              key={product.id}
              sx={{
                position: 'relative'
              }}
            >
              <Product
                onClick={() => {
                  handleAddToCart(product)
                }}
                {...product}
              />
            </ListItem>
          ))
        )}
      </List>
    </Container>
  )
}
