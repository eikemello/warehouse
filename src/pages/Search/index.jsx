import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Grid, GridItem, FormControl, Input, Button, Flex } from "@chakra-ui/react"
import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import MUIDataTable from "mui-datatables"
//import { releaseFromClass, transfersFromClass } from '../../services/firebase'

const Searchs = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
    const [dataFilter, setDataFilter] = useState('')
    let [dataLog, setDataLog] = useState()
    let [dataAssetOut, setDataAssetOut] = useState()
    let [dataAssetTransfer, setDataAssetTransfer] = useState()
    let [dataByName, setDataByName] = useState()
    let [dataAssetSpecific, setDataAssetSpecific] = useState()
    let [searchError, setSearchError] = useState()

    let transfer2 = [];
    let out2 = [];
    let log2 = [];
    let byName2 = [];
    let specific2 = [];

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(event.currentTarget.id)
        if (dataFilter === "") {
            setSearchError('Empty field to search!')
            return
        }
        if (event.currentTarget.id === "btnSearchHistory") {
            console.log("searching asset history")
            transfer2 = [
                { newResponsible: "Joe James", oldResponsible: "Intern Warehosue", serialNumber: "ASD178ASDA", transferDate: "21/08/2019" },
                { newResponsible: "John Walsh", oldResponsible: "Joe James", serialNumber: "ASD178ASDA", transferDate: "09/02/2020" },
                { newResponsible: "Bob Herm", oldResponsible: "John Walsh", serialNumber: "ASD178ASDA", transferDate: "26/04/2021" },
                { newResponsible: "Intern Warehosue", oldResponsible: "Bob Herm", serialNumber: "ASD178ASDA", transferDate: "16/10/2021" },
            ];
            out2 = [
                { responsible: "Joe James", serialNumber: "ASD178ASDA", key: "21/08/2019" },
                { responsible: "Joe James", serialNumber: "ASD178ASDA", key: "22/08/2019" },
                { responsible: "Joe James", serialNumber: "ASD178ASDA", key: "23/08/2019" },
                { responsible: "Joe James", serialNumber: "ASD178ASDA", key: "24/08/2019" },
                { responsible: "Joe James", serialNumber: "ASD178ASDA", key: "25/08/2019" },
                { responsible: "John Walsh", serialNumber: "ASD178ASDA", key: "09/02/2020" },
                { responsible: "John Walsh", serialNumber: "ASD178ASDA", key: "10/02/2020" },
                { responsible: "John Walsh", serialNumber: "ASD178ASDA", key: "11/02/2020" }
            ];
            log2 = [
                { employee: "Davidson Finst", responsible: "Joe James", serialNumber: "ASD178ASDA", key: "21/08/2019" },
                { employee: "Davidson Finst", responsible: "John Walsh", serialNumber: "ASD178ASDA", key: "09/02/2020" },
                { employee: "Alex Meleter", responsible: "Bob Herm", serialNumber: "ASD178ASDA", key: "26/04/2021" },
            ];
            
            setDataAssetTransfer(transfer2)
            setDataAssetOut(out2)
            setDataLog(log2)
            setDataFilter('')
            setSearchError('')
        } else if (event.currentTarget.id === "btnSearchByName") {
            console.log("searching by name")
            byName2 = [
                { responsible: "Joe James", type: "Notebook", serialNumber: "HUX789NM", model: "Samsung JBL", status: "Autorizado", key: "06/08/2020" },
                { responsible: "Joe James", type: "Mouse", serialNumber: "BNHEMK299M", model: "Multilaser", status: "Autorizado", key: "06/08/2020" },
                { responsible: "Joe James", type: "Smartphone", serialNumber: "KOKAM4389NZ", model: "S10+", status: "Autorizado", key: "02/02/2021" },
                { responsible: "Joe James", type: "Keyboard", serialNumber: "VBRMKA9009AM", model: "Multilaser", status: "Autorizado", key: "12/04/2021" },
            ];

            setDataByName(byName2)
            setDataFilter('')
            setSearchError('')
        } else if (event.currentTarget.id === "btnSearchSpecific") {
            console.log("searching specific asset")
            specific2 = [
                { responsible: "Joe James", type: "Notebook", serialNumber: "ASD178ASDA", 
                model: "DELL", status: "Autorizado", key: "21/08/2019", numberBS: '9543128', 
                imageBS: 'Photo', currentStatus: 'Outside Company' }
            ];

            setDataAssetSpecific(specific2)
            setDataFilter('')
            setSearchError('')
        } else setSearchError("Cannot identify which button was pressed");
    }


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
        {
            name: "key",
            label: "Register date",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "numberBS",
            label: "Bill of sale number",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "imageBS",
            label: "Bill of sale image",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "currentStatus",
            label: "Current status",
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
            name: "status",
            label: "Status",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "key",
            label: "Loan date",
            options: {
                filter: true,
                sort: false,
            }
        }
    ];

    const columns_list_history_log = [
        {
            name: "employee",
            label: "By",
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
            name: "serialNumber",
            label: "Serial Number",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "key",
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
            name: "key",
            label: "Date",
            options: {
                filter: true,
                sort: false,
            }
        }
    ];

    const columns_list_history_transfer = [
        {
            name: "newResponsible",
            label: "To",
            options: {
                filter: true,
                sort: true,
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
    ];

    const options = {
        filterType: 'checkbox',
        jumpToPage: false,
        responsive: "standard", //standard
        searchOpen: false, // init input fiel open
        filter: true, // remove filter by data value itself
        selectableRows: "none", //remove check box row on the left
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
                                    <FormControl id="dataFilter" isRequired >
                                        <Input
                                            placeholder="Serial Number / IMEI "
                                            type="text"
                                            autoComplete="false"
                                            size="lg"
                                            borderColor="#084d6e"
                                            onChange={event => setDataFilter(event.currentTarget.value)}
                                            value={dataFilter}
                                        />
                                        <Box>
                                            <Flex justifyContent="start" alignItems="left">
                                                <Button id="btnSearchHistory" bg="#b1c0cd" m={2} onClick={handleSubmit}>Search</Button>
                                                <p style={{ 'margin-top': '15px', 'color': 'red' }}>{searchError}</p>
                                            </Flex>
                                        </Box>
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
                                            data={dataAssetOut}
                                            columns={columns_list_history_out}
                                            options={options}
                                        />
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <MUIDataTable
                                            title={"Equipment out warehouse"}
                                            data={dataLog}
                                            columns={columns_list_history_log}
                                            options={options}
                                        />
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <MUIDataTable
                                            title={"Equipment transfers"}
                                            data={dataAssetTransfer}
                                            columns={columns_list_history_transfer}
                                            options={options}
                                        />
                                    </GridItem>
                                </Grid>
                            </TabPanel>
                            <TabPanel>
                                <Box py={2}>
                                    <FormControl id="dataFilter" isRequired >
                                        <Input
                                            placeholder="Employee name"
                                            type="text"
                                            autoComplete="false"
                                            size="lg"
                                            borderColor="#084d6e"
                                            onChange={event => setDataFilter(event.currentTarget.value)}
                                            value={dataFilter}
                                        />
                                        <Box>
                                            <Flex justifyContent="start" alignItems="left">
                                                <Button id="btnSearchByName" bg="#b1c0cd" m={2} onClick={handleSubmit}>Search</Button>
                                                <p style={{ 'margin-top': '15px', 'color': 'red' }}>{searchError}</p>
                                            </Flex>
                                        </Box>
                                    </FormControl>
                                </Box>
                                <MUIDataTable
                                    data={dataByName}
                                    columns={columns_list_by_name}
                                    options={options}
                                />
                            </TabPanel>
                            <TabPanel>
                                <Box py={2}>
                                    <FormControl id="dataFilter" isRequired >
                                        <Input
                                            placeholder="Serial Number / IMEI / NF"
                                            type="text"
                                            autoComplete="false"
                                            size="lg"
                                            borderColor="#084d6e"
                                            onChange={event => setDataFilter(event.currentTarget.value)}
                                            value={dataFilter}
                                        />
                                        <Box>
                                            <Flex justifyContent="start" alignItems="left">
                                                <Button id="btnSearchSpecific" bg="#b1c0cd" m={2} onClick={handleSubmit}>Search</Button>

                                                <p style={{ 'margin-top': '15px', 'color': 'red' }}>{searchError}</p>
                                            </Flex>
                                        </Box>
                                    </FormControl>
                                </Box>
                                <MUIDataTable
                                    data={dataAssetSpecific}
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