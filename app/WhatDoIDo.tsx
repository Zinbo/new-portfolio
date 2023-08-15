import React from "react";
import {Box} from "@mui/system";
import {Grid, Typography} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";
import Section from "@/components/Section";
import DevIcons, {Icon} from "@/components/DevIcons";


export default function WhatDoIDo() {

    const Subsection = (props: { id: string, title: string, description: string[], icons: Icon[] }) => {
        return (
            <Grid container id={props.id} justifyContent={"space-between"}>
                <Grid item md={6} xs={12}>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}}>{props.title}</Typography>
                    <Typography color="text.secondary">
                        <ul style={{paddingLeft: '20px'}}>
                            {props.description.map(d => (<li key={d} style={{listStyleType: 'disc'}}><Typography
                                fontWeight={"bold"}>{d}</Typography></li>))}
                        </ul>
                    </Typography>
                </Grid>
                <Grid item md={4} sm={props.icons.length > 10 ? 12 : "auto"} xs={12}>
                    <InnerBoxContainer id={`${props.id}-icons`}>
                        <Grid container id={"inner-container"}>
                            <DevIcons icons={props.icons} height={35}/>
                        </Grid>
                    </InnerBoxContainer>
                </Grid>
            </Grid>)
    }

    return (
        <Section title={"What Do I Do?"}>
            <Subsection id="full-stack" title="Full Stack Development"
                        description={["Build scalable, clean, cloud native back end applications", "Build responsive front end applications"]}
                        icons={[
                            {fileName: "java", name: "Java"},
                            {fileName: "csharp", name: "C#"},
                            {fileName: "typescript", name: "TypeScript"},
                            {fileName: "javascript", name: "JavaScipt"},
                            {fileName: "Kotlin", name: "Kotlin"},
                            {fileName: "spring", name: "Spring"},
                            {fileName: "hibernate", name: "Hibernate"},
                            {fileName: "react", name: "React"},
                            {fileName: "nextjs", name: "Next.js"},
                            {fileName: "node", name: "Node.js"},
                            {fileName: "html5", name: "HTML5"},
                            {fileName: "css3", name: "CSS3"}]}/>
            <Box sx={{mb: 5}}></Box>
            <Subsection id="architecture" title="Architecture"
                        description={["Build Microservices, Monoliths, and everything in-between",
                            "Build applications with techniques like Event Sourcing, DDD, CQRS, following industry standards",
                            "Build cloud-native applications on AWS"]}
                        icons={[
                            {fileName: "kube", name: "Kubernetes"},
                            {fileName: "docker", name: "Docker"},
                            {fileName: "aws", name: "AWS"},
                            {fileName: "cloud-native", name: "Cloud Native"},
                            {fileName: "ddd", name: "Domain-Driven Design"},
                            {fileName: "kafka", name: "Kafka"},
                            {fileName: "sql", name: "SQL"},
                            {fileName: "mongodb", name: "MongoDB"}]}/>
        </Section>)
}