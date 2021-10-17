import { Box, Center, IconButton, Text, Flex, Tooltip } from '@chakra-ui/react'
import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'

import { useAuth } from '../../hooks/useAuth'

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  const { user, logOut } = useAuth()

  return (
    <Flex bg="blue" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="whiteAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Center flex="1" h="40px">
        <Text fontSize="xl" letterSpacing={2}>Warehouse</Text>
      </Center>
      <Box flex="1" />

      <Center flex="1" h="40px">
        <Text fontWeight="semibold">{
          user && user.email.substring(0, user.email.indexOf("@"))
        }
        </Text>
        <Tooltip label="Log out">
          <IconButton
            icon={<CloseIcon />}
            background="none"
            _hover={{ backgroundColor: "none", opacity: "80%" }}
            onClick={logOut}
          />
        </Tooltip>
      </Center>
    </Flex>
  )
}

export default Header
