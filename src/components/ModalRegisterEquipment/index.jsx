import React, { useState } from 'react'
import {
    Modal,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
import { InputLabel } from '@material-ui/core'



const FormRegister = () => {
    const { isOpenModalRegister, onOpenModalRegister, onCloseModalRegister } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

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
            <Button bg="lightblue" onClick={onCloseModalRegister}>Cancel</Button>
          </ModalFooter>
        </>
      )

}

export default FormRegister