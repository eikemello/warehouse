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



const FormTransfer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <>
        <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>From</FormLabel>
              <Input autoComplete="false" type="text"  ref={initialRef} border="2px" borderColor="#b1c0cd"/>
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>To</FormLabel>
              <Input autoComplete="false" type="text" border="2px" borderColor="#b1c0cd"/>
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Serial Number / IMEI</FormLabel>
              <Input autoComplete="false" type="text" border="2px" borderColor="#b1c0cd"/>
            </FormControl>
          </ModalBody>
            
          <ModalFooter>
            <Button bg="blue.400" mr={3}>
              Transfer
            </Button>
            <Button bg="lightblue" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </>
    )
}
export default FormTransfer