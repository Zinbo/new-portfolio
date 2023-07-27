import React, {ReactNode} from "react";
import Box from "@mui/material/Box";

type Props = {
    children: ReactNode
    id ?:string
}

export function InnerBoxContainer({children, id}: Props) {

    return (
        <Box
            sx={{
                border: '1px solid #FFDE59',
                p: 1,
                alignSelf: 'flex-start',
                display: 'flex'
            }}
            bgcolor='background.default'
            id={id}
        >
            {children}
        </Box>);
}