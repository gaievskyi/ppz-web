import { Stack, Heading, Text, Center } from '@chakra-ui/react'
import { routes } from '../common'
import { Button } from './Button'

export const NotFound = () => (
  <Center
    as={Stack}
    direction="column"
    sx={{
      padding: 10,
      gap: 1,
      justifyContent: 'space-between'
    }}
  >
    <Heading fontSize="224px">404.</Heading>
    <Text>Nothing&apos;s here yet..</Text>
    <Button to={routes.home.path}>Go home</Button>
  </Center>
)
