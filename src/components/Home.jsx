import { Container, Stack, Heading, Image } from '@chakra-ui/react'
import { Discover } from './Discover'
import { motion } from 'framer-motion'
import { onPresent, onImagePresent } from '../common'
import { useRef, useEffect } from 'react'

export const Home = () => {
  const fontSizeRef = useRef(null)

  const onScroll = (event) => {
    const scrollY = window.scrollY
    const scrollX = window.scrollX
    const scrollPosition = scrollY + scrollX
    const scrollPercentage = (scrollPosition / 1000) * 700
    const fontSize = 200 + scrollPercentage

    if (fontSize > 800) return
    fontSizeRef.current.style.fontSize = `${fontSize}%`
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Container
      as={Stack}
      direction="row"
      sx={{
        gap: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Stack>
        <motion.div variants={onPresent} initial="hidden" animate="visible">
          <Heading fontSize="128px">Amazoff</Heading>
        </motion.div>
        <motion.div
          variants={onImagePresent}
          initial="hidden"
          animate="visible"
          style={{ zIndex: '10' }}
        >
          <Image
            objectFit="cover"
            src="https://cdn.pixabay.com/photo/2019/10/07/16/16/porsche-4533006_1280.jpg"
            alt="Apple car"
            sx={{
              transition: '1s ease all',

              '&:hover': {
                transform: 'scale(0.9)'
              }
            }}
          />
        </motion.div>
        <Heading
          fontWeight="200"
          ref={fontSizeRef}
          sx={{
            pb: '55%',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}
        >
          Take the party outside this summer.
        </Heading>

        <Discover />
      </Stack>
    </Container>
  )
}
