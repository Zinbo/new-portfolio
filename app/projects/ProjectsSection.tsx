import React from "react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {InnerBoxContainer} from "@/app/InnerBoxContainer";
import {BoxContainer} from "@/app/BoxContainer";
import Image from "next/image";

export default function ProjectsSection() {

    const Project = ({title, description, imageName}: { title: string, description: string, imageName: string }) => (
        <InnerBoxContainer sx={{flex: 1}} >
            <Image src={`/${imageName}.png`} width="341"
                   alt={"dd"}
                   height="200"/>
            <Box sx={{display: 'flex', flexDirection: 'column'}} flex={1}>
                <Typography fontWeight={"bold"}>{title}</Typography>
                <Typography>{description}</Typography>
            </Box>
        </InnerBoxContainer>)

    return (<BoxContainer>
        <Box display={'flex'} flex={1}>
            <Box flex={1} sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h2" sx={{fontWeight: 'bold'}}>Projects</Typography>

                <Box display={'flex'} flexDirection='column' flex={1} gap={"50px"}>
                    <Project title="Stack to Basics" imageName="stacktobasics" description="A blog which explains development concepts in a easy to understand format. Focuses on a range of topics, from front to back end and everything in-between. Built using the HashNode platform."/>
                    <Project title="Driving Pass Rate" imageName="drivingpassrate" description="A Next.JS app which shows you closest driving test centres near you with the best pass rates, backed by GOV.UK data."/>
                    <Project title="Pokemon Catch" imageName="pokemoncatch" description="A mobile app which tells you which Pokémon game has the best catch rate per Pokémon. Built using Android, Kotlin, Spring Boot, MongoDB, and the PokéAPI."/>
                    <Project title="Portfolio" imageName="portfolio" description="This portfolio was built using Next.JS and Material UI and designed in Figma."/>
                    <Project title="Wow Name Checker" imageName="wownamechecker" description="Check if a name is available in World of Warcraft and receive an email when it is available."/>
                </Box>
            </Box>
        </Box>
    </BoxContainer>)
}