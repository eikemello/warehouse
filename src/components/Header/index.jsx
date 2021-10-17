import { Box, Center, IconButton, Text, Grid, Tooltip } from '@chakra-ui/react'
import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'

import { useAuth } from '../../hooks/useAuth'

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  const { user, logOut } = useAuth()

  return (
    <Grid
      bg="purple"
      color="white"
      templateColumns="repeat(3,1fr)"
      gap={4}
      py={4}
      px={2}
      width="100vw"
    >
      <Box display="flex" alignItems="center" justifyContent="start" paddingLeft={4}>
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="whiteAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Center flex="1" h="40px">
          <Text fontSize="xl" letterSpacing={2}>Warehouse</Text>
        </Center>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="end" paddingRight={4} >
        <Text fontWeight="semibold">
          {
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
      </Box>
    </Grid>
  )
}

export default Header
