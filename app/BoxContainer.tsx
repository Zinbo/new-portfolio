import React, {ReactNode} from "react";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

type Props = {
    children: ReactNode
}

export function BoxContainer({children}: Props) {

    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    position: 'relative',
                    border: '2px solid #FFDE59',
                    flex: 1,
                    // flexBasis: '90%',
                    p: 5
                }}
                bgcolor='background.paper'
            >
                {children}
            </Box>

        </Box>);
}