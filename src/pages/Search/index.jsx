import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Grid, GridItem, FormControl, Input} from "@chakra-ui/react"
import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import MUIDataTable from "mui-datatables"


const Searchs = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
    const [dataFilter, setDataFilter] = useState('')

    const columns_especific = [
        {
            name: "responsible",
            label: "Responsible",
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
                sort: true,
            }
        },
        {
            name: "model",
            label: "Model",
            options: {
                filter: true,
                sort: false,
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
            name: "status",
            label: "Status",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const columns_list_by_name = [
        {
            name: "responsible",
            label: "Responsible",
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
                sort: true,
            }
        },
        {
            name: "model",
            label: "Model",
            options: {
                filter: true,
                sort: false,
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
            name: "status",
            label: "Status",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const columns_list_history_log = [
        {
            name: "employee",
            label: "Responsible",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "responsible",
            label: "By",
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
            name: "model",
            label: "Model",
            options: {
                filter: true,
                sort: false,
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
            name: "registerDate",
            label: "Date",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const columns_list_history_out = [
        {
            name: "responsible",
            label: "Responsible",
            options: {
              filter: true,
              sort: false,
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
              sort: false,
            }
          },
          {
            name: "date",
            label: "Date",
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

    const columns_list_history_transfer = [
        {
            name: "newResponsible",
            label: "To",
            options: {
              filter: true,
              sort: false,
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
            label: "Type",
            options: {
              filter: true,
              sort: false,
            }
          },
          {
            name: "transferDate",
            label: "Transfer date",
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

    ];
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

            <Grid
                h="300px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={5}
                p={5}
            >
                <GridItem colSpan={2}>
                    <Tabs>
                        <TabList>
                            <Tab>Search equipment history</Tab>
                            <Tab>List all equipments from one name</Tab>
                            <Tab>Search especific equipment</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                            <Box py={2}>
                                    <FormControl id="email" isRequired >
                                        <Input
                                            placeholder="Serial Number / IMEI "
                                            type="text"
                                            autoComplete="false"
                                            size="lg"
                                            borderColor="purple.200"
                                            onChange={event => setDataFilter(event.currentTarget.value)}
                                            value={dataFilter}
                                        />
                                    </FormControl>
                                </Box>
                                <Grid
                                    h="300px"
                                    templateRows="repeat(1, 1fr)"
                                    templateColumns="repeat(3, 1fr)"
                                    gap={5}
                                    
                                >
                                    <GridItem colSpan={1}>
                                <MUIDataTable
                                title={"Equipment out company"}
                                    data={data_test}
                                    columns={columns_list_history_out}
                                    options={options}
                                />
                                </GridItem>
                                <GridItem colSpan={1}>
                                <MUIDataTable
                                title={"Equipment out warehouse"}
                                    data={data_test}
                                    columns={columns_list_history_log}
                                    options={options}
                                />
                                </GridItem>
                                <GridItem colSpan={1}>
                                <MUIDataTable
                                title={"Equipment transfers"}
                                    data={data_test}
                                    columns={columns_list_history_transfer}
                                    options={options}
                                />
                                </GridItem>
                                </Grid>
                            </TabPanel>
                            <TabPanel>
                            <Box py={2}>
                                    <FormControl id="data_filter" isRequired >
                                        <Input
                                            placeholder="Employee name"
                                            type="text"
                                            autoComplete="false"
                                            size="lg"
                                            borderColor="purple.200"
                                            onChange={event => setDataFilter(event.currentTarget.value)}
                                            value={dataFilter}
                                        />
                                    </FormControl>
                                </Box>
                                <MUIDataTable
                                    data={data_test}
                                    columns={columns_list_by_name}
                                    options={options}
                                />
                            </TabPanel>
                            <TabPanel>
                                <Box py={2}>
                                    <FormControl id="email" isRequired >
                                        <Input
                                            placeholder="Serial Number / IMEI / NF"
                                            type="text"
                                            autoComplete="false"
                                            size="lg"
                                            borderColor="purple.200"
                                            onChange={event => setDataFilter(event.currentTarget.value)}
                                            value={dataFilter}
                                        />
                                    </FormControl>
                                </Box>
                                <MUIDataTable
                                    data={data_test}
                                    columns={columns_especific}
                                    options={options}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </GridItem>
            </Grid>
        </>

    )
}
export default Searchs