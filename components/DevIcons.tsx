import {Box} from "@mui/system";
import React from "react";
import Image from "next/image";
import {Grid, Tooltip} from "@mui/material";

interface Props {
    icons: Icon[]
    height: number
}

export interface Icon {
    fileName: string
    name: string
}

export default function DevIcons({icons, height}: Props) {

    const DevIcon = (icon: Icon) => (<Box m={1} key={icon.name}><Tooltip title={icon.name}><Image
        src={`/${icon.fileName}.svg`}
        alt={icon.fileName}
        width="0"
        height="0"
        sizes="100vw"
        style={{display: 'inline-block', width: '100%', height: `${height}px`}}
        priority
    /></Tooltip></Box>);

    return (
        <>
            {icons.map(icon => DevIcon(icon))}
        </>
    )
}