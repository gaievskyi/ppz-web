import { useEffect } from 'react'
import { Center, Spinner, Heading } from '@chakra-ui/react'

export const Redirect = () => {
  useEffect(() => {
    window.location.replace('https://www.linkedin.com/in/gaievskyi')
  }, [])

  return (
    <Center
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        height: '100vh'
      }}
    >
      <Heading>Redirecting...</Heading>
      <Spinner />
    </Center>
  )
}
