import {Box} from "@mui/system";
import {Theme, Typography} from "@mui/material";
import {BoxContainer} from "@/components/BoxContainer";
import React, {ReactNode} from "react";
import {SxProps} from "@mui/system/styleFunctionSx";

type Props = {
    children: ReactNode
    title: string
}

export default function Section({title, children} : Props) {
    return (<BoxContainer>
        <Box display={'flex'} flex={1}>
            <Box flex={1} sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography alignSelf={"center"} variant="h2" sx={{fontWeight: 'bold', mb:2}}>{title}</Typography>
                {children}
            </Box>
        </Box>
    </BoxContainer>);
}