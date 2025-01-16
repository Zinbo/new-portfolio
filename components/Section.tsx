import {Grid, Typography} from "@mui/material";
import {BoxContainer} from "@/components/BoxContainer";
import React, {ReactNode} from "react";

type Props = {
    children: ReactNode
    title: string
}

export default function Section({title, children} : Props) {
    return (<BoxContainer>
            <Grid container direction={"column"} className="section">
                <Typography alignSelf={"center"} variant="h2" sx={{fontWeight: 'bold', mb:2}}>{title}</Typography>
                {children}
            </Grid>
    </BoxContainer>);
}