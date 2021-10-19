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



const FormTransfer = () => {
    const { onClose } = useDisclosure()

    const initialRef = React.useRef()

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