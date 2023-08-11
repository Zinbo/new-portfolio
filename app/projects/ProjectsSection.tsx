import React from "react";
import {Box} from "@mui/system";
import {Button, Grid, Typography} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";
import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";

export default function ProjectsSection() {
    // const router = useRouter();
    const DevIcon = (name: string) => (<Box m={1}><Image
        src={`/${name}.svg`}
        alt={name}
        width="0"
        height="0"
        sizes="100vw"
        style={{display: 'inline-block', width: '100%', height: '50px'}}
        priority
    /></Box>);

    const Project = ({title, description, imageName, icons, url}: {
        title: string,
        description: string,
        imageName: string,
        icons: string[]
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
                            {/*<Typography fontWeight={"bold"}>{title}</Typography>*/}
                            <Typography>{description}</Typography>
                            <Box display="flex" flexWrap="wrap">
                                {icons.map(icon => DevIcon(icon))}
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
                     icons={["typescript", "react", "nextjs", "vercel", "material-ui"]}
                     url={'https://drivingpassrate.co.uk/'}
                     description="A Next.JS app which shows you closest driving test centres near you with the best pass rates, backed by GOV.UK data."/>
            <Project title="Portfolio" imageName="portfolio"
                     icons={["typescript", "react", "nextjs", "vercel", "material-ui", "figma"]}
                     url={'https://github.com/Zinbo/portfolio'}
                     description="This portfolio was built using Next.JS and Material UI and designed in Figma."/>
            <Project title="Wow Name Checker" imageName="wownamechecker"
                     url={'https://github.com/Zinbo/wow-name-checker'}
                     icons={["java", "spring", "hibernate", "sql", "kube", "docker", "aws", "typescript", "react", "nextjs", "vercel", "material-ui", "figma"]}
                     description="Check if a name is available in World of Warcraft and receive an email when it is available."/>
            <Project title="Pokemon Catch" imageName="pokemoncatch"
                     url={'https://github.com/Zinbo/pokemon-catch'}
                     icons={["java", "spring", "hibernate", "mongodb", "typescript", "react", "nextjs", "vercel", "material-ui", "figma"]}
                     description="A mobile app which tells you which Pokémon game has the best catch rate per Pokémon. Built using Android, Kotlin, Spring Boot, MongoDB, and the PokéAPI."/>
        </Grid>
        <Button color="secondary" variant="contained" sx={{fontWeight: 'bold', alignSelf: 'center', mt: 3}}
                href={"https://github.com/Zinbo?tab=repositories"} target="_blank">More Projects</Button>
    </Section>)
}