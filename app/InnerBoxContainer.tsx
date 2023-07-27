import React, {ReactNode} from "react";
import Box from "@mui/material/Box";

type Props = {
    children: ReactNode
}

export function InnerBoxContainer({children}: Props) {

    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <Box
                sx={{
                    border: '1px solid #FFDE59',
                    p: 1
                }}
                bgcolor='background.default'
            >
                {children}
            </Box>

        </Box>);
}