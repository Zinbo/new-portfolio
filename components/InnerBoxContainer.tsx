import React, {ReactNode} from "react";
import Box from "@mui/material/Box";
import {SxProps} from "@mui/system/styleFunctionSx";
import {Grid, Theme} from "@mui/material";
import {ResponsiveStyleValue} from "@mui/system";
import {GridSpacing} from "@mui/material/Grid/Grid";

type Props = {
    children: ReactNode
    id?: string
    sx?: SxProps<Theme>
    lineRef?: any
    spacing?: ResponsiveStyleValue<GridSpacing>
    columnSpacing?: ResponsiveStyleValue<GridSpacing>
}

export function InnerBoxContainer({children, id, sx, lineRef, spacing, columnSpacing}: Props) {

    return (
        <Grid container
              sx={{
                  border: '1px solid #FFDE59',
                  p: 1,
                  ...sx || {},
              }}
              bgcolor='background.default'
              id={id}
              className="inner-box"
              ref={lineRef}
              spacing={spacing}
              columnSpacing={columnSpacing}
        >
            {children}
        </Grid>);
}