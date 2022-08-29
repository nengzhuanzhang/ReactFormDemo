import { useCallback, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SideBarItems from './SideBarItems'

const Layout = (props) => {
    const drawerWidth = 240
    const [drawerOpen, setDrawerOpen] = useState(true)
    const clickMenu = useCallback(() => {
        setDrawerOpen(!drawerOpen)
    }, [drawerOpen])

    return (
        <Box
            sx={{ display: 'flex' }}
            style={{ minHeight: '100vh', background: '#fafafa' }}
        >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <IconButton
                        aria-label="delete"
                        size="large"
                        style={{ color: 'white', marginLeft: -20 }}
                        onClick={clickMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {'FormDemo'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                style={{
                    position: drawerOpen ? 'static' : 'absolute',
                }}
                variant="persistent"
                open={drawerOpen}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <SideBarItems
                            itemText="Demo"
                            data={[
                                {
                                    text: 'Formik Form',
                                    href: '/formik',
                                },
                                {
                                    text: 'React Hook Form',
                                    href: '/reactHookForm',
                                },
                            ]}
                        />
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    )
}
export default Layout