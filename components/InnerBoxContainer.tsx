import React, {ReactNode} from "react";
import Box from "@mui/material/Box";
import {SxProps} from "@mui/system/styleFunctionSx";
import {Grid, Theme} from "@mui/material";

type Props = {
    children: ReactNode
    id ?:string
    sx?: SxProps<Theme>
}

export function InnerBoxContainer({children, id, sx}: Props) {

    return (
        <Grid container
            sx={{
                border: '1px solid #FFDE59',
                p: 1,
                // display: 'flex',
                ...sx || {},
            }}
            bgcolor='background.default'
            id={id}
            className="inner-box"
        >
            {children}
        </Grid>);
}