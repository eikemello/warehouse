import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const SidebarContent = ({ onClick }) => (
  <VStack>
    <Button w="100%">
      <Link to="/sl">Dashboard</Link>
    </Button>
    <Button w="100%">
      <Link to="">Searchs</Link>
    </Button>
    <Button w="100%">
      <Link to="">All assets</Link>
    </Button>
  </VStack>
)

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar
