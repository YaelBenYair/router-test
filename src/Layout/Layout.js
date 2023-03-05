
import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import './Layout.css'

export default function Leyout() {
    
    return(
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                <MenuItem>
                    <Link to='/' className='nav-link'>
                    Home
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='chuckNorris/' className='nav-link'>
                    Chuck Norris Joke
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='countries/'
                            className='nav-link'>
                        Countries
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='about/'
                            className='nav-link'>
                        About
                    </Link>
                </MenuItem>
                </Toolbar>
            </AppBar>

            <Outlet />
        </Box>
    )
}