/* eslint-disable camelcase */
import React from 'react'
import { Stack, Text } from '@chakra-ui/react'

export const Product = ({ title, unit_price, description }) => (
  <Stack
    sx={{
      margin: '0 auto',
      maxWidth: '300px',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid black',
      borderRadius: '5px',
      padding: '15px'
    }}
  >
    <Text>{title}</Text>
    <Text>${unit_price}</Text>
    <Text>{description}</Text>
  </Stack>
)
