import { Button as ChakraButton } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Button = ({ to, children, sx, onClick }) => (
  <ChakraButton
    as={to ? RouterLink : ChakraButton}
    to={to}
    onClick={onClick}
    variant="unstyled"
    sx={{
      textDecoration: 'none',
      display: 'flex',
      placeContent: 'center',
      gap: 2,
      transition: 'all .5s ease',
      p: 5,
      border: '1px solid black',
      borderRadius: 0,
      background: 'white',
      boxShadow: `10px 10px 40px #bebebe,
             -10px -10px 40px #ffffff;`,

      '&:hover': {
        color: 'black',
        background: 'white',
        boxShadow: `-2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);`
      },
      ...sx
    }}
  >
    {children}
  </ChakraButton>
)
