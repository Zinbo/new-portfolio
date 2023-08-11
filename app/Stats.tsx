import React from "react";
import Section from "@/components/Section";
import {Grid, Box} from "@mui/material";

export default function Stats() {

    return (
        <Section title="Stats">

            <Box sx={{overflowX: "auto", width: "100%", }}>
                    <img src="http://ghchart.rshah.org/zinbo" alt="2016rshah's Github chart" style={{width: "100%", height: "100%", minWidth: "1400px"}}/>
            </Box>
        </Section>
    );
}