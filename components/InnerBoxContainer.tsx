import React, {ReactNode} from "react";
import {SxProps} from "@mui/system/styleFunctionSx";
import {Grid, Theme} from "@mui/material";
import {GridProps} from "@mui/material/Grid/Grid";

interface Props extends GridProps {
    children: ReactNode
    sx?: SxProps<Theme>
    lineRef?: any
}


export function InnerBoxContainer({children, id, sx, lineRef, ...props}: Props) {

    return (
        <Grid container
              sx={{
                  border: '1px solid #FFDE59',
                  p: 1,
                  ...sx || {},
              }}
              bgcolor='background.default'
              className="inner-box"
              ref={lineRef}
              {...props}
        >
            {children}
        </Grid>);
}