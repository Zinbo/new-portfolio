import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {Typography} from '@mui/material';
import Link from "next/link";

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box bgcolor='primary.main' sx={{ top: 'auto', bottom: 0, borderTop: '2px solid #FFDE59' }}>
                <Toolbar sx={{display: 'flex', flex: 1, justifyContent: 'center'}}>
                    <Typography component='div' sx={{ mr: 1 }} color={'text.primary'}>
                        Made with ❤️ by Shane Jennings
                    </Typography>
                </Toolbar>
            </Box>
        </React.Fragment>
    );
}
