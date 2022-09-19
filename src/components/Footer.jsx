import { Heading, Center } from '@chakra-ui/react'
import { Contact } from './Contact'

export const Footer = () => (
  <Center
    sx={{
      p: '100px'
    }}
  >
    <Heading>Feel free to contact us.</Heading>
    <Contact />
  </Center>
)
