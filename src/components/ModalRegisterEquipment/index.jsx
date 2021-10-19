import React from 'react'
import {
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    ModalBody,
  } from "@chakra-ui/react"



const FormRegister = () => {
    const {  onClose } = useDisclosure()

    const initialRef = React.useRef()

    return (
        <>
        <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Serial Number</FormLabel>
              <Input autoComplete="false" type="text" ref={initialRef} border="2px" borderColor="#b1c0cd"/>
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Type</FormLabel>
              <Input autoComplete="false" type="text" border="2px" borderColor="#b1c0cd"/>
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Model</FormLabel>
              <Input autoComplete="false" type="text" border="2px" borderColor="#b1c0cd"/>
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Brand</FormLabel>
              <Input autoComplete="false" type="text" border="2px" borderColor="#b1c0cd"/>
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Bill of sale number</FormLabel>
              <Input autoComplete="false" type="text" border="2px" borderColor="#b1c0cd"/>
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Permission</FormLabel>
              <Input autoComplete="false" type="text" border="2px" borderColor="#b1c0cd"/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="blue.400" mr={3}>Register</Button>
            <Button bg="lightblue" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </>
      )

}

export default FormRegister