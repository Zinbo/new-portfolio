import React from "react";
import {Box} from "@mui/system";
import {Grid, Typography} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";
import Image from "next/image";
import Section from "@/components/Section";

export default function CertificationsSection() {

    const Certification = ({title, imageName}: { title: string, imageName: string }) => (
        <Grid container item md={4} sm={6} xs={12}>
            <InnerBoxContainer>
                <Box sx={{display: 'flex', flexDirection: 'column'}} flex={1}>
                    <Box alignSelf="center">
                        <Image src={`/${imageName}.png`} alt={"article-image"} width={200} height={200}/>
                    </Box>
                    <Typography>{title}</Typography>
                </Box>
            </InnerBoxContainer>
        </Grid>)

    return (
        <Section title="Certifications">

            <Grid container spacing={3}>
                <Certification title="CKAD: Certified Kubernetes Application Developer" imageName="ckad"/>
                <Certification title="AWS Certified Solutions Architect – Associate" imageName="aws-architect-cert"/>
                <Certification title="AWS Certified Developer – Associate" imageName="aws-developer-cert"/>
            </Grid>
        </Section>)
}