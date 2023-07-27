import React from "react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {BoxContainer} from "@/app/BoxContainer";

export default function Stats() {

    return (<BoxContainer>
        <Box display={'flex'} flex={1}>
            <Box flex={1} sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h2" sx={{fontWeight: 'bold'}}>Stats</Typography>
                <img src="http://ghchart.rshah.org/zinbo" alt="2016rshah's Github chart" />
            </Box>
        </Box>
    </BoxContainer>)
}