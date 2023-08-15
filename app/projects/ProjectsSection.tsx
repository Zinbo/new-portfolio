import React from "react";
import {Box} from "@mui/system";
import {Button, Grid, Typography} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";
import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";
import DevIcons, {Icon} from "@/components/DevIcons";

export default function ProjectsSection() {
    const Project = ({title, description, imageName, icons, url}: {
        title: string,
        description: string,
        imageName: string,
        icons: Icon[]
        url: string
    }) => (
        <Grid
            xs={12}
            item
            container
        >
            <Link href={url} target="_blank" style={{flex: 1}}>
                <InnerBoxContainer sx={{
                    p: 2, transition: "transform 0.15s ease-in-out",
                    ':hover': {transform: "scale3d(1.02, 1.02, 1)"}
                }} >
                    <Grid container item spacing={2}>
                        <Grid item container sm={12} md={4} justifyContent={{xs: "center", md: 'flex-start'}}
                              alignItems={'flex-start'}>
                            <Image src={`/${imageName}.png`} width="341"
                                   alt={imageName}
                                   height="200"/>
                        </Grid>
                        <Grid container item direction={'column'} sm={12} md={8} gap={"10px"}>
                            <Typography sx={{fontWeight: 'bold'}} variant="h6">{title}</Typography>
                            <Typography>{description}</Typography>
                            <Box display="flex" flexWrap="wrap">
                                <DevIcons icons={icons} height={50}/>
                            </Box>
                        </Grid>
                    </Grid>

                </InnerBoxContainer>
            </Link>
        </Grid>)

    return (<Section title="Projects">
        <Grid container rowSpacing={5}>
            <Project title="Stack to Basics"
                     imageName="stacktobasics"
                     icons={[]}
                     url={'https://stacktobasics.com/'}
                     description="A blog which explains development concepts in a easy to understand format. Focuses on a range of topics, from front to back end and everything in-between. Built using the HashNode platform."/>
            <Project title="Driving Pass Rate" imageName="drivingpassrate"
                     icons={[
                         {fileName: "typescript", name: "TypeScript"},
                         {fileName: "react", name: "React"},
                         {fileName: "nextjs", name: "Next.js"},
                         {fileName: "vercel", name: "Vercel"},
                         {fileName: "material-ui", name: "MUI"}
                     ]}
                     url={'https://drivingpassrate.co.uk/'}
                     description="A Next.JS app which shows you closest driving test centres near you with the best pass rates, backed by GOV.UK data."/>
            <Project title="Portfolio" imageName="portfolio"
                     icons={[
                         {fileName: "typescript", name: "TypeScript"},
                         {fileName: "react", name: "React"},
                         {fileName: "nextjs", name: "Next.js"},
                         {fileName: "vercel", name: "Vercel"},
                         {fileName: "material-ui", name: "MUI"},
                         {fileName: "figma", name: "Figma"}
                     ]}
                     url={'https://github.com/Zinbo/portfolio'}
                     description="This portfolio was built using Next.JS and Material UI and designed in Figma."/>
            <Project title="Wow Name Checker" imageName="wownamechecker"
                     url={'https://github.com/Zinbo/wow-name-checker'}
                     icons={[
                         {fileName: "java", name: "Java"},
                         {fileName: "spring", name: "Spring"},
                         {fileName: "hibernate", name: "Hibernate"},
                         {fileName: "sql", name: "SQL"},
                         {fileName: "kube", name: "Kubernetes"},
                         {fileName: "docker", name: "Docker"},
                         {fileName: "aws", name: "AWS"},
                         {fileName: "typescript", name: "TypeScript"},
                         {fileName: "react", name: "React"},
                         {fileName: "nextjs", name: "Next.js"},
                         {fileName: "vercel", name: "Vercel"},
                         {fileName: "material-ui", name: "MUI"},
                         {fileName: "figma", name: "Figma"}
                     ]}
                     description="Check if a name is available in World of Warcraft and receive an email when it is available."/>
            <Project title="Pokemon Catch" imageName="pokemoncatch"
                     url={'https://github.com/Zinbo/pokemon-catch'}
                     icons={[
                         {fileName: "java", name: "Java"},
                         {fileName: "spring", name: "Spring"},
                         {fileName: "hibernate", name: "Hibernate"},
                         {fileName: "mongodb", name: "MongoDB"},
                         {fileName: "typescript", name: "TypeScript"},
                         {fileName: "react", name: "React"},
                         {fileName: "nextjs", name: "Next.js"},
                         {fileName: "vercel", name: "Vercel"},
                         {fileName: "material-ui", name: "MUI"},
                         {fileName: "figma", name: "Figma"}
                     ]}
                     description="A mobile app which tells you which Pokémon game has the best catch rate per Pokémon. Built using Android, Kotlin, Spring Boot, MongoDB, and the PokéAPI."/>
        </Grid>
        <Button color="secondary" variant="contained" sx={{fontWeight: 'bold', alignSelf: 'center', mt: 3}}
                href={"https://github.com/Zinbo?tab=repositories"} target="_blank">More Projects</Button>
    </Section>)
}