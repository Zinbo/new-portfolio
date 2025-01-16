import {Rock_Salt} from 'next/font/google'
import Link from "next/link";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {usePathname} from "next/navigation"

const rockSalt = Rock_Salt({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const pathname = usePathname();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{borderBottom: '2px solid #FFDE59'}}>

            <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography className={rockSalt.className} variant="h6" component="div"
                                sx={{
                                    flexGrow: 1,
                                }}>
                        <Link href={"/"} style={{ textDecoration: 'none', color: 'inherit' }} className={rockSalt.className} >{"<Shane Jennings/>"}</Link>
                    </Typography>
                    <Button color="inherit" sx={{fontWeight: 'bold'}} href={"/experience"}><Typography fontWeight={"bold"} color={pathname === "/experience" ? "secondary" : ""}>Experience</Typography></Button>
                    <Button color="inherit" sx={{fontWeight: 'bold'}} href={"/projects"} ><Typography fontWeight={"bold"} color={pathname === "/projects" ? "secondary" : ""}>Projects</Typography></Button>
                </Toolbar>

                <Toolbar sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Typography className={rockSalt.className} variant="h6" component="div"
                                sx={{
                                    flexGrow: 1,
                                }}>
                        <Link href={"/"} style={{ textDecoration: 'none', color: 'inherit' }} className={rockSalt.className} >{"<Shane Jennings/>"}</Link>
                    </Typography>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="options"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                                <MenuItem>
                                    <Button color="inherit" sx={{fontWeight: 'bold'}} href={"/experience"}><Typography fontWeight={"bold"} color={pathname === "/experience" ? "secondary" : ""}>Experience</Typography></Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button color="inherit" sx={{fontWeight: 'bold'}} href={"/projects"} ><Typography fontWeight={"bold"} color={pathname === "/projects" ? "secondary" : ""}>Projects</Typography></Button>
                                </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
        </AppBar>
    );
}
export default ResponsiveAppBar;
