import React, { useState } from 'react'
import { Box, Grid, GridItem } from "@chakra-ui/react"
import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import MUIDataTable from "mui-datatables"

import { equipmentFromClass } from '../../services/firebase'


const Equipments = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    let [dataEquip, setDataEquip] = useState()

    setTimeout(function () {
        setDataEquip(equipmentFromClass)
    }, 3000);


    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

    const columns = [
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
            name: "model",
            label: "Model",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "authorize",
            label: "Authorize",
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
    ];

    const options = {
        filter: true,
        jumpToPage: false,
        filterType: 'dropdown',
        responsive: 'standard',
    };

    return (
        <>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}/>
            <Box>
                <Header
                    onShowSidebar={toggleSidebar}
                    showSidebarButton={true}/>
            </Box>
            <Grid
                h="300px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={5}
                p={10}>
                <GridItem colSpan={2}>
                    <MUIDataTable
                        title={"Assets"}
                        data={dataEquip}
                        columns={columns}
                        options={options}/>
                </GridItem>
            </Grid>
        </>
    )
}

export default Equipments