import { Heading, Center, Text, Stack, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Contact } from './Contact'

export const Footer = () => (
  <Center
    sx={{
      p: '100px'
    }}
  >
    <Stack>
      <Heading>Feel free to contact us.</Heading>
      <Text>&copy; 2022 — {new Date().getFullYear()}</Text>
      <Text
        sx={{
          p: 3,
          maxW: '250px',
          borderRadius: '30px',
          border: '1px solid #f0f0f0',
          fontWeight: 300
        }}
      >
        Made by{' '}
        <Link
          color="red.300"
          as={RouterLink}
          target="_blank"
          rel="noreferrer"
          isExternal
          to="/redirect-to-author"
        >
          Daniel Gajewski
        </Link>
      </Text>
    </Stack>
    <Contact />
  </Center>
)
