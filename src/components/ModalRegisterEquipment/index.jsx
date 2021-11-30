import React from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    ModalBody,
  } from "@chakra-ui/react"



const FormRegister = () => {
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
            <Button bg="#b1c0cd" mr={3}>Register one</Button>
            <Button bg="#b1c0cd" mr={1}>Sequencial</Button>
          </ModalFooter>
        </>
      )

}

export default FormRegister