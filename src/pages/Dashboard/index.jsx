import { useState } from 'react'

import { Box, Grid, Image, Flex, GridItem } from '@chakra-ui/react'

import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import MUIDataTable from "mui-datatables"
import { logStock, transfers } from '../../services/firebase'


import notebook_icon from '../../assets/notebook_icon.png'
import monitor_icon from '../../assets/monitor_icon.png'
import smartphone_icon from '../../assets/smartphone_icon.png'
import warehouse_icon from '../../assets/warehouse_icon.png'
import add_asset_icon from '../../assets/add_asset_icon.png'
import transfer_icon from '../../assets/transfer_icon.png'
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

  const columns_log = [
    {
      name: "oldResponsible",
      label: "From",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "newResponsible",
      label: "To",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "serialNumber",
      label: "Serial Number",
      options: {
        filter: true,
        sort: false,
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
      name: "transferDate",
      label: "Date",
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

  const log_transfer = [
    { newResponsible: "nome1", oldResponsible: "nome15", serialNumber: "serial1", status: "Fora do Estoque", transferDate: "2021-04-14_14:52:25", type: "Laptop" }, { newResponsible: "nome1", "oldResponsible": "nome16", serialNumber: "serial1", status: "Fora do Estoque", transferDate: "2021-04-15_11:35:54", type: "Laptop" }, { newResponsible: "nome2", "oldResponsible": "nome17", serialNumber: "serial2", status: "Fora do Estoque", transferDate: "2021-04-16_14:19:46", type: "Laptop" }, { newResponsible: "nome2", "oldResponsible": "nome18", serialNumber: "serial2", status: "Fora do Estoque", transferDate: "2021-04-19_17:16:14", type: "Laptop" }, { newResponsible: "nome2", "oldResponsible": "nome19", serialNumber: "serial2", status: "Fora do Estoque", transferDate: "2021-04-20_15:13:56", type: "Laptop" }, { newResponsible: "nome3", "oldResponsible": "nome20", serialNumber: "serial3", status: "Estoque Interno", transferDate: "2021-04-22_15:52:46", type: "Monitor" }, { newResponsible: "nome4", "oldResponsible": "nome21", serialNumber: "serial4", status: "Fora do estoque", transferDate: "2021-04-22_15:53:08", type: "Teclado" }, { newResponsible: "nome4", "oldResponsible": "nome22", serialNumber: "serial4", status: "Fora do Estoque", transferDate: "2021-04-22_18:21:28", type: "Teclado" }, { newResponsible: "nome5", "oldResponsible": "nome23", serialNumber: "serial5", status: "Estoque Interno", transferDate: "2021-04-23_16:12:48", type: "Barcode Collector" },
    { newResponsible: "nome5", "oldResponsible": "nome24", serialNumber: "serial5", status: "Fora do Estoque", transferDate: "2021-04-27_11:36:01", type: "Barcode Collector" },
    { newResponsible: "nome5", "oldResponsible": "nome25", serialNumber: "serial5", status: "Estoque Interno", transferDate: "2021-04-27_17:28:59", type: "Bar Code Colector" },
    { newResponsible: "nome6", "oldResponsible": "nome26", serialNumber: "serial6", status: "Fora do Estoque", transferDate: "2021-04-28_11:38:48", type: "Carregador laptop" },
    { newResponsible: "nome7", "oldResponsible": "nome27", serialNumber: "serial7", status: "Fora do Estoque", transferDate: "2021-04-28_15:21:17", type: "Laptop" }, { newResponsible: "nome8", "oldResponsible": "nome28", serialNumber: "serial8", status: "Fora do Estoque", transferDate: "2021-04-28_16:50:01", type: "Nobreak" }, { newResponsible: "nome9", "oldResponsible": "nome29", serialNumber: "serial9", status: "Estoque Interno", transferDate: "2021-04-28_17:32:06", type: "Laptop" }, { newResponsible: "nome10", "oldResponsible": "nome30", serialNumber: "serial10", status: "Fora do Estoque", transferDate: "2021-05-03_12:01:43", type: "Laptop" }, { newResponsible: "nome11", "oldResponsible": "nome31", serialNumber: "serial11", status: "Estoque Interno", transferDate: "2021-05-03_12:27:02", type: "Laptop" }
  ];

  const data_log = logStock
  const data_transfer = transfers

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
      <Grid templateColumns="repeat(5, 1fr)" gap={2} p={3}>
        <Box w="100%" h="20" bg="green.100">
          <Flex justifyContent="space-evenly" alignItems="center" marginTop="10px">
            <Image src={warehouse_icon} w={16} h={16} />
            <p>1230 Itens totais</p>
          </Flex>
        </Box>
        <Box w="100%" h="20" bg="green.100">
          <Flex justifyContent="space-evenly" alignItems="center" marginTop="10px">
            <Image src={notebook_icon} w={16} h={16} />
            <p>348 Notebooks</p>
          </Flex>
        </Box>
        <Box w="100%" h="20" bg="green.100">
          <Flex justifyContent="space-evenly" alignItems="center" marginTop="10px">
            <Image src={monitor_icon} w={16} h={16} />
            <p>264 Monitores</p>
          </Flex>
        </Box>
        <Box w="100%" h="20" bg="green.100">
          <Flex justifyContent="space-evenly" alignItems="center" marginTop="10px">
            <Image src={smartphone_icon} w={16} h={16} />
            <p>167   Smartphones</p>
          </Flex>
        </Box>
        <Box w="100%" h="20">
          <Flex justifyContent="end" alignItems="center" marginTop="10px" p={3}>
            <Image src={add_asset_icon} w={10} h={10} alt="Logo" marginEnd="20px" />
            <Image src={transfer_icon} w={10} h={10} alt="Logo" />
          </Flex>
        </Box>
      </Grid>
      <Grid
        h="300px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={5}
        p={10}
      >
        <GridItem colSpan={2}>
          <MUIDataTable
            title={"Releases"}
            data={data_test}
            columns={columns}
            options={options}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <MUIDataTable
            title={"Transfers"}
            data={log_transfer}
            columns={columns_log}
            options={options}
          />
        </GridItem>
        <GridItem colSpan={4} bg="lightgray">
          <Box boxSize="xl" borderRadius="md">
            <Image src={add_asset_icon} alt="Logo" w={30} h={30} />
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default Dashboard