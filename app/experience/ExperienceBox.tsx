import React, {ReactNode, RefObject, useRef} from "react";
import Box from "@mui/material/Box";
import {SxProps} from "@mui/system/styleFunctionSx";
import {styled, Theme, Typography} from "@mui/material";
import {ExperienceBoxRight} from "@/app/experience/ExperienceBoxRIght";

type Props = {
    circleRefs: RefObject<SVGSVGElement>[]
    title: string
    startDate: string
    endDate: string
    description: string
    leftAligned: boolean
}

const ConvoBoxLeft = styled(Box)(({theme}) => ({
    '&::after': {
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
    },
}));

const ConvoBoxRight = styled(Box)(({theme}) => ({
    '&::after': {
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
    },
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

    return (<Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
        {!leftAligned && <Box flexBasis={'40%'}></Box>}
        {!leftAligned && <Circle/>}

        <AlignedBox
            sx={{
                flexDirection: 'column',
                flexBasis: '40%',
                border: '1px solid #FFDE59',
                p: 2,
                alignSelf: 'flex-start',
                display: 'flex',
                position: 'relative'
            }}
            bgcolor='background.default'>
            <Typography variant="h4" sx={{fontWeight: 'bold'}}>{title}</Typography>
            <Typography color="text.secondary" sx={{fontWeight: 'bold'}}>{startDate} - {endDate}</Typography>
            <Typography>{description}</Typography>
        </AlignedBox>
        {leftAligned && <Circle/>}
        {leftAligned && <Box flexBasis={'40%'}></Box>}
    </Box>);
}