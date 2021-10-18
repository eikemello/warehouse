import React, { useState } from 'react'
import { Box, Grid, GridItem } from "@chakra-ui/react"
import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import MUIDataTable from "mui-datatables"

import { getEquipments } from '../../services/firebase'
var data_equipments = getEquipments


const Equipments = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

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
                    <MUIDataTable
                        title={"Assets"}
                        data={data_test}
                        columns={columns}
                        options={options}
                    />
                </GridItem>
            </Grid>
        </>
    )
}

export default Equipments