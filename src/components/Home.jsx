import { Container, Stack, Heading, Image } from '@chakra-ui/react'
import { Discover } from './Discover'
import { motion } from 'framer-motion'
import { onPresent, onImagePresent } from '../common'

export const Home = () => (
  <Container
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
      <motion.div variants={onPresent} initial="hidden" animate="visible">
        <Heading fontSize="128px">Castlery</Heading>
      </motion.div>
      <motion.div variants={onImagePresent} initial="hidden" animate="visible">
        <Image
          objectFit="cover"
          src="https://cdn.pixabay.com/photo/2019/10/07/16/16/porsche-4533006_1280.jpg"
          alt="Apple car"
          sx={{
            transition: '0.75s ease all',

            '&:hover': {
              transform: 'scale(1.125)'
            }
          }}
        />
      </motion.div>
      <motion.div variants={onPresent} initial="hidden" animate="visible">
        <Heading fontSize="128px">Take the party outside this summer.</Heading>
      </motion.div>

      <Discover />
    </Stack>
  </Container>
)
