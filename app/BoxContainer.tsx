import React, {ReactNode} from "react";
import Box from "@mui/material/Box";
import {Grid, Theme} from "@mui/material";
import {SxProps} from "@mui/system/styleFunctionSx";

type Props = {
    children: ReactNode
    sx?: SxProps<Theme>
}

export function BoxContainer({children, sx}: Props) {

    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                my: 5,
                ...sx || {},

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