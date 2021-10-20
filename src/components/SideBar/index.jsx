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

import history from '../../history'


const SidebarContent = ({ onClick }) => (
  <VStack>
    <Button w="100%" onClick= {() => onClick("/dashboard")}>
      Dashboard
      {/* <Link to="/dashboard">Dashboard</Link> */}
    </Button>
    <Button w="100%" onClick= {() => onClick("/searchs")}>
      Searchs
    </Button>
    <Button w="100%" onClick= {() => onClick("/all-equipaments")}>
      All Equipaments
    </Button>
  </VStack>
)

const Sidebar = ({ isOpen, onClose }) => {
  const onSidebarClick = (route) => {
    history.push(route)
  }

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onSidebarClick} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar
