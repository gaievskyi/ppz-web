import { useState, useEffect } from 'react'
import { httpClient } from '../common/httpClient'
import { Stack, Heading, List, ListItem } from '@chakra-ui/react'

import { Product } from './Product'

export const Products = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const { data } = await httpClient.get('store/products')
    setProducts(data ?? [])
  }

  useEffect(() => {
    getProducts()
  }, [products, getProducts])

  return (
    <Stack>
      <Heading>Products</Heading>
      <List as={Stack} gap={1.5}>
        {products.map((product) => (
          <ListItem key={product.id}>
            <Product {...product} />
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
