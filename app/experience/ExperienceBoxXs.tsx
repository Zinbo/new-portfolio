import React, {forwardRef, RefObject, useRef} from "react";
import Box from "@mui/material/Box";
import {Grid, styled, Typography, useMediaQuery, useTheme} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";

type Props = {
    refs: RefObject<SVGSVGElement>[]
    title: string
    startDate: string
    endDate: string
    description: string
}


export function ExperienceBoxXs({title, startDate, endDate, description, refs}: Props) {
    const gridRef = useRef<any>(null);
    refs.push(gridRef)
    const circleRef = useRef<SVGSVGElement>(null);
    refs.push(circleRef)
    const Circle = () => (
        <svg ref={circleRef} xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84"
             fill="none">
            <circle cx="42" cy="42" r="41" fill="#1E293B" stroke="#FFDE59" stroke-width="2"/>
        </svg>);

    // eslint-disable-next-line react/display-name
    const ExperienceContent = forwardRef(function (props, ref) {
        return (<InnerBoxContainer sx={{flexDirection: 'column'}} lineRef={ref}>
            <Typography variant="h4" sx={{fontWeight: 'bold'}}>{title}</Typography>
            <Typography color="text.secondary" sx={{fontWeight: 'bold'}}>{startDate} - {endDate}</Typography>
            <Typography>{description}</Typography>
        </InnerBoxContainer>);
    });

    return (
        <Grid container item rowSpacing={10}>

            <Grid
                xs={12}
                item
            >
                <ExperienceContent ref={gridRef}/>
            </Grid>
            <Grid
                xs={12}
                item
                container
                justifyContent={"center"}
            >
                <Circle/>
            </Grid>
        </Grid>);
}