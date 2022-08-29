import Collapse from '@mui/material/Collapse'
import { blue } from '@mui/material/colors'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

const SideBarItems = (pps) => {
    const { itemText, data } = pps
    const [open, setOpen] = useState(true)
    const handleClick = () => {
        setOpen(!open)
    }

    const navigate = useNavigate()
    const handleMenuJump = (path) => {
        navigate(path)
    }

    return (
        <div>
            <ListItemButton onClick={handleClick}>
                {open ? <ExpandLess /> : <ExpandMore />}
                <ListItemText style={{ marginLeft: 10 }} primary={itemText} />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {data &&
                        data.map((row, index) => (
                            <ListItemButton
                                key={index}
                                sx={{ pl: 4 }}
                                onClick={() => handleMenuJump(row.href)}
                            >
                                <ListItemIcon>
                                    {row.icon || <AssignmentIcon sx={{ color: blue[600] }} />}
                                </ListItemIcon>
                                <ListItemText primary={row.text} />
                            </ListItemButton>
                        ))}
                </List>
                <Divider />
            </Collapse>
        </div>
    )
}

export default SideBarItems