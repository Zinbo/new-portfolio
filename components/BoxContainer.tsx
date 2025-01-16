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
        <Grid
            sx={{
                justifyContent: 'center',
                my: 5,
                border: '2px solid #FFDE59',
                p: 5,
                ...sx || {},

            }}
            bgcolor='background.paper'
        >

                {children}
        </Grid>);
}