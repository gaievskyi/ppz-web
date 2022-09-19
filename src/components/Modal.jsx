import { useState } from 'react'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Stack,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Divider,
  Heading
} from '@chakra-ui/react'
import { Button } from './Button'
import { CreditCardFill } from 'react-bootstrap-icons'

export const Modal = ({ label }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sliderValue, setSliderValue] = useState(8)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          onOpen()
        }}
      >
        {label}
      </Button>
      <ChakraModal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Rent</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            as={Stack}
            sx={{
              p: 10,
              gap: '10px'
            }}
          >
            <FormLabel>Select time</FormLabel>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={sliderValue}
              min={1}
              max={24}
              colorScheme="blackAlpha"
              onChange={(v) => setSliderValue(v)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="black"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue}h`}
              >
                <SliderThumb boxSize="24px" />
              </Tooltip>
            </Slider>
            <Stack sx={{ p: '20px 0' }}>
              <Heading fontSize="24px">Authorize</Heading>
              <Divider />
            </Stack>
            <FormLabel>Email</FormLabel>
            <Input placeholder="example@email.com" type="email" />
            <FormLabel>Password</FormLabel>
            <Input placeholder="***" type="password" />
            <Button>
              <CreditCardFill /> To payment
            </Button>
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  )
}
