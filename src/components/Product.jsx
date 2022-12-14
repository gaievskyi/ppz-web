/* eslint-disable camelcase */
import { Stack, Text, Image, Center, Heading } from '@chakra-ui/react'
import { Modal } from './Modal'
import { Button } from './Button'
import { Cart } from 'react-bootstrap-icons'

export const Product = ({
  title,
  price,
  description,
  img_url = 'https://thinkapple.pl/wp-content/uploads/2021/01/hyundai-apple-car.jpg',
  onClick
}) => (
  <Stack
    sx={{
      transition: 'all 1s ease',
      margin: '0 auto',
      w: '100%',
      h: '100%',
      minH: '500px',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: `24px 24px 48px #d4d4d4,
             -24px -24px 48px #ffffff`,

      ':hover': {
        boxShadow: `-2px -2px 6px rgba(255, 255, 255, .6),
            -2px -2px 4px rgba(255, 255, 255, .4),
            2px 2px 2px rgba(255, 255, 255, .05),
            2px 2px 4px rgba(0, 0, 0, .1);`
      }
    }}
  >
    <Center
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Stack sx={{ mb: 10 }}>
        <Image
          boxSize="400px"
          objectFit="cover"
          src={img_url}
          alt="Apple car"
        />
      </Stack>
      <Heading fontSize="lg">{title}</Heading>
      <Text
        fontSize="xs"
        sx={{
          h: '30px',
          p: 2.5
        }}
      >
        {description}
      </Text>
      <Stack sx={{ m: 5 }}>
        <Center sx={{ flexDirection: 'column' }}>
          <Text fontSize="xl">${price} / hour</Text>
          <Text fontSize="md" color="tomato" as="s" sx={{ mb: 3 }}>
            ${price + 100}
          </Text>
          <Stack direction="row">
            <Modal label="Rent" />
            <Button onClick={onClick}>
              <Cart />
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Center>
  </Stack>
)
