import React, { useState } from 'react'

import { Box, Grid, Image, Flex, GridItem } from '@chakra-ui/react'
import {
  Modal,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react"

import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import FormRegisterEquipment from '../../components/ModalRegisterEquipment'
import FormTransferEquipment from '../../components/ModalTransferEquipment'
import AttendanceGraph from '../../components/AttendanceGraph'
import AssetsCountGraph from '../../components/AssetsCountGraph'
import MUIDataTable from "mui-datatables"

import { releaseFromClass, transfersFromClass } from '../../services/firebase'


import notebook_icon from '../../assets/notebook_icon.png'
import monitor_icon from '../../assets/monitor_icon.png'
import smartphone_icon from '../../assets/smartphone_icon.png'
import warehouse_icon from '../../assets/warehouse_icon.png'
import add_asset_icon from '../../assets/add_asset_icon.png'
import transfer_icon from '../../assets/transfer_icon.png'
import { MuiThemeProvider } from "@material-ui/core/styles";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onClose: onRegisterClose } = useDisclosure()
  const { isOpen: isTransferOpen, onOpen: onTransferOpen, onClose: onTransferClose } = useDisclosure()


  let [dataLog, setDataLog] = useState()
  let [dataRelease, setDataRelease] = useState()

  let log_transfer2 = [];


  setTimeout(function () {
    log_transfer2 = transfersFromClass;
    setDataLog(log_transfer2)
    setDataRelease(releaseFromClass)
  }, 1000);

  /* useEffect(() => {
    setDataLog(log_transfer2)
    setDataRelease(releaseFromClass)
   }, [log_transfer2]); */

  const columns_releases = [
    {
      name: "key",
      label: "Date",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "responsible",
      label: "Responsible",
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
        sort: true,
      }
    },
    {
      name: "serialNumber",
      label: "Serial Number",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "employee",
      label: "Release by",
      options: {
        filter: true,
        sort: true,
      }
    },
  ];

  const columns_transfer = [
    {
      name: "newResponsible",
      label: "To",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "oldResponsible",
      label: "From",
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
        sort: true,
      }
    },
    {
      name: "type",
      label: "Type",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "transferDate",
      label: "Date",
      options: {
        filter: true,
        sort: true,
      }
    }
  ];

  // {data.forEach((item) => { return item })}
  // {releaseFromClass.forEach((item) => {    console.log(item) ;})}
  // {data_test.forEach((item) => { console.log("foreach") console.log(item)})}  dsa

  const options = {
    jumpToPage: false,
    responsive: "scroll", //standard
    searchOpen: false, // init input fiel open
    filter: false, // remove filter by data value itself
    selectableRows: "none", //remove check box row on the left
    rowsPerPage: [5], // set 10 rows for page
  };


  return (
    <>
      <Box>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      </Box>
      <Box>
        <Header
          onShowSidebar={toggleSidebar}
          showSidebarButton={true}
        />
      </Box>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={2}
        p={3}>
        <Box w="100%" h="20" bg="#b1c0cd">
          <Flex justifyContent="space-evenly" alignItems="center" marginTop="10px">
            <Image src={warehouse_icon} w={16} h={16} />
            <p>1230 All Assets</p>
          </Flex>
        </Box>
        <Box w="100%" h="20" bg="#b1c0cd">
          <Flex justifyContent="space-evenly" alignItems="center" marginTop="10px">
            <Image src={notebook_icon} w={16} h={16} />
            <p>348 Notebooks</p>
          </Flex>
        </Box>
        <Box w="100%" h="20" bg="#b1c0cd">
          <Flex justifyContent="space-evenly" alignItems="center" marginTop="10px">
            <Image src={monitor_icon} w={16} h={16} />
            <p>264 Monitors</p>
          </Flex>
        </Box>
        <Box w="100%" h="20" bg="#b1c0cd">
          <Flex justifyContent="space-evenly" alignItems="center" marginTop="10px">
            <Image src={smartphone_icon} w={16} h={16} />
            <p>167 Smartphones</p>
          </Flex>
        </Box>
        <Box w="100%" h="20">
          <Flex justifyContent="center" alignItems="center" marginTop="10px" p={3}>
            <Button onClick={onTransferOpen} bg="white" marginEnd="10px"><Image src={transfer_icon} w={10} h={10} alt="Logo" /></Button>
            <Modal isOpen={isTransferOpen} onClose={onTransferClose} >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Transfer</ModalHeader>
                <ModalCloseButton />
                <FormTransferEquipment />
              </ModalContent>
            </Modal>
            <Button onClick={onRegisterOpen} bg="white" ><Image src={add_asset_icon} w={10} h={10} alt="Logo" /></Button>
            <Modal isOpen={isRegisterOpen} onClose={onRegisterClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>New asset</ModalHeader>
                <ModalCloseButton />
                <FormRegisterEquipment />
              </ModalContent>
            </Modal>
          </Flex>
        </Box>
      </Grid>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={5}
        p={10}
      >
        <GridItem colSpan={1}>
          <MuiThemeProvider>
            <MUIDataTable
              title={"Releases"}
              data={dataRelease}
              columns={columns_releases}
              options={options}
            />
          </MuiThemeProvider>
        </GridItem>
        <GridItem colSpan={1}>
          <MUIDataTable
            title={"Transfers"}
            data={dataLog}
            columns={columns_transfer}
            options={options}
          />
        </GridItem>
        <GridItem colSpan={2} justifyContent="center" alignItems="center" mt="10px">
          <AssetsCountGraph />
        </GridItem>
        <GridItem colSpan={2} justifyContent="center" alignItems="center" mt="10px">
          <AttendanceGraph />
        </GridItem>
      </Grid>

    </>
  )
}

export default Dashboard