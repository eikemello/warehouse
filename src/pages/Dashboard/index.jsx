import { useState } from 'react'

import { Box } from '@chakra-ui/react'

import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box>
        <Header
          onShowSidebar={toggleSidebar}
          showSidebarButton={true}
        />
      </Box>
    </>
  )
}

export default Dashboard