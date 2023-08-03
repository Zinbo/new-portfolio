import React from "react";
import {Box} from "@mui/system";
import {Button, Typography} from "@mui/material";
import {InnerBoxContainer} from "@/app/InnerBoxContainer";
import {BoxContainer} from "@/app/BoxContainer";
import Image from "next/image";

export default function ProjectsSection() {

    const DevIcon = (name: string) => (<Box m={1}><Image
        src={`/${name}.svg`}
        alt={name}
        width="0"
        height="0"
        sizes="100vw"
        style={{ display: 'inline-block', width: '100%', height: '50px' }}
        priority
    /></Box>);

    const Project = ({title, description, imageName, icons}: {
        title: string,
        description: string,
        imageName: string,
        icons: string[]
    }) => (
        <InnerBoxContainer sx={{flex: 1, p: 3}}>
            <Image src={`/${imageName}.png`} width="341"
                   alt={imageName}
                   height="200"/>
            <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}} flex={1}>
                <Typography fontWeight={"bold"}>{title}</Typography>
                <Typography>{description}</Typography>
                <Box display="flex" flexWrap="wrap">
                    {icons.map(icon => DevIcon(icon))}
                </Box>
            </Box>

        </InnerBoxContainer>)

    return (<BoxContainer>
        <Box display={'flex'} flex={1}>
            <Box flex={1} sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h2" sx={{fontWeight: 'bold'}}>Projects</Typography>

                <Box display={'flex'} flexDirection='column' flex={1} gap={"50px"}>
                    <Project title="Stack to Basics"
                             imageName="stacktobasics"
                             icons={[]}
                             description="A blog which explains development concepts in a easy to understand format. Focuses on a range of topics, from front to back end and everything in-between. Built using the HashNode platform."/>
                    <Project title="Driving Pass Rate" imageName="drivingpassrate"
                             icons={["typescript", "react", "nextjs", "vercel", "material-ui"]}
                             description="A Next.JS app which shows you closest driving test centres near you with the best pass rates, backed by GOV.UK data."/>
                    <Project title="Pokemon Catch" imageName="pokemoncatch"
                             icons={["java", "spring", "hibernate", "mongodb", "typescript", "react", "nextjs", "vercel", "material-ui", "figma"]}
                             description="A mobile app which tells you which Pokémon game has the best catch rate per Pokémon. Built using Android, Kotlin, Spring Boot, MongoDB, and the PokéAPI."/>
                    <Project title="Portfolio" imageName="portfolio"
                             icons={["typescript", "react", "nextjs", "vercel", "material-ui", "figma"]}
                             description="This portfolio was built using Next.JS and Material UI and designed in Figma."/>
                    <Project title="Wow Name Checker" imageName="wownamechecker"
                             icons={["java", "spring", "hibernate", "sql", "kube", "docker", "aws", "typescript", "react", "nextjs", "vercel", "material-ui", "figma"]}
                             description="Check if a name is available in World of Warcraft and receive an email when it is available."/>
                </Box>
                <Button color="secondary" variant="contained" sx={{fontWeight: 'bold', alignSelf: 'center', mt: 3}} href={"https://github.com/Zinbo?tab=repositories"} target="_blank">More Projects</Button>
            </Box>
        </Box>
    </BoxContainer>)
}