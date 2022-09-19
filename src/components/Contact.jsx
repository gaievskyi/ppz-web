import { Container, Stack, Heading, Text } from '@chakra-ui/react'

export const Contact = () => (
  <Container
    maxW={1280}
    as={Stack}
    direction="row"
    sx={{
      padding: 10,
      gap: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Stack>
      <Heading fontSize="128px">Contact us</Heading>
      <Text>
        <a href="tel:+4854593443">+48 545 934 43</a>
      </Text>
      <Text>
        <a href="tel:+4854593443">+48 545 934 42</a>
      </Text>
      <Text>
        <a href="mailto:ppz@example.com">ppz@example.com</a>
      </Text>
    </Stack>
  </Container>
)
