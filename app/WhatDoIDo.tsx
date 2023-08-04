import React from "react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";
import Section from "@/components/Section";
import DevIcons from "@/components/DevIcons";

export default function WhatDoIDo() {

    const Subsection = (props: { id: string, title: string, description: string[], icons: string[] }) => {
        return (
            <Box id={props.id} flex={1} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Box id={`${props.id}-description`} flexBasis={"50%"}>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}}>{props.title}</Typography>
                    <Typography color="text.secondary">
                        <ul style={{paddingLeft: '20px'}}>
                            {props.description.map(d => (<li key={d} style={{listStyleType: 'disc'}}><Typography fontWeight={"bold"}>{d}</Typography></li>))}
                        </ul>
                    </Typography>
                </Box>
                <InnerBoxContainer id={`${props.id}-icons`} sx={{alignSelf: 'flex-start', flexBasis: '30%'}}>
                    <DevIcons icons={props.icons} height={35}/>
                </InnerBoxContainer>
            </Box>)
    }

    return (
        <Section title={"What Do I Do?"}>
            <Subsection id="full-stack" title="Full Stack Development"
                        description={["Build scalable, clean, cloud native back end applications", "Build responsive front end applications"]}
                        icons={["java", "csharp", "typescript", "javascript", "Kotlin", "spring", "hibernate", "react", "nextjs", "node", "html5", "css3"]}/>
            <Box sx={{mb: 5}}></Box>
            <Subsection id="architecture" title="Architecture"
                        description={["Build Microservices, Monoliths, and everything in-between",
                            "Build applications with techniques like Event Sourcing, DDD, CQRS, following industry standards",
                            "Build cloud-native applications on AWS"]}
                        icons={["kube", "docker", "aws", "cloud-native", "ddd", "kafka", "sql", "mongodb"]}/>
        </Section>)
}