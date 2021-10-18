import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Grid, GridItem, FormControl, Input} from "@chakra-ui/react"
import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import MUIDataTable from "mui-datatables"


const Searchs = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
    const [dataFilter, setDataFilter] = useState('')

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
                p={10}
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
                                <MUIDataTable
                                    data={data_test}
                                    columns={columns}
                                    options={options}
                                />
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
                                    columns={columns}
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
                                    columns={columns}
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