import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import React from "react";
import Link from "next/link";
import {Rock_Salt} from 'next/font/google'

const rockSalt = Rock_Salt({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function Header() {
    return (
        <AppBar position="static" sx={{borderBottom: '2px solid #FFDE59'}}>
        <Toolbar>
            <Typography className={rockSalt.className} variant="h6" component="div"
                        sx={{
                            flexGrow: 1,
                        }}>
                <Link href={"/"} style={{ textDecoration: 'none', color: 'inherit' }} className={rockSalt.className} >{"<Shane Jennings/>"}</Link>
            </Typography>
            <Button color="inherit" sx={{fontWeight: 'bold'}} href={"/experience"}>Experience</Button>
            <Button color="inherit" sx={{fontWeight: 'bold'}} href={"/projects"}>Projects</Button>
        </Toolbar>
    </AppBar>)
}