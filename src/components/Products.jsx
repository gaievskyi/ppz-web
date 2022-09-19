/* eslint-disable camelcase */
import { httpClient } from '../common/httpClient'
import {
  Center,
  Heading,
  List,
  ListItem,
  Spinner,
  Container
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { motion } from 'framer-motion'

import { Product } from './Product'
import { useEffect } from 'react'

export const Products = () => {
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

  const mock = [
    {
      id: 3,
      title: 'Porsche',
      description: 'Car 1 description',
      unit_price: 300,
      image:
        'https://cdn.pixabay.com/photo/2018/01/11/17/32/porsche-911-gt2rs-3076518_1280.jpg'
    },
    {
      id: 4,
      title: 'Toyota',
      description: 'Car 2 description',
      unit_price: 200,
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/12/51/automobile-1834274_1280.jpg'
    },
    {
      id: 5,
      title: 'BMW',
      description: 'Car 2 description',
      unit_price: 200,
      image:
        'https://cdn.pixabay.com/photo/2016/04/24/10/48/sports-car-1349139_1280.jpg'
    },
    {
      id: 6,
      title: 'Mercedes',
      description: 'Car 2 description',
      unit_price: 900,
      image:
        'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg'
    }
  ]

  return (
    <Container maxW={1280}>
      <Heading sx={{ paddingBottom: '50px' }}>Car gallery</Heading>
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <List
          as={Center}
          gap={5}
          sx={{
            flexWrap: 'wrap'
          }}
        >
          {mock.map((mockProduct) => (
            <ListItem key={mockProduct.id}>
              <Product {...mockProduct} />
            </ListItem>
          ))}
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <div>No products found.</div>
          ) : (
            data?.map((product) => (
              <ListItem key={product.id}>
                <Product {...product} />
              </ListItem>
            ))
          )}
        </List>
      </motion.div>
    </Container>
  )
}
