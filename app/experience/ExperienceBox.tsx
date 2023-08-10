import React, {RefObject, useRef} from "react";
import Box from "@mui/material/Box";
import {Grid, styled, Typography} from "@mui/material";

type Props = {
    circleRefs: RefObject<SVGSVGElement>[]
    title: string
    startDate: string
    endDate: string
    description: string
    leftAligned: boolean
}

const ConvoBoxLeft = styled(Grid)(({theme}) => ({
/*    '&::after': {
        content: '""',
        position: 'absolute',
        top: 'calc(50% - 10px)',
        left: 'calc(100% - 10px)',
        height: '20px',
        width: '20px',
        background: '#1E293B',
        transform: 'rotate(-45deg)',
        borderBottom: 'inherit',
        borderRight: 'inherit',
        boxShadow: 'inherit'
    },*/
}));

const ConvoBoxRight = styled(Grid)(({theme}) => ({
/*    '&::after': {
        content: '""',
        position: 'absolute',
        top: 'calc(50% - 10px)',
        right: 'calc(100% - 10px)',
        height: '20px',
        width: '20px',
        background: '#1E293B',
        transform: 'rotate(135deg)',
        borderBottom: 'inherit',
        borderRight: 'inherit',
        boxShadow: 'inherit'
    },*/
}));

export function ExperienceBox({title, startDate, endDate, description, leftAligned, circleRefs}: Props) {
    const AlignedBox = leftAligned ? ConvoBoxLeft : ConvoBoxRight;
    const circleRef = useRef<SVGSVGElement>(null);
    circleRefs.push(circleRef)
    const Circle = () => (
        <svg ref={circleRef} xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84"
             fill="none">
            <circle cx="42" cy="42" r="41" fill="#1E293B" stroke="#FFDE59" stroke-width="2"/>
        </svg>);

    return (<Grid container alignItems={'center'} justifyContent={'center'}>
        {!leftAligned && <Grid item sm={5.5} xs={0}></Grid>}
        {!leftAligned && <Grid item xs={1} justifySelf={'center'} alignSelf={'center'} justifyContent={'center'}><Circle/></Grid>}

        <AlignedBox
            sx={{
                flexDirection: 'column',
                border: '1px solid #FFDE59',
                p: 2,
                alignSelf: 'flex-start',
                position: 'relative'
            }}
            sm={5.5} xs={10}
            item
            bgcolor='background.default'>
            <Typography variant="h4" sx={{fontWeight: 'bold'}}>{title}</Typography>
            <Typography color="text.secondary" sx={{fontWeight: 'bold'}}>{startDate} - {endDate}</Typography>
            <Typography>{description}</Typography>
        </AlignedBox>
        {leftAligned && <Grid item xs={1} justifySelf={'center'} alignSelf={'center'} justifyContent={'center'}><Circle/></Grid>}
        {leftAligned && <Grid item sm={5.5} xs={0}></Grid>}
    </Grid>);
}