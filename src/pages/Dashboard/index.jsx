import { useState } from 'react'

import { Box, Grid, Flex, Image } from '@chakra-ui/react'

import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import MUIDataTable from "mui-datatables"
import { logStock } from '../../services/firebase'


import logoImg from '../../assets/login_image.png'


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  const columns = [
    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "employee",
      label: "Employee",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "type",
      label: "Type",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "serialnumber",
      label: "Serial Number",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "responsible",
      label: "Release by",
      options: {
        filter: true,
        sort: false,
      }
    },
  ];

  const data_test = [
    { date: "17/10/2021", employee: "Joe James", type: "Test Corp", serialnumber: "Yonkers", responsible: "NY" },
    { date: "17/10/2021", employee: "John Walsh", type: "Test Corp", serialnumber: "Hartford", responsible: "CT" },
    { date: "17/10/2021", employee: "Bob Herm", type: "Test Corp", serialnumber: "Tampa", responsible: "FL" },
    { date: "17/10/2021", employee: "Joe James", type: "Test Corp", serialnumber: "Yonkers", responsible: "NY" },
    { date: "17/10/2021", employee: "John Walsh", type: "Test Corp", serialnumber: "Hartford", responsible: "CT" },
    { date: "17/10/2021", employee: "Bob Herm", type: "Test Corp", serialnumber: "Tampa", responsible: "FL" },
    { date: "17/10/2021", employee: "Joe James", type: "Test Corp", serialnumber: "Yonkers", responsible: "NY" },
    { date: "17/10/2021", employee: "John Walsh", type: "Test Corp", serialnumber: "Hartford", responsible: "CT" },
    { date: "17/10/2021", employee: "Bob Herm", type: "Test Corp", serialnumber: "Tampa", responsible: "FL" },
    { date: "17/10/2021", employee: "Joe James", type: "Test Corp", serialnumber: "Yonkers", responsible: "NY" },
    { date: "17/10/2021", employee: "John Walsh", type: "Test Corp", serialnumber: "Hartford", responsible: "CT" },
    { date: "17/10/2021", employee: "Bob Herm", type: "Test Corp", serialnumber: "Tampa", responsible: "FL" },
    { date: "17/10/2021", employee: "Joe James", type: "Test Corp", serialnumber: "Yonkers", responsible: "NY" },
    { date: "17/10/2021", employee: "John Walsh", type: "Test Corp", serialnumber: "Hartford", responsible: "CT" },
    { date: "17/10/2021", employee: "Bob Herm", type: "Test Corp", serialnumber: "Tampa", responsible: "FL" },
    { date: "17/10/2021", employee: "Joe James", type: "Test Corp", serialnumber: "Yonkers", responsible: "NY" },
    { date: "17/10/2021", employee: "John Walsh", type: "Test Corp", serialnumber: "Hartford", responsible: "CT" },
    { date: "17/10/2021", employee: "Bob Herm", type: "Test Corp", serialnumber: "Tampa", responsible: "FL" },
    { date: "17/10/2021", employee: "Joe James", type: "Test Corp", serialnumber: "Yonkers", responsible: "NY" },
    { date: "17/10/2021", employee: "John Walsh", type: "Test Corp", serialnumber: "Hartford", responsible: "CT" },
    { date: "17/10/2021", employee: "Bob Herm", type: "Test Corp", serialnumber: "Tampa", responsible: "FL" },
    { date: "17/10/2021", employee: "James Houston", type: "Test Corp", serialnumber: "Dallas", responsible: "TX" },
  ];

  const data2 = logStock

  const options = {
    filterType: 'checkbox',
  };

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
      
          <MUIDataTable
            title={"Releases"}
            data={data_test}
            columns={columns}
            options={options}
          />
        
    </>
  )
}

export default Dashboard