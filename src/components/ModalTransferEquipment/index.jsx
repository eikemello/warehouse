import React from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    ModalBody,
  } from "@chakra-ui/react"



const FormTransfer = () => {
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
            <Button bg="#b1c0cd" mr={3}>Transfer</Button>
          </ModalFooter>
        </>
    )
}
export default FormTransfer